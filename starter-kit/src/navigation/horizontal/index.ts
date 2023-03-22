import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Dashboard',
    to: { name: 'index' },
    icon: { icon: 'tabler-layout-dashboard' },
  },
  {
    title: 'Campaign',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'History',
    to: { name: 'history' },
    icon: { icon: 'tabler-history' },
  },
  {
    title: 'Calendar',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-calendar-event' },
  },
  {
    title: 'Contacts',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-users' },
  },
  {
    title: 'Profile',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-user' },
  },
  {
    title: 'WhatsApp Bot',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-whatsapp' },
  },
] as HorizontalNavItems
