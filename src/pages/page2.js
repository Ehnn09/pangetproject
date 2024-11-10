import Link from 'next/link';

const Page2 = () => (
  <div className="container">
    <h1>Page 2</h1>
    <div>Porke na slowly falling kana. Kay Joseph siguro.xD
Nagpapa miss ka masyado.

Akala ko pa naman sangang dikit tayo. Nawala bigla yung sweetside mo, lambing mo,  Bat mo na ko iniiwasan? </div>
    <Link href="/page1">
      <button>Previous</button>
    </Link>
    <Link href="/page3">
      <button>Next</button>
    </Link>
  </div>
);

export default Page2;
