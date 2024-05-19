import NewsList from "@/component/news-list"
import { getLatestNews } from '@/lib/news'
export default function LatestPage() {
    const latestNews = getLatestNews();
    return (
        <>
            <h3>Latest News</h3>
            <NewsList news={latestNews} />
        </>

    )
}