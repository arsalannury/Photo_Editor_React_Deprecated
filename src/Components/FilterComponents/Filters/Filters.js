import { Component } from "react";
import { ExampleImg, Wrapper } from "./FiltersStyle";
import { connect } from "react-redux";

class Filters extends Component {
  render() {
    const { text, filter } = this.props;
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

export default connect(mapStateToProps)(Filters);
