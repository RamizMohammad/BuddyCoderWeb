interface LogoMarkProps {
  className?: string;
  imageClassName?: string;
}

export function LogoMark({ className = "h-9 w-9 rounded-lg", imageClassName = "h-full w-full" }: LogoMarkProps) {
  return (
    <span
      className={`relative grid place-items-center overflow-hidden bg-surface-elevated shadow-lg ring-1 ring-white/10 transition-transform group-hover:scale-105 ${className}`}
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className={`object-contain ${imageClassName}`}
        draggable={false}
      />
    </span>
  );
}
