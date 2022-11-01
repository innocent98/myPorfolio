import "./storyHighlights.scss";
import StoryHighlight from "../storyHighlight/StoryHighlight";
import { users } from "../../data";

const StoryHighlights = () => {
  return (
    <div className="storyHighlights">
      {users.map((d) => (
        <StoryHighlight d={d} key={d.id}/>
      ))}
    </div>
  );
};

export default StoryHighlights;
