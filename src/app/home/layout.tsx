import MenuBar from "@/components/HomePage/menuBar";
import SideNavLeftComponent from "@/components/SideNavLeft";

export default function ContactLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-between">
      <header className="flex items-center overflow-hidden ">
        <SideNavLeftComponent />
      </header>
      <nav className="flex items-center">
        <MenuBar />
      </nav>
      <main className="flex justify-center">
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </main>
    </section>
  );
}
