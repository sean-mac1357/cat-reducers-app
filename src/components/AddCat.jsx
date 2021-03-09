import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddCat } from '../redux/actions';

class AddCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catName: '',
            catActivity: ''
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleClick(this.state.catName, this.state.catActivity);
        this.setState({
            catName: '',
            catActivity: '',
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this._handleSubmit}>
                    <label>
                        Add A New Cat ☞
                        <input 
                        type="text" 
                        name="catName" 
                        value={this.state.catName} 
                        onChange={this._handleChange} 
                        placeholder="Enter New Cat" />
                    </label>
                    
                    <select 
                    id="activity"
                    name="catActivity" 
                    onChange={this._handleChange}
                    value={this.state.petActivity}>
                        <option value="choose" style={{ display: "none"}}>Please Choose</option>
                        <option value="eating">Eating</option>
                        <option value="napping">Napping</option>
                        <option value="playing">Playing</option>
                    </select>
                    <button type="submit">Add Cat</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name, activity) => {
            const addCat = { name, activity}
            dispatch(setAddCat(addCat));
        },
    };
};

export default connect(null, mapDispatchToProps)(AddCat);