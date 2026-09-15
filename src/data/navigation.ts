export type NavigationItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const navigation: NavigationItem[] = [
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About School', to: '/about' },
      { label: 'Announcement', to: '/announcements' },
      { label: "Director's Message", to: '/about#director' },
      { label: "Principal's Message", to: '/about#principal' },
      { label: 'Toppers', to: '/toppers' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Overview', to: '/academics' },
      { label: 'Comprehensive Curriculum', to: '/academics#curriculum' },
      { label: 'Methodology', to: '/academics#methodology' },
      { label: 'School Uniform', to: '/academics#uniform' },
      { label: 'Academic Calendar', to: '/academics#calendar' },
      { label: 'Hostel', to: '/facilities#hostel' },
    ],
  },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Admission', to: '/admission' },
  { label: 'Results', to: '/results' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
];
