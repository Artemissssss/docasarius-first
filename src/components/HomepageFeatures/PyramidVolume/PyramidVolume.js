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
            setSolutionP((parseInt(formObj[0].value)*parseInt(formObj[1].value))/3)
            setSolutionData([parseInt(formObj[0].value),parseInt(formObj[1].value)])
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Об'єм піраміди</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення S"  min={0} required/>
                    <input type="number" className="member-input" placeholder="Ведіть значення h" min={0} required/>
                        <button className="member-submit">Знайти об'єм піраміди</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">V = 1/3 S<sub>o</sub>h = 1/3 · {solutionData[0]} · {solutionData[1]} = {solutionP} </p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">Піраміда</span> - багатогранник, основа якого — багатокутник, а інші грані — трикутники, які мають спільну вершину.</h3>
                    <h3 className="theory-text">Формула для обчислення об'єму піраміди</h3>
                    <h3 className="theory-text"><span className="theory-text-span">Об'єм піраміди</span> дорівнює третині від добутку площі її основи на висоту.</h3>
                    <p className="theory-formule">V = 1/3 S<sub>o</sub>h</p>
                    <h3 className="theory-text">де V - об'єм піраміди,<br/>S<sub>o</sub> - площа основи піраміди,<br/>h - висота піраміди,<br/>π = 3.141592.</h3>
                </div>
                )}
    
            </section>
      )
}
export default Progresion