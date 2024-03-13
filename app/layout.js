import "./globals.scss";

export const metadata = {
  title: "Bryan Haskin | Coder | Sailor | Maker",
  description: "I write code and solve problems, sometimes even in that order.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:site_name" content="Bryan Haskin | Coder | Sailor | Maker" />
      <meta property="og:title" content="Bryan Haskin | Coder | Sailor | Maker" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="I write code and solve problems, sometimes even in that order." />
      <meta property="og:image" content="/assets/images/card.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="800" />
      <meta property="og:url" content="https://bryanhaskin.com" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://bryanhaskin.com" />
      <meta name="color-scheme" content="light only" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      <body>{children}</body>
    </html>
  );
}
