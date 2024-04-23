import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Svanika",
  description: "AIS location of Svanika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
