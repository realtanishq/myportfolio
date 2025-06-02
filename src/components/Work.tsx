import "./styles/Work.css";
import WorkImage from "./WorkImage";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  title: string;
  category: string;
  tools: string;
  videoUrl?: string;
  imageUrl?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Project 1",
    category: "Promotional reel for a media agency",
    tools: "After Effects, Premiere Pro",
    videoUrl: "https://player.vimeo.com/video/1089473499?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  },
  {
    id: 2,
    title: "Project 2",
    category: "Lyrical Video",
    tools: "After Effects",
    videoUrl: "https://player.vimeo.com/video/1089473251?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  },
  {
    id: 3,
    title: "Project 3",
    category: "Podcast Edit",
    tools: " Premiere Pro",
    videoUrl: "https://player.vimeo.com/video/1089473389?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  },
  {
    id: 4,
    title: "Project 4",
    category: "Festival Motion Graphics",
    tools: "After Effects",
    videoUrl: "https://player.vimeo.com/video/1089473204?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  },
  {
    id: 5,
    title: "Project 5",
    category: "Short Film",
    tools: "After Effects, Premiere Pro",
    videoUrl: "https://player.vimeo.com/video/1089476080?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  },
  {
    id: 6,
    title: "Project 6",
    category: "Youtube Video",
    tools: "After Effects, Premiere Pro",
    videoUrl: "https://player.vimeo.com/video/1089477410?h=1a2b3c4d5e&autoplay=0&title=0&byline=0&portrait=0"
  }
];

const Work = () => {
  React.useEffect(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top-=-100px top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
        anticipatePin: 1,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item) => (
            <div className="work-box" key={item.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{item.id}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <div className="work-image">
                <div className="work-image-in">
                  {item.videoUrl ? (
                    <iframe
                      src={item.videoUrl}
                      width="100%"
                      height="450"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{ 
                        maxHeight: '450px',
                        backgroundColor: '#000',
                        display: 'block'
                      }}
                    ></iframe>
                  ) : (
                    <WorkImage image={item.imageUrl || "/images/placeholder.webp"} alt={item.title} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
