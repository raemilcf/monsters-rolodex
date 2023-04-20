import { Component } from "react";

class SearchBox extends Component{


    render(){

        //const {onSearchChange} = this.props;

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