import React from 'react';
import { useEffect, useState } from "react"
import '@site/src/components/HomepageFeatures/Colinearity/Colinearty.css'

function Colinearity() {
const [typeColinearityMetr,setTypeColinearityMetr] = useState(true);
const [firstVectorMetr,setFirstVectorMetr] = useState(true);
const [secondVectorMetr,setSecindVectorMetr] = useState(true);
const [solutionP,setSolutionP] = useState(null);
const [solutionWr,setSolutionWr] = useState(null);

const typeColinearity = ()=>{
  setTypeColinearityMetr(!typeColinearityMetr);
};

const firstVector = ()=>{
  setFirstVectorMetr(!firstVectorMetr);
};

const secondVector = ()=>{
  setSecindVectorMetr(!secondVectorMetr);
};

useEffect(()=>{console.log(solutionP)},[solutionP])

const solution = (e) =>{
e.preventDefault();
const formData = e.target;
if(typeColinearityMetr){
  if(firstVectorMetr){
    if(secondVectorMetr){
      parseFloat(formData[0].value)===0 ? setSolutionP((parseFloat(formData[1].value)/parseFloat(formData[3].value) === 1)) : setSolutionP((parseFloat(formData[0].value)/parseFloat(formData[2].value) === 1));
      parseFloat(formData[0].value)===0 ? setSolutionWr([formData,1]) : setSolutionWr([formData,2]);
    }else{
      parseFloat(formData[0].value)===0 ? setSolutionP((parseFloat(formData[1].value)/(parseFloat(formData[5].value)-parseFloat(formData[3].value)) === 1)) : setSolutionP((parseFloat(formData[0].value)/(parseFloat(formData[4].value)-parseFloat(formData[2]).value) === 1));
      parseFloat(formData[0].value)===0 ? setSolutionWr([formData,3]) : setSolutionWr([formData,4]);
    };
  }else{
    if(secondVectorMetr){
      parseFloat(formData[0].value)===0 ? setSolutionP(((parseFloat(formData[3].value)-parseFloat(formData[1].value))/parseFloat(formData[5].value) === 1)) : setSolutionP(((parseFloat(formData[2].value)-parseFloat(formData[0].value))/parseFloat(formData[4].value) === 1));
      parseFloat(formData[0].value)===0 ? setSolutionWr([formData,5]) : setSolutionWr([formData,6]);
    }else{
      parseFloat(formData[0].value)===0 ? setSolutionP(((parseFloat(formData[3].value)-parseFloat(formData[1].value))/(parseFloat(formData[7].value)-parseFloat(formData[5].value)) === 1)) : setSolutionP(((parseFloat(formData[2].value)-parseFloat(formData[0].value))/(parseFloat(formData[6].value)-parseFloat(formData[4].value)) === 1));
      parseFloat(formData[0].value)===0 ? setSolutionWr([formData,7]) : setSolutionWr([formData,8]);
    };
  };
}else{
  if(firstVectorMetr){
    if(secondVectorMetr){
      parseFloat(formData[0])===0 ? setSolutionP((parseFloat(formData[1])/parseFloat(formData[3]) === 1)) : setSolutionP((parseFloat(formData[0])/parseFloat(formData[2]) === 1));
      parseFloat(formData[0])===0 ? setSolutionWr([formData,9]) : setSolutionWr([formData,10]);
    }else{
      parseFloat(formData[0])===0 ? setSolutionP((parseFloat(formData[1])/(parseFloat(formData[5])-parseFloat(formData[3])) === 1)) : setSolutionP((parseFloat(formData[0])/(parseFloat(formData[4])-parseFloat(formData[2])) === 1));
      parseFloat(formData[0])===0 ? setSolutionWr([formData,11]) : setSolutionWr([formData,12]);
    };
  }else{
    if(secondVectorMetr){
      parseFloat(formData[0])===0 ? setSolutionP(((parseFloat(formData[3])-parseFloat(formData[1]))/parseFloat(formData[5]) === 1)) : setSolutionP(((parseFloat(formData[2])-parseFloat(formData[0]))/parseFloat(formData[4]) === 1));
      parseFloat(formData[0])===0 ? setSolutionWr([formData,13]) : setSolutionWr([formData,14]);
    }else{
      parseFloat(formData[0])===0 ? setSolutionP(((parseFloat(formData[3])-parseFloat(formData[1]))/(parseFloat(formData[7])-parseFloat(formData[5])) === 1)) : setSolutionP(((parseFloat(formData[2])-parseFloat(formData[0]))/(parseFloat(formData[6])-parseFloat(formData[4])) === 1));
      parseFloat(formData[0])===0 ? setSolutionWr([formData,15]) : setSolutionWr([formData,16]);
    };
  };
};
};

  return (
    <section className="training-sect">
      {solutionP ? "Колінеарні" : "Не колінеарні"}
            <h2 className="training-name">Онлайн тренажер. Значення n-того члена арифметичної прогресії</h2>
            <div className="training-btn-wrap">
                <button className="training-btn training-btn-active">Тренажер</button>
                <button className="training-btn">Теорія</button>
            </div>
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
                    <label>
                      Перший вектор
                      {typeColinearityMetr ? (<>{firstVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>) : (<>{firstVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>)}
                    </label><br/>
                    
                    <label>
                      Другий вектор
                      {typeColinearityMetr ? (<>{secondVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>) : (<>{secondVectorMetr ? (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>) : (<>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}<br/>{"{"}<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>;<input className="point-input" type="number" defaultValue={0} required/>{"}"}</>)}</>)}
                    </label>
                    <button className="member-submit">Перевірити колінеарність</button>
                </form>
                <div className="training-solution" id="one-training-solution">
                    <h3 className="training-solution-name">Розв’язок:</h3>
                    <p className="training-solution-formule">a<sub>i</sub> = a<sub>1</sub> + (i - 1)d</p>
                    <p className="training-solution-formule">a<sub>n</sub> = a<sub>1</sub> + (n - 1)d</p>
                    <p className="training-solution-formule">a<sub>n</sub> = a<sub>i</sub> + (n - i)d</p>
                    <p className="training-solution-formule" id="one-training-solution-formule"></p>
                </div>
            </div>

            <div className="theory-wrap-cont" id="theory-wrap-cont">
                <h3 className="theory-text"><span className="theory-text-span">Арифметична прогресія</span> — послідовність чисел (членів прогресії), кожне з яких, починаючи з другого, отримується з попереднього шляхом додавання сталого числа d (кроку або різниці прогресії):</h3>
                <p className="theory-formule">a<sub>1</sub>, a<sub>1</sub> + d, a<sub>1</sub> + 2<sub>d</sub>, ..., a<sub>1</sub> + (n - 1)d, ...</p>
                <h3 className="theory-text"><span className="theory-text-span">Формула</span> — n-тий член арифметичної прогресії можна порахувати скориставшись наступною формулою:</h3>
                <p className="theory-formule">a<sub>n</sub> = a<sub>1</sub> + d(n - 1)</p>
            </div>
        </section>
  )
}
export default Colinearity