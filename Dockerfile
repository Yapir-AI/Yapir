# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
COPY prisma /temp/dev/prisma
RUN ls
RUN cd /temp/dev && bun install --frozen-lockfile

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
ENV BETTER_AUTH_TELEMETRY=0
ENV NEXT_OTEL_VERBOSE=1
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
#COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease  /usr/src/app/.next/standalone ./
COPY --from=prerelease  /usr/src/app/.next/static ./.next/static
COPY --from=prerelease  /usr/src/app/prisma ./prisma

# Create startup script to run migrations then start the app
RUN echo '#!/bin/sh\n\
echo "Running database migrations..."\n\
bunx --bun prisma migrate deploy\n\
MIGRATION_EXIT_CODE=$?\n\
\n\
if [ $MIGRATION_EXIT_CODE -ne 0 ]; then\n\
  echo "❌ Database migration failed with exit code $MIGRATION_EXIT_CODE"\n\
  echo "   The server will not start until migrations can be completed successfully."\n\
  exit $MIGRATION_EXIT_CODE\n\
fi\n\
\n\
echo "✅ Database migrations completed successfully"\n\
echo "Starting server..."\n\
exec bun run server.js\n' > /usr/src/app/start.sh
RUN chmod +x ./start.sh


# run the app
USER bun
EXPOSE 3000/tcp
ENV HOSTNAME="0.0.0.0"
ENTRYPOINT [ "./start.sh" ]
