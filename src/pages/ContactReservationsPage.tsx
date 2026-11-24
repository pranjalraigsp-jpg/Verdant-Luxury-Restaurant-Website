import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Navigation, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BotanicalBadge, BotanicalWatermark, BotanicalDivider } from '../components/BotanicalElements';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import type { TableBookingFormState, EventEnquiryFormState } from '../types';

export const ContactReservationsPage: React.FC = () => {
  // Table Booking State
  const [tableForm, setTableForm] = useState<TableBookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: 2,
    specialRequests: '',
  });
  const [tableBookingStatus, setTableBookingStatus] = useState<'idle' | 'success'>('idle');
  const [tableBookingRef, setTableBookingRef] = useState<string>('');

  // Event Enquiry State
  const [eventForm, setEventForm] = useState<EventEnquiryFormState>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'anniversary',
    date: '',
    guests: 12,
    message: '',
  });
  const [eventBookingStatus, setEventBookingStatus] = useState<'idle' | 'success'>('idle');
  const [eventRef, setEventRef] = useState<string>('');

  // Validation errors
  const [tableErrors, setTableErrors] = useState<Record<string, string>>({});
  const [eventErrors, setEventErrors] = useState<Record<string, string>>({});

  // Handle Table Booking Submission
  const handleTableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!tableForm.fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!tableForm.phone.trim()) errors.phone = 'Please enter your contact phone number.';
    if (!tableForm.email.trim() || !/\S+@\S+\.\S+/.test(tableForm.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!tableForm.date) {
      errors.date = 'Please select a reservation date.';
    } else {
      const selected = new Date(tableForm.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.date = 'Reservation date must be today or in the future.';
      }
    }

    if (Object.keys(errors).length > 0) {
      setTableErrors(errors);
      return;
    }

    setTableErrors({});
    const ref = `VD-TBL-${Math.floor(1000 + Math.random() * 9000)}`;
    setTableBookingRef(ref);
    setTableBookingStatus('success');

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C8A96B', '#D8BD83', '#1D493A', '#FFFFFF'],
      });
    } catch {
      // ignore
    }
  };

  // Forward booking via WhatsApp
  const handleSendTableViaWhatsApp = () => {
    const text = `Hello VERDANT, I have submitted a table booking request (Ref: ${tableBookingRef}):\nName: ${tableForm.fullName}\nDate: ${tableForm.date} at ${tableForm.time}\nGuests: ${tableForm.guests}\nPhone: ${tableForm.phone}\nNotes: ${tableForm.specialRequests || 'None'}`;
    const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle Event Enquiry Submission
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!eventForm.fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!eventForm.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!eventForm.email.trim() || !/\S+@\S+\.\S+/.test(eventForm.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!eventForm.date) errors.date = 'Please select your preferred date.';

    if (Object.keys(errors).length > 0) {
      setEventErrors(errors);
      return;
    }

    setEventErrors({});
    const ref = `VD-EVT-${Math.floor(1000 + Math.random() * 9000)}`;
    setEventRef(ref);
    setEventBookingStatus('success');

    try {
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#C8A96B', '#D8BD83', '#F2EBDD'],
      });
    } catch {
      // ignore
    }
  };

  // Forward event via WhatsApp
  const handleSendEventViaWhatsApp = () => {
    const text = `Hello VERDANT Private Dining, I have submitted an event enquiry (Ref: ${eventRef}):\nName: ${eventForm.fullName}\nOccasion: ${eventForm.eventType}\nDate: ${eventForm.date}\nGuests: ${eventForm.guests}\nPhone: ${eventForm.phone}\nMessage: ${eventForm.message || 'None'}`;
    const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#102A24] pt-32 sm:pt-36 pb-12 sm:pb-14 text-left">
      {/* Header Banner */}
      <section className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center pb-16">
        <BotanicalWatermark variant="leaves" className="-top-12 left-1/2 -translate-x-1/2 w-80 h-56 opacity-[0.09]" />
        <BotanicalBadge label="Sanctuary &amp; Reservations" />

        <h1 className="font-playfair mt-3 text-4xl sm:text-6xl font-medium tracking-tight text-[#F2EBDD]">
          Connect &{' '}
          <span className="font-cormorant italic font-normal text-gold-pure">
            Reserve.
          </span>
        </h1>

        <p className="font-inter mt-4 text-base sm:text-[17px] font-light text-[rgba(240,235,225,0.88)] max-w-2xl mx-auto leading-[1.75]">
          We invite you to experience the poetry of fine dining. Secure your table, arrange an intimate celebration, or connect with our private concierge.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B: RESTAURANT CONTACT DETAILS                                     */}
      {/* ========================================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="rounded-2xl border border-[#C8A96B]/25 bg-[#0A1915]/80 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B] mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[#D8BD83] font-medium">
                Telephone Concierge
              </span>
              <p className="font-playfair text-lg text-[#F2EBDD] font-medium mt-1">
                {RESTAURANT_CONFIG.displayPhone}
              </p>
              <p className="font-inter text-[13.5px] text-[rgba(240,235,225,0.88)] mt-1 font-light leading-relaxed">
                Direct lines open from 10:00 Daily
              </p>
            </div>
            <a
              href={`tel:${RESTAURANT_CONFIG.phone}`}
              className="mt-4 font-inter text-xs font-semibold text-[#C8A96B] uppercase tracking-wider hover:underline"
            >
              Call Directly →
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[#C8A96B]/25 bg-[#0A1915]/80 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B] mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[#D8BD83] font-medium">
                Email Dossier
              </span>
              <p className="font-playfair text-base sm:text-lg text-[#F2EBDD] font-medium mt-1 break-all">
                {RESTAURANT_CONFIG.email}
              </p>
              <p className="font-inter text-[13.5px] text-[rgba(240,235,225,0.88)] mt-1 font-light leading-relaxed">
                For sommelier & press inquiries
              </p>
            </div>
            <a
              href={`mailto:${RESTAURANT_CONFIG.email}`}
              className="mt-4 font-inter text-xs font-semibold text-[#C8A96B] uppercase tracking-wider hover:underline"
            >
              Send Email →
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-[#C8A96B]/25 bg-[#0A1915]/80 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366] mb-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[#D8BD83] font-medium">
                WhatsApp Concierge
              </span>
              <p className="font-playfair text-lg text-[#F2EBDD] font-medium mt-1">
                {RESTAURANT_CONFIG.whatsappDisplay}
              </p>
              <p className="font-inter text-[13.5px] text-[rgba(240,235,225,0.88)] mt-1 font-light leading-relaxed">
                Instant messaging for table bookings
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=Hello%20VERDANT%2C%20I%20would%20like%20to%20enquire%20about%20a%20reservation.`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 font-inter text-xs font-semibold text-[#25D366] uppercase tracking-wider hover:underline"
            >
              Open WhatsApp Chat →
            </a>
          </div>

          {/* Service Hours */}
          <div className="rounded-2xl border border-[#C8A96B]/25 bg-[#0A1915]/80 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A96B]/15 text-[#C8A96B] mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <span className="font-cormorant text-[12.5px] uppercase tracking-[0.16em] text-[#D8BD83] font-medium">
                Dinner & Luncheon
              </span>
              <p className="font-inter text-[13.5px] text-[#F2EBDD] mt-1 font-medium">
                Dinner: {RESTAURANT_CONFIG.openingHours.dinner}
              </p>
              <p className="font-inter text-[13.5px] text-[#F2EBDD] font-medium">
                Lunch: {RESTAURANT_CONFIG.openingHours.lunch}
              </p>
              <p className="font-cormorant text-[12.5px] text-[#C8A96B] mt-2">
                Dress Code: Elegant Sophistication
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-2 border-t border-white/5">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[#B9C5BC]/70 hover:text-[#C8A96B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-currentColor stroke-[1.8]" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={RESTAURANT_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-[#B9C5BC]/70 hover:text-[#C8A96B] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-none stroke-currentColor stroke-[1.8]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION A: GOOGLE MAPS EMBED & ADDRESS DETAILS                            */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="overflow-hidden rounded-3xl border border-[#C8A96B]/30 bg-[#0A1915] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Card */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
                  Mayfair London Sanctuary
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-[#F2EBDD] mt-1">
                  Find Your Way to Verdant
                </h2>
                <div className="mt-6 flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#C8A96B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2EBDD] font-normal block font-playfair text-lg">
                      {RESTAURANT_CONFIG.address.street}
                    </strong>
                    <p className="font-inter text-xs text-[#B9C5BC]/85 font-light leading-relaxed mt-0.5">
                      {RESTAURANT_CONFIG.address.neighborhood}, {RESTAURANT_CONFIG.address.city} {RESTAURANT_CONFIG.address.postcode}
                      <br />
                      {RESTAURANT_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3 font-inter text-xs text-[#B9C5BC]/80 font-light">
                  <p>• Complimentary Valet Parking available on Berkeley Square.</p>
                  <p>• Nearest Tube Stations: Green Park (Piccadilly, Victoria & Jubilee Lines) and Bond Street.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C8A96B]/20">
                <a
                  href={RESTAURANT_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-6 py-3 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1915] shadow-md hover:scale-103 transition-transform"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[380px] relative bg-[#102A24]">
              <iframe
                title="VERDANT Restaurant Location Map"
                src={RESTAURANT_CONFIG.googleMaps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) brightness(0.85) invert(0.88) hue-rotate(145deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="pointer-events-none absolute inset-0 border-l border-t lg:border-t-0 border-[#C8A96B]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: TABLE BOOKING FORM                                             */}
      {/* ========================================================================= */}
      <BotanicalDivider />
      <section id="table-booking-form" className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 py-12 sm:py-16">
        <div className="rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] p-5 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-cormorant text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#C8A96B] font-semibold">
              Dinner & Luncheon Seating
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-1">
              Reserve Your Table
            </h2>
            <p className="font-inter text-sm sm:text-base text-[rgba(240,235,225,0.88)] mt-2 font-light leading-relaxed">
              We look forward to welcoming you to VERDANT. All reservations include a personalized concierge dossier.
            </p>
          </div>

          {tableBookingStatus === 'idle' ? (
            <form onSubmit={handleTableSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lord Alistair Vance"
                    value={tableForm.fullName}
                    onChange={(e) => setTableForm({ ...tableForm, fullName: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      tableErrors.fullName ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {tableErrors.fullName && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {tableErrors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +44 7911 123456"
                    value={tableForm.phone}
                    onChange={(e) => setTableForm({ ...tableForm, phone: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      tableErrors.phone ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {tableErrors.phone && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {tableErrors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alistair@vance.co.uk"
                    value={tableForm.email}
                    onChange={(e) => setTableForm({ ...tableForm, email: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      tableErrors.email ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {tableErrors.email && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {tableErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Number of Guests
                  </label>
                  <select
                    value={tableForm.guests}
                    onChange={(e) => setTableForm({ ...tableForm, guests: Number(e.target.value) })}
                    className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    value={tableForm.date}
                    onChange={(e) => setTableForm({ ...tableForm, date: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      tableErrors.date ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {tableErrors.date && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {tableErrors.date}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Preferred Time Slot
                  </label>
                  <select
                    value={tableForm.time}
                    onChange={(e) => setTableForm({ ...tableForm, time: e.target.value })}
                    className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                  >
                    <option value="12:30">12:30 – Luncheon First Service</option>
                    <option value="13:30">13:30 – Afternoon Gastronomy</option>
                    <option value="17:30">17:30 – Twilight First Seating</option>
                    <option value="18:30">18:30 – Early Evening Service</option>
                    <option value="19:30">19:30 – Grand Tasting Seating</option>
                    <option value="20:30">20:30 – Nocturne Degustation</option>
                    <option value="21:15">21:15 – Late Night Service</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                  Special Requests / Dietary Restrictions
                </label>
                <textarea
                  rows={3}
                  placeholder="Allergies, anniversary celebrations, preferred seating salon..."
                  value={tableForm.specialRequests}
                  onChange={(e) => setTableForm({ ...tableForm, specialRequests: e.target.value })}
                  className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[12.5px] text-[rgba(240,235,225,0.85)] font-cormorant">
                  <ShieldCheck className="h-4 w-4 text-[#C8A96B]" />
                  <span>Demo Mode: Booking forwards directly to VERDANT Concierge</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-9 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#0A1915] shadow-lg transition-transform hover:scale-105"
                >
                  Confirm Table Booking
                </button>
              </div>
            </form>
          ) : (
            /* Booking Confirmed State */
            <div className="p-8 text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A96B] bg-[#C8A96B]/20 text-[#C8A96B] mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <span className="font-cormorant text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
                Reservation Request Recorded
              </span>

              <h3 className="font-playfair text-3xl font-medium text-[#F2EBDD] mt-2">
                We Await Your Presence
              </h3>

              <p className="font-inter text-sm text-[#B9C5BC]/90 max-w-md mt-2 font-light leading-relaxed">
                Thank you, <strong className="text-white font-normal">{tableForm.fullName}</strong>. Your table request for <strong className="text-white font-normal">{tableForm.guests} guests</strong> on <strong className="text-white font-normal">{tableForm.date} at {tableForm.time}</strong> has been logged.
              </p>

              {/* Booking Reference Pill */}
              <div className="mt-6 rounded-2xl border border-[#C8A96B]/30 bg-[#0A1915]/90 p-5 max-w-md w-full space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">Reference Code</span>
                  <span className="font-inter font-bold text-gold-pure">{tableBookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">Service</span>
                  <span className="font-inter text-[#F2EBDD]">{tableForm.date} at {tableForm.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">Party Size</span>
                  <span className="font-inter text-[#F2EBDD]">{tableForm.guests} Guests</span>
                </div>
              </div>

              {/* WhatsApp Forwarding Action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleSendTableViaWhatsApp}
                  className="flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/20 hover:bg-[#25D366] text-white px-7 py-3 font-inter text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-md"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>

                <button
                  onClick={() => setTableBookingStatus('idle')}
                  className="rounded-full border border-[#C8A96B]/40 px-6 py-3 font-inter text-xs uppercase tracking-widest text-[#F2EBDD] hover:bg-white/5"
                >
                  New Reservation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: PRIVATE DINING / EVENT RESERVATION                             */}
      {/* ========================================================================= */}
      <section id="event-booking-form" className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-16 sm:pb-24">
        <div className="rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] p-5 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-cormorant text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Private Salons & Corporate Gatherings
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-1">
              Private Dining & Events
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#B9C5BC]/85 mt-2 font-light">
              From milestone birthdays to corporate executive dinners, our dedicated private dining team orchestrates bespoke menus and sommelier pairings.
            </p>
          </div>

          {eventBookingStatus === 'idle' ? (
            <form onSubmit={handleEventSubmit} className="space-y-6">
              {/* Full Name & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lady Vivienne Montgomery"
                    value={eventForm.fullName}
                    onChange={(e) => setEventForm({ ...eventForm, fullName: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      eventErrors.fullName ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {eventErrors.fullName && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {eventErrors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +44 20 7946 0888"
                    value={eventForm.phone}
                    onChange={(e) => setEventForm({ ...eventForm, phone: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      eventErrors.phone ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {eventErrors.phone && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {eventErrors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. vivienne@montgomery.com"
                    value={eventForm.email}
                    onChange={(e) => setEventForm({ ...eventForm, email: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      eventErrors.email ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {eventErrors.email && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {eventErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Event Type
                  </label>
                  <select
                    value={eventForm.eventType}
                    onChange={(e) => setEventForm({ ...eventForm, eventType: e.target.value as any })}
                    className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                  >
                    <option value="anniversary">Anniversary Dinner</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="private-dining">Private Dining Salon (Up to 14)</option>
                    <option value="corporate">Corporate Board Dinner</option>
                    <option value="special-occasion">Special Occasion Gala</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className={`w-full rounded-xl border bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] ${
                      eventErrors.date ? 'border-red-400' : 'border-[#C8A96B]/30'
                    }`}
                  />
                  {eventErrors.date && (
                    <span className="font-inter text-xs text-red-400 mt-1 block">
                      {eventErrors.date}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                    Estimated Number of Guests
                  </label>
                  <input
                    type="number"
                    min={4}
                    max={120}
                    value={eventForm.guests}
                    onChange={(e) => setEventForm({ ...eventForm, guests: Number(e.target.value) })}
                    className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] mb-2 font-semibold">
                  Additional Message / Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the desired flow of the evening, custom floral arrangements, rare cellar preferences..."
                  value={eventForm.message}
                  onChange={(e) => setEventForm({ ...eventForm, message: e.target.value })}
                  className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-3 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                />
              </div>

              {/* Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-9 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#0A1915] shadow-lg transition-transform hover:scale-105"
                >
                  Send Reservation Enquiry
                </button>
              </div>
            </form>
          ) : (
            /* Event Confirmed State */
            <div className="p-8 text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A96B] bg-[#C8A96B]/20 text-[#C8A96B] mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <span className="font-cormorant text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
                Enquiry Received
              </span>

              <h3 className="font-playfair text-3xl font-medium text-[#F2EBDD] mt-2">
                Our Events Director Will Be in Touch
              </h3>

              <p className="font-inter text-sm text-[#B9C5BC]/90 max-w-md mt-2 font-light leading-relaxed">
                Thank you, <strong className="text-white font-normal">{eventForm.fullName}</strong>. We have logged your request for a private event of <strong className="text-white font-normal">{eventForm.guests} guests</strong> on <strong className="text-white font-normal">{eventForm.date}</strong>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleSendEventViaWhatsApp}
                  className="flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/20 hover:bg-[#25D366] text-white px-7 py-3 font-inter text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-md"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <button
                  onClick={() => setEventBookingStatus('idle')}
                  className="rounded-full border border-[#C8A96B]/40 px-6 py-3 font-inter text-xs uppercase tracking-widest text-[#F2EBDD] hover:bg-white/5"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: FINAL CONTACT CTA                                              */}
      {/* ========================================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-[#C8A96B]/40 bg-gradient-to-r from-[#0A1915] via-[#16382F] to-[#0A1915] p-10 sm:p-16 text-center shadow-2xl">
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full bg-[#C8A96B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-[#1D493A]/30 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-cormorant text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Personalized Assistance
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#F2EBDD] mt-2">
              Let's Make Your Visit Special.
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#B9C5BC]/90 mt-3 font-light leading-relaxed">
              Our concierge team is at your disposal to answer questions, accommodate dietary requests, or craft tailor-made culinary journeys.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${RESTAURANT_CONFIG.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" />
                <span>Call Restaurant</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=Hello%20VERDANT%2C%20I%20would%20like%20to%20chat%20with%20the%20concierge.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[#C8A96B]/50 bg-[#102A24] hover:bg-[#1D493A] hover:border-[#C8A96B] text-[#D8BD83] hover:text-[#FFFFFF] px-8 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-lg hover:scale-105"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
