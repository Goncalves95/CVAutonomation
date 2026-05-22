export type ExperienceEntry = {
  id: string
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  location: string
  bullets: string // one per line
}

export type EducationEntry = {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string
  location: string
  description: string
}

export type CertificationEntry = {
  id: string
  name: string
  issuer: string
  description: string
}

export type LanguageEntry = {
  id: string
  name: string
  level: string
  dots: number // 1-4
}

export type SkillCategory = {
  id: string
  category: string
  items: string // comma-separated
}

export type AwardEntry = {
  id: string
  title: string
  organization: string
  date: string
  description: string
}

export type OnlineLink = {
  id: string
  label: string
  url: string
}

export type CVData = {
  personal: {
    name: string
    title: string
    phone: string
    email: string
    linkedin: string
    location: string
    citizenship: string
    permit: string
    photo: string // base64 data URL
  }
  summary: string
  experience: ExperienceEntry[]
  education: EducationEntry[]
  certifications: CertificationEntry[]
  languages: LanguageEntry[]
  skillCategories: SkillCategory[]
  softSkills: string // one per line
  awards: AwardEntry[]
  onlineLinks: OnlineLink[]
}
