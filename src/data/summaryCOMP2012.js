const descriptionCOMP2012 = `To learn the fundamental concepts and techniques
behind object-oriented programming. They include: abstract data types;
creation, initialization, and destruction of objects; class hierarchies;
polymorphism, inheritance and dynamic binding; generic programming using templates.
To learn the object-oriented view of data structures: linked lists, queues, stacks,
trees, and algorithms such as searching, sorting, and hashing algorithms.
Exclusion(s): COMP 2012H Prerequisite(s): COMP 1004 (prior to 2013-14) OR COMP 2011`;

const goodArray = [];
const badArray = [];

goodArray.push('Response to email questions very quickly');
goodArray.push('The TA who introduces the lab content is very well-prepared.');
goodArray.push('Very nice and willing to solve the question raised by student');
goodArray.push('He wants to help us thoroughly until we are able to understand');
goodArray.push('He is patient and kind, so I am not hesitate to ask him questions');
goodArray.push('He can explain the course material well');
goodArray.push('He is nice');

badArray.push(`The grade of the programming assignment should be released
  before the next programming assignment`);
badArray.push('Wonder that if the assignments can be returned as soon as possible');

const summaryCOMP2012 = {
  code: 'COMP2011',
  title: 'Introduction to Object-oriented Programming',
  description: descriptionCOMP2012,
  goodPoints: goodArray,
  badPoints: badArray,
  pastCodes: ['COMP152', 'COMP171'],
};

export default summaryCOMP2012;
