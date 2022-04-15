import axios from "axios";
import { Component } from "react";
import Filters from "../Filters/Filters";
import { Wrapper } from "./BottomBarStyle";
import { connect } from "react-redux";
import { ApiCallStart } from "../../../Redux/Actions/Actions";
import { dataRecived } from "../../../Redux/Reducers/GetFiltersValue";

class BottomBar extends Component {

  async componentDidMount() {
    const data = await axios.get(
      "https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/filters.json"
    );
    try {
      this.props.dataSetToState(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Wrapper className="bg-light shadow-sm d-flex align-items-center justify-content-around overflow-auto">
          {this.props.filterValues.map((item, index) => (
            <Filters text={item.title} filter={item.filter} key={index} />
          ))}
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterValues: state.FilterValuesCombine.filtersValueSlice,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    startCallApi: () => dispatch(ApiCallStart()),
    dataSetToState: (payload) => dispatch(dataRecived(payload)),
  };
};

export default connect(mapStateToProps, dispatchToProps)(BottomBar);
