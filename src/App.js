import React from 'react';
import {
  Row,
  Col,
  Grid,
  Panel,
  Accordion,
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
import ExpPanelHeader from './ExpPanelHeader';
import ExpPanelContent from './ExpPanelContent';

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
    (exp, i) => {
      const header = <h3 className="PointerCursor"><ExpPanelHeader title={exp.title} icon={exp.icon} /></h3>;
      return <Panel header={header} key={i} eventKey={`xc${i}`} bsStyle="default" ><ExpPanelContent exp={exp} /></Panel>;
    })
);
const profileDetails = (
  <Accordion>
    {expPanels}
  </Accordion>
);

const tabsTeachingSummaryInstance = (
  <Tabs defaultActiveKey={1} id="tabsTeachingSummary">
    <Tab eventKey={1} title="COMP1001"><TeachingSummary reports={evaluationReports} summary={summaryCOMP1001} /></Tab>
    <Tab eventKey={2} title="COMP1022P"><TeachingSummary reports={evaluationReports} summary={summaryCOMP1022P} /></Tab>
    <Tab eventKey={3} title="COMP1029C"><TeachingSummary reports={evaluationReports} summary={summaryCOMP1029C} /></Tab>
    <Tab eventKey={4} title="COMP1029J"><TeachingSummary reports={evaluationReports} summary={summaryCOMP1029J} /></Tab>
    <Tab eventKey={5} title="COMP2011"><TeachingSummary reports={evaluationReports} summary={summaryCOMP2011} /></Tab>
    <Tab eventKey={6} title="COMP2012"><TeachingSummary reports={evaluationReports} summary={summaryCOMP2012} /></Tab>
    <Tab eventKey={7} title="COMP3111"><TeachingSummary reports={evaluationReports} summary={summaryCOMP3111} /></Tab>
    <Tab eventKey={8} title="COMP4511"><TeachingSummary reports={evaluationReports} summary={summaryCOMP4511} /></Tab>
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

        <Col xs={12} sm={8} md={8} lg={8}>
          <BasicProfile profile={PROFILE.basic} />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4}>
          {profileDetails}
        </Col>
      </Row>
      <Row>
        <div>
          <h3><strong>Teaching Evaluation Summary</strong></h3>
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
