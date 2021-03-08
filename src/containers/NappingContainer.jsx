import Napping from '../components/Napping';
import { connect } from 'react-redux';
import { actionNapping } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionNapping())
        }
    }
}

export default connect(null, mapDispatchToProps)(Napping);