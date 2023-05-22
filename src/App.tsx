import React from 'react';
import logo from './logo.svg';
import './App.css';

async function getData() {
  const result = await fetch("/hello"); 
  const json = await result.json(); 

  return json; 
}


function App() {

  const [value, setValue ] = React.useState(null); 
  const [isLoading, setIsLoading] = React.useState(true); 

  React.useEffect(() => {
    getData().then((v) => {
      setValue(v); 
      setIsLoading(false);
    }); 


  },[])


  if(isLoading) {
    return <>loading...</>
  }

  else {
    return <>{JSON.stringify(value)}</>
  }; 
}

export default App;
