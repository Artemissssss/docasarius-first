import React, { useEffect } from 'react';
import {useState} from 'react'
import '@site/src/components/HomepageFeatures/Progresion/Progresion.css'

function Progresion() {
    const [solutionP,setSolutionP] = useState(null);
    const [solutionData,setSolutionData] = useState([]);
    const [changer,setChanger] = useState(true);
    const [typeData, setTypeData] = useState(true)

    const solution = (e) =>{
        e.preventDefault();
        const formObj = e.target;
        typeData ? setSolutionP(Math.PI*parseFloat(formObj[0].value)*parseFloat(formObj[0].value)*parseFloat(formObj[1].value)) : setSolutionP(parseFloat(formObj[0].value)*parseFloat(formObj[1].value));
        setSolutionData([formObj[0].value, formObj[1].value])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єм циліндра</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  <label className="label-select" htmlFor="type-colinearity">
                  Оберіть відомі величини:
                <select name="type-colinearity" className="tyme-cor-val" onChange={(e)=>{e.target.value !== "false" ? setTypeData(true) : setTypeData(false)}}>
                  <option value={true}>Через радіус основи і висоту</option>
                  <option value={false}>Через площу основи і висоту</option>
                </select>
              </label><br/>
                    <form className="member-wrap" onSubmit={solution}> 
                    {typeData ? (
                        <>
                        <input type="number" className="member-input" placeholder="Ведіть значення R"  min={0} required/>
                        <input type="number" className="member-input" placeholder="Ведіть значення h" min={0} required/>       
                        </>

                    ): (
                        <>
                        <input type="number" className="member-input" placeholder="Ведіть значення S"  min={0} required/>
                        <input type="number" className="member-input" placeholder="Ведіть значення h" min={0} required/>       
                        </>
                    )}
                        <button className="member-submit">Знайти об'єм циліндра</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        {typeData ? (
                        <p className="training-solution-formule">V = π R<sup>2</sup> h = π · {solutionData[0]}<sup>2</sup> · {solutionData[1]} = {solutionP} </p>) : (
                        <p className="training-solution-formule">V = S<sub>o</sub>h = {solutionData[0]} · {solutionData[1]} = {solutionP} </p>
                        )}
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Циліндр</span> геометричне тіло, обмежене циліндричною поверхнею і двома паралельними площинами (основами), що перетинають її. Циліндр називається круговим, якщо його основа є кругом. Відстань між основами – висота циліндра</h3>
                    <h3 className="theory-text">Формули для обчислення об'єму циліндра</h3>
                    <p className="theory-formule">V = π R<sup>2</sup> h</p>
                    <p className="theory-formule">V = S<sub>o</sub> h</p>
                    <h3 className="theory-text">де V - об'єм циліндра,<br/>S<sub>o</sub> - площа основи циліндра,<br/>R - радіус основи циліндра,<br/>h - висота циліндра,<br/>π = 3.141592.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion