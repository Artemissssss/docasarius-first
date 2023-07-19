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
        setSolutionP(4/3*(formObj*formObj*formObj)*Math.PI)
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
                    <input type="number" className="member-input" placeholder="Ведіть значення R" min={0} step={0.001} required/>
                        <button className="member-submit">Знайти об'єм шару</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = 4 / 3 · π · R<sup>3</sup>= 4 / 3 · π · {solutionData}<sup>3</sup> = {solutionP}</p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Шар</span> - сукупність всіх точок простру, які знаходяться на відстані не більшій заданої від центру. Ця відстань називається радіусом шару.</h3>
                    <h3 className="theory-text">Формула для обчислення об'єму шару</h3>
                    <p className="theory-formule">V = 4 / 3 · π · R<sup>3</sup></p>
                    <h3 className="theory-text">де V - об'єм шару,<br/>R - радіус шара,<br/>π = 3.141592.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion