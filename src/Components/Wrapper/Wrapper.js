import { Component } from 'react';
import styled from 'styled-components';
import BottomBar from '../FilterComponents/BottomBar/BottomBar';
import Image from '../ImageSection/Image';
import ImageSetting from '../ImageSettings/ImageSetting';

class Wrapper extends Component {
    render() { 
        return (
            <>
            <div className='container-fluid'>
            <Container className='row mt-5'>
              <ImageSetting />
              <Image />
            </Container>
            </div>
            <BottomBar />
            </>
        );
    }
}
 
export default Wrapper;

const Container = styled.div``