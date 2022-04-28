import { Component } from "react";
import {
  Container,
  ImageWrapper,
  CurrentImage,
  LoadingImage,
  Empty,
  Wait,
} from "./ImageStyle";
import { connect } from "react-redux";
import { setImage } from "../../Redux/Reducers/ImageReducer";

class Image extends Component {
  render() {
    return (
      <>
        <Container className="col-md-6">
          <ImageWrapper className="shadow-sm h-100 bg-light rounded d-flex align-items-center justify-content-center">
            {this.props.setImage === "" ? (
              <>
                <div className="d-flex align-items-center flex-column">
                  <Empty>Choose an image</Empty>
                  <LoadingImage></LoadingImage>
                </div>
              </>
            ) : !this.props.showLoading ? (
              <CurrentImage src={this.props.setImage} alt="edit-picture" />
            ) : (
              <>
                <div className="d-flex align-items-center flex-column">
                  <Wait>wait for loading image...</Wait>
                  <LoadingImage></LoadingImage>
                </div>
              </>
            )}
          </ImageWrapper>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setImage: state.UiReducersCombine.ImageReducer.currentImage,
    showLoading: state.UiReducersCombine.UiReducers.isFetch,
  };
};

export default connect(mapStateToProps)(Image);
