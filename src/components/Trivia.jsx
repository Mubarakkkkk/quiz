import React, { useEffect, useState } from 'react'

import Timer from './Timer';

import'../styles/trivia.css';

export default function Trivia( {questionNumber, setQuestionNumber, setStop, userName} ) {


  const questionData = [
    {
      id: 1,
      question: 'Where traditionally do birds fly in winter?',
      answers: [
        {
          text: 'North',
          correct: false,
        },
        {
          text: 'East',
          correct: false,
        },
        {
          text: 'South',
          correct: true,
        },
        {
          text: 'Ibiza',
          correct: false,
        }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is NOT a Bird of Prey?',
      answers: [
        {
          text: 'Owl',
          correct: false
        },
        {
          text: 'Buzzard',
          correct: false
        },
        {
          text: 'Eagle',
          correct: false
        },
        {
          text: 'Sparrow',
          correct: true
        }
      ]
    },
    {
      id: 3,
      question: 'Who is the alter ego of Norman Osborn in the 2002 film Spider-Man',
      answers: [
        {
          text: 'Red Dragon',
          correct: false
        },
        {
          text: 'Yellow Peril ',
          correct: false
        },
        {
          text: 'Green Goblin',
          correct: true
        },
        {
          text: 'Silver Shadow',
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: 'Traditionally, mozzarella cheese is made from the milk of which Animal?',
      answers: [
        {
          text: 'Sheep',
          correct: false
        },
        {
          text: 'Goat',
          correct: false
        },
        {
          text: 'Moose',
          correct: false
        },
        {
          text: 'Buffalo',
          correct: true
        }
      ]
    },
    {
      id: 5,
      question: 'Stratford Saye is the stately home of which Duke?',
      answers: [
        {
          text: 'Marlborough',
          correct: false
        },
        {
          text: 'Westminster',
          correct: false
        },
        {
          text: 'Devonshire',
          correct: false
        },
        {
          text: 'Wellington',
          correct: true
        }
      ]
    },
    {
      id: 6,
      question: 'Who wrote the play ‘A Man For All Seasons?',
      answers: [
        {
          text: 'John Osborne',
          correct: false
        },
        {
          text: 'Peter Shaffer ',
          correct: false
        },
        {
          text: 'Harold Pinter',
          correct: false
        },
        {
          text: 'Robert Bolt',
          correct: true
        }
      ]
    },
    {
      id: 7,
      question: 'Which breed of dog is traditionally used for hunting hares?',
      answers: [
        {
          text: 'Dachshund ',
          correct: false
        },
        {
          text: 'Beagle',
          correct: true
        },
        {
          text: 'Great Dane',
          correct: false
        },
        {
          text: 'Border Collie',
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: 'How many of the ‘Three Little Pigs’ does the wolf eat?',
      answers: [
        {
          text: 'None',
          correct: false
        },
        {
          text: 'One',
          correct: false
        },
        {
          text: 'Two',
          correct: true
        },
        {
          text: 'Three',
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: 'The Royal Albert Hall was named after the husband of which British monarch?',
      answers: [
        {
          text: 'Elizabeth ',
          correct: false
        },
        {
          text: 'Anne ',
          correct: false
        },
        {
          text: 'Merry',
          correct: false
        },
        {
          text: 'Victoria',
          correct: true
        }
      ]
    },
    {
      id: 10,
      question: 'The Black Swan is native to which Country?',
      answers: [
        {
          text: 'India',
          correct: false
        },
        {
          text: 'Mexico',
          correct: false
        },
        {
          text: 'Brazily',
          correct: false
        },
        {
          text: 'Australia',
          correct: true
        }
      ]
    },
    {
      id: 11,
      question: 'The Starbucks coffee company was founded in which US City?',
      answers: [
        {
          text: 'Seattle',
          correct: true
        },
        {
          text: 'Dallas',
          correct: false
        },
        {
          text: 'Mayami',
          correct: false
        },
        {
          text: 'Boston',
          correct: false
        }
      ]
    },
    {
      id: 12,
      question: 'In which British City was Cary Grant born?',
      answers: [
        {
          text: 'Leeds',
          correct: false
        },
        {
          text: 'Manchester',
          correct: false
        },
        {
          text: 'Birmingham',
          correct: false
        },
        {
          text: 'Bristol',
          correct: true
        }
      ]
    },
    {
      id: 13,
      question: 'Complete the name of this Cumbrian Town, …-in-Furness?',
      answers: [
        {
          text: 'Cart',
          correct: false
        },
        {
          text: 'Barrow',
          correct: true
        },
        {
          text: 'Dray',
          correct: false
        },
        {
          text: 'Wagon',
          correct: false
        }
      ]
    },
    {
      id: 14,
      question: 'Which Bank was ‘broken’ by the man in a Victorian music-hall song?',
      answers: [
        {
          text: 'Cannes',
          correct: false
        },
        {
          text: 'Lyons',
          correct: true
        },
        {
          text: 'Monte Carlo',
          correct: true
        },
        {
          text: 'Nice',
          correct: false
        }
      ]
    },
    {
      id: 15,
      question: 'According to the title of the film, Brad Pitt’s character spent ‘Seven Years In….?',
      answers: [
        {
          text: 'Tibet',
          correct: true
        },
        {
          text: 'Tanzania',
          correct: false
        },
        {
          text: 'Texas',
          correct: false
        },
        {
          text: 'Tipton',
          correct: false
        }
      ]
    }
  ]

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect( () => {
    setQuestion(questionData[questionNumber - 1]);
  }, [ questionNumber ] )
 

  const delayTimer = (duration, callBack) => {
    setTimeout( () => {
      callBack();
    }, duration )
  }

  const handleClick = (answerItem) => {
    setSelectedAnswer(answerItem);
    setClassName("answer active");
    delayTimer( 3000, () =>  setClassName(answerItem.correct === true ? 'answer correct' : 'answer wrong') )

    delayTimer( 6000, () => {
      if(answerItem.correct) {
        setQuestionNumber( (prev) => prev + 1 );
        setSelectedAnswer(null);
      }else {
        setStop(true)
      }
    } )
    
  }

  return (
    <>
    
        <div className = "trivia_mother">
            <div className="trivia_timer">
              <div className='trivia_time'>  <Timer questionNumber = {questionNumber} setStop = {setStop} /> </div>
              <span className='trivia_name'> You are welcome {userName}, start </span>
            </div>
            <div className="trivia_question">
               <div className="questions"> {question?.question} </div>
                  <div className="answers">
                    {
                      question?.answers.map( (answerItem) => (
                        <div className= { selectedAnswer === answerItem ? className : "answer" } onClick = {() => handleClick(answerItem)} >
                          {answerItem.text}
                        </div>
                      ) )
                    }
                   
                  </div>
             
            </div>
        </div>
    
    </>
  )
}
