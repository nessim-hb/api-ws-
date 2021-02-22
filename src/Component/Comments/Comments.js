import axios from 'axios';
import React ,{useState,useEffect} from 'react';

const Comments = ({match}) => {

const [comnt, setComnt] = useState([]);
const getComments =async ()=>{
    try{
      const res =await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
       setComnt(res.data);
    }
    catch (err) {
        console.log(err);
    }
}


useEffect(() => {
   getComments();
 
}, [match])




    return (
        <div style={{textAlign:"center", backgroundColor:"beige"}}>
            <h1 style={{textAlign:"center", color:"blue"}}>Comments</h1>
            {comnt.map((cmntr,i)=>
            <p>{cmntr.name}</p>
            )}
            
        </div>
    )
}

export default Comments
