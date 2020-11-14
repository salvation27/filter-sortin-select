import React from 'react'

export default function Filter({sorting,filteringName,sorts,cat,handleBtns}) {
  return (
<>
{/* filtering by name */}
    <div className='select_filter'>
    Фильтер 1
    <select 
    value={cat}
    onChange={filteringName}
    >
      <option value="">All</option>
      <option value="vegan">Vegan</option>
      <option value="meat">Meat</option>
      <option value="fish">Fish</option>
    </select>
  </div>

  
{/* sorting */}
    <div className='select_filter'>
      Сортировка
      <select 
      value={sorts}
      onChange={sorting}
      >
        {/* <option value="all">All</option> */}
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      {sorts}
    </div>
    </>
  )
}
