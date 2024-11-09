import Link from 'next/link';

const Page4 = () => (
  <div>
    <h1>Page 4</h1>
    <Link href="/page3">
      <button>Previous</button>
    </Link>
    <Link href="/page5">
      <button>Next</button>
    </Link>
  </div>
);

export default Page4;
