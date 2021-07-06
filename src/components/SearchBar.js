
import React from 'react';

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
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='video-search'>Busca Video</label>
            <input onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar.."/>
        </form>
    )
}
}

export default SearchBar;
