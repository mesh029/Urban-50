import "./single.css";

import SinglePostSidebar from "../../components/singlePostSideBar/singlePostSideBar"
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SinglePostSidebar/>
    </div>
  );
}
