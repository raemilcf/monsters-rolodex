import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{


    render(){
        return(
            <input  //ge the value of the input on the onchange with the callback event 
                className={this.props.className} 
                type='search'  
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler}  //anonymous function , every time its re-render its recreate the function , nedeedless preformance
            />
        )
    }

}

export default SearchBox;