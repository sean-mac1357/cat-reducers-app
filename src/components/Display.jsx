import { connect } from 'react-redux';
import ActivityButton from './ActivityButton'

const Display = (props) => (
    <>

        <h3>{props.catsObj} is currently: {props.catsObjAct}</h3>
        <ActivityButton />
    </>
);

const mapStateToProps = (state) => {
    return {
        catsObj: state.cats['1001'].name,
        catsObjAct: state.cats['1001'].activity
    };
};

export default connect(mapStateToProps)(Display);