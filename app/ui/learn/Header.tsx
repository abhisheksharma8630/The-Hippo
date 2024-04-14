import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Header() {
  return (
    <div className="sticky  top-0 mb-5 py-3 px-5 lg:pt-[28px] lg:mt-[-28px] flex items-center border-b-2 justify-between bg-white lg:z-50">
      <div></div>
      <h1 className="text-xl font-bold">All articles</h1>
      <Button variant='success' className="flex space-x-2">
        <span className="font-bold">Create</span> <Plus className="h-4 w-4"/>
      </Button>
    </div>
  );
}
