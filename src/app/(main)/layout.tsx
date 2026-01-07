import { LayoutMain } from "@/features/layouts/layout-main";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutMain/>
        {children}
      </body>
    </html>
  );
}
