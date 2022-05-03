import Post from "../post/Post";
import Card from "../card/card"
import "./cards.css";

export default function Cards({ cards }) {
  return (
    <>
    
<div className="posts">
  {cards.map((p) => (
    <Card card={p} />
  ))}
</div>
    </>

  );
}
