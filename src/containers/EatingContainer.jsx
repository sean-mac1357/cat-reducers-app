import Eating from '../components/Eating';
import { connect } from 'react-redux';
import { actionEating } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionEating())
        }
    }
}

export default connect(null, mapDispatchToProps)(Eating);