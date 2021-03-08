import Eating from '../containers/EatingContainer';
import Napping from '../containers/NappingContainer';
import Playing from '../containers/PlayingContainer';
import Output from '../containers/OutputContainer';

const ActivityApp = (props) => (
    <>
        <h1>The Meow App</h1>
        <Output />
        <Napping />
        <Eating />
        <Playing />
    </>
)

export default ActivityApp;