 import React from 'react'
 import"./Mailcontcomp3.css"
 import {AiOutlineStar} from  "react-icons/ai"
 interface props{
  name : string,
  content:string,
  date:string,
  isRead:string
 }

const Mailcontcomp3 = ({name,content,date,isRead}:props) => {
  return (
    
    
    <section className={`wholesection3  ${isRead=="true"?"read":""}`}>
     
       <div className='comp'>
                <span> <AiOutlineStar /></span>

            <div className='comps'>   

              <div className="compusername">

                  <h3> {name} </h3>
                  

              </div>

              <div className="compcontent">

                  <h3> {content}</h3>


             </div>
           </div>

            <div className="compdate">

                <h3> {date} </h3>

             </div>



                        

        </div>
    
    </section>

  )
}

export default Mailcontcomp3