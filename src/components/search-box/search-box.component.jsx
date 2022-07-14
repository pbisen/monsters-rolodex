import { Component } from "react";

import './search-box-styles.css'

class SearchBox extends Component{

    render(){

        const {onChangeHandler, placeholder, classname}  = this.props;

        return(
            <input
                type='search'
                className={`search-box ${classname}`}
                placeholder= {placeholder}
                onChange={onChangeHandler}
                />
        )
    }

}

export default SearchBox;