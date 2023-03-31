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
export const campaigns: {
  id: string
  date: string
  month: string
  time: string
  process: number
  totalProcess: number
  status: string
  des: string
}[] = []

export const dataCampaigns = [
  {
    column: 'First Name',
    title: 'Fisrt Name',
    class: 'first-name',
    data: [
      'Elizabetth',
      'Steve',
      'John',
      'Roger',
      'Aryan',
      'Siddhant',
      'Varun',
      'Fatima',
      'George',
      'Smith',
      'Leanardo',
      'Johnathan',
      'Abigale',
      'Sameual',
    ],
    bgColor: '#F3F4FB',
  },
  {
    column: 'Select',
    title: 'Middle Name',
    class: 'middle-name',
    data: [
      'Elizabetth',
      'Steve',
      'John',
      'Roger',
      'Aryan',
      'Siddhant',
      'Varun',
      'Fatima',
      'George',
      'Smith',
      'Leanardo',
      'Johnathan',
      'Abigale',
      'Sameual',
    ],
    bgColor: '#FFF',
  },
  {
    column: 'Last Name',
    title: 'Last Name',
    class: 'last-name',
    data: [
      'Elizabetth',
      'Steve',
      'John',
      'Roger',
      'Aryan',
      'Siddhant',
      'Varun',
      'Fatima',
      'George',
      'Smith',
      'Leanardo',
      'Johnathan',
      'Abigale',
      'Sameual',
    ],
    bgColor: '#F3F4FB',
  },
  {
    column: 'Contact Number',
    title: 'Contact Number',
    class: 'contact-number',
    data: [
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
      '991234567',
    ],
    bgColor: '#F3F4FB',
  },
  {
    column: 'Select',
    title: 'Gender',
    class: 'gender',
    data: [
      'Male',
      'Female',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Female',
      'Female',
      'Female',
    ],
    bgColor: '#fff',
  },
]

export const dataCampaigns2 = [
  {
    campaignName: 'B ultricesduis senectus ultrices dignissim',
    campaignDate: '12 Sep,2020',
    contacts: 4500,
    campaignStatus: 'Active',
    mediaType: 'Image',
  },
  {
    campaignName: 'C duis senectus dignissim aliquam ultrices',
    campaignDate: '24 Sep,2020',
    contacts: 4000,
    campaignStatus: 'Scheduled (10)',
    mediaType: 'Image',
  },
  {
    campaignName: 'A duis ultrices dignissim aliquam ultrices',
    campaignDate: '03 Sep,2020',
    contacts: 5000,
    campaignStatus: 'Unscheduled ',
    mediaType: 'Image',
  },
  {
    campaignName: 'F duis senectus ultrices dignissim aliquam ultrices',
    campaignDate: '05 Sep,2020',
    contacts: 4200,
    campaignStatus: 'Active',
    mediaType: 'Image',
  },
]
