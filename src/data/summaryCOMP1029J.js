const descriptionCOMP1029J = `This course introduces the Java programming language.
It is intended for students who already have some experience in computer programming
but wish to learn how to apply those programming skills to the Java language.
The course covers basic programming topics such as variables, control statements,
loops, functions, and object-oriented programming concepts.
Students explore these by self-learning of course materials together with guided
programming exercises. Students without the prerequisites but possess relevant
programming knowledge may seek instructor's approval for enrolling in the course.
Graded P or F. Exclusion(s): COMP 1022P, COMP 3021, ISOM 3320 Prerequisite(s):
COMP 1002 OR COMP 1004 (prior to 2013-14) OR COMP 1021 OR COMP 1022Q OR ISOM 3230`;

const goodArray = [];
const badArray = [];

goodArray.push('Explain things clearly');
goodArray.push('I can see that the TA has very solid knowledge about Java');

badArray.push('The videos could be shorter if possible');

const summaryCOMP1029J = {
  code: 'COMP1029J',
  title: 'Java Programming Bridging Course',
  description: descriptionCOMP1029J,
  goodPoints: goodArray,
  badPoints: badArray,
};

export default summaryCOMP1029J;
