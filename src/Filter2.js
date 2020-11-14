import React from 'react'

export default function BtnBlock({handleBtns}) {
  return (
    <div className='btn_wrapper'>
      <div>Фильтер2</div>
      <button
      onClick={handleBtns}
      value='All'
      >
      All</button>

        <button
        onClick={handleBtns}
        value='fish'
        >
        Fish</button>


      <button 
      onClick={handleBtns}
      value='vegan'>Vegan</button>

     <button 
      onClick={handleBtns}
      value='meat'>Meat</button>
      
    </div>
  )
}