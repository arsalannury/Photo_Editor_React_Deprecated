import { Component } from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './Wrapper/Wrapper';
import '../index.css';

class App extends Component {

    render() { 
        return (
            <>
            <Header />
            <Wrapper />
            </>
        );
    }
}
 
export default App;