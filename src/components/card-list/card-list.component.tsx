import { Monster } from '../../App';
import './card-list.styles.css'

import Card from "./card/card.component";


type CardListProps = {
    monsters: Monster[];
}

//forwardRef
const CardList = ({ monsters } : CardListProps) => ( //implicit descomposition of props
    //implicit return of functional component 
    <div className="card-list">
    {monsters.map((monster)=> 
        <Card key={monster.id}  monster={monster} />
    
    )}
    </div> 
);


// class CardList extends Component{
//     //constructor is running under the hood 
//     render(){
//         //whenever props change it will re-render the app
//         const {monsters} = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map((monster)=>   
//                      <Card key={monster.id}  id={ monster.id} name= {monster.name} email= {monster.email} />
//                 )}
//             </div>
//         )
//     }
// }


export default CardList;