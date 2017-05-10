import React from 'react';
import {
  Row,
  Col,
  Grid,
  Panel,
  Accordion,
  Glyphicon,
  Tabs,
  Tab,
  Button,
  Label,
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

const reportSpring17 = (
  <h4>
    <Button disabled><Glyphicon glyph="download-alt" />COMP3111 LA1</Button> &nbsp;
    <Button disabled><Glyphicon glyph="download-alt" />COMP3111 LA2 </Button> &nbsp;
    <Button disabled><Glyphicon glyph="download-alt" />COMP3111 LA3 </Button> &nbsp;
    <Button disabled><Glyphicon glyph="download-alt" />COMP4511 LA1 </Button> &nbsp;
    <Button disabled><Glyphicon glyph="download-alt" />COMP4511 LA2 </Button> &nbsp;
    <Label bsStyle="danger">To Appear</Label>
  </h4>
);

const reportWinter16 = (
  <h4>
    <Button href="evaluation/COMP1029C_LA1_Winter1617.pdf"><Glyphicon glyph="download-alt" />
      COMP1029C LA1 </Button> &nbsp;
    <Button href="evaluation/COMP1029J_LA1_Winter1617.pdf"><Glyphicon glyph="download-alt" />
      COMP1029J LA2 </Button> &nbsp;
  </h4>
);

const reportFall16 = (
  <h4>
    <Button href="evaluation/COMP1001_LA1_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP1001 LA1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA1_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA2_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA3_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA3 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA4_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA4 </Button> &nbsp;
    <Button href="evaluation/COMP3111H_LA1_Fall1617.pdf"><Glyphicon glyph="download-alt" />
      COMP3111H LA1 </Button> &nbsp;
  </h4>
);

const reportSpring16 = (
  <h4>
    <Button href="evaluation/COMP4511_LA1_Spring1516.pdf"><Glyphicon glyph="download-alt" />
      COMP4511 LA1 </Button> &nbsp;
  </h4>
);

const reportFall15 = (
  <h4>
    <Button href="evaluation/COMP3111_LA1_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA2_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA3_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA3 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T1_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T2_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T3_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T3 </Button> &nbsp;
    <Button href="evaluation/COMP3111H_LA1_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111H LA1 </Button> &nbsp;
    <Button href="evaluation/COMP3111H_T1_Fall1516.pdf"><Glyphicon glyph="download-alt" />
      COMP3111H T1 </Button> &nbsp;
  </h4>
);

const reportSpring15 = (
  <h4>
    <Button href="evaluation/COMP2012_LA1_Spring1415.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA1 </Button> &nbsp;
    <Button href="evaluation/COMP2012_LA3_Spring1415.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA3 </Button> &nbsp;
    <Button href="evaluation/COMP2012_LA5_Spring1415.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA5 </Button> &nbsp;
  </h4>
);

const reportFall14 = (
  <h4>
    <Button href="evaluation/COMP3111_T1_Fall1415.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T2_Fall1415.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T3_Fall1415.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T3 </Button> &nbsp;
    <Button href="evaluation/COMP3111H_T1_Fall1415.pdf"><Glyphicon glyph="download-alt" />
      COMP3111H T1 </Button> &nbsp;
  </h4>
);

const reportSpring14 = (
  <h4>
    <Button href="evaluation/COMP2012_LA1A_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA1A </Button> &nbsp;
    <Button href="evaluation/COMP2012_LA1B_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA1B </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA1_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_LA2_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 LA2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T1_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T1 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T2_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T2 </Button> &nbsp;
    <Button href="evaluation/COMP3111_T3_Spring1314.pdf"><Glyphicon glyph="download-alt" />
      COMP3111 T3 </Button> &nbsp;
  </h4>
);

const reportFall13 = (
  <h4>
    <Button href="evaluation/COMP1022P_LA1_Fall1314.pdf"><Glyphicon glyph="download-alt" />
      COMP1022P LA1 </Button> &nbsp;
    <Button href="evaluation/COMP1022P_LA3_Fall1314.pdf"><Glyphicon glyph="download-alt" />
      COMP1022P LA3 </Button> &nbsp;
    <Button href="evaluation/COMP2012_LA1_Fall1314.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA1 </Button> &nbsp;
  </h4>
);

const reportFall11 = (
  <h4>
    <Button href="evaluation/COMP1022P_LA1C_Fall1112.pdf"><Glyphicon glyph="download-alt" />
      COMP1022P LA1C </Button> &nbsp;
    <Button href="evaluation/COMP1022P_LA1D_Fall1112.pdf"><Glyphicon glyph="download-alt" />
      COMP1022P LA1D </Button> &nbsp;
    <Button href="evaluation/COMP1022P_LA2A_Fall1112.pdf"><Glyphicon glyph="download-alt" />
      COMP1022P LA2A</Button> &nbsp;
    <Button href="evaluation/COMP1004_LA1A_Fall1112.pdf"><Glyphicon glyph="download-alt" />
      COMP1004 LA1A </Button> &nbsp;
    <Button href="evaluation/COMP1004_LA1B_Fall1112.pdf"><Glyphicon glyph="download-alt" />
      COMP1004 LA1B </Button> &nbsp;
    <Label bsStyle="warning">COMP1004 &gt; COMP2011</Label> &nbsp;
  </h4>
);

const reportSpring11 = (
  <h4>
    <Button href="evaluation/COMP2012_LA5_Spring1112.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA5 </Button> &nbsp;
    <Button href="evaluation/COMP2012_LA6_Spring1112.pdf"><Glyphicon glyph="download-alt" />
      COMP2012 LA6 </Button> &nbsp;
  </h4>
);

const reportFall10 = (
  <h4>
    <Button href="evaluation/COMP104_LA1A_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA1A </Button> &nbsp;
    <Button href="evaluation/COMP104_LA1C_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA1C </Button> &nbsp;
    <Button href="evaluation/COMP104_T1A_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T1A </Button> &nbsp;
    <Button href="evaluation/COMP104_T1C_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T1C </Button> &nbsp;
    <Button href="evaluation/COMP211_LA1B_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP211 LA1B </Button> &nbsp;
    <Button href="evaluation/COMP211_T1B_Fall1011.pdf"><Glyphicon glyph="download-alt" />
      COMP211 T1B </Button> &nbsp;
    <Label bsStyle="warning">COMP104 &gt; COMP2011</Label> &nbsp;
    <Label bsStyle="danger">COMP211 &gt; COMP3111</Label>
  </h4>
);

const reportSpring10 = (
  <h4>
    <Button href="evaluation/COMP201_L1B_Spring1011.pdf"><Glyphicon glyph="download-alt" />
      COMP201 L1B </Button> &nbsp;
    <Label bsStyle="warning">COMP201 &gt; COMP3021</Label> &nbsp;
  </h4>
);

const reportFall09 = (
  <h4>
    <Button href="evaluation/COMP104_LA1B_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA1B </Button> &nbsp;
    <Button href="evaluation/COMP104_LA1C_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA1C </Button> &nbsp;
    <Button href="evaluation/COMP104_LA2C_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA2C </Button> &nbsp;
    <Button href="evaluation/COMP104_LA3D_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA3D </Button> &nbsp;
    <Button href="evaluation/COMP104_T1A_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T1A </Button> &nbsp;
    <Button href="evaluation/COMP104_T2C_Fall0910.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T2C </Button> &nbsp;
    <Label bsStyle="warning">COMP104 &gt; COMP2011</Label> &nbsp;
  </h4>
);

const reportSpring09 = (
  <h4>
    <Button href="evaluation/COMP152_L2A_Spring0910.pdf"><Glyphicon glyph="download-alt" />
      COMP152 L2A </Button> &nbsp;
    <Button href="evaluation/COMP211_LA1B_Spring0910.pdf"><Glyphicon glyph="download-alt" />
      COMP211 LA1B </Button> &nbsp;
    <Button href="evaluation/COMP211_LA2B_Spring0910.pdf"><Glyphicon glyph="download-alt" />
      COMP211 LA2B </Button> &nbsp;
    <Button href="evaluation/COMP211_T1B_Spring0910.pdf"><Glyphicon glyph="download-alt" />
      COMP211 T1B </Button> &nbsp;
    <Button href="evaluation/COMP211_T2B_Spring0910.pdf"><Glyphicon glyph="download-alt" />
      COMP211 T2B </Button> &nbsp;
    <Label bsStyle="warning">COMP152 &gt; COMP2012 </Label> &nbsp;
    <Label bsStyle="danger">COMP211 &gt; COMP3111</Label>
  </h4>
);

const reportFall08 = (
  <h4>
    <Button href="evaluation/COMP104_LA2A_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA2A </Button> &nbsp;
    <Button href="evaluation/COMP104_LA2C_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA2C </Button> &nbsp;
    <Button href="evaluation/COMP104_T2A_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T2A </Button> &nbsp;
    <Button href="evaluation/COMP104_T2C_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T2C </Button> &nbsp;
    <Button href="evaluation/COMP102_LA1A_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP102 LA1A </Button> &nbsp;
    <Button href="evaluation/COMP102_LA1B_Fall0809.pdf"><Glyphicon glyph="download-alt" />
      COMP102 LA1B </Button> &nbsp;
    <Label bsStyle="warning">COMP104 &gt; COMP2011</Label> &nbsp;
    <Label bsStyle="danger">COMP102 (deprecated)</Label>
  </h4>
);

const reportSpring08 = (
  <h4>
    <Button href="evaluation/COMP171_T2B_Spring0809.pdf"><Glyphicon glyph="download-alt" />
      COMP171 T2B </Button> &nbsp;
    <Button href="evaluation/COMP171_T3C_Spring0809.pdf"><Glyphicon glyph="download-alt" />
      COMP171 T3C</Button> &nbsp;
    <Button href="evaluation/COMP102_LA1B_Spring0809.pdf"><Glyphicon glyph="download-alt" />
      COMP102 LA1B </Button> &nbsp;
    <Label bsStyle="warning">COMP171 &gt; COMP2012</Label> &nbsp;
    <Label bsStyle="danger">COMP102 (deprecated)</Label>
  </h4>
);

const reportFall07 = (
  <h4>
    <Button href="evaluation/COMP104_LA1C_Fall0708.pdf"><Glyphicon glyph="download-alt" />
      COMP104 LA1C </Button> &nbsp;
    <Button href="evaluation/COMP104_T1C_Fall0708.pdf"><Glyphicon glyph="download-alt" />
      COMP104 T1C</Button> &nbsp;
    <Label bsStyle="warning">COMP104 &gt; COMP2011 </Label>
  </h4>
);


const tabsTeachingReportInstance = (
  <Tabs defaultActiveKey={2}>
    <Tab eventKey={1} title="Spring 17">{reportSpring17}</Tab>
    <Tab eventKey={2} title="Winter 16">{reportWinter16}</Tab>

    <Tab eventKey={3} title="Fall 16">{reportFall16}</Tab>
    <Tab eventKey={4} title="Spring 16">{reportSpring16}</Tab>

    <Tab eventKey={5} title="Fall 15">{reportFall15}</Tab>
    <Tab eventKey={6} title="Spring 15">{reportSpring15}</Tab>

    <Tab eventKey={7} title="Fall 14">{reportFall14}</Tab>
    <Tab eventKey={8} title="Spring 14">{reportSpring14}</Tab>

    <Tab eventKey={9} title="Fall 13">{reportFall13}</Tab>

    <Tab eventKey={10} title="Fall 11">{reportFall11}</Tab>
    <Tab eventKey={11} title="Spring 11">{reportSpring11}</Tab>

    <Tab eventKey={12} title="Fall 10">{reportFall10}</Tab>
    <Tab eventKey={13} title="Spring 10">{reportSpring10}</Tab>

    <Tab eventKey={14} title="Fall 09">{reportFall09}</Tab>
    <Tab eventKey={15} title="Spring 09">{reportSpring09}</Tab>

    <Tab eventKey={16} title="Fall 08">{reportFall08}</Tab>
    <Tab eventKey={17} title="Spring 08">{reportSpring08}</Tab>

    <Tab eventKey={18} title="Fall 07">{reportFall07}</Tab>
  </Tabs>
);

const summaryGoodPointsHeader = <h3><Glyphicon glyph="thumbs-up" /> What was good about Peter?</h3>;
const summaryBadPointsHeader = <h3><Glyphicon glyph="thumbs-down" /> How might Peter be improved? </h3>;

import summaryCOMP1001 from './data/summaryCOMP1001';
import TeachingSummary from './TeachingSummary';


const summaryCOMP1001GoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>TA always prepared very interesting and useful material for the labs,
        which was ready for students to learn from without any problems.
        TA was always friendly answered the questions and provided with help when it was needed.
        Feedback was always up to date and accurate </li>
      <li>Friendly - Very familiar with the content.
        Made excellent content and instructions for each lab</li>
      <li>He always answers questions that we don{'\''}t understand and helps us.
        He replies to emails quite fast and efficiently</li>
      <li>Very well answered and presented upon my questions!
        Very kind and able to solve all sorts of problem!</li>
    </ol>
  </Panel>
);

const summaryCOMP1001BadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>Present how some of the lab activities can be sueful in real life</li>
      <li>Try to help students actively instead of asking them to find alternative solution</li>
      <li>Interaction and increase attractiveness of lab course</li>
    </ol>
  </Panel>
);

const summaryCOMP1022PGoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol className="padding-left-1cm good-block">
      <li>Perfect tutor ever</li>
      <li>Teach by heart</li>
      <li>Really helpful in learning</li>
      <li>The TA was able to guide us through the lab work thoroughly</li>
      <li>If I have questions about my lab work or assignments,
          he will answer my question within a short time interval.</li>
      <li>TA would help students who do not know how to do the lab section.</li>
      <li>The TA really listens to us and answers our question, at the same time
          giving rooms for us to figure out the solutions.</li>
      <li>He always helps me to do the lab, explain to my questions clearly</li>
      <li>Easy to communicate. Good at solving problems</li>
      <li>Very kind and helpful. He also has a deep knowledge about the course.</li>
      <li>Very nice and friendly. Good in English.</li>
    </ol>
  </Panel>
);

const summaryCOMP1022PBadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>During the lab he would aid students with the first part,
        but the second part we are on our own to solve the issue.</li>
      <li>Have more TAs, sometimes students have to wait for a long time to
        ask questions or ask for checking of Labs</li>
      <li>He can prepare more and more examples for lab work or assignments.
        It is because this is the first time that we learn to write codes.
        While some codes are difficult to understand and we need a lot of
        examples. And we are not sure  whether the codes written by us are right or not.</li>
      <li>Teach more basic concepts</li>
    </ol>
  </Panel>
);

const summaryCOMP1029CGoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>Quick response to emails</li>
    </ol>
  </Panel>
);

const summaryCOMP1029CBadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>Please check the emails in a more detailed way</li>
    </ol>
  </Panel>
);

const summaryCOMP1029JGoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>Explain things clearly</li>
      <li>I can see that the TA has very solid knowledge about Java</li>
    </ol>
  </Panel>
);

const summaryCOMP1029JBadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>The videos could be shorter if possible</li>
    </ol>
  </Panel>
);

const summaryCOMP2011GoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>Peter is very devoted into his work that he is always approachable even on Sundays</li>
      <li>Explain things in an organised and detailed way</li>
      <li>He was good because he actually explained what was taught in lectures,
        step by step, instead of just doing examples on computer</li>
      <li>Can explain things well and help me understand difficult concept</li>
      <li>Attentive and patient to spend his personal time for us to ask him questions</li>
      <li>He can answer questions not limited to tutorials, but also in assignments,
        labs and lecture notes.</li>
      <li>Friendly in talking</li>
      <li>Nice and helpful</li>
      <li>Energetic</li>
      <li>Responsible</li>
      <li>Good knowledge in programming</li>
    </ol>
  </Panel>
);

const summaryCOMP2011BadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>Please write larger when using the whiteboards, and please use darker pens</li>
      <li>More tricky questions should be given</li>
      <li>Be more helpful about exams</li>
      <li>He can explain or encourage more to the students who can{"'"}t catch up with the progress</li>
      <li>The pronounciation can be improved</li>
    </ol>
  </Panel>
);

const summaryCOMP2012GoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>Response to email questions very quickly</li>
      <li>The TA who introduces the lab content is very well-prepared.</li>
      <li>Very nice and willing to solve the question raised by student</li>
      <li>He wants to help us thoroughly until we are able to understand</li>
      <li>He is patient and kind, so I am not hesitate to ask him questions</li>
      <li>He can explain the course material well</li>
      <li>He is nice</li>
    </ol>
  </Panel>
);

const summaryCOMP2012BadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>The grade of the programming assignment should be released
        before the next programming assignment</li>
      <li>Wonder that if the assignments can be returned as soon as possible</li>
    </ol>
  </Panel>
);

const summaryCOMP3111GoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li> Peter is one of the best persons I have met in my life.
        Very friendly TA with solid background of his field.
         Very interesting way of taching with clear accent. </li>
      <li>Already the best TA in HKUST</li>
      <li>Go over tutorial notes with great details</li>
      <li>Extremely familiar with the tutorial materials</li>
      <li>Clear explanation of course materials and possesses adequate knowledge</li>
      <li>Easy to reach</li>
      <li>Very good in guiding us to complete the exercises and preparing for the exam</li>
      <li>Very funny and helpful</li>
      <li>Very direct and to-the-point</li>
      <li>Good interaction with students</li>
      <li>Make the students feel his interest in software engineering</li>
      <li>Attentive with students giving feedbacks</li>
      <li>He was very friendly</li>
    </ol>
  </Panel>
);

const summaryCOMP3111BadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>too often to ask O.K.?</li>
      <li>For the project demo, he kept distracting us
        while we were doing and figuring out the procedures of the demo,
        which may seem interacting with students to him,
        but distracting and annoying to us</li>
      <li>The attitude of teaching could be better. (1999)</li>
      <li>Should be more information for the materials</li>
      <li> Re-align the mismatch between the posted grading criteria
        and the actual grading scenario </li>
      <li>Seems like he favors students who speak Cantonese...</li>
      <li>He should at least have some knowledge about the course material</li>
    </ol>
  </Panel>
);

const summaryCOMP4511GoodPoints = (
  <Panel bsStyle="success" header={summaryGoodPointsHeader}>
    <ol>
      <li>Peter tried to be helpful. </li>
    </ol>
  </Panel>
);

const summaryCOMP4511BadPoints = (
  <Panel bsStyle="danger" header={summaryBadPointsHeader}>
    <ol>
      <li>He grades assignment too slowely</li>
      <li>Peter shall try to learn more about the course,
        and prepare better lab/assignments</li>
    </ol>
  </Panel>
);


// const summaryCOMP1001 = (
//   <div>
//     <h4>Exploring Multimedia and Internet Computing</h4>
//     <Grid>
//       <Row>
//         <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1001GoodPoints}</Col>
//         <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1001BadPoints}</Col>
//       </Row>
//     </Grid>
//   </div>
// );

const summaryCOMP1022P = (
  <div>
    <h4>Introduction to Computing in Java</h4>

    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1022PGoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1022PBadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP1029C = (
  <div>
    <h4>C Bridging Course</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1029CGoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1029CBadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP1029J = (
  <div>
    <h4>Java Bridging Course</h4>

    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1029JGoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1029JBadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP2011 = (
  <div>
    <h4>Introduction to Object-oriented Programming</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP2011GoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP2011BadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP2012 = (
  <div>
    <h4>Object-oriented Programming and Data Structures</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP2012GoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP2012BadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP3111 = (
  <div>
    <h4>Software Engineering</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP3111GoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP3111BadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const summaryCOMP4511 = (
  <div>
    <h4>System and Kernel Programming in Linux</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP4511GoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP4511BadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

const tabsTeachingSummaryInstance = (
  <Tabs defaultActiveKey={1} id="tabsTeachingSummary">
    <Tab eventKey={1} title="COMP1001"><TeachingSummary summary={summaryCOMP1001} /></Tab>
    <Tab eventKey={2} title="COMP1022P">{summaryCOMP1022P}</Tab>
    <Tab eventKey={3} title="COMP1029C">{summaryCOMP1029C}</Tab>
    <Tab eventKey={4} title="COMP1029J">{summaryCOMP1029J}</Tab>
    <Tab eventKey={5} title="COMP2011">{summaryCOMP2011}</Tab>
    <Tab eventKey={6} title="COMP2012">{summaryCOMP2012}</Tab>
    <Tab eventKey={7} title="COMP3111">{summaryCOMP3111}</Tab>
    <Tab eventKey={8} title="COMP4511">{summaryCOMP4511}</Tab>
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
      <Row className="Padder"><BasicProfile profile={PROFILE.basic} /></Row>
      <Row>&nbsp;</Row>
      <Row className="Padder">{profileDetails}</Row>
      <Row>
        <div>
          <h3><strong>Teaching Evaluation Summary</strong></h3>
          {tabsTeachingSummaryInstance}
        </div>
      </Row>
      <Row>
        <div className="Padder">
          <h3><strong>Teaching Evaluation Reports</strong></h3>
          {tabsTeachingReportInstance}
        </div>
      </Row>
    </Grid>
    <hr />
    {footerInstance}
  </div>

);

const App = () => root;
export default App;
