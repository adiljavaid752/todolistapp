import React from 'react'
import NoteAddIcon from '@mui/icons-material/NoteAdd';



export default function Input({handleclickone,handlchange,value}){


    function handleclick(){
        return handleclickone()

    }
   

    



    return(
        <div className='main'>
                
        <input  onChange={handlchange}type="text" placeholder='Add Item' value={value}/>
        <button style={{display:value?"block":"none"}}onClick={handleclick} className='Button' type='submit'><NoteAddIcon /></button>
    </div>
    )

}
