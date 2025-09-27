import { MainNav } from "@/components/navigation/main-nav"
import { MainFooter } from "@/components/footer/main-footer"
import { BookingHeader } from "@/components/booking/booking-header"
import { CategorySelector } from "@/components/booking/category-selector"
import { BookingFilters } from "@/components/booking/booking-filters"
import { BookingResults } from "@/components/booking/booking-results"

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <BookingHeader />
        <div className="container mx-auto px-4 py-8">
          <CategorySelector />
          <div className="grid lg:grid-cols-4 gap-8 mt-8">
            <div className="lg:col-span-1">
              <BookingFilters />
            </div>
            <div className="lg:col-span-3">
              <BookingResults />
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  )
}
