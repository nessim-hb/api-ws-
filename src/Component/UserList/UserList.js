import axios from 'axios';
import React , {useState,useEffect}from 'react';
import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const UserList = () => {

    const [user, setUser] = useState([]);
    
    const getUsers = async () => {
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log(res);
          setUser(res.data);
        } catch (err) {
          console.log("Error", err);
        }
      };
    
      useEffect(() => {
         getUsers();
      }, [])
   

    return (
        <div style={{display:"flex" , flexWrap:"wrap",
        justifyContent:"space-evenly",textAlign:"center"}}>
         {user.map((el,i)=>
         <Card key = {i} style={{ width: '18rem' ,marginBottom:"10px"}}>
         <Card.Img variant="top" src="data:image/png;base64,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" />
         <Card.Body>
           <Card.Title>{el.name} {el.username}</Card.Title>
      
           <Link to={`/Profil/${el.id}`}>
           <Button variant="primary">See Posts</Button>
           </Link>
         </Card.Body>
       </Card>
         
         )}
        </div>
    )
}

export default UserList
