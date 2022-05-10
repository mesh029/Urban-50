import "./section.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';








export default function Section({ sectionId }) {
    var description
    var title
    var icon
    if (sectionId === 'chess') {
        description = "Whats new in chess, upcoming events and the week's top player."
        title ="Chess"
        icon = <i class="c-icon fa-solid fa-chess-knight fa-10x"></i>

        
    } else if(sectionId === 'poetry'){
        description = "Latest in the world of poetry, cool poems and the week's top poet."
        title="Poetry"
        icon = <i class="c-icon fa-solid fa-feather fa-10x"></i>

    }else{
        description = 'Coming soon'
        title = 'Working on it'
        icon = <i class="c-icon fa-solid fa-person-digging fa-10x"></i>
    }
  return (
    <div className="section">
        <table className="sectionTbl">
            <tr className="sectionTblRw">
                <td className="sectionTd1">
                    {icon}
                </td>
                <td className="sectionTd2">
                    <div className="title"><h1>{title}</h1></div>
                    <div className="description">{description}</div>
                </td>
            </tr>

        </table>

     </div>
  );
}
