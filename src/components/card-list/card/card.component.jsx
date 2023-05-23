import './card.styles.css'


const Card = ({name, email, id}) => (
    <div className="card-container">
        <img alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set3&size=180x180`}
        />
        <h2>{name}</h2> 
        <p>{email}</p>
    </div>   
)


// class Card extends Component{
//     render(){
//         const {name, email, id } = this.props;
        
//         return (  //use of map to iterate our array of monsters 
//             <div className="card-container">
//                 <img alt={`monster ${name}`} 
//                     src={`https://robohash.org/${id}?set=set3&size=180x180`}
//                 />
//                 <h2>{name}</h2> 
//                 <p>{email}</p>
//             </div>  
//         )
//     }
// }


export default Card; 