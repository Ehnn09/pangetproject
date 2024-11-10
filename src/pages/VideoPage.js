import Link from 'next/link';

const VideoPage = () => {
  return (
    <div className="container">
      <h1>My Video Page</h1>
      <video width="600" controls>
        <source src="/videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Link href="/page4">
      <button>Previous</button>
    </Link>
    <Link href="/page6">
      <button>Next</button>
    </Link>
    </div>
    
  );
};

export default VideoPage;
