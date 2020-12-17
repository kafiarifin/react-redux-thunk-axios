import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentList from '../contents/ContentList';

class Home extends Component {
    render() {
        const { contentList } = this.props;
        return (
            <div className="container">
                Home Page is here...
                <ContentList contentList={contentList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        contentList: state.contents.contentList
    }
}

export default connect(mapStateToProps)(Home);