import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Mailcomp1 from './components/mailcomp1/Mailcomp1'
import Mailcomp2 from './components/mailcomp2/Mailcomp2'
import Mailcomp3 from './components/mailcomp3/Mailcomp3'
import Mailcontcomp3 from './components/mailcontcomp3/Mailcontcomp3'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>

   <Mailcomp1></Mailcomp1>
   

   <section className='mb tb'>
    <div className='mailcon'>

       <Mailcomp2></Mailcomp2>
       
       <Mailcomp3></Mailcomp3> 
    </div>
      
   </section>
   
  
   
   </>
  )
}

export default App
