import React from 'react';
import { useState } from "react"
import 'mafs/core.css';
import 'mafs/font.css';
import { Mafs, Coordinates, Plot, Point  } from 'mafs';
import '@site/src/components/HomepageFeatures/Quadratic/Quadratic.css'

function Colinearity() {
const [changer,setChanger] = useState(true);
const [solutionP,setSolutionP] = useState([null]);
const [solutionData,setSolutionData] = useState([]);

function QuadraticResult (formData) {
  setSolutionP([((-1*(parseFloat(formData[1].value))-Math.sqrt((parseFloat(formData[1].value)*parseFloat(formData[1].value))-4*parseFloat(formData[0].value)*parseFloat(formData[2].value)))/2*parseFloat(formData[0].value)),((-1*(parseFloat(formData[1].value))+Math.sqrt((parseFloat(formData[1].value)*parseFloat(formData[1].value))-4*parseFloat(formData[0].value)*parseFloat(formData[2].value)))/2*parseFloat(formData[0].value))])
  if((parseFloat(formData[1].value)*parseFloat(formData[1].value))-4*parseFloat(formData[0].value)*parseFloat(formData[2].value)<0){

  }
}

const solution = (e) =>{
e.preventDefault();
const formData = e.target;
setSolutionP([((-1*(parseFloat(formData[1].value))-Math.sqrt((parseFloat(formData[1].value)*parseFloat(formData[1].value))-4*parseFloat(formData[0].value)*parseFloat(formData[2].value)))/2*parseFloat(formData[0].value)),((-1*(parseFloat(formData[1].value))+Math.sqrt((parseFloat(formData[1].value)*parseFloat(formData[1].value))-4*parseFloat(formData[0].value)*parseFloat(formData[2].value)))/2*parseFloat(formData[0].value))])
setSolutionData([parseFloat(formData[0].value),parseFloat(formData[1].value),parseFloat(formData[2].value)])
};

  return (
    <section className="training-sect">
            <h2 className="training-name">Онлайн тренажер. Колінеарність векторів</h2>
            <div className="training-btn-wrap">
                <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
            </div>
            {changer ? (
            <div className="training-wrap-cont" id="training-wrap-cont">
                <form className="member-wrap" onSubmit={solution}> 
                    <label className="label-select">
                      <input className="point-input quadratic-input" type="number" defaultValue={1} min={0.01} step={0.01} required/><span className="text"> x<sup>2</sup> </span><input className="point-input  quadratic-input" type="number" defaultValue={2} step={0.01} required/><span className="text">x </span><input className="point-input  quadratic-input" type="number" defaultValue={-3} step={0.01} required/><span className="text"> = 0</span>
                    </label><br/>
                    <button className="member-submit">Знайти відповідь</button>
                </form>
                <div className="training-solution" id="one-training-solution" style={{display:solutionP[0]!==null ? "inline-block":"none"}}>
                    <h3 className="training-solution-name">Розв’язок:</h3>
                    <p className="training-solution-formule">У квадратному рівнянні ax<sup>2</sup> + bx + c = 0<br/>a = 1<br/>b = 2<br/>c = 3</p>
                    <p className="training-solution-formule">x = (-b ± √D) / 2a, D = b<sup>2</sup> - 4ac</p>
                    <p className="training-solution-formule" id="one-training-solution-formule">Відповідь: {solutionP[0] ? `${solutionP[0]} та` : ""} {solutionP[1] ? `${solutionP[1]}` : ""} {solutionP[0] && solutionP[1] ? "":"рішень немає із за від'ємного дискрімінанта"}</p>
                    <p className="training-solution-formule" id="one-training-solution-formule">Графік y = {solutionData[0] === 1 ? "" : solutionData[0]}x<sup>2</sup> {solutionData[1]>=0 ? `+${solutionData[1]}` : setSolutionData[1]}x {solutionData[2]>=0 ? `+${solutionData[2]}` : solutionData[2]}<br/></p>
                    <Mafs zoom={{ min: 0.1, max: 2 }}>
                      <Coordinates.Cartesian subdivisions={5}/>
                      <Point x={0} y={0} />
                      <Plot.OfX y={(x) => solutionData[0]*x*x+solutionData[1]*x+solutionData[2]} />
                    </Mafs>
                </div>
            </div>
            ) : (
            <div className="theory-wrap-cont" id="theory-wrap-cont">
                <h3 className="theory-text"><span className="theory-text-span">Квадратне рівняння</span> — це рівняння вигляду</h3>
                <p className="theory-formule">a x<sup>2</sup> + b x + c = 0,</p>
                <h3 className="theory-text">де a не дорівнює 0.</h3>
                <h3 className="theory-text"><span className="theory-text-span">Розв'язати квадратне рівняння</span> означає знайти всі значення xi, для яких буде виконуватись рівність</h3>
                <p className="theory-formule">a x<sub>i</sub><sup>2</sup> + b x<sub>i</sub> + c = 0</p>
                <h3 className="theory-text"><span className="theory-text-span">Методика розв'язання квадратних рівнянь.</span> Для розв'язання квадратного рівняння необхідно знайти дискримінант</h3>
                <p className="theory-formule">D = b<sup>2</sup> - 4 a c</p>
                <h3 className="theory-text">Якщо D {">"} 0, то рівняння має два різних дійсних кореня.<br/>Якщо D = 0, то рівняння має один дійсних корінь (x1 = x2).<br/>Якщо D {"<"} 0, то рівняння не має дійсних коренів.</h3>
                <h3 className="theory-text">Корені квадратного рівняння (розв'язок квадратного рівняння) знаходиться за формулою</h3>
                <p className="theory-formule">x<sub>1 2</sub> = (-b ± √D) / 2a</p>
            </div>
            )}

        </section>
  )
}
export default Colinearity