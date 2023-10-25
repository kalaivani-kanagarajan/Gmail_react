import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./mailcomp1.css"

import{FaTh,FaBars,FaMedium,FaAlignCenter,FaQuestionCircle,FaSistrix} from "react-icons/fa";

import {FaGear} from "react-icons/fa6";

const mailcomp1 = () => {
  return (
  
   
    <header className='wholesection mb tb'>

        <div className='header'>

            <div className='header-parent1'>
            
                 <div className='header-child1'><FaBars/></div>
                 <div className='header-child2' > <img src="/l1.png" alt="l1.png"/></div>
                 <div className='header-child3' ><h2>Gmail</h2></div>
            
            </div>


            <div className='header-parent2'>

                 <div className='header-child4'><FaSistrix/></div>
                 
                 <div className='header-child5'><input type="Text" placeholder='search mail'/></div>
                 
                 <div className='header-child6'><FaAlignCenter /></div>
                


            </div>

            <div className='header-parent3'>
                    <div className='header-child7'><FaQuestionCircle /> </div>
                   
                    <div className='header-child8'> <FaGear /> </div>
                   
                    <div className='header-child9'> <FaTh/> </div> 


            </div>

        
        </div>
    </header>   
    
 
   
  )
}

export default mailcomp1