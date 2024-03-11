export default function DashboardLayout({
  children,
  users,
  revenues,
  notifications,
  logins,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenues: React.ReactNode;
  notifications: React.ReactNode;
  logins: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> {users}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    logins
  );
}
