const expHackOCDescription = `Mr. Chung is a passionate hackathon organizer.
He co-founded hackUST in 2014 and was the lead staff organizer
in 2014-16. He is one of the leaders promoting hackathon culture in Hong Kong.`;

const makeJob = (title, org, period, url) => ({ title, org, period, url });

const FishackathonCityOrganizer = makeJob('City Organizer',
'Fishackathon Hong Kong', '2018', '//hackernest.com/events/hong-kong-china-fishackathon-2018');

const HKUSTRadicaDatathonOrganizer = makeJob('Project Manager',
'HKUST x Radica Datathon', '2017', '//bdi.ust.hk/datathon');

const SmarToneHackathonOrganizer = makeJob('Event-day Organizing Committee Member',
'SmarTone Hackathon', '2017', '//smartonehackathon.com');

const VernetzteWeltenHackathonMentor =
 makeJob('Mentor', 'Vernetzte Welten Hackathon', '2017');

const hangSengHackEventDayOC = makeJob('Event-day Organizing Committee Member',
'Hang Seng FinTech Hackathon', '2017',
'//www.cyberport.hk/en/events/4255');

const angelHackAmbassador = makeJob('Ambassador',
'AngelHack Hong Kong', '2017',
'//angelhack.com/angelhack-global-hackathon-series-hong-kong/');

const microsoftOCLeader = {
  title: 'Organizing Committee Leader',
  org: 'Microsoft Imagine Hack',
  period: '2017',
  url: '//imaginehack-2017.devpost.com/',
};

const hackUSTOrganizer = {
  title: 'Co-founder and Organizer',
  org: 'hackUST',
  period: '2014-16',
  url: '//hack.ust.hk/',
};

const hackJamOrganizer = {
  title: 'Organizer',
  org: 'hackJam',
  period: '2016',
  url: '//hack.ust.hk/hackjam',
};

const cathayHackathonAmbassador = {
  title: 'Ambassador',
  org: 'Cathay Pacific Hackathon',
  period: '2016',
  url: '//hackathon.cathaypacific.com/',
};

const cyberportFinTechHackathonJudge = {
  title: 'Judge',
  org: 'Cyberport FinTech Hackathon',
  period: '2016',
  url: '//www.eventbrite.com/e/cyberport-fintech-hackathon-2016-tickets-27166228922#',
};

const angelHackHongKongOCMember = {
  title: 'Organizing Committee Member',
  org: 'AngelHack Hong Kong',
  period: '2016',
  url: '//angelhack.com/angelhack-hong-kong-2016/',
};

const fishHackathonAmbassador = {
  title: 'Ambassador',
  org: 'Fishackathon Hong Kong',
  period: '2016',
};

const polyHackGuest = makeJob('Guest', 'PolyHack', '2016', '//polyhack.hk/');
const ecJammingAdvisor = makeJob('Advisor', 'E.C. Jamming Student Hackathon',
  '2017', '//ecjamming.tech/');

const expHackOC = {
  title: 'a passionate hackathon organizer',
  icon: 'star',
  description: expHackOCDescription,
  jobs: [
    FishackathonCityOrganizer,
    HKUSTRadicaDatathonOrganizer,
    SmarToneHackathonOrganizer,
    VernetzteWeltenHackathonMentor,
    hangSengHackEventDayOC,
    angelHackAmbassador,
    ecJammingAdvisor,
    microsoftOCLeader,
    hackUSTOrganizer,
    hackJamOrganizer,
    cathayHackathonAmbassador,
    cyberportFinTechHackathonJudge,
    angelHackHongKongOCMember,
    fishHackathonAmbassador,
    polyHackGuest,
  ],
};

export default expHackOC;
