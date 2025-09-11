"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      router.push("/home"); // Redirect to home if authenticated
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg text-gray-600">Redirecting...</p>
    </div>
  );
}
