import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//continue on video #36 

// actual application 
class App extends Component {
  constructor(){
    super();

    //handle states 
    this.state= {
      //every element should have a id, --> each child in a list should have a unique "key" prop. allows to render just the element it needs, no all of them
      monsters :[
        {
          name: "Linda",
          id: '1'
        },
        {
          name:"Frank",
          id: '2'
        },
        {
          name : "Pedro", 
          id: '3'
        }
      ]
    }
  }


render(){
  return (
    <div className="App">
    
    { //use of map to iterate our array of monsters 
      this.state.monsters.map((monster)=> { 
        return  <h1 key={monster.id}>{monster.name}</h1> ;
      
      })
    }
    </div>
  );
}
}

export default App;
