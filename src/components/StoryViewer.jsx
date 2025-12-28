import { useEffect, useState } from "react";

const StoryViewer = ({ stories, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const timer = setTimeout(goNext, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const goNext = () => {
    if (current < stories.length - 1) setCurrent(current + 1);
    else onClose();
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-white">
      <button
        className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle"
        style={{ zIndex: 5 }}
        onClick={onClose}
      >
        ✕
      </button>

      <div
        className="position-absolute start-0"
        style={{ top: "60px", bottom: 0, width: "50%" }}
        onClick={goPrev}
      ></div>

      <div
        className="position-absolute end-0"
        style={{ top: "60px", bottom: 0, width: "50%" }}
        onClick={goNext}
      ></div>

      <img
        src={stories[current].image}
        alt=""
        className="w-100 h-100 object-fit-cover"
      />
    </div>
  );
};

export default StoryViewer;
