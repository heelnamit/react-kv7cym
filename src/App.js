import React, {useState, useEffect} from "react";
import "./style.css";
import axios from 'axios';
import {Card} from './Card';
import 

const dispatch = useDispatch();
const selector = useSelector(state => state.dataSaver)

function App() {
const [users , setUsers] = useState([]);
//const [visible, setVisible]= useState(2);

  //
  const apiURL="https://reqres.in/api/users";
    
  const fetchData = async () => {
      const response = await axios.get(apiURL)
      setUsers(response.data);
      console.log(users);
  }

 useEffect(()=>{
   fetchData()
 }, []);




  return (
    <div>
      <h1>TCS Coding Test</h1>
      <button onClick={fetchData}>Click Here to get data</button>

      <div >
          {
            users.map((users,index)=>{
                 return(
                     <Card 
                        user={user}
                        index={index}
                     />
                 )
             })
          }
      </div>


   
    
    </div>
  );
}
export default App;