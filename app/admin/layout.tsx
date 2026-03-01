import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-neutral-900 text-white">
        {children}
      </body>
    </html>
  );
}