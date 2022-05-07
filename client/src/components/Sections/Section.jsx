import "./section.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';








export default function Section({ sectionId }) {
    var description
    var title
    if (sectionId === 'chess') {
        description = "This is chess"
        title ="Chess"
        
    } else if(sectionId === 'basketball'){
        description = 'This is basketball'
        title="basketball"
    }else{
        description = 'This is sth else'
        title = 'something else'
    }
  return (
    <div className="section">
        <table className="sectionTbl">
            <tr className="sectionTblRw">
                <td className="sectionTd1">
                <i class="c-icon fa-solid fa-chess-knight fa-10x"></i>
                </td>
                <td className="sectionTd2">Hello world</td>

            </tr>

        </table>

     </div>
  );
}
