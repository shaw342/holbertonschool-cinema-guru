
import { useEffect, useState } from 'react';
import './App.css';
import Input from './routes/general/Input';
import SelectInput from './routes/general/SelectInput';
import Button from './routes/general/button';
import SearchBar from './routes/general/SearchBar';
import axios from 'axios';


function App() {
  const option = ["Latest","Oldest","Highest","Lowest Rated"]
  const [value,setInputValue] = useState("")
  const [selectValue,setSelectValue] = useState("")
  const [title,setTitle] = useState("")
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [username,setUsername] = useState("")
  useEffect(()=>{
    const accessToken  = localStorage.getItem("accessToken")
    if (accessToken){
      const authenticate = async ()=>{
        try {
          const reponse = await axios.post("/api/auth",{},{
            headers:{
              "Authorization":`Bearer ${accessToken}`
            }
          })
          setIsLoggedIn(true)
          setUsername(reponse.data.username)
        } catch (error) {

          console.log(error);
          
          
        }
      }
      authenticate()
    }

  },[])
  return (
    <div className="App">
      <Input label="username" type="username" className="email" value={value} setvalue={setInputValue} />
      <SelectInput className="Sort" label="Sort" option={option} value={selectValue} setValue={setSelectValue} />
      <Button className="Button-load" label="Load More.." />
      <SearchBar value={title}  setvalue={setTitle}/>
    </div>
  );
}

export default App;
