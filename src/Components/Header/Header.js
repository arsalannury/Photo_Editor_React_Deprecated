import { Component } from "react";
import { connect } from "react-redux";
import { filterShow, overflowShow } from "../../Redux/Reducers/UiReducers";
import { setImage } from "../../Redux/Reducers/ImageReducer";
import axios from "axios";
import {
  Wrapper,
  HeaderContent,
  ButtonAction,
  File,
  FileWrapper,
  Label,
} from "./HeaderStyle";
import Swal from "sweetalert2";

class Header extends Component {
  componentDidMount() {
    if (localStorage.getItem("imageDatabaseName"))
      this.getImage(localStorage.getItem("imageDatabaseName"));
  }

  getImage = async (name) => {
    try {
      const result = await axios.get(
        "https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/Image.json"
      );
      this.props.image(result.data[name].image);
      console.log(result.data);
    } catch (error) {}
  };

  imageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      // this.props.image(base64String);
      const postToDatabase = async () => {
        const data = {
          image: base64String,
        };
        const result = await axios.post(
          "https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/Image.json",
          data
        );
        try {
          this.getImage(result.data.name);
          const toLocal = localStorage.setItem(
            "imageDatabaseName",
            result.data.name
          );
        } catch (error) {
          console.log(error);
        }
      };
      postToDatabase();
    };
    reader.readAsDataURL(file);
  };

  ifImageWasEmpty = () => {
    if (this.props.setImage === "") {
      let timerInterval;
      Swal.fire({
        title: "Choose an image!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      return;
    }
    this.props.showFilterSection();
  };

  render() {
    return (
      <>
        <Wrapper className=" bg-light">
          <HeaderContent className="w-100 h-100 d-flex align-items-center justify-content-md-start">
            <ButtonAction
              className="ml-5 border-0 rounded-circle p-1 pr-2 pl-2"
              onClick={this.ifImageWasEmpty}
            >
              <i class="bi bi-list text-white font-weight-bold"></i>
            </ButtonAction>

            <FileWrapper className="ml-5 d-flex align-items-center justify-content-center rounded ">
              <Label className="px-5 py-2">
                <File
                  onChange={this.imageChange}
                  type="file"
                  name=""
                  id=""
                  className="d-none"
                  accept="image/*"
                />
                <i class="bi bi-upload text-white font-weight-bold"></i>
              </Label>
            </FileWrapper>
          </HeaderContent>
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transform: state.UiReducersCombine.UiReducers.transform,
    setImage: state.UiReducersCombine.ImageReducer.currentImage,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    showFilterSection: () => {
      dispatch(filterShow());
      dispatch(overflowShow());
    },
    image: (payload) => dispatch(setImage(payload)),
  };
};

export default connect(mapStateToProps, dispatchToProps)(Header);
