import { useEffect } from "react";

export default function ResetPasswordRedirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    const secret = params.get("secret");

    if (userId && secret) {
      window.location.href =
        `myapp://reset-password?userId=${userId}&secret=${secret}`;
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Opening app…</h2>
      <p>If nothing happens, open the app manually.</p>
    </div>
  );
}
