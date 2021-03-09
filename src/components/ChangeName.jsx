import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

class ChangeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catName: ''
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleClick(this.state.catName);
        this.setState({
            catName: ''
        })
    }

    render() {
        const { catName } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    Change Your Cats Name ☞
                    <input type="text" name="catName" value={catName} onChange={this._handleChange} placeholder="Rename Your Cat"/>
                </label>
                <button type="submit">Change Name</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name) => {
            dispatch(setName(name));
        },
    };
};

export default connect(null, mapDispatchToProps)(ChangeName);