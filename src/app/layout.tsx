import Column from "@components/Column";
import Sidebar from "@features/layout/components/Sidebar";
import Row from "@components/Row";
import Navbar from "@features/layout/components/Navbar";
import Providers from "@core/Providers";

import "@core/styles/index.scss";

export const metadata = {
  title: "Ti-Medi - Alba Casas",
  description: "Prueba técnica Alba Casas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Row>
            <Sidebar />
            <Column className="w-full">
              <Navbar />
              <Column className="h-full bg-background p-7">{children}</Column>
            </Column>
          </Row>
        </Providers>
      </body>
    </html>
  );
}
