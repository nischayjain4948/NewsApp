"use client";
import { DUMMY_NEWS } from "@/dummy-data";
import { notFound, useRouter } from "next/navigation";
export default function InterceptedShowImage({ params }) {
    const imageSlug = params?.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === imageSlug);
    const router = useRouter();

    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscrean-image">
                    <img src={`/images/news/${newsItem?.image}`} alt={newsItem.slug} />
                </div>
            </dialog>
        </>
    )

}