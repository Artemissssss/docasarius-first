import React from 'react';
import { useState } from "react"
import '@site/src/components/HomepageFeatures/Colinearity/Colinearty.css'
const parse = require('html-react-parser');
function Colinearity() {
const [typeColinearityMetr,setTypeColinearityMetr] = useState(2);
const [solutionP,setSolutionP] = useState([null]);
const [changer,setChanger] = useState(true);
const [solutionData,setSolutionData] = useState([]);
function inputMaker () {
    let u = []; 
                      for(let i = 0; i<typeColinearityMetr;i++){
                            let m = ""; 
                            for(let i = 0; i<typeColinearityMetr;i++){
                              i+1 === typeColinearityMetr? m=`${m}<input className="point-input quadratic-input" type="number" defaultValue="0" step="0.01" required/> x<sub>${i+1}</sub> = ` : m=`${m}<input className="point-input quadratic-input" type="number" defaultValue="0" step="0.01" required/> x<sub>${i+1}</sub> +`}; u.unshift(m)
                            };
                            return(
                              <>
                        {u.map((arr,i)=>{
                          return(
                            <>
                                <div key={i}>
                                {parse(arr)} <input className="point-input quadratic-input" type="number" defaultValue={0} step={0.01}required/><br/>
                                </div>
                                </>
                            )
                          })}
                        </>
                      )
                    }
                    
function Maker () {
                      let u = []; 
                      for(let i = 0; i<typeColinearityMetr;i++){
                        let m = ""; 
                        for(let j = 0; j<typeColinearityMetr;j++){
                            console.log((j+(typeColinearityMetr+1)*i), solutionData)
                              j+1 === typeColinearityMetr? m=`${m} ${solutionData[(j+(typeColinearityMetr+1)*i)]} x<sub>${j+1}</sub> = ` : m=`${m}${solutionData[(j+(typeColinearityMetr+1)*i)]} x<sub>${j+1}</sub> +`}; u.unshift(m)
                          };
                    return(
                      <>
                      {u.map((arr,i)=>{
                          return(
                              <>
                              <div key={i}>
                              {parse(arr)} {solutionData[i]}<br/>
                              </div>
                              </>
                          )
                      })}
                      </>
                    )
}

const typeColinearity = (e)=>{
  setTypeColinearityMetr(parseInt(e.target.value));
};

const solution = (e) =>{
e.preventDefault();
const formData = e.target;
let formData1 = []
for(let i=0; i<formData.length-1; ++i) {
  formData1.push(formData[i].value)
}

    let n=`${typeColinearityMetr}`; //Ввод данных
    let m=new Array(n); //Определение рабочего массива
    let l=new Array(n); //Массив ответов
    let i, j, k;    //Вспомогательные переменные
    for(i=0; i<n; ++i) {
      m[i] = new Array(n);
      l[i] = new Array(n);
    }
     
    for(i=0; i<n; ++i) { //Заполнение матрицы
    for(j=0; j <= n; ++j) {
      m[i][j] = `${formData[(j+(typeColinearityMetr+1)*i)].value}`
      console.log(m[i][j],(j+(typeColinearityMetr+1)*i), `${formData[(j+(typeColinearityMetr+1)*i)].value}`)
    }
    }
    Iteration(n);
    Answers();
     
    function Iteration(iter_item) { //Функция итеррация
    for(iter_item=0;iter_item<(n-1);iter_item++) { //Цикл выполнения итерраций
    if (m[iter_item][iter_item] == 0) SwapRows(iter_item); //Проверка на ноль
    for(j=n; j>=iter_item; j--) {
    m[iter_item][j] /= m[iter_item][iter_item]; //Делим строку i на а[i][i]
    }
    for(i=iter_item+1; i<n; i++) { //Выполнение операций со строками
    for(j=n;j>=iter_item;j--) {
    m[i][j] -= m[iter_item][j] * m[i][iter_item];
    }
    }
    for(i=0; i<n; ++i) {
    for(j=0; j <= n; ++j) {
    // console.log(m[i][j]);
    }
    }
    }
    };
    function SwapRows(iter_item) { //Функция перемены строк
    for(i=iter_item+1;i<n;i++) {
    if(m[i][iter_item] !== 0) {
    for(j=0;j<=n;j++) {
    k = m[i-1][j];
    m[i-1][j] = m[i][j];
    m[i][j] = k;
    }
    } 
    }
    };
    function Answers() { //Функция поиска и вывода корней
    l[n-1] = m[n-1][n]/m[n-1][n-1];
    for(i=n-2;i>=0;i--) {
    k=0;
    for(j=n-1;j>i;j--) {
    k = (m[i][j]*l[j]) + k;
    }
    l[i] = m[i][n] - k;
    }
    setSolutionP(l);
    };
  setSolutionData(formData1)


//!========================================================================
};

  return (
    <section className="training-sect">
            <h2 className="training-name">Онлайн тренажер. Розв'язання систем лінійних рівнянь. Метод Крамера</h2>
            <div className="training-btn-wrap">
                <button className={`training-btn ${changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(true)}}>Тренажер</button>
                {/* <button className={`training-btn ${!changer ? "training-btn-active" : ""}`} onClick={()=>{setChanger(false)}}>Теорія</button> */}
            </div>
            {changer ? (
            <div className="training-wrap-cont" id="training-wrap-cont">

              <label className="label-select" htmlFor="type-colinearity">
              Кількість невідомих величин в системі:
                <select name="type-colinearity" className="tyme-cor-val" onChange={typeColinearity}>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </label><br/>
              
                <form className="member-wrap" onSubmit={solution}> 
                    <label className="label-select">
                      {inputMaker()}
                    </label><br/>
    
                    <button className="member-submit">Розв’язати систему лінійних рівннянь</button>
                </form>
                <div className="training-solution" id="one-training-solution" style={{display:solutionP[0]!==null ? "inline-block":"none"}}>
                    {/* <h3 className="training-solution-name">Розв’язок:</h3>
                    <p className="training-solution-formule">Маємо систему рівннянь:</p>
                    <p className="training-solution-formule">{Maker()}</p> */}
                    <p className="training-solution-formule" id="one-training-solution-formule">Відповідь: {solutionP.map((arr,i) =>{return solutionP.length === i+1 ? ` ${arr}` :` ${arr} та`})}</p>
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