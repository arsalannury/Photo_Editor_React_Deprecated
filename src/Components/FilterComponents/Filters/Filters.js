import { Component } from 'react';
import { ExampleImg, Wrapper } from './FiltersStyle';
import {connect} from 'react-redux';

class Filters extends Component {
    render() { 
        const {text,filter} = this.props
        return (
            <>
            <Wrapper style={{ transform: this.props.transformState }}>
                <ExampleImg style={{filter : filter}} className='h-100 w100' src='fe.png' alt='example_img' />
                {text}
            </Wrapper>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transformState: state.UiReducersCombine.UiReducers.transform,
    }
}

export default connect(mapStateToProps)(Filters);

