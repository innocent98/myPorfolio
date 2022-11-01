import "./storyHighlight.scss";

const StoryHighlight = ({ d }) => {
  return (
    <div className="storyHighlight">
      <div className="img">
        <img src={d.pp} alt="" />
      </div>
    </div>
  );
};

export default StoryHighlight;
