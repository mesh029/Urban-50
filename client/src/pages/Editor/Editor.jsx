import React, { useEffect, useState } from 'react';
import './editor.css';
import Cards from "../../components/cards/Cards";
import { useLocation } from "react-router";
import axios from 'axios';
import Header from "../../components/header/Header"

import { Context } from "../../context/Context";

var cors = require('cors')


var corsOptions = {
  origin: 'https://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

function Editor(props) {
  const [cards, setCards] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("/cards/" + search, cors(corsOptions));
      setCards(res.data);
    };
    fetchCards();
  }, [search]);

  return (

    <div className="chessPg">
      <Header />
      <table className='chessTbl'>
        <tr className='ctTr'>
          <td className='lftCt'></td>
          <td className='cntrCt'>
            <table className='cntrTbl'>
              <tr className="cntrRwA cntrTblRwa"></tr>
              <tr className="cntrRw cntrTblRwb">
                <td className="cntrTd cntrTdA"></td>
                <td className="cntrTd cntrTdB">
                  <table className='boardTbl'>
                    <tr className="boardRw boardTblRwA">
                      <td className="boardTblTdW boardTblRwATdA">

                      </td>
                      <td className="boardTblTd boardTblRwATdB">
                        <div className="boardContent">
                          <h1>Top player</h1>
                        </div>
                      </td>
                      <td className="boardTblTdW boardTblRWATdC"></td>
                    </tr>
                    <tr className="boardRw boardTblRwB">
                      <td className="boardTblTd boardTblRwBTdA">
                        <div className="boardContent">
                          <h1>Chess events here</h1>
                        </div>
                      </td>
                      <td className="boardTblTdW boardTblRwBTdB"></td>
                      <td className="boardTblTd boardTblRWBTdC">
                        <div className="boardContent">
                          Chess events
                        </div>
                      </td>
                    </tr>
                    <tr className="boardrw boardTblRwC">
                      <td className="boardTblTdW boardTblRwCTdA"></td>
                      <td className="boardTblTd boardTblRwCTdB"></td>
                      <td className="boardTblTdW WboardTblRWCTdC"></td>
                    </tr>
                  </table>
                </td>
                <td className="cntTd rTdC"></td>
              </tr>
              <tr className="cntrRwA cntrTblrRwc"></tr>
            </table>
          </td>
          <td className='rghtCt'></td>
        </tr>

      </table>

    </div>

  );
}

export default Editor;