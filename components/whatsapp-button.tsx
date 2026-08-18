'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const contacts = [
  {
    name: 'Managing Director / CEO',
    number: '+966 556 011 122',
    whatsapp: '966556011122',
  },
  {
    name: 'Sales Manager',
    number: '+234 806 333 2227',
    whatsapp: '2348063332227',
  },
]

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[90]">

      {/* Contact Menu */}
      <div
        className={`
          absolute bottom-20 right-0 w-[290px]
          overflow-hidden rounded-2xl
          border border-slate-200
          bg-white shadow-2xl
          transition-all duration-300
          ${
            open
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-3 scale-95 opacity-0'
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#0A2E6F] px-5 py-4 text-white">
          <p className="text-sm font-bold">
            Contact UNASCO Aviation
          </p>

          <p className="mt-1 text-xs text-white/70">
            Choose a WhatsApp contact
          </p>
        </div>

        {/* Contacts */}
        <div className="p-3">

          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={`https://wa.me/${contact.whatsapp}?text=Hello%20UNASCO%20Aviation%20Limited,%20I%20would%20like%20to%20make%20an%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                rounded-xl p-3
                transition-all duration-200
                hover:bg-slate-50
                active:scale-[0.98]
              "
            >
              {/* WhatsApp Icon */}
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#25D366]/10
                  text-[#25D366]
                "
              >
                <MessageCircle className="h-5 w-5" />
              </div>

              {/* Contact Details */}
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900">
                  {contact.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  {contact.number}
                </p>

                <p className="mt-1 text-xs font-medium text-[#25D366]">
                  Chat on WhatsApp →
                </p>
              </div>
            </a>
          ))}

        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={
          open
            ? 'Close WhatsApp contacts'
            : 'Contact UNASCO Aviation on WhatsApp'
        }
        aria-expanded={open}
        className="
          relative
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-2xl
          transition-all duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-[0_15px_40px_rgba(37,211,102,0.35)]
          active:scale-95
          sm:h-16 sm:w-16
        "
      >
        {open ? (
          <X className="h-7 w-7 sm:h-8 sm:w-8" />
        ) : (
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
        )}

        {/* Notification Dot */}
        {!open && (
          <span
            aria-hidden="true"
            className="
              absolute right-0 top-0
              h-3.5 w-3.5
              rounded-full
              border-2 border-white
              bg-[#25D366]
            "
          />
        )}
      </button>

    </div>
  )
}