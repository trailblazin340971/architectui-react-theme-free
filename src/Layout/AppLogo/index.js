import React, { Fragment } from "react";
import { connect } from "react-redux";

import Hamburger from "hamburger-react";

import AppMobileMenu from "../AppMobileMenu";

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    return (
      <Fragment>
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ms-auto">
            <div onClick={this.toggleEnableClosedSidebar}>
              <Hamburger 
                toggled={this.props.enableClosedSidebar} 
                toggle={this.toggleEnableClosedSidebar}
                size={26}
                color="#6c757d"
              />
            </div>
          </div>
        </div>
        <AppMobileMenu />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
