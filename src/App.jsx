import React, {useEffect, useMemo, useState} from 'react';
import Start from './components/Start';
import Trivia from './components/Trivia';
import MoneyPyramid from './components/MoneyPyramid';

import'./styles/root.css';


function App() {

  const[userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('# 0');


  const moneyPyramid = useMemo( () => 

    [
        {id: 1, amount: ' # 100 '},
        {id: 2, amount: ' # 200 '},
        {id: 3, amount: ' # 400 '},
        {id: 4, amount: ' # 800 '},
        {id: 5, amount: ' # 16000 '},
        {id: 6, amount: ' # 32000 '},
        {id: 7, amount: ' # 64000 '},
        {id: 8, amount: ' # 128000 '},
        {id: 9, amount: ' # 256000 '},
        {id: 10, amount: ' # 512000 '},
        {id: 11, amount: ' # 1000000 '},
        {id: 12, amount: ' # 2000000 '},
        {id: 13, amount: ' # 3000000 '},
        {id: 14, amount: ' # 4000000 '},
        {id: 15, amount: ' # 5000000 '},
    ].reverse(),

[]) 
  
useEffect( () => {
  questionNumber > 1 && setEarned( moneyPyramid.find( (findMoney) => findMoney.id === questionNumber - 1).amount );
}, [questionNumber] )

useEffect( () => {
  if(questionNumber > 15) {
    setEarned( moneyPyramid.find( (findMoney) => findMoney.id === questionNumber - 1).amount );
    setStop(true);
  }
}, [questionNumber] )

  return (
    <>
      <div className = "wrapper">
       
      { userName 
        ? (<>
            {
              stop 
              ? ( <h1 className='userEarned'> You earned {earned} </h1> )
              :
              <>
                <Trivia questionNumber = {questionNumber} setQuestionNumber = {setQuestionNumber} setStop = {setStop} userName = {userName} />
                <MoneyPyramid questionNumber = {questionNumber} moneyPyramid = {moneyPyramid} />
              </>
            }
           
          </>) 
          : (
            <Start setUserName = {setUserName} />
          )
        }
         
       
      </div>
     
     
    </>
  )
}

export default App
