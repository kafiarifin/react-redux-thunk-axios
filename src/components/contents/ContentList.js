import React from 'react';

const contentList = ({ contentList }) => {
    return (
        <div className="section">
            <div className="row">
                {contentList && contentList.map(content => {
                    const dt = new Date(content.modified);
                    const mdy = `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`
                    return (
                        <div className="col s6" key={content.id}>
                            <div className="card large">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="https://reactjs.org/logo-og.png" alt={content.id} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{content.title}<i className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-action">
                                    <a href="/">Read More</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{content.title}<i className="material-icons right">close</i></span>
                                    <p>{content.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default contentList;
