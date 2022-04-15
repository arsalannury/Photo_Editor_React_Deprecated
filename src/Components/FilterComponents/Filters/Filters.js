import { Component } from 'react';
import { ExampleImg, Wrapper } from './FiltersStyle';

class Filters extends Component {
    render() { 
        const {text,filter} = this.props
        return (
            <>
            <Wrapper>
                <ExampleImg style={{filter : filter}} className='h-100 w100' src='fe.png' alt='example_img' />
                {text}
            </Wrapper>
            </>
        );
    }
}
 
export default Filters;