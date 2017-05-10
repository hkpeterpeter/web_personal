const makeMedia = (publisher, date, url) => ({ publisher, date, url });

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

const awardHackOLifeHongKong2016 = {
  title: 'AIA Award Winner',
  org: 'Hack-O-Life',
  period: '2016',
  url: 'https://hackathon.cisco.com/event/hackolife-hongkong',
  country: 'Hong Kong',
};

const awardDreamCatchersMedTechHackathon = {
  title: 'Finalist',
  org: 'Dreamcatchers Medtech Hackathon',
  period: '2016',
  url: 'http://mthackathon.info/needs',
};

const mediaHabHubHK01 = makeMedia(
  'HK01 News',
  '2016-07-03',
  'http://bit.ly/mtech16_habhub_at_hk01',
);

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
  icon: 'tint',
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

export default expStartupHabHub;
