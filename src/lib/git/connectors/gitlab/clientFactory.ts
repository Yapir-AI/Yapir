import { Gitlab } from "@gitbeaker/rest";
import ky from "ky";
import { type GitlabConnectorEntity } from "@/lib/db/schema";
import { isBefore } from "date-fns/isBefore";
import { differenceInSeconds } from "date-fns/differenceInSeconds";
import { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import type { GitlabConnectorService } from "@/lib/git/connectors/gitlab/connectorService";

export class GitlabClientFactory {
  private gitlabConnectorService: GitlabConnectorService;

  constructor(opts: { gitlabConnectorService: GitlabConnectorService }) {
    this.gitlabConnectorService = opts.gitlabConnectorService;
  }

  forConnectorId(connectorId: string) {
    return new Gitlab({ oauthToken: () => this.getToken(connectorId) });
  }

  private async getToken(connectorId: string) {
    const connector = await this.gitlabConnectorService.findById(connectorId);

    return (
      this.checkAccessTokenExpiry(connector) ??
      (await this.refreshToken(connector))
    );
  }

  private async refreshToken(connector: GitlabConnectorEntity) {
    const json = await ky
      .post("oauth/token", {
        prefixUrl: connector.url,
        body: new URLSearchParams({
          client_id: connector.applicationId,
          client_secret: connector.applicationSecret,
          refresh_token: connector.refreshToken!,
          grant_type: "refresh_token",
          redirect_uri: connector.redirectUri + `?id=${connector.id}`,
        }),
      })
      .json();

    const authResponse = gitlabAuthResponseSchema.parse(json);
    await this.gitlabConnectorService.updateToken(connector.id, authResponse);

    return authResponse.access_token;
  }

  private checkAccessTokenExpiry(connector: GitlabConnectorEntity) {
    if (!connector || !connector.accessToken || !connector.expiresAt)
      return undefined;

    const isValidForOneMin = (date: Date): boolean => {
      const now = new Date();
      return isBefore(now, date) && differenceInSeconds(date, now) >= 60;
    };

    if (!isValidForOneMin(connector.expiresAt)) return undefined;

    return connector.accessToken;
  }
}

export type GitlabClient = ReturnType<
  typeof GitlabClientFactory.prototype.forConnectorId
>;
