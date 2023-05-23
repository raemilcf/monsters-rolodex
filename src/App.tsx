import { useEffect, useState , ChangeEvent} from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './util/data.util';


//with typescript create typed interface or util function 
export type Monster = {
  id: string; 
  name : string;
  email: string;
}
//functional component --> looks like the same render 

//class constructor 
//run top to bottom 

//it renders when props are receive or change
//when hooks changes 
//state changes 

//don't make request in the functional component it will cause a infinite re-render
const App = () => {

  const [searchField, setSearchField] = useState(''); //[value , setValue] hooks usestate hooks
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //typescript functions add parameters type and return type
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
  }
 

 //change the fetch response 
      useEffect(()=> { //gonna run the first time when app is mount 
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=>   response.json() )
        // .then((users)=>  setMonsters(users)
        const fetchUsers = async () => {
          //get data will return array of monsters
          const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
          setMonsters(users);
        };
        
        fetchUsers();
      }, []); //prop values or useState //gonna re-render when values in array dependency change 
      //we send the array dependency empty because we only want to run the fetch once 

      useEffect(() => {
        const newfilteredListMonsters = monsters.filter((monster) =>  {
          return monster.name.toLowerCase().includes(searchField);
        });
        //actualizar useState de monsters 
        setFilteredMonsters(newfilteredListMonsters);
      },[monsters, searchField]); //only change when monsters or searchfield changes 
      

  return(
    <div className="App">
       <h1 className='appTitle' >Monster Rolodex</h1>

       <SearchBox  
       className = {"search-box"}
       placeholder = {"search monsters" }
       onChangeHandler = {onSearchChange} />   
       <br />
       <CardList monsters= {filteredMonsters}/>
     </div>
   
  )
}

//reflow - shift page to make fit the new h1 or html target
//add or remove title - we should expect to reflow the page 
//component are mounted or unmounted we will expect to reflow 

//pure, impure functions and side effects 

//pure functions 
// keep results and values within the scoope 

//impure fuction 
//when you can modify the values outside of the function 
//side Effect is when variable live outside of the scoope of the function, making the values of variable modify anywhere 





// //lifecycle 
// //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// //continue on video #

// // actual application 
// class App extends Component {
//   constructor(){
//     super();

//    //1. load constructor
//    //the only thing we will do in the constructor is to initialize the states 
//     this.state= {
//       monsters:[],
//       searchField : ''
//     }
//   }

//   //react lifecycle 
//   //the moment the component is place on the page is the moment you want to make any api request
//   //make the request first and the load the page 
//   componentDidMount(){
//     //3. load any request on componentDidmount
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>   response.json() )
//     .then((users)=>   //it will give us the list of users 
    
//     //the moment the state change it will re-render 
//     //4. re-render de page with state change
//       this.setState(
//         ()=> {
//           return {monsters: users};
//         }//,
//         // () => { //use the state updated 
//         //   console.log(this.state);
//         // }
//       )
//     );

//   }

//   //function declaration to increase preformance of the app, by avoiding anonymous functions and re-render (recreate) the function every time
//   onSearchChange = (event)=> {
//     //if you are going to modify an array please create a new array- best practices called inmutability 
//     const searchField = event.target.value.toLowerCase();
//     //asignar el resultado al  searchField state  para que pueda utilizarse en el filtrado de la lista 
//     this.setState(
//       //asignar nueva lista de valores
//       () => {return {searchField}}
//       )
//     } 


// render(){

//   //avoid using this and cast state and functions declaration as variables 
//   const { monsters , searchField } = this.state;
//   const { onSearchChange } = this;

//    //realizar la busqueda de monsters y pintar la lueva lista en el html
//    const filteredListMonsters = monsters.filter((monster) =>  {
//     return monster.name.toLowerCase().includes(searchField);
//   });

//   // 2. render the page
//   return (
//     <div className="App">
//       <h1 className='appTitle' >Monsters Rolodex </h1>

//       <SearchBox  
//       className = {"search-box"}
//       placeholder = {"search monsters" }
//       onChangeHandler = {onSearchChange} />      

//       <CardList monsters= {filteredListMonsters}/>
//     </div>
   
//   );
// }
// }

export default App;
