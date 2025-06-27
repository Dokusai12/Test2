import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  open: boolean;
  onClose: () => void;
  instructorName: string;
  availableTimes: { day: string; times: string[] }[];
};

const BookingModal: React.FC<Props> = ({
  open,
  onClose,
  instructorName,
  availableTimes,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const router = useRouter();
  const firstControlRef = useRef<HTMLSelectElement | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  // Set default day
  useEffect(() => {
    if (availableTimes.length > 0 && !selectedDay) {
      setSelectedDay(availableTimes[0].day);
    }
  }, [availableTimes, selectedDay]);

  // Focus management and Escape key to close
  useEffect(() => {
    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement;
      // Focus first control
      setTimeout(() => {
        firstControlRef.current?.focus();
      }, 10);
      // Add escape key listener
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("keydown", handleKey);
      };
    } else {
      // Restore focus to last active element
      lastActiveElement.current?.focus();
    }
  }, [open, onClose]);

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
    setSelectedTime(""); // reset time
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const timesForDay =
    availableTimes.find((a) => a.day === selectedDay)?.times || [];

  const handleConfirm = () => {
    if (selectedDay && selectedTime) {
      router.push({
        pathname: "/confirmation",
        query: {
          instructor: instructorName,
          time: `${selectedDay} ${selectedTime}`,
        },
      });
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center transition"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          ×
        </button>
        <h3 id="booking-modal-title" className="text-xl font-semibold mb-4">
          Book Lesson with {instructorName}
        </h3>
        <div className="mb-3">
          <label className="block mb-1 font-medium" htmlFor="day">
            Day
          </label>
          <select
            id="day"
            ref={firstControlRef}
            className="border rounded px-3 py-2 w-full mb-2 focus:ring-orange-400"
className="border rounded px-3 py-2 w-full focus:ring-orange-400"
className="w-full rounded bg-orange-600 text-white px-4 py-2 font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition disabled:opacity-60"
          aria-label="Confirm booking"
        >
          Confirm Booking
        </button>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BookingModal;