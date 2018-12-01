import React, { Component } from "react"

class SearchBar extends React.Component {

    constructor(probs){
        super(probs);

        this.state = {value: ""}
    }

        render(){
            return (
          <div>
            <input
                value = {this.state.value}
                onChange = {event => this.setState({value: event.target.value})}/>

          </div>
            );
        }


}

export default SearchBar;