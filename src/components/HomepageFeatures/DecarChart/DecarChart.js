import React, { useEffect } from 'react';
import { useState } from "react";
import Plot from 'react-plotly.js';
import 'mafs/core.css';
import 'mafs/font.css';
// import { Mafs, Coordinates, Plot, Point  } from 'mafs';
import '@site/src/components/HomepageFeatures/Quadratic/Quadratic.css';
import "//unpkg.com/mathlive";
import { nanoid } from 'nanoid'
// const math = require('mathjs');
var nerdamer = require('nerdamer'); 
// Load additional modules. These are not required.  
require('nerdamer/Algebra'); 
require('nerdamer/Calculus'); 
require('nerdamer/Solve'); 
require('nerdamer/Extra');
// import PolarFunctionPlot from '@site/src/components/HomepageFeatures/DecartChart/PolarFunctionPlot';
function Colinearity() {
  const [changer,setChanger] = useState(true);
  const [solutionP,setSolutionP] = useState([null]);
  const [solutionS,setSolutionS] = useState([{func:{y:"x^2"},type:0,id:nanoid()}]);
  const [solutionData,setSolutionData] = useState([]);
  const cardioidFunction = (theta) => 200 * (1 + Math.cos(theta)); // Радіус для кардіоїди


  const [equationType, setEquationType] = useState('regular');
  const [equation, setEquation] = useState('');
  const [parametricEquationX, setParametricEquationX] = useState('');
  const [parametricEquationY, setParametricEquationY] = useState('');
  const [polarEquation, setPolarEquation] = useState('');

  const generateData = (arr) => {
    let x = [];
    let y = [];
    switch (arr.type) {
      case 0:
        // Разбор обычной функции
        // Например, y = x^2
        for (let i = -10; i <= 10; i += 0.1) {
          x.push(i);
          y.push(eval(arr.func.y.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "").replace('x', `(${i})`)));
        }
        break;
        
        case 1:
          // Разбор параметрической функции
          // Например, x = sin(t), y = cos(t)
          for (let t = 0; t <= 2 * Math.PI; t += 0.1) {
            x.push(eval(arr.func.x.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "")));
            y.push(eval(arr.func.y.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "")));
          }
          
        break;

      case 2:
        // Разбор полярной функции
        // Например, r = 1 + 3 * cos(theta)
        for (let theta = 0; theta <= 2 * Math.PI; theta += 0.01) {
          console.log(arr)
          x.push(eval(arr.func.y.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "").replace('\\theta', theta)) * Math.cos(theta));
          y.push(eval(arr.func.y.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "").replace('\\theta', theta)) * Math.sin(theta));
        }
        break;

      default:
        break;
    }

    return [{ x, y, type: 'scatter', mode: 'lines' }];
  };



const solution = (e) =>{
e.preventDefault();
const formData = e.target;
let ok = solutionS;
for(let i =0; i<ok.length*2;i++){
  if(!i%2){
    ok[parseInt(i/2)].func.x = formData[i].value;
  }else{
    ok[parseInt(i/2)].func.y = formData[i].value;
  }
}
setSolutionP(ok);
setSolutionS(ok);
};

const addFuncSt = () =>{
  setSolutionS([...solutionS,{func:{y:"x^2"},type:0,id:nanoid()}]);
};
const addFuncStPar = () =>{
  setSolutionS([...solutionS,{func:{x:"t^2",y:"\sin(t)"},type:1,id:nanoid()}]);
};

const addFuncPol = () =>{
  setSolutionS([...solutionS,{func:{x:"t^2",y:"2*\sin(4*θ)"},type:2,id:nanoid()}]);
};

function delFunc (i){
  let ok = solutionS;ok.splice(i,1);console.log(i);setSolutionS(ok,{});
  setSolutionS(ok);
}

  return (
    <section className="training-sect">

            <h2 className="training-name">Калькулятор графіків. Графік функції онлайн</h2>
            <div className="training-btn-wrap">
                <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                {/* <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button> */}
            </div>
            {changer ? (
            <div className="training-wrap-cont" id="training-wrap-cont">
                <form className="member-wrap" onSubmit={solution}> 
                {solutionS?.map((arr,i) =>{ return (
                  <>{arr.type ? (<>
                  {arr.type ===1 ? (<>
                    <label key={i} className="label-select" >
                      <span onClick={() =>{delFunc(i)}} style={{color:"red",width:"20px",height:"20px"}}>✖</span>ㅤxㅤ=ㅤ 
                <math-field onChange={(e)=>{let ok = solutionS;ok[i].func.x=e.target.value;console.log(ok);setSolutionS(ok)}}>
                    {arr.func.x}
                </math-field><br/>
                yㅤ=ㅤ<math-field onChange={(e)=>{let ok = solutionS;ok[i].func.y=e.target.value;console.log(ok);setSolutionS(ok)}}>
                    {arr.func.y}
                </math-field>
                <br/></label>   
                  </>) :(<>
                    <label key={i} className="label-select" >
                      <span onClick={() =>{delFunc(i)}} style={{color:"red",width:"20px",height:"20px"}}><input type='text' defaultValue={1} style={{display:"none"}}/>✖</span>ㅤyㅤ=ㅤ 
                <math-field onChange={(e)=>{let ok = solutionS;ok[i].func.y=e.target.value;console.log(ok);setSolutionS(ok)}}>
                    {arr.func.y}
                </math-field>
                <br/></label>   
                  </>)}
                  </>) :(<>
                    <label key={i} className="label-select" >
                      <span onClick={() =>{delFunc(i)}} style={{color:"red",width:"20px",height:"20px"}}><input type='text' defaultValue={1} style={{display:"none"}}/>✖</span>ㅤyㅤ=ㅤ 
                <math-field onChange={(e)=>{let ok = solutionS;ok[i].func.y=e.target.value;console.log(ok);setSolutionS(ok)}}>
                    {arr.func.y}
                </math-field>
                <br/></label>    
                  </>)}
                  </>
                )})}
                    <p onClick={addFuncSt} className="member-submit">Додати графік y = x<sup>2</sup></p>
                    <p onClick={addFuncStPar} className="member-submit">Додати параметричний<br/> x = t^2 y = sin(t)</p>
                    <p onClick={addFuncPol} className="member-submit">Додати полярний графік r=θ</p>
                    <button className="member-submit">Намалювати графіки</button>
                </form>
                <div className="training-solution" id="one-training-solution" >
                  {/* <Mafs zoom={{ min: 0.1, max: 10 }}>
                    <Coordinates.Cartesian subdivisions={10}/>
                    <Point x={0} y={0} />
                    <Plot.OfX y={(x) => Math.sin(-1*Math.sqrt(x))}/>
                    <Plot.OfX y={(x) => Math.sin(Math.sqrt(x))}/>
                  {solutionP?.map((arr,i) =>{console.log(arr.func.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, ""));return(
                    <>
                    {arr.type === 0 ? 
                      (<Plot.OfX key={arr.id} y={(x) => eval(arr.func.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, ""))} />)
                      : 
                      (<>{arr.type ===1 ? (<>
                      
                      </>):(<>
                      
                      </>)} </>)
                    }
                    </>
                  )})}
                     </Mafs> */}
                     {solutionP[0] !== null && solutionP.length !== 0? 
(
  <>
  {solutionP.map((arr) =>{
    console.log(arr)
    return (
      <Plot
      key={arr.id}
       data={generateData(arr)}
       layout={{ width: 600, height: 400, title: `Графік функції ${arr.func.y.split("}{").join(")/(").split("{").join("(").split("}").join(")").split(")(").join(")*(").split("frac").join("").split("\sqrt").join("Math.sqrt").split("\sin").join("Math.sin").split("\tan").join("Math.tan").split("\cos").join("Math.cos").split("^").join("**").split("pi").join("Math.PI").split("\cdot").join("*").split("\right)").join(")").split("\left(").join("(").replace(/\\/g, "")}` }}
     />
    )
  })}
</>
)
: null}
                   </div>
            </div>
            ) : (
            <div className="theory-wrap-cont" id="theory-wrap-cont">
                <h3 className="theory-text"><span className="theory-text-span">Біквадратне рівняння</span> — це рівняння вигляду</h3>
                <p className="theory-formule">a x<sup>4</sup> + b x<sup>2</sup> + c = 0,</p>
                <h3 className="theory-text">де a не дорівнює 0.</h3>
                <h3 className="theory-text"><span className="theory-text-span">Розв'язати біквадратне рівняння</span> означає знайти всі значення x<sub>i</sub>, для яких буде виконуватись рівність</h3>
                <p className="theory-formule">a x<sub>i</sub><sup>4</sup> + b x<sub>i</sub><sup>2</sup> + c = 0</p>
                <h3 className="theory-text"><span className="theory-text-span">Методика розв'язання квадратних рівнянь.</span> Для розв'язання біквадратного рівняння необхідно виконати заміну y = x<sup>2</sup>, тоді розв'язок біквадратного рівняння зведеться до розв'язання квадратного рівняння</h3>
                <p className="theory-formule">a y<sup>2</sup> + b y + c = 0,</p>
            </div>
            )}

        </section>
  )
}//latex_to_js
export default Colinearity

//