import Link from 'next/link';

const Page5 = () => (
  <div>
    <h1>Page 5</h1>
    <Link href="/page4">
      <button>Previous</button>
    </Link>
  </div>
);

export default Page5;
