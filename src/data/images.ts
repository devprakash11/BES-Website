export type SchoolImage = {
  src: string;
  alt: string;
  category?: string;
};

const cdn = 'https://cms.savarnacloudtech.com/uploads/data';

export const schoolImages = {
  hero: `${cdn}/9bd2383db8554560dc27dc8a7b76768c.png`,
  campus: `${cdn}/007e47ec0389c2258410aa5903f5633d.jpg`,
  campusWide: `${cdn}/c03faeee1159a98b48459aaf712674d9.png`,
  staff: `${cdn}/24671fb44717b694983a1ffa33c12f15.jpg`,
  administration: `${cdn}/58d1fc4e3625e3898186799479eaa80e.png`,
  director: `${cdn}/8d23240f4d872af6a14c603fa6b8eaaf.jpg`,
  principal: `${cdn}/f8b5f62d4380d0c4eaa7d4b1f7d660d7.png`,
  admission: `${cdn}/f1f04f8aa18f70faabacbdfa203638bf.jpg`,
  computerLab: `${cdn}/330431e478de8603acc86135f451260f.jpg`,
  computerLabModern: `${cdn}/cfd9a41e5c05a3c987df6de719729f0f.jpg`,
  hostelClassroom: `${cdn}/92e5a03fcf66acbdd45fadcafb4e8038.jpg`,
  outdoorAssembly: `${cdn}/31aff49ae6fbe427163d28d0252e8509.jpg`,
  event: `${cdn}/97971941dbb6c02520aae221b2de9715.jpg`,
};

export const facilityImages: Record<string, SchoolImage> = {
  'CCTV & campus safety': { src: schoolImages.outdoorAssembly, alt: 'British English School campus and student assembly area' },
  'Dance & activity spaces': { src: `${cdn}/265cf6a248db93a966fe6fb4a221334d.jpg`, alt: 'British English School students performing on stage' },
  'Gym & physical development': { src: `${cdn}/d6118dc87db345fca2eb4aa38d61446a.jpg`, alt: 'British English School students during an educational activity' },
  'Computer Lab': { src: schoolImages.computerLabModern, alt: 'Students working in the British English School computer lab' },
  'Exam preparation support': { src: `${cdn}/783144652b74f4da7144e708a9e3a13a.jpg`, alt: 'Academic achievement event at British English School' },
  'School ERP': { src: schoolImages.administration, alt: 'British English School administration meeting' },
  Laboratories: { src: schoolImages.hostelClassroom, alt: 'Students learning in a classroom at British English School' },
  'Sports & Yoga': { src: `${cdn}/959992d34515ed76a69e5ecd0fa1b3f6.jpg`, alt: 'British English School students participating in school activities' },
  Library: { src: schoolImages.staff, alt: 'British English School faculty and staff' },
  'Student transport': { src: schoolImages.campusWide, alt: 'Aerial view of British English School campus' },
};

export const galleryImages: SchoolImage[] = [
  { src: `${cdn}/24671fb44717b694983a1ffa33c12f15.jpg`, alt: 'British English School faculty group photograph', category: '15th August 2025' },
  { src: `${cdn}/007e47ec0389c2258410aa5903f5633d.jpg`, alt: 'British English School students and teachers outside the school building', category: 'School Campus' },
  { src: `${cdn}/959992d34515ed76a69e5ecd0fa1b3f6.jpg`, alt: 'British English School students and teachers group photograph', category: '15th August 2025' },
  { src: `${cdn}/f4cdc46268934c6fd979a24d03b3e2c0.jpg`, alt: 'British English School students and faculty group photograph', category: 'Hostel' },
  { src: `${cdn}/97971941dbb6c02520aae221b2de9715.jpg`, alt: 'British English School students performing on stage', category: 'UTSAV 2024' },
  { src: `${cdn}/e5b7061c8ff624564bb58337935f510d.jpg`, alt: 'British English School children performing on stage', category: 'UTSAV 2024' },
  { src: `${cdn}/a83726311e967563ee28917c11c582f1.jpg`, alt: 'British English School students performing a cultural dance', category: 'UTSAV 2024' },
  { src: `${cdn}/86125b597e9765258ef11b4adef4cae8.jpg`, alt: 'British English School ceremonial lamp lighting', category: 'Events' },
  { src: `${cdn}/313d5016e4473fbce81aa73db9df53f6.jpg`, alt: 'British English School students singing on stage', category: 'Republic Day 2025' },
  { src: `${cdn}/3d0cc99a924d013f2b9ea8f3064eba1d.jpg`, alt: 'British English School front, back and night campus views', category: 'Administrative Block' },
  { src: `${cdn}/e8d04d6c6c6adb03fba09d6f98da3069.jpg`, alt: 'British English School faculty group photograph', category: 'Principal Office' },
  { src: `${cdn}/8a4afc2a67cd82ddd2cd3974d4edaba3.jpeg`, alt: 'British English School cultural performance', category: 'Events' },
  { src: `${cdn}/d6118dc87db345fca2eb4aa38d61446a.jpg`, alt: 'British English School students on an educational tour', category: 'Educational Tour' },
  { src: `${cdn}/58d1fc4e3625e3898186799479eaa80e.png`, alt: 'British English School administration meeting', category: 'Principal Office' },
  { src: `${cdn}/c855485851a5b99dee87aea0729a9196.jpg`, alt: 'British English School Republic Day performance', category: 'Republic Day 2025' },
  { src: `${cdn}/31aff49ae6fbe427163d28d0252e8509.jpg`, alt: 'British English School student assembly', category: 'Assembly Ground' },
  { src: `${cdn}/330431e478de8603acc86135f451260f.jpg`, alt: 'British English School computer laboratory', category: 'Computer Lab' },
  { src: `${cdn}/c03faeee1159a98b48459aaf712674d9.png`, alt: 'Aerial view of British English School campus and grounds', category: 'Outdoor Games' },
  { src: `${cdn}/783144652b74f4da7144e708a9e3a13a.jpg`, alt: 'British English School academic prize presentation', category: 'Events' },
  { src: `${cdn}/a24e89e3e4d9c9efc496629919bc5cfc.jpg`, alt: 'British English School event lamp lighting ceremony', category: 'Events' },
  { src: `${cdn}/af79fa0f2c4241e912c7bf2c9ea4c1a3.jpg`, alt: 'British English School audience during a school event', category: 'Events' },
  { src: `${cdn}/f7ba4226311a13ce56f74386ab97a30c.jpg`, alt: 'British English School audience during a school event', category: 'Events' },
  { src: `${cdn}/b403d2bc2bba8ff05270650bc85e49ef.jpg`, alt: 'British English School students receiving prizes', category: 'Events' },
  { src: `${cdn}/d43f752b71bf10f6499d68f7e4b79fbf.jpg`, alt: 'Audience at a British English School event', category: 'Events' },
  { src: `${cdn}/265cf6a248db93a966fe6fb4a221334d.jpg`, alt: 'British English School junior students performing on stage', category: 'Events' },
  { src: `${cdn}/cfd9a41e5c05a3c987df6de719729f0f.jpg`, alt: 'British English School computer laboratory', category: 'Computer Lab' },
  { src: `${cdn}/92e5a03fcf66acbdd45fadcafb4e8038.jpg`, alt: 'British English School classroom with digital teaching equipment', category: 'Classroom' },
  { src: `${cdn}/9bd2383db8554560dc27dc8a7b76768c.png`, alt: 'British English School main building', category: 'Administrative Block' },
  { src: `${cdn}/9fa6c04e5407ed8f7fbd3a989dec59b2.jpeg`, alt: 'Akashi Kumari school topper achievement card', category: 'Toppers' },
  { src: `${cdn}/3a4f56b722989531978a86dfea792860.jpeg`, alt: 'Anshu Kr. Shah school topper achievement card', category: 'Toppers' },
  { src: `${cdn}/348010964c5b8bc02949222ba0d2f0a4.jpg`, alt: 'British English School campus gallery photograph', category: 'School Life' },
  { src: `${cdn}/3318ffad20140e7f1351c8d1dd5dfb13.jpg`, alt: 'British English School campus event photograph', category: 'School Life' },
  { src: `${cdn}/4c6150d64abddee635ef8a5b7a092324.jpg`, alt: 'British English School campus gallery photograph', category: 'School Life' },
];

export const topperImages: Record<string, string> = {
  'Anika Kumari': `${cdn}/eec8b1073df384d126d5aa3f63d6b0ef.jpeg`,
  'Satyam Kumar': `${cdn}/86c935aa2d27207d1892b24117129dc2.jpeg`,
  'Anjali Kumari': `${cdn}/b559d3bfebcc561838ea24b3d61a9b8f.jpeg`,
  'Sejal Kumari': `${cdn}/ae9a2c8f4afd4be8505d16db1b7fc1df.jpeg`,
  'Akashi Kumari': `${cdn}/9fa6c04e5407ed8f7fbd3a989dec59b2.jpeg`,
  'Shubham Kr. Verma': `${cdn}/b9da28062ea718bdf48483a718eb1948.jpeg`,
  'Anshu Kr. Shah': `${cdn}/3a4f56b722989531978a86dfea792860.jpeg`,
  'Anmol Raj': `${cdn}/e9b76292f0cf7bf4bc402199a107b0a0.jpeg`,
};
