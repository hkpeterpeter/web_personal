const profileDescription = `Mr Chung has more than 8 years of experience
 in the higher education sector, with solid experience in software engineering,
 entrepreneurship, alumni engagement and strong connections with the local startup community.`;

const MScITE = 'MSc, Information Technology in Education, HKU (E-learning specialism)';

const MPhilCSE = 'MPhil, Computer Science and Engineering, HKUST';

const BEngCSIE = 'BEng, Computer Science (Information Engineering), HKUST (First Class Honors)';

const basicProfile = {
  firstName: 'Peter',
  lastName: 'Chung',
  middleName: 'Kai Lun',
  title: 'Teaching Associate',
  picture: 'profile_peter.jpg',
  department: 'Computer Science and Engineering',
  university: 'HKUST',
  office: 'Room 4209',
  officeLocation: 'Lift 19 (near CS Lab 4)',
  description: profileDescription,
  degrees: [
    MScITE,
    MPhilCSE,
    BEngCSIE,
  ],
};

export default basicProfile;
