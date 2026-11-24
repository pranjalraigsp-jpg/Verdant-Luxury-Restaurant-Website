import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, Wine, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-12-14');
  const [time, setTime] = useState<string>('19:30');
  const [experience, setExperience] = useState<string>('degustation-12');
  const [winePairing, setWinePairing] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `VD-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setBookingRef(randomRef);
    setStep('confirmed');

    // Trigger celebratory gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C8A96B', '#D8BD83', '#F2EBDD', '#1D493A'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-[#0A1915]/90 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#C8A96B]/40 bg-gradient-to-b from-[#102A24] via-[#0E251F] to-[#0A1915] text-left shadow-[0_30px_90px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#0A1915]/60 text-[#F2EBDD] transition-colors hover:border-[#C8A96B] hover:text-[#C8A96B]"
            aria-label="Close reservation dialog"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Modal Content */}
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
              {/* Header Banner */}
              <div className="border-b border-[#C8A96B]/20 bg-[#0A1915]/60 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#C8A96B] font-cormorant font-medium">
                  <Sparkles className="h-3.5 w-3.5" />
                  Table Reservation
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#F2EBDD] mt-1">
                  Experience VERDANT
                </h3>
                <p className="font-inter text-sm sm:text-base text-[rgba(240,235,225,0.88)] mt-1.5 font-light">
                  Reserve your table at our main dining hall or intimate private salon.
                </p>
              </div>

              {/* Form Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                {/* 1. Guests Selection */}
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] font-semibold mb-2.5">
                    1. Party Size
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[1, 2, 4, 6, 8, 12].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`flex flex-col items-center justify-center py-2.5 rounded-xl border text-xs font-inter transition-all ${
                          guests === num
                            ? 'border-[#C8A96B] bg-gradient-to-b from-[#C8A96B] to-[#D8BD83] text-[#0A1915] font-semibold shadow-md'
                            : 'border-[#C8A96B]/20 bg-[#0A1915]/60 text-[#F2EBDD] hover:border-[#C8A96B]/60'
                        }`}
                      >
                        <span className="font-playfair text-base">{num}</span>
                        <span className="text-[11px] opacity-90 font-medium">
                          {num === 1 ? 'Guest' : num === 12 ? 'Salon' : 'Guests'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] font-semibold mb-2">
                      2. Service Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] font-semibold mb-2">
                      3. Seating Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-[14px] text-[#F2EBDD] focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                    >
                      <option value="17:30">17:30 – First Twilight Service</option>
                      <option value="18:30">18:30 – Early Grand Seating</option>
                      <option value="19:30">19:30 – Prime Culinary Service</option>
                      <option value="20:30">20:30 – Nocturne Degustation</option>
                      <option value="21:15">21:15 – Late Night Gastronomy</option>
                    </select>
                  </div>
                </div>

                {/* 3. Culinary Experience Choice */}
                <div>
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] font-semibold mb-2.5">
                    4. Selected Culinary Journey
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: 'degustation-12',
                        title: '12-Course Degustation',
                        price: '$385',
                        desc: "Chef Vance's complete sensory narrative",
                      },
                      {
                        id: 'tasting-9',
                        title: "Chef's Tasting (9-Course)",
                        price: '$265',
                        desc: 'Refined seasonal showcase',
                      },
                      {
                        id: 'a-la-carte',
                        title: 'A La Carte Gastronomy',
                        price: 'Individual',
                        desc: 'Curated by the guest',
                      },
                    ].map((exp) => (
                      <div
                        key={exp.id}
                        onClick={() => setExperience(exp.id)}
                        className={`cursor-pointer rounded-2xl border p-3.5 transition-all ${
                          experience === exp.id
                            ? 'border-[#C8A96B] bg-[#1D493A]/40 shadow-[0_0_15px_rgba(200,169,107,0.2)]'
                            : 'border-[#C8A96B]/20 bg-[#0A1915]/50 hover:border-[#C8A96B]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-playfair text-xs font-semibold text-[#F2EBDD]">
                            {exp.title}
                          </span>
                          <span className="font-cormorant font-bold text-sm text-gold-pure">
                            {exp.price}
                          </span>
                        </div>
                        <p className="font-inter text-[12.5px] text-[rgba(240,235,225,0.88)] mt-1 font-light leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wine Pairing Toggle */}
                <div
                  onClick={() => setWinePairing(!winePairing)}
                  className="flex items-center justify-between rounded-xl border border-[#C8A96B]/30 bg-[#102A24]/60 p-3.5 cursor-pointer hover:border-[#C8A96B]"
                >
                  <div className="flex items-center gap-3">
                    <Wine className="h-5 w-5 text-[#C8A96B]" />
                    <div>
                      <div className="font-inter text-[13.5px] font-medium text-[#F2EBDD]">
                        Grand Cru Rare Wine Pairing (+ $195 / guest)
                      </div>
                      <div className="font-cormorant text-[12.5px] text-[#D8BD83]">
                        Curated by Head Sommelier from our private cellar
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-md border transition-all ${
                      winePairing
                        ? 'border-[#C8A96B] bg-[#C8A96B] text-[#0A1915]'
                        : 'border-[#C8A96B]/40 bg-transparent'
                    }`}
                  >
                    {winePairing && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                  </div>
                </div>

                {/* 4. Guest Details */}
                <div className="space-y-3">
                  <label className="block font-cormorant text-[13px] uppercase tracking-[0.16em] text-[#C8A96B] font-semibold">
                    5. Guest Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-[14px] text-[#F2EBDD] placeholder-[#F2EBDD]/40 focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. +44 20 7946 0991)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-xs text-[#F2EBDD] placeholder-[#B9C5BC]/50 focus:border-[#C8A96B] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Special Dietary or Occasion Notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="rounded-xl border border-[#C8A96B]/30 bg-[#0A1915]/80 px-4 py-2.5 font-inter text-xs text-[#F2EBDD] placeholder-[#B9C5BC]/50 focus:border-[#C8A96B] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA Footer */}
              <div className="border-t border-[#C8A96B]/20 bg-[#0A1915] p-5 sm:p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#B9C5BC]/70 font-cormorant">
                  <ShieldCheck className="h-4 w-4 text-[#C8A96B]" />
                  <span>Complimentary Valet & Concierge Welcome</span>
                </div>

                <button
                  type="submit"
                  className="rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] via-[#D8BD83] to-[#C8A96B] px-8 py-3 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg transition-transform hover:scale-105 focus:outline-none"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation View */
            <div className="p-8 sm:p-12 text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A96B] bg-[#C8A96B]/20 text-[#C8A96B] mb-5">
                <Check className="h-8 w-8 stroke-[2.5]" />
              </div>

              <div className="font-cormorant text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
                Reservation Confirmed
              </div>

              <h3 className="font-playfair text-3xl sm:text-4xl font-medium text-[#F2EBDD] mt-2">
                We Await Your Arrival
              </h3>

              <p className="font-inter text-sm text-[#B9C5BC]/90 max-w-md mt-3 font-light leading-relaxed">
                Thank you, <span className="font-semibold text-white">{name || 'Honoured Guest'}</span>. Your table has been reserved. A confirmation concierge dossier has been sent to {email || 'your email'}.
              </p>

              {/* Booking Dossier Card */}
              <div className="mt-6 w-full max-w-md rounded-2xl border border-[#C8A96B]/30 bg-[#0A1915]/80 p-5 text-left space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">
                    Reference
                  </span>
                  <span className="font-inter font-bold text-gold-pure">
                    {bookingRef}
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">
                    Date & Service
                  </span>
                  <span className="font-inter text-[#F2EBDD]">
                    {date} at {time}
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">
                    Party Size
                  </span>
                  <span className="font-inter text-[#F2EBDD]">
                    {guests} Guests
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="font-cormorant text-[#B9C5BC]/80 uppercase tracking-widest">
                    Dress Code
                  </span>
                  <span className="font-inter text-[#D8BD83]">
                    Elegant Sophistication
                  </span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 rounded-full border border-[#C8A96B] bg-gradient-to-r from-[#C8A96B] to-[#D8BD83] px-8 py-3 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1915] shadow-lg hover:scale-105"
              >
                Return to Experience
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
