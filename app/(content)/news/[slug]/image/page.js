import { DUMMY_NEWS } from "@/dummy-data";
import { notFound } from "next/navigation";
export default function ShowImage({ params }) {
    const imageSlug = params?.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === imageSlug);

    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <div className="fullscrean-image">
                <img src={`/images/news/${newsItem?.image}`} alt={newsItem.slug} />
            </div>
        </>
    )

}