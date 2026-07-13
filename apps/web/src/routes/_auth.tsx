import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <main className="grid min-h-svh place-items-center p-4">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </main>
  );
}
