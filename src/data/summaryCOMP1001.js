const descriptionCOMP1001 = `This course is an introduction to computers and
computing tools. It introduces the organization and basic working mechanism
of a computer system, including the development of the trend of modern
computer system. It covers the fundamentals of computer hardware design
and software application development. The course emphasizes the application
of the state-of-the-art software tools to solve problems and present solutions
via a range of skills related to multimedia and internet computing tools
such as internet, e-mail, WWW, webpage design, computer animation,
spread sheet charts/figures, presentations with graphics and animations, etc.
The course also covers business, accessibility, and
relevant security issues in the use of computers and Internet.
Exclusion(s): ISOM 2010, any COMP courses of 2000-level or above`;

const goodArray = [];
const badArray = [];

goodArray.push(`TA prepared very interesting and useful materials for
  the labs. The materials were ready for students to learn from without any problems.
  TA is always friendly answering questions and providing help.
  Feedback is up to date and accurate`);

goodArray.push(`Friendly - Very familiar with the content. Made excellent
  content and instructions for each lab`);

goodArray.push(`He always answers questions that we don't understand and helps us.
He replies to emails quite fast and efficiently`);

goodArray.push(`Very well answered and presented upon my questions!
  Very kind and able to solve all sorts of problem!`);

badArray.push(`Present how some of the lab activities can be
  useful in real life`);

badArray.push(`Try to help students actively instead of
  asking them to find alternative solution`);

badArray.push(`Interaction and increase attractiveness of
  lab course`);

const summaryCOMP1001 = {
  code: 'COMP1001',
  title: 'Exploring Multimedia and Internet Computing',
  description: descriptionCOMP1001,
  goodPoints: goodArray,
  badPoints: badArray,
  pastCodes: ['COMP101'],
};

export default summaryCOMP1001;
