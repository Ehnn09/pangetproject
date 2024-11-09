import Link from 'next/link';

const Page3 = () => (
  <div>
    <h1>Page 3</h1>
    <Link href="/page2">
      <button>Previous</button>
    </Link>
    <Link href="/page4">
      <button>Next</button>
    </Link>
  </div>
);

export default Page3;
