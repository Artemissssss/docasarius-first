import React from 'react';
import { useState } from "react"
import '@site/src/components/HomepageFeatures/Colinearity/Colinearty.css'

function Colinearity() {
const [typeColinearityMetr,setTypeColinearityMetr] = useState(true);
const [firstVectorMetr,setFirstVectorMetr] = useState(true);
const [secondVectorMetr,setSecindVectorMetr] = useState(true);
const [solutionP,setSolutionP] = useState(null);
const [changer,setChanger] = useState(true);

const typeColinearity = ()=>{
  setTypeColinearityMetr(!typeColinearityMetr);
};

const firstVector = ()=>{
  setFirstVectorMetr(!firstVectorMetr);
};

const secondVector = ()=>{
  setSecindVectorMetr(!secondVectorMetr);
};


const solution = (e) =>{
e.preventDefault();
const formData = e.target;
if(typeColinearityMetr){
  if(firstVectorMetr){
    if(secondVectorMetr){
      parseFloat(formData[0].value)===0 ? setSolutionP((parseFloat(formData[1].value)/parseFloat(formData[3].value) === 1)) : setSolutionP((parseFloat(formData[0].value)/parseFloat(formData[2].value) === 1));
    }else{
      parseFloat(formData[0].value)===0 ? setSolutionP((parseFloat(formData[1].value)/(parseFloat(formData[5].value)-parseFloat(formData[3].value)) === 1)) : setSolutionP((parseFloat(formData[0].value)/(parseFloat(formData[4].value)-parseFloat(formData[2]).value) === 1));
    };
  }else{
    if(secondVectorMetr){
      parseFloat(formData[0].value)===0 ? setSolutionP(((parseFloat(formData[3].value)-parseFloat(formData[1].value))/parseFloat(formData[5].value) === 1)) : setSolutionP(((parseFloat(formData[2].value)-parseFloat(formData[0].value))/parseFloat(formData[4].value) === 1));
    }else{
      parseFloat(formData[0].value)===0 ? setSolutionP(((parseFloat(formData[3].value)-parseFloat(formData[1].value))/(parseFloat(formData[7].value)-parseFloat(formData[5].value)) === 1)) : setSolutionP(((parseFloat(formData[2].value)-parseFloat(formData[0].value))/(parseFloat(formData[6].value)-parseFloat(formData[4].value)) === 1));
    };
  };
}else{
  if(firstVectorMetr){
    if(secondVectorMetr){
      if(parseFloat(formData[0].value)===0){
        if(parseFloat(formData[1].value)===0){
          setSolutionP((parseFloat(formData[2].value)/parseFloat(formData[5].value))===1);
        }else{
          setSolutionP((parseFloat(formData[1].value)/parseFloat(formData[4].value))===1);
        }
      }else{
        setSolutionP((parseFloat(formData[0].value)/parseFloat(formData[3].value))===1);
      }
    }else{

      if(parseFloat(formData[0].value)===0){
        if(parseFloat(formData[1].value)===0){
          setSolutionP((parseFloat(formData[0].value)/(parseFloat(formData[8].value)-parseFloat(formData[5].value)))===1);
        }else{
          setSolutionP((parseFloat(formData[1].value)/(parseFloat(formData[7].value)-parseFloat(formData[4].value)))===1);
        }
      }else{
        setSolutionP((parseFloat(formData[0].value)/(parseFloat(formData[6].value)-parseFloat(formData[3].value)))===1);
      }
    };
  }else{
    if(secondVectorMetr){
      if(parseFloat(formData[0].value)===0){
        if(parseFloat(formData[1].value)===0){
          setSolutionP((parseFloat(formData[2].value)/parseFloat(formData[5].value))===1);
        }else{
          setSolutionP((parseFloat(formData[1].value)/parseFloat(formData[4].value))===1);
        }
      }else{
        setSolutionP((parseFloat(formData[0].value)/parseFloat(formData[3].value))===1);
      }
    }else{
      if(parseFloat(formData[0].value)===0){
        if(parseFloat(formData[1].value)===0){
          setSolutionP(((parseFloat(formData[2].value)-parseFloat(formData[5].value))/(parseFloat(formData[11].value)-parseFloat(formData[8].value)))===1);
        }else{
          setSolutionP(((parseFloat(formData[1].value)-parseFloat(formData[4].value))/(parseFloat(formData[10].value)-parseFloat(formData[7].value)))===1);
        }
      }else{
        setSolutionP(((parseFloat(formData[0].value)-parseFloat(formData[4].value))/(parseFloat(formData[9].value)-parseFloat(formData[6].value)))===1);
      }
    };
  };
};
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

              <label className="label-select" htmlFor="type-colinearity">
              Розмірність вектора:
                <select name="type-colinearity" className="tyme-cor-val" onChange={typeColinearity}>
                  <option value={true}>2</option>
                  <option value={false}>3</option>
                </select>
              </label><br/>
              <label className="label-select" htmlFor="first-vector">
              Форма представлення першого вектора:
                <select name="first-vector" className="tyme-cor-val" onChange={firstVector}>
                  <option value={true}>Кординатами</option>
                  <option value={false}>Точками</option>
                </select>
              </label><br/>

              <label className="label-select" htmlFor="second-vector">
              Форма представлення другого вектора:
                <select name="second-vector" className="tyme-cor-val" onChange={secondVector}>
                  <option value={true}>Кординатами</option>
                  <option value={false}>Точками</option>
                </select>
              </label><br/>
              
                <form className="member-wrap" onSubmit={solution}> 
                      {typeColinearityMetr}
                    <label className="label-select">
                      Перший вектор<br/>
                      {typeColinearityMetr ? (<>{firstVectorMetr ? (<>{" {"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>) : (<>{firstVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>)}
                    </label><br/>
                    
                    <label className="label-select">
                      Другий вектор<br/>
                      {typeColinearityMetr ? (<>{secondVectorMetr ? (<>{" {"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>) : (<>{secondVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/> ; <input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>)}
                    </label>
                    <button className="member-submit">Перевірити колінеарність</button>
                </form>
                <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                    <h3 className="training-solution-name">Розв’язок:</h3>
                    <p className="training-solution-formule">n = a<sub>x</sub> / b<sub>x</sub></p>
                    <p className="training-solution-formule">Вектори a і b колінеарні, якщо b = n · a</p>
                    <p className="training-solution-formule" id="one-training-solution-formule">Відповідь: {solutionP ? "вектори колінеарні":"вектори не колінеарні"}</p>
                </div>
            </div>
            ) : (
            <div className="theory-wrap-cont" id="theory-wrap-cont">
                <h3 className="theory-text"><span className="theory-text-span">Колінеарні вектори</span> - вектори, які паралельні одній прямій або лежать на одній прямій.</h3>
                <h3 className="theory-text"><span className="theory-text-span">Формула</span> якщо відношення їх відповідних координат рівні між собою.Наприклад два вектори a = {"{"}a<sub>x</sub>  a<sub>y</sub>  a<sub>z</sub>{"}"} і b = {"{"}b<sub>x</sub>  b<sub>y</sub>  b<sub>z</sub>{"}"} колінеарні якщо:<br/></h3>
                <p className="theory-formule"><span className="drb"><font className="top">a<sub>x</sub></font>/<font className="btm">b<sub>x</sub></font></span> <span className="drb"><font className="top">a<sub>y</sub></font>/<font className="btm">b<sub>y</sub></font></span> <span className="drb"><font className="top">a<sub>z</sub></font>/<font className="btm">b<sub>z</sub></font></span></p><br/>
                <h3 className="theory-text">або</h3>
                <p className="theory-formule">b = n · a</p>
            </div>
            )}

        </section>
  )
}
export default Colinearity