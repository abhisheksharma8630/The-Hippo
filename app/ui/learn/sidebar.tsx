import { cn } from "@/lib/utils";
import Image from "next/image";
import { ClerkLoaded,ClerkLoading,UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";


type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed top-0 left-0 px-4 border-r-2 flex-col flex",
        className
      )}
    >
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="hippo.svg" alt="logo_image" height={40} width={40} />
        <h1 className="text-2xl font-extrabold tracking-wide">Hippo</h1>
      </div>
      <div className="flex flex-col flex-1"></div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground  animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
      </div>
    </div>
  );
}
