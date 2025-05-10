import { Outlet } from "react-router";
import Sidebar from "./sideNav";

function ReactMyDoc() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">My React Docs</h1>
      <div className="flex h-screen w-screen">
        <div className="w-[15vw] h-full backdrop-blur-md bg-white/10 border-r border-gray-400 shadow-inner">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-[85vw] h-[70vh] bg-gray-100 border-l border-gray-400 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-4">Hooks Content</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ReactMyDoc;
