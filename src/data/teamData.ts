import type { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aarav Singhania',
    role: 'Principal Interior Architect & Co-Founder',
    experience: '12+ Years Experience (Demo Profile)',
    bio: 'Educated at CEPT Ahmedabad with advanced space planning practice across Mumbai and Pune. Aarav leads design conceptualization, architectural layouts, and technical detailing.',
    image: '${import.meta.env.BASE_URL}images/team/team_aarav.jpg',
    specialization: 'Residential Architecture, Space Planning & Turnkey Projects',
  },
  {
    name: 'Meera Nandkarni',
    role: 'Creative Director & Material Stylist',
    experience: '9+ Years Experience (Demo Profile)',
    bio: 'Passionate about indigenous Indian textiles, sustainable lime finishes, and tactile material palettes. Meera curates custom joinery details, soft furnishings, and lighting hierarchies.',
    image: '${import.meta.env.BASE_URL}images/team/team_meera.jpg',
    specialization: 'Tactile Finishes, Lighting Design & Custom Furniture',
  },
  {
    name: 'Rohan Patil',
    role: 'Head of Modular Engineering & Civil Execution',
    experience: '11+ Years Experience (Demo Profile)',
    bio: 'Specialist in German kitchen hardware ergonomics, IS 710 marine ply engineering, and site execution management. Oversees project timelines, site quality, and vendor precision.',
    image: '${import.meta.env.BASE_URL}images/team/team_rohan.jpg',
    specialization: 'Modular Kitchens, Civil Remodeling & Quality Assurance',
  },
];
