import { ChangeEvent } from "react";
import "./search-box.styles.css"

type SearchBoxProps = {
    className: string ;
    placeholder?: string;
    //create function and send parameter using changeEventHandler
    // onChangeHandler: (a: string) => void;
  //  func : ChangeEventHandler;

    //change event expecting some value 
    //third party library read the types 
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};


const SearchBox = ({
    className, 
    placeholder, 
    onChangeHandler
}: SearchBoxProps) => (
    <input  //ge the value of the input on the onchange with the callback event 
        className={`search-box ${className}` } 
        type='search'  
        placeholder={placeholder} 
        onChange={onChangeHandler}  //anonymous function , every time its re-render its recreate the function , nedeedless preformance
    />
);


// class SearchBox extends Component{
//     render(){
//         return(
//             <input  //ge the value of the input on the onchange with the callback event 
//                 className={this.props.className} 
//                 type='search'  
//                 placeholder={this.props.placeholder} 
//                 onChange={this.props.onChangeHandler}  //anonymous function , every time its re-render its recreate the function , nedeedless preformance
//             />
//         )
//     }
// }

export default SearchBox;