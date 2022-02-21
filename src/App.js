import React,{useState,useEffect} from 'react';
import './App.css';
import Container from './Components/Container.js';
import SearchBox from './Components/SearchBox';

function App() {
  const [words, setWords] = useState('tomorrow');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const getWords =  () => {
    let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
    fetch(url).then(res=>res.json()).then( data=> {
      setData(data[0])
      setLoading(true)},
      (error) => {
        setLoading(true)
        setError(error)
      })
  }

  useEffect( () => {
    getWords();
  },[])
    
  const inputVal =  async () => {
    if (loading){  
     getWords();
     setWords(document.getElementById('inputId').value);
     console.log(words)
    }}
  useEffect(()=>{
    inputVal()
  },[words])

  if (error) {
    return (<p>Error...</p>)
  } else if (!loading){
    return (<p>Loading...</p>)
  } else{
    
  
    return (
  <div className="App"  >
    <p className='head'> Dictionary</p>
    <SearchBox inputVal={inputVal} ></SearchBox>
    <Container data={data} ></Container>
  </div>) 
  }
}

export default App;
