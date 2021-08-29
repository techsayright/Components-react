import React,{useState} from 'react'
import './App.css';
import {UserDetails} from './components/UserDetails/UserDetails'

function App() {

  const demoData=[
      {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
      },
      {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
      },
      {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
      },
      {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
      },
      {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
      },
      {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
      },
      {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
      }
  ]

  const [id, setId]= useState("");
  const [title, setTitle]= useState("");

//   ye function child component (UserDetails) ke liye hai
    const getData = (id,title)=>{
     
        console.log(id);
        console.log(title);
        setId(id);
        setTitle(title);
  }
  
  return (

    <div className="App">
        <div className="mainTitle">
            <h1>{(id==="")? "User Details" : (`ID: ${id} , Title: ${title}`) }</h1>
            
        </div>

        {/* this is extra components */}
        <UserDetails cn={"extra"} ></UserDetails>
        
        {/* here we have put the key for uniqueness , coz of virtual dom */}
        {
            demoData.map((item, index)=> {
                return <UserDetails demoData={item} key={index} onClicks={item} pushData={getData}/>
            })
        }
    </div>
  );
}

export default App;
