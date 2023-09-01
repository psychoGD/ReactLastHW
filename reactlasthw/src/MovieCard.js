import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class MovieCard extends Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    };

    render() {
        const { imageUrl, title, description } = this.props;

        return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={imageUrl} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">
                        Show
                    </a>
                </div>
            </div>
        );
    }
}