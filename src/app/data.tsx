import { BannerImage, FooterLink, NavElement, TeamMember } from './types';

export const title: string = 'Diving School AquaVentures';

export const navElements: NavElement[] = [
  {
    title: 'Start',
    slug: '/#start',
  },
  {
    title: 'Services',
    slug: '/#services',
  },
  {
    title: 'Team',
    slug: '/#team',
  },
  {
    title: 'Contact',
    slug: '/#contact',
  },
];

export const services: string[] = [
  'PADI certification courses for beginners and advanced divers',
  'Special courses for underwater photography and videography',
  'Diving excursions to breathtaking underwater destinations',
  'Night diving and wreck diving',
  'Nitrox diving courses for extended dive times',
  'Technical diving and cave diving',
  'Refresher courses for experienced divers',
  'Rental of diving equipment from leading brands',
  'Diving insurance and safety guidelines',
];

export const team: TeamMember[] = [
  {
    name: 'Raffi',
    img: '/raffi.jpg',
  },
  {
    name: 'Lisa',
    img: '/lisa.jpg',
  },
  {
    name: 'Jenny',
    img: '/jenny.jpg',
  },
  {
    name: 'Jonas',
    img: '/jonas.jpg',
  },
];

export const bannerImages: BannerImage[] = [
  {
    id: 'start',
    imgNameM: '/diver-reef-medium.jpg',
    imgNameL: '/diver-reef-large.jpg',
    imgDescription: 'Diver',
    captionText: (
      <>
        Photo by{' '}
        <a href="https://unsplash.com/@juanmacllas">Juanma Clemente-Alloza</a>{' '}
        on <a href="https://unsplash.com/de/fotos/_k82HQ1OBoM">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/reef-1-medium.jpg',
    imgNameL: '/reef-1-large.jpg',
    imgDescription: 'Reef',
    captionOpacity: 0.75,
    captionText: (
      <>
        Photo by <a href="https://unsplash.com/@weweclub_wewe">yang wewe</a> on{' '}
        <a href="https://unsplash.com/de/fotos/QgjbgUC2ePM">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/reef-2-medium.jpg',
    imgNameL: '/reef-2-large.jpg',
    imgDescription: 'Reef',
    captionOpacity: 0.75,
    captionText: (
      <>
        Photo by <a href="https://unsplash.com/@hiro0718">Hiroko Yoshii</a> on{' '}
        <a href="https://unsplash.com/de/fotos/9y7y26C-l4Y">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/diver-2-medium.jpg',
    imgNameL: '/diver-2-large.jpg',
    imgDescription: 'Diver',
    captionText: (
      <>
        Photo by{' '}
        <a href="https://unsplash.com/@sebaspenalambarri">
          Sebastian Pena Lambarri
        </a>{' '}
        on <a href="https://unsplash.com/de/fotos/44r12Ck_CoI">Unsplash</a>
      </>
    ),
  },
];

export const address: string[] = [
  'Sample Street 8',
  '12345 Sample City',
  '',
  '+20 (0) 1234 5678900',
  'contact@example.de',
];

export const socialMediaLinks: FooterLink[] = [
  {
    title: 'facebook.com',
    href: 'https://facebook.com',
  },
  {
    title: 'instagram.com',
    href: 'https://instagram.com',
  },
  {
    title: 'twitter.com',
    href: 'https://twitter.com',
  },
  {
    title: 'youtube.com',
    href: 'https://youtube.com',
  },
];

export const openingHours: string[] = [
  'Thu - Fri: 09:00 AM - 03:00 PM',
  'Sat - Sun: 10:00 AM - 03:00 PM',
  'Mon: by appointment',
];

export const legalLinks: FooterLink[] = [
  {
    title: 'Legal Notice',
    href: '/legalnotice',
  },
  {
    title: 'Privacy Policy',
    href: '/privacypolicy',
  },
];

export const development: FooterLink = {
  title: 'Peter R. Stuhlmann Web Development',
  href: 'https://peter-stuhlmann-webentwicklung.de',
};
