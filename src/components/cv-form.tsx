'use client'

import { useForm, useFieldArray, UseFormRegister, Control } from 'react-hook-form'
import { useRef, useState, useCallback, useEffect } from 'react'
import { CVData } from '@/lib/types'
import { defaultCVData } from '@/lib/default-data'

// ── Helpers ────────────────────────────────────────────────────────────────

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  )
}

const inputCls =
  'border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
const textareaCls = inputCls + ' resize-y min-h-[80px]'

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">
      {title}
    </h2>
  )
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-2"
    >
      <span className="text-base leading-none">+</span> {label}
    </button>
  )
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs text-red-400 hover:text-red-600 font-medium ml-auto"
    >
      Remover
    </button>
  )
}

function EntryCard({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className="border border-gray-100 rounded-lg p-4 bg-gray-50 flex flex-col gap-3">
      <div className="flex justify-end">
        <RemoveButton onClick={onRemove} />
      </div>
      {children}
    </div>
  )
}

// ── Section Components ─────────────────────────────────────────────────────

function PersonalSection({
  register,
  onPhotoChange,
  photoPreview,
}: {
  register: UseFormRegister<CVData>
  onPhotoChange: (dataUrl: string) => void
  photoPreview: string
}) {
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onPhotoChange(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-col gap-3">
      <SectionHeader title="Informação Pessoal" />
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors"
            onClick={() => fileRef.current?.click()}
          >
            {photoPreview ? (
              <img src={photoPreview} alt="foto" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-xs text-center px-2">Foto</span>
            )}
          </div>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {photoPreview ? 'Alterar' : 'Upload'}
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <Field label="Nome completo">
            <input {...register('personal.name')} className={inputCls} placeholder="FERNANDO GONCALVES" />
          </Field>
          <Field label="Título / Cargo">
            <input {...register('personal.title')} className={inputCls} placeholder="Full Stack Software Engineer" />
          </Field>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Telefone">
          <input {...register('personal.phone')} className={inputCls} placeholder="+41 77 814 84 79" />
        </Field>
        <Field label="Email">
          <input {...register('personal.email')} className={inputCls} placeholder="email@exemplo.com" />
        </Field>
        <Field label="LinkedIn URL">
          <input {...register('personal.linkedin')} className={inputCls} placeholder="https://linkedin.com/in/..." />
        </Field>
        <Field label="Localização">
          <input {...register('personal.location')} className={inputCls} placeholder="Zurich, Switzerland" />
        </Field>
        <Field label="Cidadania">
          <input {...register('personal.citizenship')} className={inputCls} placeholder="Portuguese Citizen" />
        </Field>
        <Field label="Visto / Permissão">
          <input {...register('personal.permit')} className={inputCls} placeholder="Swiss Permit B" />
        </Field>
      </div>
    </div>
  )
}

function SummarySection({ register }: { register: UseFormRegister<CVData> }) {
  return (
    <div>
      <SectionHeader title="Resumo" />
      <textarea {...register('summary')} className={textareaCls + ' w-full min-h-[100px]'} placeholder="Escreve um breve resumo profissional…" />
    </div>
  )
}

function ExperienceSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'experience' })

  return (
    <div>
      <SectionHeader title="Experiência" />
      <div className="flex flex-col gap-4">
        {fields.map((field, i) => (
          <EntryCard key={field.id} onRemove={() => remove(i)}>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Cargo / Função">
                <input {...register(`experience.${i}.jobTitle`)} className={inputCls} placeholder="Software Engineer" />
              </Field>
              <Field label="Empresa">
                <input {...register(`experience.${i}.company`)} className={inputCls} placeholder="Nome da empresa" />
              </Field>
              <Field label="Data início">
                <input {...register(`experience.${i}.startDate`)} className={inputCls} placeholder="01/2025" />
              </Field>
              <Field label="Data fim">
                <input {...register(`experience.${i}.endDate`)} className={inputCls} placeholder="Presente" />
              </Field>
              <Field label="Localização">
                <input {...register(`experience.${i}.location`)} className={inputCls} placeholder="Zurich, Switzerland" />
              </Field>
            </div>
            <Field label="Pontos principais (uma linha por ponto)">
              <textarea {...register(`experience.${i}.bullets`)} className={textareaCls + ' w-full min-h-[100px]'} placeholder="Melhorei o desempenho em 25%&#10;Implementei pipelines CI/CD…" />
            </Field>
          </EntryCard>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), jobTitle: '', company: '', startDate: '', endDate: '', location: '', bullets: '' })} label="Adicionar Experiência" />
    </div>
  )
}

function EducationSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'education' })

  return (
    <div>
      <SectionHeader title="Educação" />
      <div className="flex flex-col gap-4">
        {fields.map((field, i) => (
          <EntryCard key={field.id} onRemove={() => remove(i)}>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Grau / Curso">
                <input {...register(`education.${i}.degree`)} className={inputCls} placeholder="BSc Computer Science" />
              </Field>
              <Field label="Instituição">
                <input {...register(`education.${i}.institution`)} className={inputCls} placeholder="Universidade Aberta" />
              </Field>
              <Field label="Data início">
                <input {...register(`education.${i}.startDate`)} className={inputCls} placeholder="09/2023" />
              </Field>
              <Field label="Data fim">
                <input {...register(`education.${i}.endDate`)} className={inputCls} placeholder="06/2027" />
              </Field>
              <Field label="Localização">
                <input {...register(`education.${i}.location`)} className={inputCls} placeholder="Lisboa (Remoto)" />
              </Field>
            </div>
            <Field label="Descrição">
              <textarea {...register(`education.${i}.description`)} className={textareaCls + ' w-full'} placeholder="Áreas de foco, distinções…" />
            </Field>
          </EntryCard>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), degree: '', institution: '', startDate: '', endDate: '', location: '', description: '' })} label="Adicionar Educação" />
    </div>
  )
}

function CertificationsSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'certifications' })

  return (
    <div>
      <SectionHeader title="Certificações" />
      <div className="flex flex-col gap-4">
        {fields.map((field, i) => (
          <EntryCard key={field.id} onRemove={() => remove(i)}>
            <Field label="Nome da Certificação">
              <input {...register(`certifications.${i}.name`)} className={inputCls} placeholder="Full Stack Development Level 5" />
            </Field>
            <Field label="Entidade emissora">
              <input {...register(`certifications.${i}.issuer`)} className={inputCls} placeholder="Code Institute" />
            </Field>
            <Field label="Descrição">
              <textarea {...register(`certifications.${i}.description`)} className={textareaCls + ' w-full'} placeholder="Breve descrição…" />
            </Field>
          </EntryCard>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), name: '', issuer: '', description: '' })} label="Adicionar Certificação" />
    </div>
  )
}

function LanguagesSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'languages' })

  return (
    <div>
      <SectionHeader title="Línguas" />
      <div className="flex flex-col gap-3">
        {fields.map((field, i) => (
          <div key={field.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50 grid grid-cols-4 gap-3 items-end">
            <Field label="Língua">
              <input {...register(`languages.${i}.name`)} className={inputCls} placeholder="Inglês" />
            </Field>
            <Field label="Nível">
              <input {...register(`languages.${i}.level`)} className={inputCls} placeholder="Proficiente" />
            </Field>
            <Field label="Pontos (1–4)">
              <input
                type="number"
                min={1}
                max={4}
                {...register(`languages.${i}.dots`, { valueAsNumber: true })}
                className={inputCls}
              />
            </Field>
            <div className="flex justify-end">
              <RemoveButton onClick={() => remove(i)} />
            </div>
          </div>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), name: '', level: '', dots: 3 })} label="Adicionar Língua" />
    </div>
  )
}

function SkillsSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'skillCategories' })

  return (
    <div>
      <SectionHeader title="Competências" />
      <div className="flex flex-col gap-3">
        {fields.map((field, i) => (
          <div key={field.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50 flex flex-col gap-2">
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Field label="Categoria">
                  <input {...register(`skillCategories.${i}.category`)} className={inputCls} placeholder="Programming Languages" />
                </Field>
              </div>
              <RemoveButton onClick={() => remove(i)} />
            </div>
            <Field label="Itens (separados por vírgula)">
              <input {...register(`skillCategories.${i}.items`)} className={inputCls} placeholder="Java, Python, TypeScript" />
            </Field>
          </div>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), category: '', items: '' })} label="Adicionar Categoria" />
    </div>
  )
}

function AwardsSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'awards' })

  return (
    <div>
      <SectionHeader title="Distinções & Prémios" />
      <div className="flex flex-col gap-4">
        {fields.map((field, i) => (
          <EntryCard key={field.id} onRemove={() => remove(i)}>
            <Field label="Título">
              <input {...register(`awards.${i}.title`)} className={inputCls} placeholder="1º lugar – Hackathon" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Organização">
                <input {...register(`awards.${i}.organization`)} className={inputCls} placeholder="Code Institute" />
              </Field>
              <Field label="Data">
                <input {...register(`awards.${i}.date`)} className={inputCls} placeholder="08/2024" />
              </Field>
            </div>
            <Field label="Descrição">
              <textarea {...register(`awards.${i}.description`)} className={textareaCls + ' w-full'} placeholder="Breve descrição do prémio…" />
            </Field>
          </EntryCard>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), title: '', organization: '', date: '', description: '' })} label="Adicionar Prémio" />
    </div>
  )
}

function SoftSkillsSection({ register }: { register: UseFormRegister<CVData> }) {
  return (
    <div>
      <SectionHeader title="Soft Skills" />
      <textarea {...register('softSkills')} className={textareaCls + ' w-full'} placeholder="Liderança&#10;Comunicação&#10;Trabalho em equipa" />
      <p className="text-xs text-gray-400 mt-1">Uma skill por linha</p>
    </div>
  )
}

function OnlineLinksSection({ register, control }: { register: UseFormRegister<CVData>; control: Control<CVData> }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'onlineLinks' })

  return (
    <div>
      <SectionHeader title="Links Online" />
      <div className="flex flex-col gap-3">
        {fields.map((field, i) => (
          <div key={field.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50 grid grid-cols-5 gap-3 items-end">
            <div className="col-span-2">
              <Field label="Etiqueta">
                <input {...register(`onlineLinks.${i}.label`)} className={inputCls} placeholder="GitHub" />
              </Field>
            </div>
            <div className="col-span-2">
              <Field label="URL">
                <input {...register(`onlineLinks.${i}.url`)} className={inputCls} placeholder="https://github.com/..." />
              </Field>
            </div>
            <div className="flex justify-end">
              <RemoveButton onClick={() => remove(i)} />
            </div>
          </div>
        ))}
      </div>
      <AddButton onClick={() => append({ id: Date.now().toString(), label: '', url: '' })} label="Adicionar Link" />
    </div>
  )
}

// ── Main Form ──────────────────────────────────────────────────────────────

export function CVForm({ onChange }: { onChange: (data: CVData) => void }) {
  const [photoPreview, setPhotoPreview] = useState(defaultCVData.personal.photo)

  const { register, control, watch, setValue } = useForm<CVData>({
    defaultValues: defaultCVData,
  })

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  // Subscribe to all form changes (text inputs + field array add/remove)
  useEffect(() => {
    const subscription = watch((value) => {
      onChangeRef.current(value as CVData)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const handlePhotoChange = useCallback((dataUrl: string) => {
    setPhotoPreview(dataUrl)
    setValue('personal.photo', dataUrl, { shouldDirty: true })
  }, [setValue])

  return (
    <form className="flex flex-col gap-8">
      <PersonalSection register={register} onPhotoChange={handlePhotoChange} photoPreview={photoPreview} />
      <SummarySection register={register} />
      <ExperienceSection register={register} control={control} />
      <EducationSection register={register} control={control} />
      <CertificationsSection register={register} control={control} />
      <LanguagesSection register={register} control={control} />
      <SkillsSection register={register} control={control} />
      <SoftSkillsSection register={register} />
      <AwardsSection register={register} control={control} />
      <OnlineLinksSection register={register} control={control} />
    </form>
  )
}
