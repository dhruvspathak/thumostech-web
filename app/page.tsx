import ServicesCarousel from "@/components/ServicesCarousel";
import CustomersCarousel from "@/components/CustomersCarousel";
import BookDemoForm from "@/components/BookDemoForm";

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-surface-container-low border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
              <span className="font-label uppercase tracking-[0.15rem] text-[10px] font-bold text-primary">
                Live System Protection Active
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
              Thumos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
              Proactive cybersecurity solutions that turn vulnerability into an unbreakable defense strategy for modern enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a
                href="#services"
                className="bg-primary text-black px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all active:scale-95"
              >
                Explore Services
              </a>
              <a
                href="#book-demo"
                className="border border-outline-variant text-primary px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/5 transition-all group"
              >
                Book Demo
                <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Services Carousel ─── */}
      <section id="services" className="py-32 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-20 space-y-4">
            <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
              Operational Capabilities
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
              Core Security Services
            </h2>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* ─── Trusted Customers ─── */}
      <section className="py-16 bg-black">
        {/* Visual divider */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center font-label uppercase tracking-[0.2rem] text-[10px] text-zinc-500 mb-10">
            Trusted by Global Infrastructure Leaders
          </p>
        </div>
        <CustomersCarousel />
      </section>

      {/* ─── Book Demo ─── */}
      <section id="book-demo" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BookDemoForm />
        </div>
      </section>

      {/* ─── Thumos Edge ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
                  The Thumos Edge
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">
                  Elite Protection for Modern Enterprises
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Security is not a product; it&apos;s a constant state of vigilance. Thumos Tech brings a
                  military-grade mindset to corporate digital assets.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  <h4 className="font-headline font-bold text-lg">Verified Protocols</h4>
                  <p className="text-sm text-on-surface-variant">
                    Every system is audited against global ISO and SOC2 standards.
                  </p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                  <h4 className="font-headline font-bold text-lg">Rapid Response</h4>
                  <p className="text-sm text-on-surface-variant">
                    Incident mitigation within seconds, not minutes or hours.
                  </p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                  <h4 className="font-headline font-bold text-lg">Deep Visibility</h4>
                  <p className="text-sm text-on-surface-variant">
                    Real-time mapping of every packet and connection in your network.
                  </p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
                  <h4 className="font-headline font-bold text-lg">Future Proof</h4>
                  <p className="text-sm text-on-surface-variant">
                    Quantum-resistant encryption layers for long-term data safety.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img
                    alt="Server room hardware"
                    className="rounded w-full h-64 object-cover border border-zinc-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD7zUT5kPd7094bZGyG5liCqzT2PI3iv8imZ_5i4U9uXwhNsRuIxpCBSIt-ylnEcLK_U79oDtstxHfYCBgOdxWUu3Ck8pHI2wzKoTvGBfyTQrSkMTcdAJavSNoU1kbkH7JUbYxaA6zUpcUweIZJFbkDpkps_Vt2LXXpQjSZoLH8SNF4wnzcBFkbo3ilq16eYPpRqZlzzP1c8-vi_rgrCuox1wJUJIqYADJGgdO2Fpf9LtlAe7T-IJDH3GGQKGLLqo0Wyh41Z4TRvs"
                  />
                  <img
                    alt="Cybersecurity analyst"
                    className="rounded w-full h-48 object-cover border border-zinc-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxlfilyt252GA15kKmEoaU7HUjJiYnwlIvKGUvotfde_L1nLaNhe0lHYeNsumicB8min8HcPVFsnXTYlswkeNhaNGbYFdTEkxtr5abn5lWFeLdg7e8vDhEcORJIJtLWiKA92inTSiVBO7rY6xD7xwRSFvOqKuzn04PhxyevvaMGRoQuAD6C28JvoGfxfRxRpMBzcpDV3AHmHVMlh1Kco_IhxdxfcXuwyhLWywKR2MOEqQ4eK9wYIzpLbIu3UFDVDLy9W3Ak1LjLxQ"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    alt="Global network"
                    className="rounded w-full h-48 object-cover border border-zinc-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHUembMy6Eg6dTqoxiEfqwypr6gjmdq7Q6wT-0CT7qoRokSTQvg___u6WFj12OcIR9lSo19l-0AkVAQ0D1OY4nOhyRwjQY_TrqkLJR4fCbR31X300Mi_MJroQ7YUOaht8eGZoUwPGz6pRITdb_Cji331NnWc4s3onO2I0-638Hxi1toCojT98PFJPrf64YdiieL226iZY6zN8CDgVAxX3ZuEn8SLZOPfEYocKoH5KBJ4Mawp0VDLhwAsW6y0qk7VfV7jlkyumYgx8"
                  />
                  <img
                    alt="Computer circuit board"
                    className="rounded w-full h-64 object-cover border border-zinc-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2RKZEoHjjDnSTNCVXHHf55GxmsqwCY5cegYQqK8v7tuwIF_GmWu98yCHW-Bz9KgHL0q4JiZpuKnnPZHnS-uvubzof_IQuA4E1lap8evWTtMo_gPeWsWgLIMoBIOt6MKp1FyTdr3XRG1ZeW1c97dzym40pgb14aYpHX5A9OVAbIK2BF22v4p539jbrF1f83J84yrzWfmguaU2ICm-IwtVobNW5coPfASJYsNLYY-uHy0PjPox8NRzwj2v1KeH-eIe1wRaLPEpm7U"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
