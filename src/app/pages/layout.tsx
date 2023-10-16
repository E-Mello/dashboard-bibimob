import MenuBar from "@/components/HomePage/menuBar";
import SideNavLeftComponent from "@/components/SideNavLeft";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-between">
      <header className="items-center overflow-hidden ">
        <MenuBar />
      </header>
      <nav className=" items-center">
        <SideNavLeftComponent />
      </nav>
      <main className="flex justify-center z-0">
        {children}
      </main>
    </section>
  );
}
