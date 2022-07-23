import React from 'react'



export default function Input({handleclickone,handlchange,value}){


    function handleclick(){
        return handleclickone()

    }
   

    



    return(
        <div className='main'>
                
        <input  onChange={handlchange}type="text" placeholder='Add Item' value={value}/>
        <button style={{display:value?"block":"none"}}onClick={handleclick} className='Button' type='submit'>Add</button>
    </div>
    )

}