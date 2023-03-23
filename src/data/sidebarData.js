import {
  FaBriefcase,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaCoins,
  FaScroll,
  FaHome,
} from 'react-icons/fa';
import {
  BsFillPeopleFill,
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsPhoneFlip,
  BsPersonGear,
} from 'react-icons/bs';
import { MdGroups, MdOutlineTune } from 'react-icons/md';
import { TbCurrencyNaira } from 'react-icons/tb';
import { AiFillBank } from 'react-icons/ai';
import { GiCircularSaw, GiDividedSpiral } from 'react-icons/gi';
import { VscGraph } from 'react-icons/vsc';
import { RiCalendarTodoFill } from 'react-icons/ri';

export const sidebarData = [
  {
    id: 1,
    Icon: BsFillPeopleFill,
    name: 'Users',
    path: '/',
  },
  {
    id: 2,
    Icon: MdGroups,
    name: 'Guarantors',
    path: 'guarantors',
  },
  {
    id: 3,
    Icon: TbCurrencyNaira,
    name: 'Loans',
    path: 'loans',
  },
  {
    id: 4,
    Icon: FaRegHandshake,
    name: 'Decision Models',
    path: 'decision-models',
  },
  {
    id: 5,
    Icon: FaPiggyBank,
    name: 'Savings',
    path: 'savings',
  },
  {
    id: 6,
    Icon: FaHandHoldingUsd,
    name: 'Loan Requests',
    path: 'loan-requests',
  },
  {
    id: 7,
    Icon: BsFillPersonCheckFill,
    name: 'Whitelist',
    path: 'whitelist',
  },
  {
    id: 8,
    Icon: BsFillPersonXFill,
    name: 'Karma',
    path: 'karma',
  },
  {
    id: 9,
    Icon: FaBriefcase,
    name: 'Organization',
    path: 'organization',
  },
  {
    id: 10,
    Icon: FaHandHoldingUsd,
    name: 'Loan Products',
    path: 'loan-products',
  },
  {
    id: 11,
    Icon: AiFillBank,
    name: 'Savings Products',
    path: 'savings-products',
  },
  {
    id: 12,
    Icon: FaCoins,
    name: 'Fees and Charges',
    path: 'fees-and-charges',
  },
  {
    id: 13,
    Icon: BsPhoneFlip,
    name: 'Transactions',
    path: 'transactions',
  },
  {
    id: 14,
    Icon: GiCircularSaw,
    name: 'Services',
    path: 'services',
  },
  {
    id: 15,
    Icon: BsPersonGear,
    name: 'Service Account',
    path: 'service-account',
  },

  {
    id: 16,
    Icon: FaScroll,
    name: 'Settlements',
    path: 'settlements',
  },

  {
    id: 17,
    Icon: VscGraph,
    name: 'Reports',
    path: 'reports',
  },
  {
    id: 18,
    Icon: MdOutlineTune,
    name: 'Preferences',
    path: 'preferences',
  },
  {
    id: 19,
    Icon: GiDividedSpiral,
    name: 'Fees and Prices',
    path: 'fees-and-prices',
  },
  {
    id: 20,
    Icon: RiCalendarTodoFill,
    name: 'Audit Logs',
    path: 'audit-logs',
  },
  {
    id: 21,
    Icon: FaHome,
    name: 'Dashboard',
  },
  {
    id: 22,
    Icon: FaBriefcase,
    name: 'Switch Organization',
  },
];
