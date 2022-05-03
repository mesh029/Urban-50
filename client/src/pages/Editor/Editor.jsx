import React, { useEffect, useState } from 'react';
import './editor.css';
import Cards from "../../components/cards/Cards";
import { useLocation } from "react-router";
import axios from 'axios';

import { Context } from "../../context/Context";

var cors = require('cors')


var corsOptions = {
  origin: 'https://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

function Editor (props) {
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
    
    <div className="new">
      <h1>Hello world</h1>
      <Cards cards={cards} />
     </div>

  );
}

export default Editor;