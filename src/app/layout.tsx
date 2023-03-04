import "@/core/styles/index.scss";

export const metadata = {
  title: "Ti-Medi - Alba Casas",
  description: "Prueba técnica Alba Casas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
