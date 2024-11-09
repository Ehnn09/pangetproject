import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to My Next.js Website</h1>
    <Link href="/message/page1">
      <button>Start</button>
    </Link>
  </div>
);

export default Home;
