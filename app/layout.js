import './globals.css';

export const metadata = {
  title: 'Agawin — Developer Portfolio',
  description: 'Agawin portfolio regarding their developer journey.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>);
}
