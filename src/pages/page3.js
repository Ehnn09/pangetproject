import Link from 'next/link';

const Page3 = () => (
  <div>
    <h1>Page 3</h1>
    <div>Ayaw mo na ba ng kulitan? harutan? asaran? kwentuhan? galaan? kainan?

Lagi ka pa naman kasama sana sa plano ko. :(

nung ramdam ko pag iwas mo sobrang nalumbay ako. mas masakit pa sa break up kung alam mo lang hahaha.
kaya panay nalang labas ko na bahay para lang mag libang pero walang talab talaga.</div>
    <Link href="/page2">
      <button>Previous</button>
    </Link>
    <Link href="/page4">
      <button>Next</button>
    </Link>
  </div>
);

export default Page3;
