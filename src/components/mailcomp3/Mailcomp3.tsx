import React, { useEffect, useState } from 'react'
import './Mailcomp3.css'

import axios from 'axios'
import Mailcontcomp3 from '../mailcontcomp3/Mailcontcomp3'

interface props{
    username:string,
    Content:string,
    Date:string,
    isRead:string

}


const Mailcomp3 = () => {

    const [users,setusers] = useState<props[]>([])

    useEffect(() => {
      
        axios.get("http://localhost:5174/src/scripts/gmail.json").then(r=>{
            console.log(r.data);  
            setusers(r.data)  
        
        }
          
        )
    
        
      }
    , [])
    







  return (
    <div className='mail3'>
        {
          users.map(user=> {
            return <Mailcontcomp3 name={user.username} content={user.Content} date={user.Date} isRead={user.isRead}/>
          }
            )
        }

        
    
    </div>
  )
}

export default Mailcomp3