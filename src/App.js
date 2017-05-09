import React from 'react';
import {
  Row,
  Col,
  Grid,
  Carousel,
  Image,
  Panel,
  Accordion,
  Glyphicon,
  Tabs,
  Tab,
  Button,
  Label,
} from 'react-bootstrap';
import './App.css';


const carouselItems = [
  { evt: 'hackUST 2017', fn: 'hackUST_2017.png' },
  { evt: 'SENG Shenzhen Alumni Gathering 2017', fn: 'SENG_Engineering_Alumni_Gathering_2017.jpg' },
  { evt: 'Microsoft ImagineHack 2017', fn: 'Microsoft_ImagineHack_2017.jpg' },
  { evt: 'HealthTech Asia 2017', fn: 'habhub-health-tech-asia-2017.jpg' },
  { evt: 'Hour of Code Hong Kong 2nd anniversary', fn: 'HoC-2nd-anniversary-HabHub-Booth.jpg' },
  { evt: 'Hack-O-Life 2016', fn: 'hack-of-life-2016.jpg' },
  { evt: 'JeJu Hackathon 2016, South Korea', fn: 'JeJu_Hackathon_2016_Blogory.jpg' },
  { evt: 'hackJam 2016', fn: 'hackJam_2016.jpg' },
  { evt: 'CSESS Photo Taking 2016', fn: 'CSESS_PhotoTaking_2016.jpg' },
  { evt: 'HKUST Alumni Homecoming Workshop 2016', fn: 'HKUST_Alumni_Homecoming_Workshop_2016.jpg' },
  { evt: 'HKU Dreamcatcher Hackathon 2016', fn: 'HKU_Dreamcatcher_Hackathon_2016.jpg' },
  { evt: 'HKUST SENG Alumni Fun Day 2016', fn: 'SENG_Alumni_Fun_Day_2016.jpg' },
  { evt: 'World Internet Developer Summit 2016', fn: 'ISOC_HK_WIDS2016_Dinner.jpg' },
  { evt: 'HKUST A1 Entrepreneurship Night 2016', fn: 'A1_Entrepreneurship_Night_2016.jpg' },
  { evt: 'HKUST 25th Anniversary Exhibition', fn: 'HKUST_25A_Exhibition.jpg' },
  { evt: 'hackUST 2016', fn: 'hackUST_2016.jpg' },
  { evt: 'HKUST Alumni Association A1 Startup Award Ceremony 2016', fn: 'HKUST_A1_Startup_Award_Ceremony_2016.jpg' },
  { evt: 'SENG Engineering Alumni Gathering 2015 in Shenzhen', fn: 'SENG_Engineering_Alumni_Gathering_2015.jpg' },
  { evt: 'CSE Alumni Homecoming Day 2015', fn: 'CSE_alumni_homecoming_day_2015.jpg' },
  { evt: 'Hour of Code@HKUST 2015', fn: 'HOC_for_alumni_families_2015.jpg' },
  { evt: 'SIGHT Camp Closing Ceremony 2015', fn: 'SIGHT_Camp_Closing_2015.jpg' },
  { evt: 'CSESS Photo Taking 2015', fn: 'CSESS_PhotoTaking_2015.jpg' },
  { evt: 'SIGHT MIT AppInventor 2 Workshop 2015', fn: 'SIGHT_MIT_AppInventor2_workshop_2015.jpg' },
  { evt: 'Mooncakes from Tencent Foundation', fn: 'hackUST_Tencent_Mooncakes.jpg' },
  { evt: 'SIGHT Cambodia Trip 2015', fn: 'SIGHT_cambodia_trip_2015.jpg' },
  { evt: 'CSESS Farewell Dinner 2015', fn: 'CSESS_Farewell_Dinner_2015.jpg' },
  { evt: 'hackUST 2015 Media Briefing', fn: 'Hackathon_Media_Briefing_2015.jpg' },
  { evt: 'SIGHT High School Workshop 2015', fn: 'SIGHT_workshop_2015.jpg' },
  { evt: 'SENG Alumni Family Fun Day 2015', fn: 'SENG_Alumni_Family_Funday_2015.jpg' },
  { evt: 'hackUST 2015', fn: 'Hackathon_2015.jpg' },
  { evt: 'CSEAA Mentorship Program Kick-off Meeting 2015', fn: 'CSEAA_Mentorship_Kickoff_2015.jpg' },
  { evt: 'CSESS Open Semester Party 2015', fn: 'CSESS_OpenSem_Gathering_2015.jpg' },
  { evt: 'CSESS Promotion Period 2015', fn: 'CSESS_Promotion_Period_2015.jpg' },
  { evt: 'CSESS Annual Dinner 2014', fn: 'CSESS_Annual_Dinner_2014.jpg' },
  { evt: 'CSE Alumni Gathering and Dinner 2014', fn: 'CSEAA_Annual_Gathering_2014.jpg' },
  { evt: 'CSESS Photo Taking Day 2014', fn: 'CSESS_PhotoTaking_2014.jpg' },
  { evt: 'CSESS Farewell HighTable Dinner 2014', fn: 'CSESS_Farewell_HighTable_Dinner_2014.jpg' },
  { evt: 'hackUST 2014', fn: 'EClub_Hackathon_2014.jpg' },
  { evt: 'CSEAA Mentorship Program Kick-off Meeting 2014', fn: 'CSEAA_Mentorship_Kickoff_2014.jpg' },
  { evt: 'CSESS Open Semester Party 2014', fn: 'CSESS_OpenSem_Party_2014.jpg' },
  { evt: 'CSESS Promotion Period 2014', fn: 'CSESS_Promotion_Period_2014.jpg' },
  { evt: 'CSESS Annual Dinner 2013', fn: 'CSESS_Annual_Dinner_2013.jpg' },
  { evt: 'CSE Alumni Gathering and Dinner 2013', fn: 'CSEAA_Annual_Gathering_2013_big.jpg' },
  { evt: 'CSESS Photo Taking Day 2013', fn: 'CSESS_PhotoTaking_2013.jpg' },
  { evt: 'CSESS Farewell HighTable Dinner 2012', fn: 'CSESS_Farewell_HighTable_Dinner_2012_big.jpg' },
  { evt: 'CSESS Annual Dinner 2011', fn: 'CSESS_Annual_Dinner_2011_big.jpg' },
  { evt: 'CSESS Annual Dinner 2010', fn: 'CSESS_Annual_Dinner_2010_big.jpg' },
];

const carouselItemsInstance = carouselItems.map(item => (
  <Carousel.Item>
    <Image className="center-block" src={`slideshow_images/${item.fn}`} responsive alt={item.evt} />
    <Carousel.Caption>
      <h3>{item.evt}</h3>
    </Carousel.Caption>
  </Carousel.Item>
));

const carouselInstance = (
  <Carousel wrap indicators={false} className="Carousel" >
    {carouselItemsInstance}
  </Carousel>
);

const profileInformation = (
  <div>
    <h3><strong>K.L. Peter CHUNG</strong></h3>
    <em> Teaching Associate </em>
    <br />
    <a href="http://www.cse.ust.hk/">Department of Computer Science and Engineering, HKUST</a>
    <br />
    <p>Office: Room 4209 (Lift 19, near CS Lab 4)</p>
    <hr />
    <p>MSc, Information Technology in Education, HKU (E-learning specialism)</p>
    <p>MPhil, Computer Science and Engineering, HKUST</p>
    <p>BEng, Computer Science (Information Engineering), HKUST (First Class Honors)</p>
  </div>
);

const profileDescription = (
  <div>
    <p>Mr Chung has <strong>more than 8 years of experience </strong>
    in the higher education sector,
    with solid experience in software engineering, entrepreneurship,
    alumni engagement
    and strong connections with the local startup community.
    </p>
  </div>
);

const profileContentHackOC = (
  <div>
    <p>
  Mr. Chung co-founded hackUST in 2014, and was the lead staff organizer in 2014-2016.
  The competitions were opened to all university students and alumni in Hong Kong.
  These Hackathons ignited creativity and can-do spirit among university students.
    </p>
    <p>He also involved in organizing the following Hackathons:</p>
    <ul>
      <li>Ambassador - AngelHack Hong Kong 2017</li>
      <li>Organizing Committee Leader -
        <a href="https://imaginehack-2017.devpost.com/">Microsoft ImagineHack Hong Kong 2017</a>
      </li>
      <li>Organizer - <a href="http://hack.ust.hk" >hackUST</a> 2014-16</li>
      <li>Organizer - <a href="http://hack.ust.hk/hackjam" >hackJam</a> 2016 </li>
      <li>Ambassador - <a href="http://hackathon.cathaypacific.com/">Cathay Pacific Hackathon 2016</a> </li>
      <li>Judge - <a href="https://www.eventbrite.com/e/cyberport-fintech-hackathon-2016-tickets-27166228922#">Cyberport FinTech Hackathon 2016</a></li>
      <li>Committee Member - <a href="http://angelhack.com/angelhack-hong-kong-2016/">Angelhack Hong Kong 2016</a> </li>
      <li>Guest Ambassador - <a href="http://www.fishackathon.co/hongkong">Fishackathon Hong Kong 2016</a> </li>
    </ul>
  </div>
);

const profileContentHacker = (
  <div>
    <p>Mr. Chung participated and won many Hackathons in Hong Kong and oversea:</p>
    <ul>
      <li>Top 5 in HealthCare theme - <a href="http://hack.ust.hk/hack2017/index.html">hackUST 2017</a></li>
      <li>Participant - SuperCharger FinTech Hackathon 2017</li>
      <li>AIA Award Winner, <a href="https://hackathon.cisco.com/event/hackolife-hongkong">Hack-O-Life Hong Kong 2016</a></li>
      <li>Ambassador - <a href="http://hackathon.cathaypacific.com/">Cathay Pacific Hackathon 2016</a> </li>
      <li>Participant - <a href="http://www.fthackathon.com/">fthackathon 2016</a> </li>
      <li>Participant - JeJu Hackathon 2016, South Korea </li>
      <li>Guest - <a href="https://polyhack.hk/">PolyHack Hong Kong 2016</a> </li>
      <li>Winner - Tencent Hackathon 2015, Tencent Headquarter, Shenzhen</li>
    </ul>
  </div>
);

const profileContentStartup = (
  <div>
    <p>Mr. Chung is a <strong>co-founder</strong> of
  <a href="https://habhub.tech"><strong>
    <span className="HabWordStyle">Hab</span><span className="HubWordStyle">Hub</span>
  </strong></a></p>
    <ul>
      <li>Awards received by HabHub
          <ul>
            <li>Best Technology Application Award, <a href="http://www.youth.gov.hk/en/special/siceo/">Social Innovation CEO Competition (2016/17)</a></li>
            <li>Grantee, <a href="https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund" >Cyberport Creative Micro Fund 2016</a></li>
            <li>Awardee, <a href="http://www.ec.ust.hk/pages/db.html">HKUST Entrepreneurship Acceleration Fund</a></li>
            <li>AIA Award, <a href="https://hackathon.cisco.com/event/hackolife-hongkong">Hack-O-Life Hong Kong 2016</a></li>
            <li>Finalist, <a href="http://mthackathon.info/needs">Dreamcatchers Medtech Hackathon 2016</a></li>
          </ul>
      </li>
      <li>Media coverage
          <ul>
            <li>2017-03-23: <a href="https://www.am730.com.hk/column/%E6%96%B0%E8%81%9E/%E7%A4%BE%E5%89%B5ceo%E5%A4%A7%E5%B0%88%E8%B3%BD-%E5%A4%A7%E5%B0%88%E7%94%9F%E3%80%8C%E5%A5%BD%E6%A9%8B%E3%80%8D%E6%89%B6%E8%B2%A7-71215" >AM730</a> (Chinese) </li>
            <li> 2016-07-03: <a href="http://bit.ly/mtech16_habhub_at_hk01"> HK01 News </a> (Chinese) </li>
            <li> 2016-07-06: <a href="http://unwire.pro/2016/07/06/hkstp-host-hk-1st-dreamcatchers-medtech-hackathon/feature/" >Unwire.Pro</a> (Chinese)</li>
            <li> 2016-11-14: <a href="http://www.itpromag.com/hack-o-life-2016-23102">IT Pro Magazine </a> (Chinese)</li>
            <li>2016-11-14: <a href="http://hd.stheadline.com/news/columns/0/20161114/513252/" >Headline Daily </a> (Chinese) </li>
            <li>2016-11-16: <a href="http://www.telecompaper.com/news/aia-cisco-hong-kong-univ-launch-hack-o-life-event--1172099" >Telecompaper</a> (English)</li>
          </ul>
      </li>
      <li>Exhibitions
          <ul>
            <li>2017-03-24: Smart Living@Science Park </li>
            <li>2016-11-30: HKUST Startups x Investors</li>
            <li>2016-12-04: Hour of Code Hong Kong 2nd anniversary</li>
            <li>2017-01-20: HealthTech Asia 2017</li>
          </ul>
      </li>
    </ul>
  </div>
);

const profileContentVolunteer = (
  <div>
    <p> Mr. Chung was the founding President of the preparation committee of CSE
      Alumni Association (CSEAA) in 2014. Partnering with Department of
      Computer Science and Engineering at HKUST, mentorship programs were
      launched to enrich students’ industrial exposure in 2014 and 2015</p>
    <p>He is an alumni fellow of The Academy for Bright Future Young Engineers,
      HKUST. He occasionally involved in various Hours of Code events
      in Hong Kong.</p>
    <ul>
      <li>Founding President - CSE Alumni Association (CSEAA) 2014
            <em><small>(Vice President in 2015-16, Treasurer in 2017-)</small>
            </em> </li>
      <li>Organizer, Operation Team, Hong Kong Open Source Conference 2017</li>
      <li>Alumni Fellow - <a href="http://abfye.ust.hk">The Academy for Bright
        Future Young Engineers, HKUST</a> 2017 - </li>
      <li>Organizing Committee Member - World Internet Developer Summit 2016</li>
    </ul>
  </div>

);

const profileContentAdvisor = (
  <div>
    <p> Mr. Chung served as an advisor in SIGHT and assisted a student-driven team to
       develop an electronic health record system for a NGO in Cambodia.
       After a year of development, he joined the team to deploy the software
        system in Cambodia in 2015. The system was well-received
        by the partnering NGO.</p>
    <p>In 2013, he served as Academic Counsellor in Department of
      Computer Science and Engineering and Faculty Advisor in School of Engineering.</p>
  </div>

);

const profileContentTeaching = (
  <div>
    <p>He was an awardee of the Professor Samuel Chanson Best Teaching Assistant in 2008. </p>
    <p>In 2012-13, he led a team of teaching assistant to help develop a new Java programming course
      tailor-made for year-1 students in the new 334-curriculum</p>
  </div>
);

const profileHeaderHackOC = <h3><Glyphicon glyph="star" /> a passionate hackathon organizer</h3>;
const profileHeaderHacker = <h3><Glyphicon glyph="user" /> an active hackathon participant</h3>;
const profileHeaderStartup = <h3><Glyphicon glyph="tint" />  a health-tech startup co-founder</h3>;
const profileHeaderVolunteer = <h3><Glyphicon glyph="gift" /> a motivated volunteer</h3>;
const profileHeaderAdvisor = <h3><Glyphicon glyph="comment" /> a friendly student advisor</h3>;
const profileHeaderTeaching = <h3><Glyphicon glyph="education" /> an experienced teaching support</h3>;


const profileDetails = (
  <Accordion className="Accordion">
    <Panel header={profileHeaderHackOC} eventKey="ac1" bsStyle="default" >
      {profileContentHackOC}
    </Panel>
    <Panel header={profileHeaderHacker} eventKey="ac2" bsStyle="default" >
      {profileContentHacker}
    </Panel>
    <Panel header={profileHeaderStartup} eventKey="ac3" bsStyle="default">
      {profileContentStartup}
    </Panel>
    <Panel header={profileHeaderVolunteer} eventKey="ac4" bsStyle="default">
      {profileContentVolunteer}
    </Panel>
    <Panel header={profileHeaderAdvisor} eventKey="ac5" bsStyle="default">
      {profileContentAdvisor}
    </Panel>
    <Panel header={profileHeaderTeaching} eventKey="ac6" bsStyle="default">
      {profileContentTeaching}
    </Panel>
  </Accordion>
);

const profileInstance = (
  <Grid>
    <Row>
      <Col xs={12} sm={6} md={3} lg={2}>
        <Image
          className="center-block" thumbnail responsive
          src="assets/profile_peter.jpg" alt="Profile picture"
        />
      </Col>
      <Col xs={12} sm={6} md={3} lg={3}>
        {profileInformation}
        <hr />
      </Col>
      <Col xs={12} sm={12} md={6} lg={7}>
        {profileDescription}
        {profileDetails}
      </Col>
    </Row>
  </Grid>
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


const summaryCOMP1001 = (
  <div>
    <h4>Exploring Multimedia and Internet Computing</h4>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1001GoodPoints}</Col>
        <Col xs={12} sm={12} md={6} lg={6}>{summaryCOMP1001BadPoints}</Col>
      </Row>
    </Grid>
  </div>
);

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
  <Tabs defaultActiveKey={1}>
    <Tab eventKey={1} title="COMP1001">{summaryCOMP1001}</Tab>
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
  </div>
);


const root = (
  <div className="App">
    <Grid>
      <Row>
        &nbsp;
      </Row>

      <Row>
        {carouselInstance}
      </Row>

      <Row>
        {profileInstance}
      </Row>

      <Row>
        <div className="Padder">
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
    <br /><br />
  </div>

);

const App = () => root;

export default App;
