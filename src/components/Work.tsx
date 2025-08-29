import "./styles/Work.css";
// import WorkImage from "./WorkImage";
// React import not required with the new JSX transform and no hooks used
// Removed GSAP horizontal scroll/pin behavior for a minimal grid layout

// Old workItems and WorkImage usage removed in favor of structured placeholders

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        {/* Main Showreel Highlight */}
        <div className="work-group">
          <div className="work-grid">
            <div className="work-card" style={{ gridColumn: '1 / -1' }}>
              <div className="work-media aspect-16x9">
                <iframe
                  className="showreel-embed"
                  src="https://www.youtube.com/embed/uinWrxXWZg4?rel=0&modestbranding=1&playsinline=1"
                  title="Showreel"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="work-meta">
                <div className="work-title">
                  <h3>00</h3>
                  <div>
                    <h4>Main Showreel</h4>
                    <p>Featured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Form Content */}
        <div className="work-group">
          <h3 className="work-subheading">Short Form Content</h3>
          <div className="work-grid work-grid--3x3">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="work-card" key={`short-${idx}`}>
                <div className="work-media aspect-9x16">
                  {idx === 0 ? (
                    <iframe
                      className="youtube-embed"
                      src="https://www.youtube.com/embed/4_UeaIERR88?playsinline=1&rel=0&modestbranding=1"
                      title="Short 1"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : idx === 1 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1089473499?title=0&byline=0&portrait=0"
                      title="Short 2"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : idx === 2 ? (
                    <iframe
                      className="youtube-embed"
                      src="https://www.youtube.com/embed/px5NpO7nAJc?playsinline=1&rel=0&modestbranding=1"
                      title="Short 3"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="placeholder" />
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 1).padStart(2, "0")}</h3>
                    <div>
                      <h4>Short #{idx + 1}</h4>
                      <p>Instagram Reels</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-divider" />

        {/* Cinematography */}
        <div className="work-group">
          <h3 className="work-subheading">Cinematography</h3>
          <div className="work-grid work-grid--2x2">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div className="work-card" key={`cine-a-${idx}`}>
                <div className={`work-media aspect-16x9`}>
                  {idx === 0 ? (
                    <iframe
                      className="youtube-embed"
                      src="https://www.youtube.com/embed/WbhjeXSSt58?playsinline=1&rel=0&modestbranding=1"
                      title="Cine 1"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/CM_LiWJQU00?rel=0&modestbranding=1"
                      title="Cine 2"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 1).padStart(2, "0")}</h3>
                    <div>
                      <h4>Cine #{idx + 1}</h4>
                      <p>Brand Ads</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="work-grid work-grid--3x3">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="work-card" key={`cine-b-${idx}`}>
                <div className="work-media aspect-16x9">
                  {idx === 0 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114240504?title=0&byline=0&portrait=0"
                      title="Cine 3"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : idx === 1 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114240562?title=0&byline=0&portrait=0"
                      title="Cine 4"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114240536?title=0&byline=0&portrait=0"
                      title="Cine 5"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 3).padStart(2, "0")}</h3>
                    <div>
                      <h4>Cine #{idx + 1}</h4>
                      <p>Brand Promtional Reel {idx + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-divider" />

        {/* Edited Videos */}
        <div className="work-group">
          <h3 className="work-subheading">Edited Videos</h3>
          <div className="work-grid work-grid--2x2">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div className="work-card" key={`edit-a-${idx}`}>
                <div className="work-media aspect-16x9">
                  {idx === 0 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114243304?title=0&byline=0&portrait=0"
                      title="Edited 1"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114243276?title=0&byline=0&portrait=0"
                      title="Edited 2"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 1).padStart(2, "0")}</h3>
                    <div>
                      <h4>Edit #{idx + 1}</h4>
                      <p>Motion Graphics {idx + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="work-grid work-grid--2x2">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div className="work-card" key={`edit-b-${idx}`}>
                <div className="work-media aspect-16x9">
                  {idx === 0 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1089473251?title=0&byline=0&portrait=0"
                      title="Edited 3"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/aEzjOr5Ydm0?rel=0&modestbranding=1"
                      title="Edited 4"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 3).padStart(2, "0")}</h3>
                    <div>
                      <h4>Edit #{idx + 3}</h4>
                      <p>Edited Video {idx + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-divider" />

        {/* My Projects */}
        <div className="work-group">
          <h3 className="work-subheading">My Projects</h3>
          <div className="work-grid work-grid--3x3">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="work-card" key={`proj-${idx}`}>
                <div className="work-media aspect-16x9">
                  {idx === 0 ? (
                    <iframe
                      src="https://www.youtube.com/embed/7xaYrAF4D5o?rel=0&modestbranding=1"
                      title="Project 1"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : idx === 1 ? (
                    <iframe
                      src="https://www.youtube.com/embed/bd7ZygZJeJk?rel=0&modestbranding=1"
                      title="Project 2"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : idx === 2 ? (
                    <iframe
                      className="vimeo-embed"
                      src="https://player.vimeo.com/video/1114246115?title=0&byline=0&portrait=0"
                      title="Project 3"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="placeholder" />
                  )}
                </div>
                <div className="work-meta">
                  <div className="work-title">
                    <h3>{String(idx + 1).padStart(2, "0")}</h3>
                    <div>
                      <h4>Project #{idx + 1}</h4>
                      <p>{idx === 0 ? 'Shortfilm' : idx === 1 ? 'Mini-Documentary' : 'Khatta Flow'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
