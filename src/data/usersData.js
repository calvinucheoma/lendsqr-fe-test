import { PeopleAlt, Groups, Description } from '@mui/icons-material';
import { FaCoins } from 'react-icons/fa';

export const usersData = [
  {
    id: 1,
    icon: <PeopleAlt />,
    title: 'USERS',
    number: '2,453',
    color: '#DF18FF',
  },
  {
    id: 2,
    icon: <Groups />,
    title: 'ACTIVE USERS',
    number: '2,453',
    color: '#5718FF',
  },
  {
    id: 3,
    icon: <Description />,
    title: 'USERS WITH LOANS',
    number: '12,453',
    color: '#F55F44',
  },
  {
    id: 4,
    icon: <FaCoins />,
    title: 'USERS WITH SAVINGS',
    number: '102,453',
    color: '#FF3366',
  },
];
