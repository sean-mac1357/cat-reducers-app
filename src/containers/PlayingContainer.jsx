import Playing from '../components/Playing';
import { connect } from 'react-redux';
import { actionPlaying } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionPlaying())
        }
    }
}

export default connect(null, mapDispatchToProps)(Playing);