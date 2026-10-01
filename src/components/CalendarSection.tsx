import { useState } from 'react';
import { CALENDAR_EVENTS } from '../data/mockData';
import { CalendarEvent } from '../types';
import EventModal from './EventModal';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CalendarSection() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Oct 2026, 1 = Nov 2026
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const months = [
    { name: 'Oktober 2026', year: 2026, month: 10, daysInMonth: 31, startDayOfWeek: 4 }, // Thu = 4
    { name: 'November 2026', year: 2026, month: 11, daysInMonth: 30, startDayOfWeek: 0 }, // Sun = 0
  ];

  const currentMonth = months[currentMonthIndex];

  // Filter events for active month
  const activeEvents = CALENDAR_EVENTS.filter((ev) => {
    const [year, month] = ev.date.split('-');
    return parseInt(year) === currentMonth.year && parseInt(month) === currentMonth.month;
  });

  const getDayEvents = (day: number) => {
    const formattedDate = `${currentMonth.year}-${String(currentMonth.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return CALENDAR_EVENTS.filter((ev) => ev.date === formattedDate);
  };

  return (
    <section id="calendar" className="py-28 px-6 relative border-t border-white/5 bg-[#04030e]">
      {/* Background glow orb */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>AURORA CALENDAR</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">AGENDA & KEGIATAN MAHASISWA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Event Calendar
            </h2>
          </div>

          {/* Month Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg text-white">
              {currentMonth.name}
            </span>
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10">
              <button
                onClick={() => setCurrentMonthIndex(Math.max(0, currentMonthIndex - 1))}
                disabled={currentMonthIndex === 0}
                type="button"
                className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentMonthIndex(Math.min(months.length - 1, currentMonthIndex + 1))}
                disabled={currentMonthIndex === months.length - 1}
                type="button"
                className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column layout: Calendar Interactive Grid + Agenda List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Monthly Calendar Grid */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/[0.025] backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-4 pb-3 border-b border-white/5">
              <span>Min</span>
              <span>Sen</span>
              <span>Sel</span>
              <span>Rab</span>
              <span>Kam</span>
              <span>Jum</span>
              <span>Sab</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Offset days from previous month */}
              {Array.from({ length: currentMonth.startDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-14 sm:h-18 rounded-xl bg-transparent" />
              ))}

              {/* Days in Month */}
              {Array.from({ length: currentMonth.daysInMonth }).map((_, i) => {
                const day = i + 1;
                const events = getDayEvents(day);
                const hasEvent = events.length > 0;

                return (
                  <button
                    key={`day-${day}`}
                    onClick={() => {
                      if (hasEvent) {
                        setSelectedEvent(events[0]);
                      }
                    }}
                    type="button"
                    className={`h-14 sm:h-18 p-1.5 sm:p-2 rounded-xl text-left border flex flex-col justify-between transition-all cursor-pointer ${
                      hasEvent
                        ? 'bg-violet-950/40 border-violet-500/40 hover:border-violet-400 hover:bg-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                        : 'bg-white/[0.015] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <span className={`text-xs font-mono font-semibold ${hasEvent ? 'text-violet-300 font-bold' : 'text-neutral-400'}`}>
                      {day}
                    </span>

                    {hasEvent && (
                      <div className="w-full">
                        <div className="hidden sm:block text-[10px] font-medium text-white truncate bg-violet-600/40 px-1.5 py-0.5 rounded border border-violet-400/30">
                          {events[0].title}
                        </div>
                        <div className="sm:hidden w-2 h-2 rounded-full bg-cyan-400 mx-auto" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                Hari dengan Agenda Terjadwal
              </span>
              <span className="font-mono">WITA (GMT+8)</span>
            </div>
          </div>

          {/* Right: Upcoming Agenda List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 px-1">
              <span>AGENDA BULAN INI</span>
              <span>{activeEvents.length} KEGIATAN</span>
            </div>

            {activeEvents.map((ev) => (
              <div
                key={ev.id}
                onClick={() => setSelectedEvent(ev)}
                className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-neutral-400">
                  <span className="text-violet-400 font-semibold">{ev.category}</span>
                  <span>{ev.date}</span>
                </div>

                <h4 className="font-display font-bold text-base text-white group-hover:text-violet-200 transition-colors mb-2">
                  {ev.title}
                </h4>

                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{ev.location}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-violet-300 group-hover:text-white transition-colors">
                  <span>LIHAT DETAIL & RSVP</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}
