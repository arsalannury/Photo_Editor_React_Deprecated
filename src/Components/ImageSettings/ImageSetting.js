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
} from "./ImageSettingStyle";
import { connect } from "react-redux";
import {setRangeValue} from '../../Redux/Reducers/FiltersReducer';

class ImageSetting extends Component {
  ifFilterTitleWasDefault = () => {
    return this.props.filterTitle === "Default" || this.props.filterTitle === "filterName" ?  true : false;
  }
  rangeInputHandler = (e) => {
     this.props.rangeInput(e.target.value)
  }
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
                <FilterRange onChange={this.rangeInputHandler} name="" id="" type="range" disabled={this.ifFilterTitleWasDefault()} max='100' defaultValue='0' />
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
                    <WidthInput type="text" disabled={this.ifFilterTitleWasDefault()} />
                  </WidthWrapper>
                  <HeightWrapper>
                    <HeightSpan>H</HeightSpan>
                    <HeightInput type="text" disabled={this.ifFilterTitleWasDefault()} />
                  </HeightWrapper>
                </Sizes>
                <Styles className="d-flex align-items-center justify-content-between flex-column">
                  <OpacityWrapper>
                    <OpacitySpan>O</OpacitySpan>
                    <OpacityInput type={"text"} disabled={this.ifFilterTitleWasDefault()} />
                  </OpacityWrapper>
                  <RadiusWrapper>
                    <RadiusSpan>R</RadiusSpan>
                    <RadiusInput type={"text"} disabled={this.ifFilterTitleWasDefault()} />
                  </RadiusWrapper>
                </Styles>
              </SizeSettingContent>
            </SizeSetting>

            <Actions className="w-75 d-flex align-items-center justify-content-center">
              <Button>
                <i class="bi bi-download"></i>
              </Button>
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
  };
};
const mapDispatchStateToProps = (dispatch) => {
  return {
      rangeInput: (payload) => {dispatch(setRangeValue(payload))}
  }
}

export default connect(mapStateToProps,mapDispatchStateToProps)(ImageSetting);
