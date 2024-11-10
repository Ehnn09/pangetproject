import Link from 'next/link';

const Page1 = () => (
  <div className="container">
    <h1>Page 1</h1>

    <div>loko ka lagi kita naiisip kahit anong ginagawa ko sa araw araw ang panget mo kasi hangang panaginip andun ka ang panget tuloy ng panaginip ko :p.
    Tapos bigla kng umiwas panget mo. Ang sakit kaya</div>
    <Link href="/page2">
      <button>Next</button>
    </Link>
  </div>
);

export default Page1;
