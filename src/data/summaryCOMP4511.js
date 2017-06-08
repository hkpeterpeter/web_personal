const descriptionCOMP4511 = `This course is designed to equip students,
who have a particular interest in becoming practitioners,
with substantial hands-on experience in solving concrete problems in a computer
operating system, via programming, in a laboratory intensive course.
Students will notably experiment with many topics in the areas of operating systems
and network protocols, such as: boot loaders, shell, process management, system calls,
 process scheduler, file system, virtual memory, network protocols and packet filtering,
 system modules and device drivers. For students of the Department of Computer Science
 and Engineering only. Prerequisite(s): COMP 3511 Corequisite(s): COMP 4621 OR ELEC 4120`;

const goodArray = [];
const badArray = [];

goodArray.push('Peter tried to be helpful.');
goodArray.push('He answers my email questions extremely fast. Also he explains everything extremely clear.');
goodArray.push('Helpful TA. Easy to understand lab materials.');
goodArray.push('Nothing. He\'s good.');

badArray.push('He grades assignment too slowely');
badArray.push(`Peter shall try to learn more about the course,
  and prepare better lab/assignments`);

const summaryCOMP4511 = {
  code: 'COMP4511',
  title: 'System and Kernel Programming in Linux',
  description: descriptionCOMP4511,
  goodPoints: goodArray,
  badPoints: badArray,
};

export default summaryCOMP4511;
