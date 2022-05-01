import { Component } from "react";
import { ExampleImg, Wrapper } from "./FiltersStyle";
import { connect } from "react-redux";
import { setFilter } from "../../../Redux/Reducers/FiltersReducer";

class Filters extends Component {
  render() {
    const { text, filter, setFilterToImage } = this.props;
    return (
      <>
        <Wrapper style={{ transform: this.props.transformState }}>
          {!this.props.showLoading ? (
            <>
              <ExampleImg
                style={{ filter: filter }}
                className="h-100 w100"
                src={this.props.setImage}
                alt="example_img"
                onClick={()=> {setFilterToImage(filter)}}
              />
              {text}
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
    setFilterToImage : (payload) => dispatch(setFilter(payload))
  }
};

export default connect(mapStateToProps,mapDispatchStateToProps)(Filters);
