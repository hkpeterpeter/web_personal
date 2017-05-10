const descriptionCOMP2011 = `This course is an introduction to object-oriented
programming and data structures. Students will learn abstract data types and
their implementation as classes in an object-­‐oriented programming language;
static and dynamic construction and destruction of objects; data member
and member functions; public interface and encapsulation.
It will cover data structures such as stacks, queues, linked lists, and binary trees.
Exclusion(s): COMP 1004 (prior to 2013-14) Prerequisite(s): COMP 1021 OR COMP
1022P OR COMP 1022Q OR ISOM 3230`;

const goodArray = [];
const badArray = [];

goodArray.push(`Peter is very devoted into his work that he is always approachable
  even on Sundays`);
goodArray.push('Explain things in an organised and detailed way');
goodArray.push(`He was good because he actually explained what was taught in lectures,
  step by step, instead of just doing examples on computer`);
goodArray.push('Can explain things well and help me understand difficult concept');
goodArray.push('Attentive and patient to spend his personal time for us to ask him questions');
goodArray.push(`He can answer questions not limited to tutorials, but also in assignments,
  labs and lecture notes.`);
goodArray.push('Friendly in talking');
goodArray.push('Nice and helpful');
goodArray.push('Energetic');
goodArray.push('Responsible');
goodArray.push('Good knowledge in programming');

badArray.push('Please write larger when using the whiteboards, and please use darker pens');
badArray.push('More tricky questions should be given');
badArray.push('Be more helpful about exams');
badArray.push(`He can explain or encourage more to the students who can't catch up
with the progress`);
badArray.push('The pronounciation can be improved');

const summaryCOMP2011 = {
  code: 'COMP2011',
  title: 'Introduction to Object-oriented Programming',
  description: descriptionCOMP2011,
  goodPoints: goodArray,
  badPoints: badArray,
  pastCodes: ['COMP104', 'COMP1004'],
};

export default summaryCOMP2011;
