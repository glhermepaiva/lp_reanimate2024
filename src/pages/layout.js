import '../styles/globals.css';

export const metadata = {
  title: "re.animate",
  description: "Transforme dias de trabalho em minutos com o re.animate",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}