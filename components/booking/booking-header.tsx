export function BookingHeader() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/pemayangtse-monastery-sikkim.jpg" alt="Sikkim Monastery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">Book Your Sacred Journey</h1>
        <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto">
          Discover authentic experiences, secure monastery passes, and connect with local guides for your spiritual
          adventure in Sikkim
        </p>
      </div>
    </section>
  )
}
