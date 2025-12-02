'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface Job {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  url: string
  description: string
  highlights: string[]
}

interface ExperienceProps {
  title: string
  jobs: Job[]
}

function formatDate(dateString: string): string {
  if (dateString === 'present') return 'Present'
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function Experience({ title, jobs }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState(jobs[0]?.id || '')

  return (
    <section id="jobs" className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-[#ccd6f6] text-2xl md:text-3xl whitespace-nowrap">
          <span className="text-[#FFC107] font-mono mr-2">02.</span>
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent flex-1 max-w-md"></div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col md:flex-row gap-8">
        <TabsList className="flex flex-row md:flex-col bg-transparent h-auto gap-0 border-b md:border-b-0 md:border-l-2 border-[#1a1a1a] overflow-x-auto md:overflow-visible">
          {jobs.map((job) => (
            <TabsTrigger
              key={job.id}
              value={job.id}
              className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#FFC107] data-[state=active]:border-l-2 data-[state=active]:border-[#FFC107] text-[#8892b0] hover:bg-[#1a1a1a] hover:text-[#FFC107] rounded-none px-6 py-3 text-left justify-start whitespace-nowrap md:whitespace-normal border-l-2 border-transparent -ml-0.5 transition-all"
            >
              {job.company}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1">
          {jobs.map((job) => (
            <TabsContent key={job.id} value={job.id} className="space-y-4">
              <div>
                <h3 className="text-[#ccd6f6] text-xl">
                  {job.title} <span className="text-[#FFC107]">@</span> {job.company}
                </h3>
                <p className="text-[#8892b0] text-sm">{formatDate(job.startDate)} — {formatDate(job.endDate)}</p>
              </div>
              <p className="text-[#a8b2d1]">{job.description}</p>
              <ul className="space-y-2">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-[#a8b2d1]">
                    <span className="text-[#FFC107] flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  )
}

