import type { Metadata } from "next";
import { enlacesAdmin } from "@/componentes/enlaces";
import PanelSidebar from "@/componentes/PanelSidebar";

export const metadata: Metadata = {
  title: "Panel administrador",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <PanelSidebar titulo="Panel administrador" items={enlacesAdmin} />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
