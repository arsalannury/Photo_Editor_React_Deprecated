import { Component } from "react";
import { ExampleImg, Wrapper } from "./FiltersStyle";
import { connect } from "react-redux";
import { setFilter, setFilterTitle } from "../../../Redux/Reducers/FiltersReducer";

class Filters extends Component {
  filtersHandlerSetting = () => {
    this.props.setFilterToImage(this.props.filter);
    this.props.setFilterTitle(this.props.text)
  }
  render() {
    // const { setFilterToImage } = this.props;
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
    setFilterToImage : (payload) => dispatch(setFilter(payload)),
    setFilterTitle: (payload) => {dispatch(setFilterTitle(payload))}
  }
};

export default connect(mapStateToProps,mapDispatchStateToProps)(Filters);
