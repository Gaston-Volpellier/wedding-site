import Image from 'next/image';

type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light';
  priority?: boolean;
};

export default function Logo({
  className = 'h-10 w-auto',
  variant = 'dark',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Alice & Gaston"
      width={596}
      height={842}
      priority={priority}
      className={`object-contain ${variant === 'light' ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}
