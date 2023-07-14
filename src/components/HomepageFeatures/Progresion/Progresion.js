import React from 'react';
import {useState} from 'react'
import '@site/src/components/HomepageFeatures/Progresion/Progresion.css'

function Progresion() {
    const [solutionP,setSolutionP] = useState(null);
    const [solutionData,setSolutionData] = useState([]);
    const [changer,setChanger] = useState(true);

    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    const solution = (e) =>{
        e.preventDefault();
        const formObj = e.target;
        if(parseInt(formObj[0].value)>parseInt(formObj[1].value)){
            setSolutionP((factorial(parseInt(formObj[0].value))/factorial((parseInt(formObj[0].value)-parseInt(formObj[1].value)))))
            setSolutionData([parseInt(formObj[0].value),parseInt(formObj[1].value)])
        }else{
            alert("n повинно бути більше k")
        }
    }

    return (
        <section className="training-sect">
                <h2 className="training-name">Онлайн тренажер. Обрахунок числа розміщень з n по k елементів</h2>
                <div className="training-btn-wrap">
                    <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                    <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button>
                </div>
                {changer ? (
                <div className="training-wrap-cont" id="training-wrap-cont">
                  
                    <form className="member-wrap" onSubmit={solution}> 
                    <input type="number" className="member-input" placeholder="Ведіть значення n" step="1" required/>
                    <input type="number" className="member-input" placeholder="Ведіть значення k" step="1" required/>
                        <button className="member-submit">Знайти число розміщень</button>
                    </form>
                    <div className="training-solution" id="one-training-solution" style={{display:solutionP!==null ? "inline-block":"none"}}>
                        <h3 className="training-solution-name">Розв’язок:</h3>
                        <p className="training-solution-formule">Знайдемо число розміщень:<br/>Число розміщень з {solutionData[0]} по {solutionData[1]}</p>
                        <p className="training-solution-formule">C<sup>{solutionData[1]}</sup><sub>{solutionData[0]}</sub> = {solutionData[0]}! / ({solutionData[0]} - {solutionData[1]})! = {solutionP}</p>
                        <p className="training-solution-formule" id="one-training-solution-formule">Відповідь: {solutionP}</p>
                    </div>
                </div>
                ) : (
                <div className="theory-wrap-cont" id="theory-wrap-cont">
                    <h3 className="theory-text"><span className="theory-text-span">C<sup>k</sup><sub>n</sub></span> — розташування «предметів» на певних «місцях» за умови, що кожне меце занято в точності одним предметом і всі предмети різні. Більш формально, розміщенням (з n по k) називається впорядкований набір з k різних елементів деякої n-елементної множини.</h3>
                    <h3 className="theory-text">Формула розрахунку кількості розміщень з n по k.</h3>
                    <p className="theory-formule">C<sup>k</sup><sub>n</sub> = n! / (n - k)!</p>
                </div>
                )}
    
            </section>
      )
}
export default Progresion