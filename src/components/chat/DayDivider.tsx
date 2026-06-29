interface DayDividerProps {
  label: string;
}

export function DayDivider({ label }: DayDividerProps) {
  return (
    <div className="my-2 flex items-center justify-center">
      <div className="rounded-full border border-white/10 bg-[#12121A] px-4 py-1">
        <span className="text-xs font-medium text-[#BAB8B8]">{label}</span>
      </div>
    </div>
  );
}
