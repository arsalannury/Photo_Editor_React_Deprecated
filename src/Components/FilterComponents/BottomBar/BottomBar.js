import axios from "axios";
import { Component } from "react";
import Filters from "../Filters/Filters";
import { Wrapper } from "./BottomBarStyle";

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersValue: [],
    };
  }

  async componentDidMount() {
    const data = await axios.get(
      "https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/filters.json"
    );
    try {
      this.setState({ filtersValue: data.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Wrapper className="bg-light shadow-sm d-flex align-items-center justify-content-around overflow-auto">
          {this.state.filtersValue.map((item, index) => (
            <Filters text={item.title} filter={item.filter} />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default BottomBar;