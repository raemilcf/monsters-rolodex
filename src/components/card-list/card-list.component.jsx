import { Component } from "react";


class CardList extends Component{
    //constructor is running under the hood 


    render(){
        //whenever props change it will re-render the app
        const {monsters} = this.props;
        return (
            <div>
                {
                    monsters.map((monster)=> {  //use of map to iterate our array of monsters 
                        return  <h1 key={monster.id}>{monster.name}</h1> ;
                    })
                }
            </div>
        )
    }
}


export default CardList;