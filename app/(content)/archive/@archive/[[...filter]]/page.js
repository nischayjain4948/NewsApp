import NewsList from "@/component/news-list";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from '@/lib/news'
import Link from "next/link";

export default function ArchiveYearNews({ params }) {
    const newsYear = params?.filter;
    const selectedYear = params?.filter?.[0];
    const getMonth = params?.filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !getMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);

    }

    let newsContent = <p>No news found for selected period</p>


    if (selectedYear && getMonth) {
        news = getNewsForYearAndMonth(selectedYear, getMonth);
        links = [];
    }


    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }


    return <>
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map(link => {

                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return <li key={link}><Link href={href}>{link}</Link></li>


                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>
}