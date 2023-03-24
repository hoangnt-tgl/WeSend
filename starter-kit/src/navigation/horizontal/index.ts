import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Dashboard',
    to: { name: 'index' },
    icon: { icon: 'tabler-layout-dashboard' },
  },
  {
    title: 'Campaign',
    to: { name: 'campaign' },
    icon: { icon: 'tabler-message-forward' },
  },
  {
    title: 'History',
    to: { name: 'history' },
    icon: { icon: 'tabler-history' },
  },
  {
    title: 'Calendar',
    to: { name: 'calendar' },
    icon: { icon: 'tabler-calendar-event' },
  },
  {
    title: 'Contacts',
    to: { name: 'contacts' },
    icon: { icon: 'tabler-address-book' },
  },
  {
    title: 'Profile',
    to: { name: 'profile' },
    icon: { icon: 'tabler-user-circle' },
  },
  {
    title: 'WhatsApp Bot',
    to: { name: 'whats-app-bot' },
    icon: { icon: 'tabler-brand-whatsapp' },
  },
] as HorizontalNavItems
