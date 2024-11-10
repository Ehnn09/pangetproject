import Link from 'next/link';

const Page5 = () => (
  <div>
    <h1>Page 5</h1>
    <div>Ah bastat sa ayaw at sa gusto mo dito lang ako. :pDi na din kita aasarin</div>
    <Link href="/page4">  
      <button>Previous</button>
    </Link>
    <Link href="/VideoPage">
      <button>Next</button>
    </Link>
  </div>
);

export default Page5;
