import React from 'react'
import './mailcomp2.css'
import  { FaPen ,FaIdCard ,FaClock} from 'react-icons/fa'
import{FaRegPaperPlane, FaRegFile, FaRegSquareCaretDown,FaCross,FaMicroblog}  from "react-icons/fa6"

const mailcomp2 = () => {
  return (
     
   
   <div className='wholesection2 '>
   
            <div className='section2'>
                <div className='section2-grandparent1'>
                <div>
                    <span className='section2-child1'>
                    <FaPen />
                    </span>
                </div>
                <div>
                    <span className='section2-child1a'>Compose</span>
                </div>
                </div>
                <div className='section2-grandparent2'>
                <div className='section2-parent'>
                    <div className='sec2'>
                    <div className="section2-child2">
                        <FaIdCard />
                    </div>
                    <div className="section2-child2a"> Inbox </div>
                    </div>
                    <div className='sec2'>
                    <div className='section2-child2'>
                        <FaMicroblog />
                    </div>
                    <div className='section2-child2a'> Starred </div>
                    </div>
                    <div className='sec2'>
                    <div className='section2-child2'>
                        <FaClock />
                    </div>
                    <div className='section2-child2a'> Snoozed </div>
                    </div>
                    <div className='sec2'>
                    <div className='section2-child2'>
                        <FaRegPaperPlane />
                    </div>
                    <div className='section2-child2a'> Sent </div>
                    </div>
                    <div className='sec2'>
                    <div className='section2-child2'>
                        <FaRegFile />
                    </div>
                    <div className='section2-child2a'> Draft </div>
                    </div>
                    <div className='sec2'>
                    <div className='section2-child2'>
                        <FaRegSquareCaretDown />
                    </div>
                    <div className='section2-child2a'> More </div>
                    </div>
                </div>
                </div>
                <div className='section2-grandparent3'>
                <div>
                    <span className='section2-child8'>
                    Labels
                    </span>
                </div>
                <div>
                    <span className='section2-child8a'>
                    < FaCross/>
                    </span>
                </div>
                </div>
                

                </div>
            
 
   </div>

    )

}   

        
        
   
  


export default mailcomp2