import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import TableExample from './Examples/Table';
import TableBordered from './Examples/TableBordered';
import TableBorderless from './Examples/TableBorderless';
import TableDark from './Examples/TableDark';
import TableHover from './Examples/TableHover';
import TableResponsive from './Examples/TableResponsive';
import TableSizing from './Examples/TableSizing';
import TableStriped from './Examples/TableStriped';


const RegularTables = (props) => {
    return (
        <Fragment>
            <PageTitle
                heading="Regular Tables"
                subheading="Tables are the backbone of almost all web applications."
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
            />
            <TransitionGroup>
                <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                    timeout={1500} enter={false} exit={false}>
                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Simple table</CardTitle>
                                    <TableExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table bordered</CardTitle>
                                    <TableBordered/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table without border</CardTitle>
                                    <TableBorderless/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table dark</CardTitle>
                                    <TableDark/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table with hover</CardTitle>
                                    <TableHover/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table responsive</CardTitle>
                                    <TableResponsive/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table sizing</CardTitle>
                                    <TableSizing/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Table striped</CardTitle>
                                    <TableStriped/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default RegularTables;
