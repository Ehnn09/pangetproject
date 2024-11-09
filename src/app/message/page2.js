import Link from 'next/link';

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <Link href="/page1">
      <button>Previous</button>
    </Link>
    <Link href="/page3">
      <button>Next</button>
    </Link>
  </div>
);

export default Page2;
