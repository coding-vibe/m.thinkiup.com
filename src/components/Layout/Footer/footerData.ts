import Email from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { SvgIconComponent } from '@mui/icons-material';
import meta from '@/constants/meta';

export enum LogoPaths {
  Desktop = '/icons/desk.svg',
  Mobile = '/icons/mob.svg',
}

export enum Routes {
  Home_Page = '/',
  About_Us_Page = '/about',
  Products_Page = '/product',
  Gallery_Page = '/galery',
  Contact_Us_Page = '/contact',
  Privacy_Policy_Page = '/privacy-policy',
}

export interface ContactType {
  icon: SvgIconComponent;
  text: string;
  type: string;
}

export interface Footer {
  contactsBlock: { contacts: ContactType[] };
  navLinks: {
    label: string;
    path: Routes;
  }[];
  copyRight: string;
  termsCondition: {
    label: string;
    route: string;
  };
}

export const footer: Footer = {
  contactsBlock: {
    contacts: [
      {
        icon: PhoneIcon,
        text: '+9102228021220',
        type: 'phone',
      },
      {
        icon: LocationOnIcon,
        text: ' 4/a, Raj Ratan Palace Iii, Shanker Lane, Kandivli (w), Mumbai, India',
        type: '',
      },
      {
        icon: Email,
        text: 'tarun@ziptech.in',
        type: 'email',
      },
    ],
  },
  navLinks: [
    { label: 'Home', path: Routes.Home_Page },
    { label: 'About', path: Routes.About_Us_Page },
    { label: 'Products', path: Routes.Products_Page },
    { label: 'Gallery', path: Routes.Gallery_Page },
    { label: 'Contact Us', path: Routes.Contact_Us_Page },
    { label: 'Privacy Policy', path: Routes.Privacy_Policy_Page },
  ],
  copyRight: `© 2020 - 2024 ${meta.title} All Rights Reserved.`,
  termsCondition: {
    label: 'terms & condition',
    route: '/terms-and-conditions',
  },
};
