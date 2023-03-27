export interface Campaign {
  id: string
  date: string
  month: string
  time: string
  process: number
  totalProcess: number
  status: string
  des: string
}
export const campaigns = [{
  id: '1',
  date: '25',
  month: 'December',
  time: '  05:30 AM',
  process: 1723,
  totalProcess: 4500,
  status: 'RUNNING',
  des: 'Lorem lacus vulputate amet integer diam arcu.',
},
{
  id: '3',
  date: '26',
  month: 'December',
  time: '  08:30 AM',
  process: 0,
  totalProcess: 4500,
  status: 'IN QUEUE',
  des: 'Lorem lacus vulputate amet integer diam arcu.',
},
{
  id: '2',
  date: '26',
  month: 'December',
  time: '  8:30 AM',
  process: 1723,
  totalProcess: 4500,
  status: 'PAUSE',
  des: 'Lorem lacus vulputate amet integer diam arcu.',
}]
