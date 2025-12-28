const StoryBar = ({ stories, onSelect }) => {
  return (
    <div className="d-flex overflow-auto p-3 border-bottom">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className="text-center me-3"
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(index)}
        >
          <img
            src={story.image}
            alt={story.user}
            className="rounded-circle border border-3 border-danger"
            style={{ width: "70px", height: "70px", objectFit: "cover" }}
          />
          <small className="d-block mt-1">{story.user}</small>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
