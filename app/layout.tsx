import { Footer, Navbar } from "./components";
import Providers from "./components/providers";
import "./globals.css";

export const metadata = {
  title: "Vatan Srivastava",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
