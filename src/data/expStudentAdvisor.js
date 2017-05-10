const makeJob = (title, org, period, url) => ({ title, org, period, url });

const expStudentAdvisorDescription = `Mr Chung is a friendly student advisor.
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
  icon: 'comment',
  description: expStudentAdvisorDescription,
  jobs: [
    SIGHTAdvisor,
    EClubAdvisor,
    CSEOneAdvisor,
    CSEAcademicCounsellor,
    SENGStudentAdvisor,
  ],
};

export default expStudentAdvisor;
