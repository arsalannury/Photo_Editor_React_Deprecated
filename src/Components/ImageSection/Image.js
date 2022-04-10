import { Component } from 'react';
import {Container,ImageWrapper,CurrentImage} from './ImageStyle';

class Image extends Component {

    render() { 
        return (
            <>
            <Container className='col-md-6'>
               <ImageWrapper className='shadow-sm h-100 bg-light rounded d-flex align-items-center justify-content-center'>
                          <CurrentImage src='fe.png' alt='edit-picture' />
               </ImageWrapper>
            </Container>
            </>
        );
    }
}
 
export default Image;