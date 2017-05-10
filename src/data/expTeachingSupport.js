const makeJob = (title, org, period, url) => ({ title, org, period, url });
const makeAward = (title, org, period, url, country) => ({ title, org, period, url, country });

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
  icon: 'education',
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

export default expTeachingSupport;
