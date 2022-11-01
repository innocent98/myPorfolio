import "./statuses.scss";
import Status from "../status/Status";
import { users } from "../../data";

const Statuses = () => {
  return (
    <div className="statuses">
      {users.map((d) => (
        <Status d={d} key={d.id}/>
      ))}
    </div>
  );
};

export default Statuses;
