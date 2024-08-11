import { DrawerDemo } from "@/components/menu";
import { Sheet } from "@/components/ui/sheet";

export default function Test() {

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Open Sidebar
      </button>
      <DrawerDemo />
    </div>
  );
}
