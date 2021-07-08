
import React from 'react';
import {Searchinput} from '../styled';

class SearchBar extends React.Component{
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event =>{
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

render(){
    return(
        <div>
            <h2>Buscador de Videos Youtube</h2>
            <form onSubmit={this.handleSubmit}>   
                <Searchinput onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar Video.."></Searchinput>
    
            </form>
        </div>
    )
}
}

export default SearchBar;
