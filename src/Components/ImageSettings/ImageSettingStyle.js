import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
padding: 70px 0;
width: 50%;
`;
export const Filters = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  margin: 10px;
`;
export const Parag = styled.p`
  margin-bottom: 0 !important;
`;
export const FilterRangeWrapper = styled.div``;
export const FilterRangeLabelWrapper = styled.div`
  width: 200px;
`;
export const FilterMin = styled.span`
  color: #ccc;
`;
export const FilterMax = styled(FilterMin)``;
export const FilterRange = styled.input`
  width: 200px;
  appearance: none;
  height: 8px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #eee;
  opacity: 0.8;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: #a06cd5;
    border-radius: 5px;
    cursor: pointer;
  }
  &:hover {
    opacity: 1;
  }
`;

export const SizeSetting = styled(Filters)``;
export const SizeSettingContent = styled.div``;
export const WidthWrapper = styled.div``;
export const HeightWrapper = styled.div``;
export const ShadowWrapper = styled.div``;
export const RadiusWrapper = styled.div``;
export const OpacityWrapper = styled.div``;
export const Sizes = styled.div``;
export const Styles = styled.div``;
export const RadiusInput = styled.input`
  border: none;
  outline: none;
  box-shadow: 0 0 2px #aaa;
  padding: 5px;
  width: 50px;
  margin: 5px 0;
`;
export const WidthInput = styled(RadiusInput)``;
export const WidthSpan = styled.span`
  margin-right: 5px;
  font-size: 0.8em;
  color: #ccc;
`;
export const HeightInput = styled(RadiusInput)``;
export const HeightSpan = styled(WidthSpan)``;
export const OpacityInput = styled(RadiusInput)``;
export const OpacitySpan = styled(WidthSpan)``;
export const RadiusSpan = styled(WidthSpan)``;

export const Actions = styled(Filters)``;
export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 6px 50px;
  background: #A06CD5;
  transition: all .4s ease;
  i{
      color: #fff;
      transition: all .4s ease;
  }
  &:hover{
    background: #fff;
    box-shadow: 0 0 2px #A06CD5;
    i{
        color : #A06CD5;
    }
  }
`;
