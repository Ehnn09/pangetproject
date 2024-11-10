import Link from 'next/link';

const Page4 = () => (
  <div>
    <h1>Page 4</h1>
    <div>yung huling kwentuhan natin nung gabi ang saya kaya nun, tapos kinabukasan di ka na namansin, bigla ka nalang umiiwas pag malapit ako sayo. anong ngyari?
Hindi na din kita kinukulit pero palagi ko namimiss yun.

ah basta, pwede mo ko sabihan anytime panget kung kailangan mo kausap. Ayain mo ko gala or kain tayo. :)
pwede mo din ako sabihan kung ayaw mo na ng dati. ako nalang iiwas. 
hihiya na din ako sayo kulitin ka alam ko naman na di kana interisado.</div>
    <Link href="/page3">
      <button>Previous</button>
    </Link>
    <Link href="/page5">
      <button>Next</button>
    </Link>
  </div>
);

export default Page4;
