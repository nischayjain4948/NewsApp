import NewsList from "@/component/news-list";
import { getNewsForYear } from '@/lib/news'

export default function ArchiveYearNews({ params }) {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);
    return <>
        <NewsList news={news} />
    </>
}