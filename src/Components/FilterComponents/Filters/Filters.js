import { Component } from "react";
import { ExampleImg, Wrapper } from "./FiltersStyle";
import { connect } from "react-redux";
import {
  setFilter,
  setFilterTitle,
  setRangeValue,
  setFilterModel,
} from "../../../Redux/Reducers/FiltersReducer";
import {showDownloadBtn} from '../../../Redux/Reducers/UiReducers'


class Filters extends Component {
  filtersHandlerSetting = () => {
    this.props.setFilterToImage(this.props.filter);
    this.props.setFilterTitle(this.props.text);
    this.props.setRangeValue(0);
    this.props.setFilterModel(this.props.text);
    this.props.showDownloadBtn(false);
  };
  render() {
    return (
      <>
        <Wrapper style={{ transform: this.props.transformState }}>
          {!this.props.showLoading ? (
            <>
              <ExampleImg
                style={{ filter: this.props.filter }}
                className="h-100 w100"
                src={this.props.setImage}
                alt="example_img"
                onClick={this.filtersHandlerSetting}
              />
              {this.props.text}
            </>
          ) : (
            <span>Loading...</span>
          )}
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transformState: state.UiReducersCombine.UiReducers.transform,
    setImage: state.UiReducersCombine.ImageReducer.currentImage,
    showLoading: state.UiReducersCombine.UiReducers.isFetch,
  };
};
const mapDispatchStateToProps = (dispatch) => {
  return {
    setFilterToImage: (payload) => dispatch(setFilter(payload)),
    setFilterTitle: (payload) => {
      dispatch(setFilterTitle(payload));
    },
    setRangeValue: (payload) => {
      dispatch(setRangeValue(payload));
    },
    setFilterModel: (payload) => {
      dispatch(setFilterModel(payload));
    },
    showDownloadBtn: (payload) => {
      dispatch(showDownloadBtn(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(Filters);
