import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentList from '../contents/ContentList';

class SearchResults extends Component {
    render() {
        const { contentList } = this.props;
        const title = (contentList) ? 'Search Result(s)' : '';
        return (
            <div className="container">
                <h4 className="card-title">{title}</h4>
                <ContentList contentList={contentList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        contentList: state.content.contentList
    }
}

export default connect(mapStateToProps)(SearchResults);