import Link from "next/link";
import { DUMMY_NEWS } from '@/dummy-data'
import NewsList from "@/component/news-list";
export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
