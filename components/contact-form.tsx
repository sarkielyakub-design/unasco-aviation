'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const services = [
  'Aviation Services',
  'Cargo Services',
  'Logistics',
 
  'General Enquiry',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-foreground">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your message has been received. A member of our team will get back to you within one business day.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company Ltd." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="service">Service of interest</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send message
      </Button>
    </form>
  )
}
