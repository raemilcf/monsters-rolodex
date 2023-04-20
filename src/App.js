import { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



//continue on video #

// actual application 
class App extends Component {
  constructor(){
    super();

   //1. load constructor
   //the only thing we will do in the constructor is to initialize the states 
    this.state= {
      monsters:[],
      searchField : ''
    }
  }

  //react lifecycle 
  //the moment the component is place on the page is the moment you want to make any api request
  //make the request first and the load the page 
  componentDidMount(){
    //3. load any request on componentDidmount
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>   response.json() )
    .then((users)=>   //it will give us the list of users 
    
    //the moment the state change it will re-render 
    //4. re-render de page with state change
      this.setState(
        ()=> {
          return {monsters: users};
        }//,
        // () => { //use the state updated 
        //   console.log(this.state);
        // }
      )
    );

  }

  //function declaration to increase preformance of the app, by avoiding anonymous functions and re-render (recreate) the function every time
  onSearchChange = (event)=> {
    //if you are going to modify an array please create a new array- best practices called inmutability 
    const searchField = event.target.value.toLowerCase();
    //asignar el resultado al  searchField state  para que pueda utilizarse en el filtrado de la lista 
    this.setState(
      //asignar nueva lista de valores
      () => {return {searchField}}
      )
    } 


render(){

  //avoid using this and cast state and functions declaration as variables 
  const { monsters , searchField } = this.state;
  const { onSearchChange } = this;

   //realizar la busqueda de monsters y pintar la lueva lista en el html
   const filteredListMonsters = monsters.filter((monster) =>  {
    return monster.name.toLowerCase().includes(searchField);
  });

  // 2. render the page
  return (
    <div className="App">
      <h1 className='appTitle' >Monsters Rolodex </h1>

      <SearchBox  
      className = {"search-box"}
      placeholder = {"search monsters" }
      onChangeHandler = {onSearchChange} />      

      <CardList monsters= {filteredListMonsters}/>
    </div>
   
  );
}
}

export default App;
