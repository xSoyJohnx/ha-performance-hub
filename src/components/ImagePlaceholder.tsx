interface ImagePlaceholderProps {
  variable: string;
  className?: string;
  aspect?: string;
}

/**
 * Visual placeholder for image variables that the user will replace later.
 * Renders the variable name (e.g. [HERO_IMAGE]) on a branded dark surface.
 */
export function ImagePlaceholder({ variable, className = "", aspect }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-black/60" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="font-display text-sm md:text-base tracking-widest text-brand/80 border border-brand/40 px-4 py-2 rounded-md bg-black/50 backdrop-blur-sm">
          {variable}
        </span>
      </div>
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand" />
    </div>
  );
}
