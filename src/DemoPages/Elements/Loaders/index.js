import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples
import LoadersBasicExample from "./Examples/Basic";
import LoadersColorsExample from "./Examples/Colors";

export default class LoadersExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Loading Indicators"
                subheading="Use these loading indicators in combination with other elements to show current app status to users."
                icon="pe-7s-moon icon-gradient bg-amy-crisp"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Basic" key="1">
                  <LoadersBasicExample />
                </TabPane>
                <TabPane tab="Colors" key="2">
                  <LoadersColorsExample />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
