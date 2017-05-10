const descriptionCOMP3111 = `Methods and tools for planning, designing, implementing,
validating, and maintaining large software systems. Project work to build a software system
as a team, using appropriate software engineering tools and techniques.
Exclusion(s): COMP 3111H, ISOM 3210, RMBI 4420 (prior to 2016-17)
Prerequisite(s): COMP 2012 OR COMP 2012H`;

const goodArray = [];
const badArray = [];

goodArray.push(`Peter is one of the best persons I have met in my life. Very friendly
   TA with solid background of his field. Very interesting way of teaching with clear accent.`);
goodArray.push('Already the best TA in HKUST');
goodArray.push('Go over tutorial notes with great details');
goodArray.push('Extremely familiar with the tutorial materials');
goodArray.push('Clear explanation of course materials and possesses adequate knowledge');
goodArray.push('Easy to reach');
goodArray.push('Very good in guiding us to complete the exercises and preparing for the exam');
goodArray.push('Very funny and helpful');
goodArray.push('Very direct and to-the-point');
goodArray.push('Good interaction with students');
goodArray.push('Make the students feel his interest in software engineering');
goodArray.push('Attentive with students giving feedbacks');
goodArray.push('He was very friendly');

badArray.push('too often to ask O.K.?');
badArray.push(`For the project demo, he kept distracting us while we were doing
  and figuring out the procedures
  of the demo, which may seem interacting with students to him,
  but distracting and annoying to us`);
badArray.push('The attitude of teaching could be better. (1999)');
badArray.push('Should be more information for the materials');
badArray.push(`Re-align the mismatch between the posted grading criteria
  and the actual grading scenario`);
badArray.push('Seems like he favors students who speak Cantonese...');
badArray.push('He should at least have some knowledge about the course material');

const summaryCOMP3111 = {
  code: 'COMP3111',
  title: 'Software Engineering',
  description: descriptionCOMP3111,
  goodPoints: goodArray,
  badPoints: badArray,
  pastCodes: ['COMP211', 'COMP211H', 'COMP3111H'],
};

export default summaryCOMP3111;
