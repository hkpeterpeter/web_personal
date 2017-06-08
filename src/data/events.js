const makeEvent = (evt, fn) => ({ evt, fn });

// TODO: refactor the remaining data values

const events = [
  makeEvent('AngelHack Hong Kong 2017', 'angelhack_hongkong_2017.jpg'),
  makeEvent('Hang Seng FinTech Hackathon 2017', 'hs_hackathon_2017.jpg'),
  makeEvent('Cyberport Alumni Association Ice-break meetup 2017', 'Cyberport_Alumni_Association_2017.jpg'),
  makeEvent('CSE Farewell Dinner 2017', 'CSE_Farewell_Dinner_2017.jpg'),
  makeEvent('hackUST 2017', 'hackUST_2017.png'),
  makeEvent('SENG Shenzhen Alumni Gathering 2017', 'SENG_Engineering_Alumni_Gathering_2017.jpg'),
  makeEvent('Microsoft ImagineHack 2017', 'Microsoft_ImagineHack_2017.jpg'),
  makeEvent('HealthTech Asia 2017', 'habhub-health-tech-asia-2017.jpg'),
  makeEvent('Hour of Code Hong Kong 2nd anniversary', 'HoC-2nd-anniversary-HabHub-Booth.jpg'),
  makeEvent('CSEAA LightHouse of IT Trends Event 2016/17', 'CSEAA_Lighthouse_Of_IT_Trends_2016.jpg'),
  makeEvent('Hack-O-Life 2016', 'hack-of-life-2016.jpg'),
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

export default events;
