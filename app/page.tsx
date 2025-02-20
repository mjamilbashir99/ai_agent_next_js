'use client'; // Marks this as a Client Component

import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={() => signIn("twitter")}
        className="flex items-center gap-2 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 0 0 1.83-2.3c-.8.48-1.69.8-2.6.98A4.16 4.16 0 0 0 16 4a4.15 4.15 0 0 0-4.15 4.15c0 .33.04.66.1.98A11.8 11.8 0 0 1 3.15 5.15a4.14 4.14 0 0 0-.56 2.1c0 1.46.75 2.74 1.88 3.48a4.08 4.08 0 0 1-1.88-.52v.05c0 2.04 1.47 3.74 3.41 4.14-.37.1-.75.15-1.15.15-.27 0-.54-.03-.8-.08.55 1.72 2.15 2.98 4.05 3.02A8.3 8.3 0 0 1 2 18.16a11.73 11.73 0 0 0 6.36 1.87c7.6 0 11.76-6.3 11.76-11.76 0-.18-.01-.36-.02-.54A8.24 8.24 0 0 0 22.46 6z" />
        </svg>
        <span className="text-lg font-semibold">Login with Twitter</span>
      </button>
    </div>
  );
}
