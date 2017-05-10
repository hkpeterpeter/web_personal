const MScITE = 'MSc, Information Technology in Education, HKU (E-learning specialism)';

const MPhilCSE = 'MPhil, Computer Science and Engineering, HKUST';

const BEngCSIE = 'BEng, Computer Science (Information Engineering), HKUST (First Class Honors)';

const profileDescription = `Mr Chung has more than 8 years of experience in the higher education sector,
with solid experience in software engineering, entrepreneurship, alumni engagement
and strong connections with the local startup community.`;

const expHackOCDescription = `Mr. Chung is a passionate hackathon organizer.
He co-founded hackUST in 2014 and was the lead organizer
in 2014-16. He is one of the leaders promoting hackathon competitions in Hong Kong.`;

const makeJob = (title, org, period, url) => ({ title, org, period, url });
const makeAward = (title, org, period, url, country) => ({ title, org, period, url, country });

const angelHackAmbassador = makeJob('Ambassador', 'AngelHack Hong Kong', '2017');

const microsoftOCLeader = {
  title: 'Organizing Committee Leader',
  org: 'Microsoft Imagine Hack',
  period: '2017',
  url: 'https://imaginehack-2017.devpost.com/',
};

const hackUSTOrganizer = {
  title: 'Co-founder and Organizer',
  org: 'hackUST',
  period: '2014-16',
  url: 'http://hack.ust.hk/',
};

const hackJamOrganizer = {
  title: 'Organizer',
  org: 'hackJam',
  period: '2016',
  url: 'http://hack.ust.hk/hackjam',
};

const cathayHackathonAmbassador = {
  title: 'Ambassador',
  org: 'Cathay Pacific Hackathon',
  period: '2016',
  url: 'http://hackathon.cathaypacific.com/',
};

const cyberportFinTechHackathonJudge = {
  title: 'Judge',
  org: 'Cyberport FinTech Hackathon',
  period: '2016',
  url: 'https://www.eventbrite.com/e/cyberport-fintech-hackathon-2016-tickets-27166228922#',
};

const angelHackHongKongOCMember = {
  title: 'Organizing Committee Member',
  org: 'AngelHack Hong Kong',
  period: '2016',
  url: 'http://angelhack.com/angelhack-hong-kong-2016/',
};

const fishHackathonAmbassador = {
  title: 'Ambassador',
  org: 'Fishackathon Hong Kong',
  period: '2016',
  url: 'http://www.fishackathon.co/hongkong',
};

const expHackOC = {
  title: 'a passionate hackathon organizer',
  description: expHackOCDescription,
  jobs: [
    angelHackAmbassador,
    microsoftOCLeader,
    hackUSTOrganizer,
    hackJamOrganizer,
    cathayHackathonAmbassador,
    cyberportFinTechHackathonJudge,
    angelHackHongKongOCMember,
    fishHackathonAmbassador,
  ],
};

const expHackParticipantDescription = `Mr Chung is an active Hackathon participant.
He participated and won many Hackathons in Hong Kong and oversea`;



const awardHackUST2017 = {
  title: 'Top 5 in HealthCare theme',
  org: 'hackUST',
  period: '2017',
  url: 'http://hack.ust.hk/hack2017/index.html',
  country: 'Hong Kong',
};

const awardSuperChargerFinTechHackathon2017 = {
  title: 'participant',
  org: 'SuperCharger FinTech Hackathon',
  period: '2017',
  country: 'Hong Kong',
};

const awardHackOLifeHongKong2016 = {
  title: 'AIA Award Winner',
  org: 'Hack-O-Life',
  period: '2016',
  url: 'https://hackathon.cisco.com/event/hackolife-hongkong',
  country: 'Hong Kong',
};

const awardFTHackathon2016 = {
  title: 'Particpant',
  org: 'fthackathon',
  period: '2016',
  url: 'http://www.fthackathon.com/',
  country: 'Hong Kong',
};

const awardJeJuHackathon2016 = {
  title: 'Particpant',
  org: 'JeJu Hackathon',
  period: '2016',
  country: 'South Korea',
};

const awardTencentHackathon2015 = {
  title: 'Winner',
  org: 'Tencent Charity Hackathon',
  period: '2015',
  country: 'China',
};

const expHackParticipant = {
  title: 'an active hackathon participant',
  description: expHackParticipantDescription,
  awards: [
    awardHackUST2017,
    awardSuperChargerFinTechHackathon2017,
    awardHackOLifeHongKong2016,
    awardFTHackathon2016,
    awardJeJuHackathon2016,
    awardTencentHackathon2015,
  ],
};

const expStartupHabHubDescription = `Mr. Chung is a co-founder of HabHub, a health-tech
startup with a mission to improve home rehabilitation experience, especially for post-stroke patients.
HabHub received many awards and funding support.`;

const awardSocialInnovation = {
  title: 'Best Technology Application Award',
  org: 'Social Innovation CEO Competition',
  period: '2016/17',
  url: 'http://www.youth.gov.hk/en/special/siceo/',
};
const awardCCMF = {
  title: 'Grantee',
  org: 'Cyberport Creative Micro Fund',
  period: '2016',
  url: 'https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund',
};
const awardHKUSTFund = {
  title: 'Awardee',
  org: 'HKUST Entrepreneurship Acceleration Fund',
  period: '2016',
  url: 'http://www.ec.ust.hk/pages/db.html',
};
const awardDreamCatchersMedTechHackathon = {
  title: 'Finalist',
  org: 'Dreamcatchers Medtech Hackathon',
  period: '2016',
  url: 'http://mthackathon.info/needs',
};

const mediaHabHubHK01 = {
  publisher: 'HK01 News',
  date: '2016-07-03',
  url: 'http://bit.ly/mtech16_habhub_at_hk01',
};

const mediaHabHubUnwire = {
  publisher: 'Unwire.Pro',
  date: '2016-07-06',
  url: 'http://unwire.pro/2016/07/06/hkstp-host-hk-1st-dreamcatchers-medtech-hackathon/feature/',
};

const mediaHabHubITProMag = {
  publisher: 'IT Pro Magazine',
  date: '2016-11-14',
  url: 'http://www.itpromag.com/hack-o-life-2016-23102',
};

const mediaHabHubHeadlineDaily = {
  publisher: 'Headline Daily',
  date: '2016-11-14',
  url: 'http://hd.stheadline.com/news/columns/0/20161114/513252/',
};


const mediaHabHubAM730 = {
  publisher: 'AM730',
  date: '2017-03-23',
  url: 'https://www.am730.com.hk/column/%E6%96%B0%E8%81%9E/%E7%A4%BE%E5%89%B5ceo%E5%A4%A7%E5%B0%88%E8%B3%BD-%E5%A4%A7%E5%B0%88%E7%94%9F%E3%80%8C%E5%A5%BD%E6%A9%8B%E3%80%8D%E6%89%B6%E8%B2%A7-71215',
};

const expStartupHabHub = {
  title: 'a health-tech startup co-founder',
  description: expStartupHabHubDescription,
  awards: [
    awardSocialInnovation,
    awardCCMF,
    awardHKUSTFund,
    awardHackOLifeHongKong2016,
    awardDreamCatchersMedTechHackathon,
  ],
  media: [
    mediaHabHubHK01,
    mediaHabHubUnwire,
    mediaHabHubITProMag,
    mediaHabHubHeadlineDaily,
    mediaHabHubAM730,
  ],
};

const CSEAAFoundingPresident = makeJob('Founding President', 'CSEAA', '2014', 'http://www.cse.ust.hk/cseaa/');
const CSEAAVicePresident = makeJob('Vice President', 'CSEAA', '2015-16', 'http://www.cse.ust.hk/cseaa/');
const CSEAATreasurer = makeJob('Treasurer', 'CSEAA', '2017', 'http://www.cse.ust.hk/cseaa/');
const HKOSCOrganizer = makeJob('Organizer, Operation Team', 'Hong Kong Open Source Conference', '2017');
const ABFYEAlumniFellow = makeJob('Alumni Fellow', 'The Academy for Bright Future Young Engineers, HKUST', '2017', 'http://abfye.ust.hk/');
const WIDSOCMember = makeJob('Organizing Committee Member', 'World Internet Developer Summit', '2016');

const expVolunteerDescription = `Mr Chung is a motivated volunteer. He is the founding
President of CSE Alumni Association.  Partnering with
Department of Computer Science and Engineering at HKUST,
mentorship programs were launched to enrich students’ industrial exposure
in 2014 and 2015. He is an alumni fellow of The Academy for Bright Future Young Engineers,
HKUST with a mission to promote STEM education in Hong Kong.
He occasionally involved in various Hours of Code events in Hong Kong.`;

const expVolunteer = {
  title: 'a motivated volunteer',
  description: expVolunteerDescription,
  jobs: [
    CSEAAFoundingPresident,
    CSEAAVicePresident,
    CSEAATreasurer,
    HKOSCOrganizer,
    ABFYEAlumniFellow,
    WIDSOCMember,
  ],
};

const expStudentAdvisorDescription = `Mr Chung is a friend student advisor.
served as an advisor in SIGHT and assisted a student-driven team to develop
an electronic health record system for a NGO in Cambodia.
After a year of development, he joined the team to deploy the software system in Cambodia in 2015.
The system was well-received by the partnering NGO.
In 2013, he served as Academic Counsellor in Department of Computer Science and Engineering
and Student Advisor in School of Engineering.`;

const SIGHTAdvisor = makeJob('Advisor', 'Student Innovation for Global Health Technology (SIGHT)',
    '2015-16', 'http://sight.ust.hk/');
const EClubAdvisor = makeJob('Advisor', 'CSE Entrepreneurship Club', '2014-16', 'http://e-club.cse.ust.hk');
const CSEOneAdvisor = makeJob('Advisor', 'CSE One', '2014-16', 'http://one.cse.ust.hk');
const CSEAcademicCounsellor = makeJob('Academic Counsellor', 'Dept. of CSE, HKUST', '2013/14');
const SENGStudentAdvisor = makeJob('Student Advisor', 'School of Engineering, HKUST', '2013/14');

const expStudentAdvisor = {
  title: 'a friendly student advisor',
  description: expStudentAdvisorDescription,
  jobs: [
    SIGHTAdvisor,
    EClubAdvisor,
    CSEOneAdvisor,
    CSEAcademicCounsellor,
    SENGStudentAdvisor,
  ],
};

const expTeachingSupportDescription = `
  Mr. Chung is an experienced teaching support.
  He is an awardee of the Professor Samuel Chanson Best Teaching Assistant in 2008.
  In 2011-12, he led a team of teaching assistant to help
  develop a new Java/Greenfoot programming course tailor-made for year-1 students
  in the new 334-curriculum. Since 2015, he helped prepare teaching materials
  related to software engineering (e.g. Bootstrap, AngularJS, AWS, Git) and
  Linux system and kernel programming`;

const expTeachingAssociate = makeJob('Teaching Associate', 'Dept. of CSE, HKUST', '2008-12, 2013-Now');
const expInstructor = makeJob('Instructor', 'Dept. of CS, HKBU', '2012-13');
const expTeachingAssistant = makeJob('Teaching Assistant (part-time)', 'Dept. of CSE, HKUST', '2006-08');
const awardBestTA = makeAward('Professor Samuel Chanson Best Teaching Assistant', 'Dept. of CSE, HKUST', '2008');

const expTeachingSupport = {
  title: 'an experienced teaching support',
  description: expTeachingSupportDescription,
  jobs: [
    expTeachingAssociate,
    expInstructor,
    expTeachingAssistant,
  ],
  awards: [
    awardBestTA,
  ],
};

const basicProfile = {
  firstName: 'Peter',
  lastName: 'Chung',
  middleName: 'Kai Lun',
  title: 'Teaching Associate',
  picture: 'profile_peter.jpg',
  department: 'Computer Science and Engineering',
  university: 'HKUST',
  office: 'Room 4209',
  officeLocation: 'Lift 19',
  description: profileDescription,
  degrees: [
    MScITE,
    MPhilCSE,
    BEngCSIE,
  ],
};

const profile = {
  basic: basicProfile,
  experience: [
    expHackOC,
    expHackParticipant,
    expStartupHabHub,
    expVolunteer,
    expStudentAdvisor,
    expTeachingSupport,
  ],
};

export default profile;
