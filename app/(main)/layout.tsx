import { MobileHeader } from "../ui/learn/mobile-header";
import Sidebar from "../ui/learn/sidebar";

type Props = {
    children: React.ReactNode;
}

export  default function layout({children}:Props){
    return(
        <>
        <MobileHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full pt-[50px] lg:p-0 ">
            <div className="h-full">
                {children}
            </div>
        </main>
        </>
    )
}