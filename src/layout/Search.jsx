import React from 'react';

class Search extends React.Component {
    
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        e.preventDefault();
        this.props.onSearchSubmit(e.target.value);
        }
    };

    handleChange = (e) => {
        this.props.onSearchChange(e.target.value);
    }

    render() {
        return <div className="row">
                <div className="input-field col s12">
                    <input 
                        placeholder="search"
                        type="search" 
                        className="validate"
                        value={this.props.searchText}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}>
                    </input>
                </div>
            </div>
    }
}

export {Search};