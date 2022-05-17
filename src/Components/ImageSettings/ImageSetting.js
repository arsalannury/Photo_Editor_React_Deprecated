import { Component } from "react";
import {
  Container,
  Content,
  Filters,
  SizeSetting,
  Actions,
  Parag,
  FilterRange,
  FilterRangeWrapper,
  FilterMax,
  FilterMin,
  FilterRangeLabelWrapper,
  HeightWrapper,
  OpacityWrapper,
  RadiusWrapper,
  ShadowWrapper,
  SizeSettingContent,
  WidthWrapper,
  Sizes,
  Styles,
  WidthInput,
  WidthSpan,
  HeightSpan,
  HeightInput,
  OpacityInput,
  OpacitySpan,
  RadiusSpan,
  RadiusInput,
  Button,
  DownlaodLink,
} from "./ImageSettingStyle";
import { connect } from "react-redux";
import {
  setRangeValue,
  setWidth,
  setHeight,
  setRadius,
} from "../../Redux/Reducers/FiltersReducer";
import { showDownloadBtn } from "../../Redux/Reducers/UiReducers";
import axios from "axios";

class ImageSetting extends Component {
  ifFilterTitleWasDefault = () => {
    return this.props.filterTitle === "Default" ||
      this.props.filterTitle === "filterName"
      ? true
      : false;
  };
  rangeInputHandler = (e) => {
    this.props.rangeInput(e.target.value);
  };

  postFinalyImageToDatabase = async () => {
    this.props.showDownloadBtn(true);
    if(this.props.filterTitle === "Default" || this.props.filterTitle === "filterName") return;
    const currentImage = {
      data: this.props.setImage,
    };
    try {
      const response = await axios.post(
        "https://react-photo-editor-dd3e0-default-rtdb.firebaseio.com/FinalyImages.json",
        currentImage
      );
    } catch (error) {
      console.log(error,'your request chatched');
    }
  };

  render() {
    return (
      <>
        <Container className="col-md-6 ">
          <Content className="h-100 shadow-sm d-flex align-items-center flex-column justify-content-evenly bg-light rounded">
            <Filters className="w-75">
              <Parag>
                {this.props.filterTitle === "Default"
                  ? "filterName"
                  : this.props.filterTitle}
              </Parag>
              <FilterRangeWrapper>
                <FilterRange
                  onChange={this.rangeInputHandler}
                  name=""
                  id=""
                  type="range"
                  disabled={this.ifFilterTitleWasDefault()}
                  max={this.props.maxRangeInp}
                  step={0.1}
                  value={this.props.rangeInp}
                />
                <FilterRangeLabelWrapper className="d-flex align-items-center justify-content-between">
                  <FilterMin>min</FilterMin>
                  <FilterMax>max</FilterMax>
                </FilterRangeLabelWrapper>
              </FilterRangeWrapper>
            </Filters>

            <SizeSetting className="w-75 ">
              <SizeSettingContent className="d-flex align-items-center justify-content-around">
                <Sizes className="d-flex align-items-center justify-content-between flex-column">
                  <WidthWrapper>
                    <WidthSpan>W</WidthSpan>
                    <WidthInput
                      type="text"
                      onChange={(e) => {
                        this.props.setWidth(e.target.value);
                      }}
                      maxLength="3"
                      // disabled={this.ifFilterTitleWasDefault()}
                    />
                  </WidthWrapper>
                  <HeightWrapper>
                    <HeightSpan>H</HeightSpan>
                    <HeightInput
                      type="text"
                      onChange={(e) => {
                        this.props.setHeight(e.target.value);
                      }}
                      maxLength="3"
                      // disabled={this.ifFilterTitleWasDefault()}
                    />
                  </HeightWrapper>
                </Sizes>
                <Styles className="d-flex align-items-center justify-content-between flex-column">
                  <OpacityWrapper>
                    <OpacitySpan>O</OpacitySpan>
                    <OpacityInput
                      type={"text"}
                      // disabled={this.ifFilterTitleWasDefault()}
                    />
                  </OpacityWrapper>
                  <RadiusWrapper>
                    <RadiusSpan>R</RadiusSpan>
                    <RadiusInput
                      type={"text"}
                      onChange={(e) => {
                        this.props.setRadius(e.target.value);
                      }}
                      maxLength="2"
                      // disabled={this.ifFilterTitleWasDefault()}
                    />
                  </RadiusWrapper>
                </Styles>
              </SizeSettingContent>
            </SizeSetting>

            <Actions className="w-75 d-flex align-items-center justify-content-center">
              {this.props.showDownload &&
              this.props.filterTitle !== "Default" &&
              this.props.filterTitle !== "filterName" ? (
                <Button style={{ fontSize: ".7em" }}>
                  <DownlaodLink href={this.props.setImage} download>
                    Download
                  </DownlaodLink>
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    this.postFinalyImageToDatabase()
                  }}
                >
                  <i class="bi bi-check2"></i>
                </Button>
              )}
            </Actions>
          </Content>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterTitle: state.FiltersCombine.FiltersReducer.filterTitle,
    setImage: state.UiReducersCombine.ImageReducer.currentImage,
    showDownload: state.UiReducersCombine.UiReducers.showDownloadBtn,
    rangeInp: state.FiltersCombine.FiltersReducer.rangeInput,
    maxRangeInp: state.FiltersCombine.FiltersReducer.maxRangeInput,
  };
};
const mapDispatchStateToProps = (dispatch) => {
  return {
    rangeInput: (payload) => {
      dispatch(setRangeValue(payload));
    },
    setWidth: (payload) => {
      dispatch(setWidth(payload));
    },
    setHeight: (payload) => {
      dispatch(setHeight(payload));
    },
    setRadius: (payload) => {
      dispatch(setRadius(payload));
    },
    showDownloadBtn: (payload) => {
      dispatch(showDownloadBtn(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(ImageSetting);
