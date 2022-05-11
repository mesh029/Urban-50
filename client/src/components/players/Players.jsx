import Post from "../post/Post";
import Player from "../Player/Player"
import "./players.css";

export default function Players({ players }) {
  return (
    <>
    
<div className="cards">
  {players.map((p) => (
    <Player player={p}/>
  ))}
</div>
    </>

  );
}
