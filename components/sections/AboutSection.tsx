export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full relative px-4 sm:px-6 md:px-20 py-16 md:py-32 flex flex-col md:flex-row gap-12 md:gap-20 overflow-hidden"
    >
      <div className="md:w-1/2 pin-left">
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-8">
          The
          <br />
          Mindset
        </h2>
      </div>
      <div className="md:w-1/2 flex flex-col gap-12 md:gap-20 lg:gap-32 pt-4 md:pt-10">
        <p className="text-base sm:text-lg md:text-3xl lg:text-4xl leading-tight font-light">
          I build at the intersection of <span className="font-syne font-bold">design</span> and{' '}
          <span className="font-syne font-bold text-outline">logic</span>. My goal isn&apos;t just to
          write code, but to engineer emotions through seamless interaction.
        </p>
        <p className="text-base sm:text-lg md:text-3xl lg:text-4xl leading-tight font-light">
          Specializing in .NET, React, and full-stack architectures that transform complex requirements into robust, scalable solutions.
        </p>
      </div>
    </section>
  );
}
