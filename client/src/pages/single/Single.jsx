import "./single.css";
import LeftSideBar from "../../components/leftbar/Leftbar"

import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <>
      <LeftSideBar/>

    <div className="single">
      <SinglePost/>
    </div>
    </>

  );
}
