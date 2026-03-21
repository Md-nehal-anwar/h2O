export default function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <div className="w-56 h-2 bg-[var(--secondary_color)] rounded-sm overflow-hidden border-none ">
      <div
        className="h-full bg-[var(--primary_color)] "
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
