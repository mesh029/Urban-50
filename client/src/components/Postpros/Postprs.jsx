import Postpros from "../post/Postpro";
import "./postprs.css";

export default function Postprs({ postprs }) {
  return (
    <>
    
<div className="postPrs">
  {postprs.map((p) => (
    <Postpros post={p} />
  ))}
</div>
    </>

  );
}
