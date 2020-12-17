import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchContents } from '../../state/contentActions';


class SearchBox extends Component {
    state = {
        keyword: ''
    }
    handleClick = (e) => {
        this.props.searchContents(this.state);
    }
    handleChange = (e) => {
        if (e.keyCode === 13) {
            this.props.searchContents(this.state);
            return;
        }
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })

    }
    render() {
        return (
            <div className="container">
                <div className="input-field">
                    <input type="text" id="keyword" onChange={this.handleChange} onKeyUp={this.handleChange} placeholder="Ex: Go App CMS, Go App CRM, Go App Chat Bot, Go App Commerce, Go App Campaign" />
                    <i className="search-btn material-icons prefix" onClick={this.handleClick}>search</i>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        searchContents: (keyword) => dispatch(searchContents(keyword))
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);