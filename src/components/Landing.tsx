import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const { setLoading } = useLoading();
  const progressRef = useRef<ReturnType<typeof setProgress> | null>(null);

  useEffect(() => {
    if (!progressRef.current) {
      progressRef.current = setProgress((value) => setLoading(value));
    }
    const initPlayer = () => {
      const YT = (window as any).YT;
      if (!YT || !YT.Player) return;
      if (playerRef.current) return;
      playerRef.current = new YT.Player("hero-video-yt", {
        videoId: "uinWrxXWZg4",
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          playsinline: 1,
          loop: 1,
          playlist: "uinWrxXWZg4",
          rel: 0,
          modestbranding: 1,
          vq: "hd1080",
        },
        events: {
          onReady: (e: any) => {
            try {
              e.target.mute();
              e.target.playVideo();
              setIsMuted(true);
              setIsPlayerReady(true);
              if (progressRef.current) {
                progressRef.current.loaded();
              }
              setTimeout(() => {
                try {
                  e.target.playVideo();
                } catch {}
              }, 400);
            } catch {}
          },
        },
      });
    };

    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    const onFirstGesture = () => {
      try {
        if (playerRef.current) {
          playerRef.current.unMute();
          playerRef.current.setVolume(100);
          playerRef.current.playVideo();
          setIsMuted(false);
        }
      } catch {}
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
    window.addEventListener("click", onFirstGesture, { once: true });
    window.addEventListener("touchstart", onFirstGesture, { once: true });
    window.addEventListener("keydown", onFirstGesture, { once: true });

    return () => {
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
  }, []);

  const toggleMute = () => {
    try {
      if (!playerRef.current || !isPlayerReady) return;
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        playerRef.current.playVideo();
        setIsMuted(false);
      } else {
        playerRef.current.setVolume(0);
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch {}
  };

  return (
    <>
      <div className="landing-section hero" id="landingDiv">
        <div className="hero-media">
          <div className="hero-video-wrapper">
            <div id="hero-video-yt" className="hero-video" />
          </div>
          <div className="hero-overlay" />
          <button className="hero-audio-toggle" onClick={toggleMute} aria-pressed={!isMuted} aria-label={isMuted ? "Unmute video" : "Mute video"}>
            {isMuted ? "Sound On" : "Sound Off"}
          </button>
        </div>
        <div className="landing-container hero-content"></div>
        {children}
      </div>
    </>
  );
};

export default Landing;
