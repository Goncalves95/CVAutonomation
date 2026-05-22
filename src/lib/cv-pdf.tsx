import {
  Document,
  Page,
  View,
  Text,
  Image,
  Link,
  StyleSheet,
} from '@react-pdf/renderer'
import { CVData } from './types'

const BLUE = '#2563EB'
const DARK = '#111827'
const GRAY = '#6B7280'
const LIGHT_GRAY = '#D1D5DB'

const s = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 28,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: DARK,
  },
  // ── Header ──
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  headerLeft: { flex: 1, paddingRight: 12 },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', letterSpacing: 0.5, marginBottom: 2 },
  jobTitle: { fontSize: 10, color: BLUE, marginBottom: 6 },
  contactLine: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 2 },
  contactItem: { fontSize: 7.5, marginRight: 14, color: DARK },
  photo: { width: 68, height: 68, borderRadius: 34 },
  divider: { borderBottomWidth: 1, borderBottomColor: LIGHT_GRAY, marginBottom: 10 },
  // ── Two columns ──
  body: { flexDirection: 'row', gap: 18 },
  leftCol: { flex: 1.45 },
  rightCol: { flex: 1 },
  // ── Section ──
  section: { marginBottom: 11 },
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
    paddingBottom: 2,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  // ── Experience / Education entries ──
  entryTitle: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  entryCompany: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: BLUE, marginBottom: 2 },
  entryMeta: { fontSize: 7.5, color: GRAY, marginBottom: 3 },
  bullet: { flexDirection: 'row', marginBottom: 1.5 },
  bulletDot: { fontSize: 8, marginRight: 4, marginTop: 0.5 },
  bulletText: { fontSize: 7.5, flex: 1, lineHeight: 1.45, color: DARK },
  entryGap: { marginBottom: 7 },
  // ── Languages ──
  langRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  langLeft: { flex: 1 },
  langName: { fontSize: 8.5, fontFamily: 'Helvetica-Bold' },
  langLevel: { fontSize: 7.5, color: GRAY },
  langDots: { flexDirection: 'row' },
  dot: { width: 7, height: 7, borderRadius: 4, marginLeft: 2 },
  dotFilled: { backgroundColor: BLUE },
  dotEmpty: { backgroundColor: LIGHT_GRAY },
  // ── Skills ──
  skillCat: { fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: BLUE, marginTop: 4, marginBottom: 1 },
  skillItems: { fontSize: 7.5, lineHeight: 1.4 },
  // ── Summary / text blocks ──
  bodyText: { fontSize: 8, lineHeight: 1.55 },
  // ── Certifications ──
  certName: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  certIssuer: { fontSize: 7.5, color: BLUE, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  certDesc: { fontSize: 7.5, lineHeight: 1.4, marginBottom: 5 },
  // ── Awards ──
  awardTitle: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  awardOrg: { fontSize: 7.5, color: BLUE, marginBottom: 1 },
  awardDesc: { fontSize: 7.5, lineHeight: 1.4, marginBottom: 5 },
  // ── Online links ──
  onlineRow: { marginBottom: 5 },
  onlineLabel: { fontSize: 8, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  onlineLink: { fontSize: 7.5, color: BLUE, textDecoration: 'none' },
  // ── Soft skills ──
  softSkill: { fontSize: 7.5, lineHeight: 1.5 },
})

function Dots({ filled, total = 4 }: { filled: number; total?: number }) {
  return (
    <View style={s.langDots}>
      {Array.from({ length: total }).map((_, i) => (
        <View key={i} style={[s.dot, i < filled ? s.dotFilled : s.dotEmpty]} />
      ))}
    </View>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children.toUpperCase()}</Text>
}

export function CVDocument({ data }: { data: CVData }) {
  const { personal, summary, experience, education, certifications, languages, skillCategories, softSkills, awards, onlineLinks } = data

  const softSkillList = softSkills.split('\n').map(s => s.trim()).filter(Boolean)

  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <View style={s.headerLeft}>
            <Text style={s.name}>{personal.name || 'Your Name'}</Text>
            <Text style={s.jobTitle}>{personal.title}</Text>
            <View style={s.contactLine}>
              {personal.phone && <Text style={s.contactItem}>☎ {personal.phone}</Text>}
              {personal.email && <Text style={s.contactItem}>@ {personal.email}</Text>}
              {personal.linkedin && (
                <Link src={personal.linkedin} style={s.contactItem}>
                  {personal.linkedin.replace('https://', '')}
                </Link>
              )}
            </View>
            <View style={s.contactLine}>
              {personal.location && <Text style={s.contactItem}>📍 {personal.location}</Text>}
              {personal.citizenship && <Text style={s.contactItem}>{personal.citizenship}</Text>}
              {personal.permit && <Text style={s.contactItem}>{personal.permit}</Text>}
            </View>
          </View>
          {personal.photo && (
            <Image style={s.photo} src={personal.photo} />
          )}
        </View>

        <View style={s.divider} />

        {/* Body: two columns */}
        <View style={s.body}>
          {/* LEFT */}
          <View style={s.leftCol}>
            {/* Experience */}
            {experience.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Experience</SectionTitle>
                {experience.map((exp, i) => (
                  <View key={exp.id} style={i < experience.length - 1 ? s.entryGap : undefined}>
                    <Text style={s.entryTitle}>{exp.jobTitle}</Text>
                    <Text style={s.entryCompany}>{exp.company}</Text>
                    {(exp.startDate || exp.location) && (
                      <Text style={s.entryMeta}>
                        {[exp.startDate, exp.endDate].filter(Boolean).join(' - ')}
                        {exp.location ? `  |  ${exp.location}` : ''}
                      </Text>
                    )}
                    {exp.bullets.split('\n').filter(Boolean).map((b, j) => (
                      <View key={j} style={s.bullet}>
                        <Text style={s.bulletDot}>•</Text>
                        <Text style={s.bulletText}>{b.trim().replace(/^[-•]\s*/, '')}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {/* Education */}
            {education.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Education</SectionTitle>
                {education.map((edu, i) => (
                  <View key={edu.id} style={i < education.length - 1 ? s.entryGap : undefined}>
                    <Text style={s.entryTitle}>{edu.degree}</Text>
                    <Text style={s.entryCompany}>{edu.institution}</Text>
                    {(edu.startDate || edu.location) && (
                      <Text style={s.entryMeta}>
                        {[edu.startDate, edu.endDate].filter(Boolean).join(' - ')}
                        {edu.location ? `  |  ${edu.location}` : ''}
                      </Text>
                    )}
                    {edu.description && <Text style={s.bulletText}>{edu.description}</Text>}
                  </View>
                ))}
              </View>
            )}

            {/* Distinctions & Awards */}
            {awards.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Distinctions &amp; Awards</SectionTitle>
                {awards.map(award => (
                  <View key={award.id}>
                    <Text style={s.awardTitle}>{award.title}</Text>
                    {award.organization && <Text style={s.awardOrg}>{award.organization}</Text>}
                    {award.date && <Text style={s.entryMeta}>{award.date}</Text>}
                    {award.description && <Text style={s.awardDesc}>{award.description}</Text>}
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* RIGHT */}
          <View style={s.rightCol}>
            {/* Summary */}
            {summary && (
              <View style={s.section}>
                <SectionTitle>Summary</SectionTitle>
                <Text style={s.bodyText}>{summary}</Text>
              </View>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Certifications</SectionTitle>
                {certifications.map(cert => (
                  <View key={cert.id}>
                    <Text style={s.certName}>{cert.name}</Text>
                    {cert.issuer && <Text style={s.certIssuer}>{cert.issuer}</Text>}
                    {cert.description && <Text style={s.certDesc}>{cert.description}</Text>}
                  </View>
                ))}
              </View>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Languages</SectionTitle>
                {languages.map(lang => (
                  <View key={lang.id} style={s.langRow}>
                    <View style={s.langLeft}>
                      <Text style={s.langName}>{lang.name}</Text>
                      <Text style={s.langLevel}>{lang.level}</Text>
                    </View>
                    <Dots filled={lang.dots} />
                  </View>
                ))}
              </View>
            )}

            {/* Skills */}
            {skillCategories.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Skills</SectionTitle>
                {skillCategories.map((cat, i) => (
                  <View key={cat.id}>
                    {cat.category && <Text style={[s.skillCat, i === 0 ? { marginTop: 0 } : {}]}>{cat.category}</Text>}
                    <Text style={s.skillItems}>{cat.items}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Soft Skills */}
            {softSkillList.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Soft Skills</SectionTitle>
                {softSkillList.map((skill, i) => (
                  <Text key={i} style={s.softSkill}>{skill}</Text>
                ))}
              </View>
            )}

            {/* Find me online */}
            {onlineLinks.length > 0 && (
              <View style={s.section}>
                <SectionTitle>Find Me Online</SectionTitle>
                {onlineLinks.map(link => (
                  <View key={link.id} style={s.onlineRow}>
                    <Text style={s.onlineLabel}>{link.label}</Text>
                    <Link src={link.url} style={s.onlineLink}>{link.url}</Link>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  )
}
