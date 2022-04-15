import { Component } from "react";
import { connect } from "react-redux";
import { filterShow } from "../../Redux/Reducers/UiReducers";
import {
  Wrapper,
  HeaderContent,
  ButtonAction,
  File,
  FileWrapper,
  Label,
} from "./HeaderStyle";

class Header extends Component {
  render() {
    return (
      <>
        <Wrapper className=" bg-light">
          <HeaderContent className="w-100 h-100 d-flex align-items-center justify-content-md-start">
            <ButtonAction
              className="ml-5 border-0 rounded-circle p-1 pr-2 pl-2"
              onClick={this.props.showFilterSection}
            >
              <i class="bi bi-list text-white font-weight-bold"></i>
            </ButtonAction>

            <FileWrapper className="ml-5 d-flex align-items-center justify-content-center rounded ">
              <Label className="px-5 py-2">
                <File type="file" name="" id="" className="d-none" />
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
  };
};

const dispatchToProps = (dispatch) => {
  return {
    showFilterSection: () => dispatch(filterShow()),
  };
};

export default connect(mapStateToProps, dispatchToProps)(Header);
