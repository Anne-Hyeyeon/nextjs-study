import Link from "next/link";

// our-domian.com/news **  -김혜연-*/

const NewsPage = () => {
  return (
    <>
      <h1>This is a NewsPage</h1>
      <Link href="/news/hi">고고싱</Link>;
    </>
  );
};
export default NewsPage;
