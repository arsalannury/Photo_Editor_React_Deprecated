import { Component } from 'react';
import styled from 'styled-components';
import Image from '../ImageSection/Image';
import ImageSetting from '../ImageSettings/ImageSetting';

class Wrapper extends Component {
    render() { 
        return (
            <>
            <Container className='row mt-5'>
              <ImageSetting />
              <Image />
            </Container>
            </>
        );
    }
}
 
export default Wrapper;

const Container = styled.div``