import Column from "@components/Column";
import Sidebar from "@features/layout/components/Sidebar";
import Row from "@components/Row";
import Navbar from "@features/layout/components/Navbar";
import Providers from "@core/Providers";
import { Montserrat } from "next/font/google";

import "@core/styles/index.scss";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ti-Medi - Alba Casas",
  description: "Prueba técnica Alba Casas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Row className="w-[100vw]">
            <Sidebar />
            <Column className="overflow-hidden flex-grow">
              <Navbar />
              <Column className="h-full bg-background py-5 px-4 md:px-7">{children}</Column>
            </Column>
          </Row>
        </Providers>
      </body>
    </html>
  );
}
