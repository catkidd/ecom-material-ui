import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
// import CogIcon from "@heroicons/react/24/solid/CogIcon";
// import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
// import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import PuzzlePieceIcon from "@heroicons/react/24/solid/PuzzlePieceIcon";
import RectangleGroupIcon from "@heroicons/react/24/solid/RectangleGroupIcon";
import QuestionMarkCircleIcon from '@heroicons/react/24/solid/QuestionMarkCircleIcon'
import AtSymbolIcon from '@heroicons/react/24/solid/AtSymbolIcon'
// import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Best Deals",
    path: "/bestdeals",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Men",
    path: "/men",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Women",
    path: "/women",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Unisex",
    path: "/unisex",
    icon: (
      <SvgIcon fontSize="small">
        <UserGroupIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Kids",
    path: "/kids",
    icon: (
      <SvgIcon fontSize="small">
        <PuzzlePieceIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Accesories",
    path: "/accesories",
    icon: (
      <SvgIcon fontSize="small">
        <RectangleGroupIcon />
      </SvgIcon>
    ),
  },
  {
    title: "About Us",
    path: "/about_us",
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Contact Us",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <AtSymbolIcon />
      </SvgIcon>
    ),
  },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
