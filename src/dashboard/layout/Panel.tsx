import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";
import OutsideClick from "../../components/shared/OutsideClick";

const Panel = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <main className="h-screen w-screen">
      <section className="h-full w-full grid grid-cols-12 overflow-auto relative">
        <aside className="md:col-span-2 md:block hidden h-full w-full overflow-auto">
          <Sidebar onClose={() => setSidebarOpen(!sidebarOpen)} />
        </aside>
        <article className="h-full w-full md:col-span-10 col-span-12 overflow-auto lg:border-l bg-[#fbfbfb] flex flex-col">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <section className="h-full w-full overflow-y-auto p-4">
            <Outlet />
          </section>
        </article>
        {sidebarOpen && (
          <OutsideClick
            onOutsideClick={() => setSidebarOpen(false)}
            className="w-full h-full md:hidden block"
          >
            <aside className="absolute top-0 left-0 h-full overflow-auto w-7/12 bg-white z-50">
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </aside>
          </OutsideClick>
        )}
      </section>
    </main>
  );
};

export default Panel;
