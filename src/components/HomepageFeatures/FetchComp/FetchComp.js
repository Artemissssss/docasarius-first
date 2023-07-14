import React from 'react';
import { useEffect,useState } from "react"
const parse = require('html-react-parser');
// import {FetchCompAct} from './FetchCompAct'
// const parse = require('html-react-parser');
// const fetch = require("node-fetch");
function FetchComp() {
    const [data,setData] = useState([])
    
    useEffect(() => {
        fetch('https://genshin-ua.vercel.app/api/heroes')
  .then(response => response.json())
  .then(data => setData(data));
      }, []);

  return (
    <section className="training-sect">
    <h2 className="training-name">Запит на api з мого сайту <a style={{color:'inherit'}} target="_blank" href='https://genshin-ua.vercel.app/'>https://genshin-ua.vercel.app</a></h2>
    {/* <FetchCompAct/> */}
    {data.map((arr)=>{
        const normCont = arr.content.split("/api/imguploader").join("https://genshin-ua.vercel.app/api/imguploader")
        return(
            <div key={arr?._id}>
                <h2>{arr?.name}</h2>
                {parse(normCont)}
            </div>
        )
    })}
    </section>
  )
}
export default FetchComp