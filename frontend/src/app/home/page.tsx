// home.tsx - Updated with redirect functionality
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  projectCodes: string[]; // Array of all project codes
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      console.log("Stored user data:", userData);
    }
  }, [router]);

  const handleRedirect = () => {
    if (user && user.projectCodes) {
      setRedirecting(true);

      // Create simpler token data
      const tokenData = {
        username: user.username,
        projectCodes: user.projectCodes,
        timestamp: Date.now(),
      };

      // Simple base64 encoding (no double encoding)
      const transferToken = btoa(JSON.stringify(tokenData));

      // Target attendance app URL
      const targetUrl = process.env.NEXT_PUBLIC_ATTENDANCE_APP_URL!;

      // Create transfer URL with token (no additional encoding needed)
      const redirectUrl = `${targetUrl}/sso?token=${transferToken}`;

      const debugData = {
        targetUrl,
        username: user.username,
        projectCodes: user.projectCodes,
        projectCodesCount: user.projectCodes.length,
        fullRedirectUrl: redirectUrl,
        transferToken: transferToken.substring(0, 50) + "...",
        tokenData, // Add this for debugging
      };

      setDebugInfo(debugData);
      console.log("Debug Info:", debugData);
      console.log("Full token:", transferToken);

      // Redirect after showing debug info
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 2000);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="text-center p-6 mt-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}</h1>

      {user.projectCodes && user.projectCodes.length > 0 && (
        <div className="mb-6">
          <p className="text-lg mb-3">
            Your Projects ({user.projectCodes.length}):
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {user.projectCodes.map((code, index) => (
              <span
                key={code}
                className="bg-blue-100 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {index + 1}. {code}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleRedirect}
        disabled={redirecting}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
          redirecting
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {redirecting
          ? "Redirecting to Attendance App..."
          : "Go to Attendance Dashboard"}
      </button>

      {debugInfo && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-left">
          <h2 className="text-lg font-bold mb-3">Transfer Information:</h2>

          <div className="space-y-3">
            <div>
              <strong>Username:</strong>
              <p className="text-sm bg-white p-2 rounded border">
                {debugInfo.username}
              </p>
            </div>

            <div>
              <strong>
                Projects Being Transferred ({debugInfo.projectCodesCount}):
              </strong>
              <div className="text-sm bg-white p-2 rounded border">
                {debugInfo.projectCodes.map((code: string, index: number) => (
                  <div
                    key={code}
                    className="flex justify-between border-b py-1 last:border-b-0"
                  >
                    <span>Project {index + 1}:</span>
                    <span className="font-mono">{code}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <strong>Target URL:</strong>
              <p className="text-sm bg-white p-2 rounded border">
                {debugInfo.targetUrl}
              </p>
            </div>

            <div>
              <strong>Transfer Token (partial):</strong>
              <p className="text-xs bg-white p-2 rounded border font-mono break-all">
                {debugInfo.transferToken}
              </p>
            </div>

            <div className="text-center mt-4">
              <p className="text-green-600 font-semibold animate-pulse">
                Redirecting in 2 seconds...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
