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
            setSolutionP(parseInt(formObj[0].value)*parseInt(formObj[1].value)*parseInt(formObj[2].value))
            setSolutionData([parseInt(formObj[0].value),parseInt(formObj[1].value),parseInt(formObj[2].value)])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єм прямокутного паралелепіпеда</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення a" min={0} required/>
                    <input type="number" className="member-input" placeholder="Ведіть значення b"  min={0} required/>
                    <input type="number" className="member-input" placeholder="Ведіть значення h"  min={0} required/>
                        <button className="member-submit">Знайти об'єм призми</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = a · b · h = {solutionData[0]} · {solutionData[1]} · {solutionData[2]} = {solutionP} </p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Прямокутний паралелепіпед</span> - це об'ємна фігура, у якої шість граней, і кожна з них є прямокутником.</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Прямокутний паралелепіпед</span> - паралелепіпед, всі грані якого є прямокутниками.</h3>
                    <h3 className="theory-text">Формула для обрахунку об'єму прямокутного паралелепіпеда</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Об'єм прямокутного паралелепіпеда</span> дорівнює добутку його довжини, ширини і висоти.</h3>
                    <p className="theory-formule">V = a · b · h</p>
                    <h3 className="theory-text">де V - об'єму прямокутного паралелепіпеда,<br/>a - довжина,<br/>b - ширина,<br/>h - висота об'єму прямокутного паралелепіпеда.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion