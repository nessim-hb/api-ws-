
import './App.css';
import UserList from './Component/UserList/UserList';
import { Route, Switch } from "react-router-dom";
import Profil from './Component/Profils/Profil';
import Comments from './Component/Comments/Comments';


function App() {
  return (
    <div className="App">
    
    <Switch>
     <Route exact path='/'  render={()=> <UserList/>}/>
     <Route path='/Profil/:id'  render={(defaultProps)=> <Profil {...defaultProps}/>}/>
     <Route path='/Post/:id/comment/' render={(defaultProps)=><Comments {...defaultProps}/>}/>

    </Switch>
    </div>
  );
}

export default App;
