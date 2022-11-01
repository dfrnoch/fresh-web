import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>lynx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
