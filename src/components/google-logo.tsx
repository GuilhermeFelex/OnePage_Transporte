import React from 'react';

export function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google logo"
    >
      <path fill="#EA4335" d="M24 9.5c3.14 0 5.9 1.08 8.1 3.1l6.4-6.4C34.7 2.1 29.6 0 24 0 14.9 0 7.1 5.4 3 12.9l7.8 6.1C12.4 13.6 17.7 9.5 24 9.5z"></path>
      <path fill="#4285F4" d="M46.9 24.5c0-1.6-.14-3.2-.4-4.7H24v9h12.8c-.56 2.9-2.1 5.4-4.6 7.1l7.3 5.6c4.3-4 6.9-10 6.9-17z"></path>
      <path fill="#FBBC05" d="M10.8 28.7c-.4-.8-.6-1.8-.6-2.8s.2-2 .6-2.8l-7.8-6.1C1.2 19.6 0 22.7 0 26s1.2 6.4 3 8.9l7.8-6.2z"></path>
      <path fill="#34A853" d="M24 48c5.6 0 10.6-1.9 14.1-5.1l-7.3-5.6c-1.9 1.3-4.3 2-7.1 2-6.3 0-11.6-4.1-13.6-9.7l-7.8 6.1C7.1 42.6 14.9 48 24 48z"></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
  );
}
