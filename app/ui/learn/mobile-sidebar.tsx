import { MenuIcon } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from "./sidebar"


export const MobileSidebar=()=>{
    return(
        <Sheet>
            <SheetTrigger>
                <MenuIcon/>
            </SheetTrigger>
            <SheetContent side={'left'} className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>

    )
}