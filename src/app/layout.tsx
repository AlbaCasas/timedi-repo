import Column from "@components/Column";
import Sidebar from "@features/layout/components/Sidebar";
import "@core/styles/index.scss";
import Row from "@components/Row";
import Navbar from "@features/layout/components/Navbar";

export const metadata = {
  title: "Ti-Medi - Alba Casas",
  description: "Prueba técnica Alba Casas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Row>
          <Sidebar />
          <Column className="w-full">
            <Navbar />
            <Column className="h-full bg-background p-7">{children}</Column>
          </Column>
        </Row>
      </body>
    </html>
  );
}
