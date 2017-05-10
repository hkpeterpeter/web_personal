const makeJob = (title, org, period, url) => ({ title, org, period, url });

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
  icon: 'gift',
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

export default expVolunteer;
