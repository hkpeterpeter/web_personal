const descriptionCOMP1029C = `This course introduces the C programming language.
It is intended for students who already have some experience in computer programming
but wish to learn how to apply those programming skills to the C language.
The course covers basic programming topics, such as variables, control, loops,
and functions, to more advanced topics. Students explore these by self-learning
of course materials together with guided programming exercises. Students without
the prerequisites but possess relevant programming knowledge may seek instructor's
approval for enrolling in the course. Graded P or F. Exclusion(s): COMP 1002,
COMP 1004 (prior to 2013-14), COMP 2011 Prerequisite(s):
COMP 1021 OR COMP 1022P OR COMP 1022Q OR ISOM 3230 OR ISOM 3320`;

const goodArray = [];
const badArray = [];

goodArray.push('Quick response to emails');

badArray.push('Please check the emails in a more detailed way');

const summaryCOMP1029C = {
  code: 'COMP1029C',
  title: 'C Programming Bridging Course',
  description: descriptionCOMP1029C,
  goodPoints: goodArray,
  badPoints: badArray,
};

export default summaryCOMP1029C;
