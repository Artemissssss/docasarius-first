import React from 'react';
import {useState} from 'react'
import '@site/src/components/HomepageFeatures/Progresion/Progresion.css'

function Progresion() {
    const [solutionP,setSolutionP] = useState(null);
    const [solutionData,setSolutionData] = useState([]);
    const [changer,setChanger] = useState(true);

    const solution = (e) =>{
        e.preventDefault();
        const formObj = parseFloat(e.target[0].value);
        setSolutionP(((formObj*formObj*formObj)*Math.sqrt(2))/12)
        setSolutionData([formObj])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єму тетраедра</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення a" min={0} step={0.001} required/>
                        <button className="member-submit">Знайти об'єм тетраедра</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = (a<sup>3</sup> · √2) / 12 = ({solutionData[0]}<sup>3</sup> · √2) / 12 = {solutionP}</p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Тетраедр</span> — багатогранник, гранями якого є чотири трикутника.</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Правильний тетраедр</span>  - тетраедр у якого всі грані - рівносторонні трикутники.</h3>
                    <h3 className="theory-text">Формула для обчислення об'єму правильного тетраедра</h3>
                    <p className="theory-formule">V = (a<sup>3</sup> · √2) / 12</p>
                    <h3 className="theory-text">де V - об'єм куба,<br/>a - довжина ребра правильного тетраедра.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion