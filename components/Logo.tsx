import Image from "next/image";

export default function Logo({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <span className={`relative block shrink-0 ${className}`}>
      <Image
        src="/images/thawq-logo.png"
        alt="THAWQ Import & Export"
        fill
        priority
        sizes="96px"
        className="object-contain"
      />
    </span>
  );
}
