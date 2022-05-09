import Post from "../post/Post";
import Event from "../Event/Event"
import "./events.css";

export default function Events({ events }) {
  return (
    <>
    
<div className="cards">
  {events.map((p) => (
    <Event event={p} />
  ))}
</div>
    </>

  );
}
