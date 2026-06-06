import { useEffect, useState } from "react";
import { LAUNCH_DATE_EST } from "../lib/data";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  const days = Math.floor(total / 86_400_000);
  const hours = Math.floor((total % 86_400_000) / 3_600_000);
  const minutes = Math.floor((total % 3_600_000) / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ className = "" }: { className?: string }) {
  const target = new Date(LAUNCH_DATE_EST).getTime();
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "days", value: time.days },
    { label: "hours", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sec", value: time.seconds },
  ];

  return (
    <div
      className={`flex items-start justify-center gap-3 sm:gap-5 tabular-nums ${className}`}
      aria-label="Countdown to launch"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-start gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-semibold text-purple-500">
              {pad(u.value)}
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-tertiary">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl sm:text-3xl font-semibold text-white/15 leading-[1.05]">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
