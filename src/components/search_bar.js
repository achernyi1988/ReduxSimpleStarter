import React, { Component } from "react"

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {input: ""}
    }

        render(){
            return (
          <div className="search-bar" >
            <input id="youtube"
                value = {this.state.input}
                onChange = {event => this.onInputChanged(event.target.value)}/>
          </div>
            );
        }
    onInputChanged(input){
        console.log(input);
        this.setState({input});
        this.props.onSearchTextChanged(input);
    }

}

export default SearchBar;