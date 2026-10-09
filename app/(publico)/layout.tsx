import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";

export default function PublicoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
