import { Component } from "react";
import {
  Container,
  ImageWrapper,
  CurrentImage,
  LoadingImage,
  Empty,
  Wait,
  Div
} from "./ImageStyle";
import { connect } from "react-redux";
import { setImage } from "../../Redux/Reducers/ImageReducer";
import {showLoading,filterShow} from '../../Redux/Reducers/UiReducers';
import axios from "axios";

class Image extends Component {

   handleDeletePhoto = async () => {
     const data = localStorage.getItem("imageDatabaseName")
     try {
        const response = await axios.delete(`https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/Image/${data}.json`);
        this.props.setImageHandler();
        this.props.loading();
        this.props.filterDisplay();
        localStorage.removeItem("imageDatabaseName")
        console.log(response);
     } catch (error) {
       console.log(error);
     }
   }

  render() {
    return (
      <>
        <Container className="col-md-6">
          <ImageWrapper className="shadow-sm h-100 bg-light rounded d-flex align-items-center justify-content-center position-relative">
            {this.props.setImage === "" ? (
              <>
                <div className="d-flex align-items-center flex-column">
                  <Empty>Choose an image</Empty>
                  <Empty>or wait for load image</Empty>
                  <LoadingImage></LoadingImage>
                </div>
              </>
            ) : !this.props.showLoading ? (
              <>
              <Div>
                <i onClick={this.handleDeletePhoto} class="bi bi-x-circle" style={{fontSize:'25px'}}></i>
              </Div>
              <CurrentImage src={this.props.setImage} alt="edit-picture" />
              </>
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

const mapDispatchStateToProps = (dispatch) => {
   return {
     setImageHandler : () => {dispatch(setImage(''))},
     loading: () => {dispatch(showLoading(false))},
     filterDisplay: () => {dispatch(filterShow())}
   }
}

export default connect(mapStateToProps,mapDispatchStateToProps)(Image);
