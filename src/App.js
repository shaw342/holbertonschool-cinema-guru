
import { useState } from 'react';
import './App.css';
import Input from './routes/general/Input';
import SelectInput from './routes/general/SelectInput';
import Button from './routes/general/button';
import SearchBar from './routes/general/SearchBar';


function App() {
  const option = ["Latest","Oldest","Highest","Lowest Rated"]
  const [value,setInputValue] = useState("")
  const [selectValue,setSelectValue] = useState("")
  const [valueSearch,setValueSearch] = useState("")


  return (
    <div className="App">
      <Input label="username" type="username" className="email" value={value} setvalue={setInputValue} />
      <SelectInput className="Sort" label="Sort" option={option} value={selectValue} setValue={setSelectValue} />
      <Button className="Button-load" label="Load More.." onClick={onClick()}/>
      <SearchBar title="Search Movies" value={valueSearch} setvalue={setValueSearch}/>
    </div>
  );
}

export default App;
