const makeJob = (title, org, period, url) => ({ title, org, period, url });

const SoInSoGoodJudge = makeJob('Judge, a pitching competition of Social-up Youth Program', 'SoInSoGood/HKSTP', '2017');
const CSEAAFoundingPresident = makeJob('Founding President', 'CSEAA', '2014', '//www.cse.ust.hk/cseaa/');
const CSEAAVicePresident = makeJob('Vice President', 'CSEAA', '2015-16', '//www.cse.ust.hk/cseaa/');
const CSEAATreasurer = makeJob('Treasurer', 'CSEAA', '2017', '//www.cse.ust.hk/cseaa/');
const HKOSCOrganizer = makeJob('Organizer, Operation Team', 'Hong Kong Open Source Conference', '2017');
const ABFYEAlumniFellow = makeJob('Alumni Fellow', 'ABFYE, HKUST', '2017', '//abfye.ust.hk/');
const WIDSOCMember = makeJob('Organizing Committee Member', 'World Internet Developer Summit', '2016');

const expVolunteerDescription = `Mr Chung is a motivated volunteer. He is the Founding
President of CSE Alumni Association (CSEAA).  Partnering with
Department of CSE at HKUST, mentorship programs were launched to enrich students’
industrial exposure in 2014 and 2015. He also serves as Alumni Fellow of
The Academy for Bright Future Young Engineers (ABYFE), HKUST.
ABFYE aims at promoting STEM related engineering education in Hong Kong.
He occasionally involved in various Hours of Code events in Hong Kong.`;

const expVolunteer = {
  title: 'a motivated volunteer',
  icon: 'gift',
  description: expVolunteerDescription,
  jobs: [
    CSEAAFoundingPresident,
    CSEAAVicePresident,
    CSEAATreasurer,
    HKOSCOrganizer,
    ABFYEAlumniFellow,
    WIDSOCMember,
    SoInSoGoodJudge,
  ],
};

export default expVolunteer;
