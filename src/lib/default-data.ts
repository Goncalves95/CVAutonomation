import { CVData } from './types'

export const defaultCVData: CVData = {
  personal: {
    name: '',
    title: '',
    phone: '',
    email: '',
    linkedin: '',
    location: '',
    citizenship: '',
    permit: '',
    photo: '',
  },
  summary: '',
  experience: [
    {
      id: '1',
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      bullets: '',
    },
  ],
  education: [
    {
      id: '1',
      degree: '',
      institution: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
  ],
  certifications: [],
  languages: [
    { id: '1', name: '', level: '', dots: 3 },
  ],
  skillCategories: [
    { id: '1', category: '', items: '' },
  ],
  softSkills: '',
  awards: [],
  onlineLinks: [],
}
