import Link from "next/link";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/app/lib/action";
import { TrashIcon } from "lucide-react";

export function CreatePost(){
    return(
        <Link href='/posts/create'>
            <Button size={"sm"}>Create Post</Button>
        </Link>
    )
}

export function DeletePost({ id }: { id: string }) {
    const deletePostWithId = deletePost.bind(null, id);
    return (
      <>
        <form action={deletePostWithId}>
          <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
          </button>
        </form>
      </>
    );
  }
  