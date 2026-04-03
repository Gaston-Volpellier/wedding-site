import RevealOnScroll from "./RevealOnScroll";

interface Props {
  children: string;
}

export default function SectionHeading({ children }: Props) {
  return (
    <RevealOnScroll>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal">
          {children}
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>
    </RevealOnScroll>
  );
}
