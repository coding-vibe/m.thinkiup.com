import HomeIcon from "@mui/icons-material/Home";
import TimeIcon from "@mui/icons-material/AccessTimeFilled";
import { SvgIconComponent } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

export enum LogoPaths {
  Desktop = "/icons/desk.svg",
  Mobile = "/icons/mob.svg",
}

export enum Routes {
  Home_Page = "/",
  About_Us_Page = "/about",
  Products_Page = "/product",
  Gallery_Page = "/galery",
  Contact_Us_Page = "/contact",
  Privacy_Policy_Page = '/privacy-policy'
}

export interface Header {
  navLinks: {
    icon: SvgIconComponent;
    label: string;
    path: Routes;
  }[];
}

export const header: Header = {
  navLinks: [
    { icon: HomeIcon, label: "Home", path: Routes.Home_Page },
    { icon: InfoIcon, label: "About", path: Routes.About_Us_Page },
    { icon: CategoryIcon, label: "Products", path: Routes.Products_Page },
    { icon: CollectionsBookmarkIcon, label: "Gallery", path: Routes.Gallery_Page },
    { icon: TimeIcon, label: "Contact Us", path: Routes.Contact_Us_Page },
    { icon: PrivacyTipIcon, label: "Privacy Policy", path: Routes.Privacy_Policy_Page },
  ],
};
