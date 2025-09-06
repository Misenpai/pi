// login.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debugResponse, setDebugResponse] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        { username, password },
      );

      // Log the response for debugging
      console.log("Login response:", res.data);
      setDebugResponse(res.data);

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log("Data stored in localStorage:", res.data);

        // Wait a moment to see the debug info before redirecting
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">PI Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      {debugResponse && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-bold">Backend Response:</h3>
          <pre className="text-xs overflow-x-auto">
            {JSON.stringify(debugResponse, null, 2)}
          </pre>
          <p className="text-sm text-green-600 mt-2">
            Redirecting to home in 2 seconds...
          </p>
        </div>
      )}
    </div>
  );
}
