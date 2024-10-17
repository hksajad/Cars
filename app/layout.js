import Layout from "@/components/layout/Layout";
import "./globals.css";
import "./grid.css";
import "./responsive.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children }</Layout>
      </body>
    </html>
  );
}
