import { DUMMY_NEWS } from "@/dummy-data";
import Link from "next/link";
import { notFound } from "next/navigation";
export default function NewsDetailedPage({ params }) {
  // console.log("Params", params);
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  // console.log({ newsItem });
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsSlug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
