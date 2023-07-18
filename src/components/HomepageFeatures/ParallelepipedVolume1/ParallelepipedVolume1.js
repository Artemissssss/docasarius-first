import React from 'react';
import {useState} from 'react'
import '@site/src/components/HomepageFeatures/Progresion/Progresion.css'

function Progresion() {
    const [solutionP,setSolutionP] = useState(null);
    const [solutionData,setSolutionData] = useState([]);
    const [changer,setChanger] = useState(true);

    const solution = (e) =>{
        e.preventDefault();
        const formObj = e.target;
            setSolutionP(parseInt(formObj[0].value)*parseInt(formObj[1].value))
            setSolutionData([parseInt(formObj[0].value),parseInt(formObj[1].value)])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єм паралелепіпеда</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення S"  min={0} required/>
                    <input type="number" className="member-input" placeholder="Ведіть значення h" min={0} required/>
                        <button className="member-submit">Знайти об'єм призми</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = S<sub>o</sub>h = {solutionData[0]} · {solutionData[1]} = {solutionP} </p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Паралелепіпед</span> - це чотирикутна призма, в основі якої лежать паралелограми.</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Призма</span> - це багатогранник, у якого дві грані (основи призми) — рівні многокутники з відповідно паралельними сторонами. Інші грані — паралелограми, площини яких паралельні одній прямій.</h3>
                    <h3 className="theory-text">Формула для обрахунку об'єму паралелепіпеда</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Об'єм паралелепіпеда</span> дорівнює добутку площі основи на висоту.</h3>
                    <p className="theory-formule">V = S<sub>o</sub>h</p>
                    <h3 className="theory-text">де V - об'єм паралелепіпеда,<br/>S<sub>o</sub> - площа основи паралелепіпеда,<br/>h - висота паралелепіпеда,</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion