import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300;1,400&family=Indie+Flower&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
