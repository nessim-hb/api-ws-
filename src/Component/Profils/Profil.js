import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Profil = ({match}) => {
    
const [post, setPost] = useState([]);
const [users, setUsers] = useState({})
const getUsers = ()=>{
     axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
    .then((res)=>{
        setUsers(res.data[0])
    }).catch((err) => console.log("Error", err));
      
console.log(users)
}

const getPosts = async () => {
    try{
    let res =await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`);
      setPost(res.data);
     
    }
     catch(err){console.log("Error", err)}
  };


useEffect(() => {
    getUsers();
    getPosts();
}, [match])

    return (
    
<div style={{display:"flex" ,backgroundColor:'beige'}}>
        <div style={{display:"flex" ,textAlign:"center", flexWrap:"wrap",
        justifyContent:"space-evenly",marginTop:"60px"}}>
         
         <Card  style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
         <Card.Body>
           <Card.Title>{users.name} {users.username}</Card.Title>
           <Card.Text>
           
           </Card.Text>
           <Card.Text>
             {users.email}
           </Card.Text>
           
         </Card.Body>
       </Card>
</div>
<div>
<h1 style={{textAlign:"center", color:"blue"}}>Posts</h1>
        {post.map((el,i)=>
        <ul key={i}>
            <Link to={`/Post/${el.id}/comment/`}>
            <li>{el.title}</li>
            </Link>
        </ul>
            )}
            </div>
    </div>
    )
}

export default Profil;
