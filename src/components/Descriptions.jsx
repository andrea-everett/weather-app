import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import "./Descriptions.css"

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react/icons/bi";
import  { MiCompress, MdOutlineWaterDrop } from "react-icons/md";



const Descriptions  = () => {

  const tempUnit = unist === 'metric' '?  'C' : 'F'
  const windUnit = units === 'metric' ? 'm/s': 'm/h'

  // const cards = []

  return <div className='section section_descriptions'>
  {cards.map(({id, icon, title, data, unit}) => 
  <div className='card'>
  <div className='description_card-icon'>
      {icon}
          <FaArrowDown />
          <small>{title}</small>
  </div>
  <h2>{ `${data} ${unit}`}</h2>
</div>
  )}
    
  </div>
}

export default Descriptions 