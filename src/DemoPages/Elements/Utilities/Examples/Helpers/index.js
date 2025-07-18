import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody, CardTitle, Table, Alert } from "reactstrap";

import BreadcrumbExample from "./Breadcrumb";

const UtilitiesHelpers = (props) => {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition component="div" classNames="TabsAnimation" appear={true}
          timeout={1500} enter={false} exit={false}>
          <Row>
            <Col md="12">
              <Alert color="warning">
                <h5>Bootstrap Helpers</h5>
                <p className="mb-0">
                  All Bootstrap 5 helper classes available in the official
                  Bootstrap documentation are also available in ArchitectUI
                  Framework: Spacing, resets, typography utilities, sizing and
                  others.
                </p>
              </Alert>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Opacity</CardTitle>
                  <Table className="mb-0" bordered>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <b>.opacity-01 </b> - <b>.opacity-09</b>
                        </th>
                        <td>
                          Adding this class to any element sets the opacity to{" "}
                          <b>1% ... 9%</b>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <b>.opacity-2 </b> - <b>.opacity-10</b>
                        </th>
                        <td>
                          Adding this class to any element sets the opacity to{" "}
                          <b>10% ... 100%</b>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <b>.opacity-01</b>
                        </th>
                        <td>
                          Adding this class to any element sets the opacity to{" "}
                          <b>10%</b>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <b>.opacity-15</b>
                        </th>
                        <td>
                          Adding this class to any element sets the opacity to{" "}
                          <b>15%</b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Breadcrumbs</CardTitle>
                  <BreadcrumbExample />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default UtilitiesHelpers;
