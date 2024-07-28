import React, { useMemo, useState } from 'react'

import '../styles/moneypyramid.css';



export default function MoneyPyramid( {questionNumber, moneyPyramid} ) {
   

  return (
    <>
    
        <div className= "money_pyramid">
            <ul className = "money_list">
            {moneyPyramid.map( (money) => (
                <li className = {questionNumber === money.id ? 'money_list_item active' : 'money_list_item'}> 
                    <span  className = "money_list_item_number"> {money.id} </span>
                    <span className = "money_list_item_price"  > {money.amount} </span>
                </li>
            )  ) }
               
            </ul>
        </div>
    
    </>
  )
}
