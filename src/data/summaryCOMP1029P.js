const descriptionCOMP1029P = `This course introduces the Python programming language. It is intended for students who already have some experience in computer programming but wish to learn how to apply those programming skills to the Python language. The course covers basic programming topics, such as variables, functions and loops, to more advanced topics. Students explore these by self-learning of course materials together with guided programming exercises. Students without the prerequisites but possess relevant programming knowledge may seek instructor's approval for enrolling in the course. Graded P or F. Exclusion(s): COMP 1021 Prerequisite(s): COMP 1002 OR COMP 1004 (prior to 2013-14) OR COMP 1022P OR COMP 1022Q OR ISOM 3230 OR ISOM 3320`;

const goodArray = [];
const badArray = [];

goodArray.push('patient');
goodArray.push('responded');
goodArray.push('Efficient initially. Thanks for that.');
goodArray.push('Good Feedback');
goodArray.push('He did grading of the assignments');

badArray.push('Be more responsive, hopefully.');
badArray.push('His reply to questions relating to course logistic is very impatient.');


const summaryCOMP1029P = {
  code: 'COMP1029P',
  title: 'Python Programming Bridging Course',
  description: descriptionCOMP1029P,
  goodPoints: goodArray,
  badPoints: badArray,
};

export default summaryCOMP1029P;
