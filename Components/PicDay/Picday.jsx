import React, { useState, useEffect } from 'react';
import classes from './Picday.module.css';
import axios from 'axios';

const API = 'txRxGPqaWubQ8xz544e6aFCpXD9hYd2iGNQFObbG';

function Picday() {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(false);

  async function fetching() {
    var { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API}&count=3`);
    setData(data);
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className={classes.APOD}>
      {data.length > 0 ? data.map((item, i) => (
        <div key={i} className={classes.item}>
          <div className={classes.details}>
            <img src={item.url} alt={item.title} />
          </div>
          <div className={classes.info}>
            <h1>{item.title}</h1>
            <h1>{item.date}</h1>
            <p>{more ? item.explanation : item.explanation.slice(0, 100) + '...'}</p>
            <span onClick={() => setMore(!more)}>{more ? 'less' : 'more'}</span>
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default Picday;
 