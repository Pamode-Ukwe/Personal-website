import { useRef, useState } from "react";

type Props = {
  id: number;
  thumbnail: string;
  videoSrc: string;
  liveDemo?: string;
  githubLink: string;
  description: string;
};

const VideoThumbnail = ({
  thumbnail,
  videoSrc,
  liveDemo,
  description,
  githubLink,
}: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const buttonStyles =
    "p-2 bg-cyan-600 hover:text-pink-400 hover:cursor-pointer";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleMouseEnter = () => {
    videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  const handleTouchStart = () => {
    videoRef.current?.play();
  };
  const handleTouchEnd = () => {
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div className="font-lexend">
      <div
        className="h-80 col-span-1 rounded-lg relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={thumbnail}
          alt="Project"
          className="h-80 rounded-lg w-full hover:cursor-pointer absolute hover:hidden object-cover z-10"
        />
        <video
          src={videoSrc}
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute h-80 w-full object-cover cursor-pointer z-0"
        ></video>
        {isShowing && (
          <div className="bg-stone-200 text-teal-900 px-4 absolute z-20 w-full text-xs h-full max-w-prose space-y-2 py-8 sm:text-lg">
            {description}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center my-4 bg-cyan-600 text-white rounded-sm">
        <a
          href={liveDemo}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        |
        <button
          type="button"
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
          className={buttonStyles}
        >
          Brief Description
        </button>
        |
        <a
          href={githubLink}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </div>
    </div>
  );
};

export default VideoThumbnail;
