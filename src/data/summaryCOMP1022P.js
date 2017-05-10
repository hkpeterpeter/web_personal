const descriptionCOMP1022P = `This course is designed to equip students
with the fundamental concepts of programming elements and data abstraction
using Java. Students will learn how to write procedural programs using variables,
arrays, control statements, loops, recursion, data abstraction and objects using
an integrated development environment.
Exclusion(s): COMP 1002, COMP 1004 (prior to 2013-14),
COMP 1021, COMP 1022Q, COMP 2011, ISOM 3320`;

const goodArray = [];
const badArray = [];

goodArray.push('Perfect tutor ever');
goodArray.push('Teach by heart');
goodArray.push('Really helpful in learning');
goodArray.push('The TA was able to guide us through the lab work thoroughly');
goodArray.push(`If I have questions about my lab work or assignments,
  he will answer my question within a short time interval.`);
goodArray.push('TA would help students who do not know how to do the lab section.');
goodArray.push(`The TA really listens to us and answers our question,
  at the same time giving rooms for us to figure out the solutions.`);
goodArray.push('He always helps me to do the lab, explain to my questions clearly');
goodArray.push('Easy to communicate. Good at solving problems');
goodArray.push('Very kind and helpful. He also has a deep knowledge about the course.');
goodArray.push('Very nice and friendly. Good in English.');

badArray.push(`During the lab he would aid students with the first part,
  but the second part we are on our own to solve the issue.`);
badArray.push(`Have more TAs, sometimes students have to wait for a long time
  to ask questions or ask for checking of Labs`);
badArray.push(`He can prepare more and more examples for lab work or assignments.
  It is because this is the first time that we learn to write codes.
  While some codes are difficult to understand and we need a lot of examples.
  And we are not sure whether the codes written by us are right or not.`);
badArray.push('Teach more basic concepts');


const summaryCOMP1022P = {
  code: 'COMP1022P',
  title: 'Introduction to Computing in Java',
  description: descriptionCOMP1022P,
  goodPoints: goodArray,
  badPoints: badArray,
};

export default summaryCOMP1022P;
