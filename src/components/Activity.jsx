import { connect } from 'react-redux';

const Activity = (props) => (
    <>
        <h3>{props.name} is currently: {props.activity}</h3>
    </>
);

const mapStateToProps = (state) => {
    const { name, activity } = state;
    return {
        name, 
        activity,
    };
};

export default connect(mapStateToProps)(Activity);