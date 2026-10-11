const PageHeader = ({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) => (
  <section className="lattice bg-ink text-white">
    <div className="wrap py-14 md:py-20">
      <p className="eyebrow flex items-center gap-3 text-gold">
        <span className="khatam" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="display d1 mt-5 max-w-3xl">{title}</h1>
      {lede && <p className="lede mt-5 max-w-2xl text-white/80">{lede}</p>}
    </div>
  </section>
);

export default PageHeader;
