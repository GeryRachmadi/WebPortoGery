function SectionHeading({ watermark, label }) {
  return (
    <div className="relative flex h-[300px] items-center justify-center overflow-hidden">
      <p
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[200px] font-semibold text-brand-watermark"
      >
        {watermark}
      </p>
      <h2 className="relative bg-brand-blue px-[14px] font-heading text-4xl font-semibold text-brand-yellow">
        {label}
      </h2>
    </div>
  );
}

export default SectionHeading;
