import { Header } from "@/app/ui/learn/Header";
import { FeedWrapper } from "@/app/ui/learn/feed-wrapper";
import { getArticles } from "@/db/queries";


export default async function page(){
    const data = await getArticles();
    return (
        <FeedWrapper>
            <Header/>
            {JSON.stringify(data)}
        </FeedWrapper>
    )
}