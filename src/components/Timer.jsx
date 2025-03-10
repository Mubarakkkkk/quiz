import React, { useEffect, useState } from 'react'

export default function Timer( {questionNumber, setStop} ) {

  const [timer, setTimer] = useState(30);

  useEffect( () => {

    if(timer === 0) setStop(true);

    const interval = setInterval( () => {
        setTimer( (prev) => prev - 1 );
    }, 1000)
    return () => clearInterval(interval);
  }, [timer] )

  useEffect( () => {
    setTimer(30);
  }, [questionNumber] )

  return timer;
}
