import React from 'react';
import {useState} from 'react'
import '@site/src/components/HomepageFeatures/Progresion/Progresion.css'

function Progresion() {
    const [solutionP,setSolutionP] = useState(null);
    const [solutionData,setSolutionData] = useState([]);
    const [changer,setChanger] = useState(true);

    const solution = (e) =>{
        e.preventDefault();
        const formObj = parseInt(e.target[0].value);
        setSolutionP(formObj*formObj*formObj)
        setSolutionData([formObj])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єм куба</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення грані куба" min={0}  required/>
                        <button className="member-submit">Знайти об'єм</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = a<sup>3</sup> = {solutionData[0]}<sup>3</sup> = {solutionP} </p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Куб</span> - правильний багатогранник, кожна грань якого є квадрат. Всі ребра і грані куба рівні.</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Об'єм куба</span> дорівнює кубу довжини його грані.</h3>
                    <h3 className="theory-text">Формула для розрахунку об'єму куба</h3>
                    <p className="theory-formule">V = a<sup>3</sup></p>
                    <h3 className="theory-text">де V - об'єм куба,<br/>a - довжина грані куба.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion