import React from 'react';
import {
  Row,
  Col,
  Grid,
  Tabs,
  Tab,
} from 'react-bootstrap';
import './App.css';

// Learn more about import/export in ES2015
// Most common usage:
//  import myDefault from 'my-module';
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import

import EVENTS from './data/events';
import MySlideShow from './SlideShow';

import PROFILE from './data/profile';
import BasicProfile from './BasicProfile';

import ExpPanel from './ExpPanel';

import evaluationReports from './data/evaluationReports';

import summaryCOMP1001 from './data/summaryCOMP1001';
import summaryCOMP1022P from './data/summaryCOMP1022P';
import summaryCOMP1029C from './data/summaryCOMP1029C';
import summaryCOMP1029J from './data/summaryCOMP1029J';
import summaryCOMP2011 from './data/summaryCOMP2011';
import summaryCOMP2012 from './data/summaryCOMP2012';
import summaryCOMP3111 from './data/summaryCOMP3111';
import summaryCOMP4511 from './data/summaryCOMP4511';

import TeachingSummary from './TeachingSummary';

const expPanels = (
  PROFILE.experience.map(
    (exp, i) => <ExpPanel exp={exp} key={i} bsStyle="default" />
  )
);

const tabInfoArray = [
  { title: 'COMP1001', summary: summaryCOMP1001 },
  { title: 'COMP1022P', summary: summaryCOMP1022P },
  { title: 'COMP1029C', summary: summaryCOMP1029C },
  { title: 'COMP1029J', summary: summaryCOMP1029J },
  { title: 'COMP2011', summary: summaryCOMP2011 },
  { title: 'COMP2012', summary: summaryCOMP2012 },
  { title: 'COMP3111', summary: summaryCOMP3111 },
  { title: 'COMP4511', summary: summaryCOMP4511 },
];

const teachingSummaryTabs = tabInfoArray.map((m, i) => (
  <Tab eventKey={i} key={i} title={m.title}>
    <TeachingSummary reports={evaluationReports} summary={m.summary} />
  </Tab>
  ));

const tabsTeachingSummaryInstance = (
  <Tabs defaultActiveKey={0} id="tabsTeachingSummary">
    {teachingSummaryTabs}
  </Tabs>
);

const footerInstance = (
  <div className="Footer">
    <p>&copy; Copyright by Peter Chung</p>
    <p>Powered by
     <a href="https://react-bootstrap.github.io/"> React Bootstrap</a></p>
    <p> <a href="http://www.cse.ust.hk">CSE</a> | <a href="http://www.ust.hk">HKUST</a> </p>
    <br /><br />
  </div>
);

const root = (
  <div className="App">
    <Grid>
      <Row>&nbsp;</Row>
      <Row><MySlideShow items={EVENTS} /></Row>
      <Row>

        <Col xs={12} sm={7} md={7} lg={7}>
          <BasicProfile profile={PROFILE.basic} />
        </Col>

        <Col xs={12} sm={5} md={5} lg={5}>
          {expPanels}
        </Col>
      </Row>
      <Row>
        <div>
          <h3><strong>Teaching Evaluation</strong></h3>
          {tabsTeachingSummaryInstance}
        </div>
      </Row>
    </Grid>
    <hr />
    {footerInstance}
  </div>

);

const App = () => root;
export default App;
