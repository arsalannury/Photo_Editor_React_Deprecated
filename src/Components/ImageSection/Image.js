import { Component } from "react";
import {
  Container,
  ImageWrapper,
  CurrentImage,
  LoadingImage,
  Empty,
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
            ) : (
              <CurrentImage src={this.props.setImage} alt="edit-picture" />
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
  };
};

export default connect(mapStateToProps)(Image);
