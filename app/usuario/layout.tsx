import type { Metadata } from "next";
import { enlacesUsuario } from "@/componentes/enlaces";
import PanelSidebar from "@/componentes/PanelSidebar";

export const metadata: Metadata = {
  title: "Panel cliente",
};

export default function UsuarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <PanelSidebar titulo="Panel cliente" items={enlacesUsuario} />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
