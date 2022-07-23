import React,{useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';




export default function List({inputValue,Delete,id}){

    function DeleteItem(){
      Delete(id)




     
    }



    return( <div style={{display:inputValue?"flex":"none",}} className='inputDiv'>
    <ul>
        <li className='listItem'>
        {inputValue}
        

        <button onClick={DeleteItem} className='delete' ><DeleteIcon /></button>
        

        </li>
        
    </ul>
</div>
       
    )

}