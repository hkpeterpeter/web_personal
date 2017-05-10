import basicProfile from './basicProfile';
import expHackOC from './expHackOC';
import expHackParticipant from './expHackParticipant';
import expStartupHabHub from './expStartupHabHub';
import expVolunteer from './expVolunteer';
import expStudentAdvisor from './expStudentAdvisor';
import expTeachingSupport from './expTeachingSupport';

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
