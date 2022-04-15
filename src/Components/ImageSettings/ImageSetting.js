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

class ImageSetting extends Component {
  render() {
    return (
      <>
        <Container className="col-md-6 ">
          <Content className="h-100 shadow-sm d-flex align-items-center flex-column justify-content-evenly bg-light rounded">
            <Filters className="w-75">
              <Parag>filter name</Parag>
              <FilterRangeWrapper>
                <FilterRange name="" id="" type="range" />
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
                    <WidthInput type="text" />
                  </WidthWrapper>
                  <HeightWrapper>
                    <HeightSpan>H</HeightSpan>
                    <HeightInput type="text" />
                  </HeightWrapper>
                </Sizes>
                <Styles className="d-flex align-items-center justify-content-between flex-column">
                  <OpacityWrapper>
                    <OpacitySpan>O</OpacitySpan>
                    <OpacityInput type={"text"} />
                  </OpacityWrapper>
                  <RadiusWrapper>
                    <RadiusSpan>R</RadiusSpan>
                    <RadiusInput type={"text"} />
                  </RadiusWrapper>
                </Styles>
              </SizeSettingContent>
            </SizeSetting>

            <Actions className="w-75 d-flex align-items-center justify-content-center">
              <Button><i class="bi bi-download"></i></Button>
            </Actions>
          </Content>
        </Container>
      </>
    );
  }
}

export default ImageSetting;
