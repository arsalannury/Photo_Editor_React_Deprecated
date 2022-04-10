import axios from 'axios';
import { Component } from 'react';
import Filters from '../Filters/Filters';
import {Wrapper} from './BottomBarStyle';

class BottomBar extends Component {
    // componentDidMount(){
    //     axios.get("https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/information.json")
    //     .then(response => console.log(JSON.parse(response.data)))
    // }
    render() { 
        return (
            <>
              <Wrapper className='bg-light shadow-sm d-flex align-items-center justify-content-around overflow-auto'>
                  {Array(12).fill({}).map(()=> (
                      <Filters text={'test'} filter={'blur(10px)'} />
                  ))}
              </Wrapper>
            </>
        );
    }
}
 
export default BottomBar;

// filter: brightness(5);
//     filter: blur(10px);
//     filter: contrast(3);
//     filter: grayscale(1);
//     filter: hue-rotate(100deg);
//     filter: opacity(0.5);
//     filter: saturate(5);
//     filter: sepia(1);