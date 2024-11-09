import Link from 'next/link';

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <Link href="/page2">
      <button>Next</button>
    </Link>
  </div>
);

export default Page1;
