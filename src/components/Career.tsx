import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing</h4>
              </div>
              <h4>2020-present</h4>
            </div>
            <p>
            In my freelancing journey, I’ve worked on a wide range of projects — from lyrical videos to brand reels, bringing each idea to life with creativity and detail.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Assistant</h4>
                <h5>Artistic eye</h5>
              </div>
              <h4>March 2023- May 2023</h4>
            </div>
            <p>
            I’ve worked on finding creative ideas and bringing them to life for different brands.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Mirnova pvt ltd</h5>
              </div>
              <h4>February 2025 - may 2025</h4>
            </div>
            <p>
            I’ve shot and edited high-quality promotional videos for real estate and resorts. Also worked with team to create engaging content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
