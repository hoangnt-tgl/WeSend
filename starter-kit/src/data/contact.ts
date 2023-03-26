import avatar1 from '@/assets/images/avatars/avatar-1.png'

import avatar2 from '@/assets/images/avatars/avatar-2.png'

import avatar3 from '@/assets/images/avatars/avatar-3.png'

import avatar4 from '@/assets/images/avatars/avatar-4.png'

interface Users {
  avatar: string
  name: string
  status: keyof Status
  phone: string
}

export const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    phone: '+92 3330950553',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    phone: '+92 3330950553',
  },
]
