import { DashboardHeader } from "@/components/dashboard-header"
import { ExecutiveSummary } from "@/components/executive-summary"
import { OperationalHeatmap } from "@/components/operational-heatmap"
import { MoneyLeakPanel } from "@/components/money-leak-panel"
import { LocationsTable } from "@/components/locations-table"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <DashboardHeader />

          {/* Executive Summary Grid */}
          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Executive Summary
            </h2>
            <ExecutiveSummary />
          </section>

          {/* Operational Heatmap */}
          <section>
            <OperationalHeatmap />
          </section>

          {/* Two Column Layout: Alerts + Table */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Money Leak Alerts */}
            <section>
              <MoneyLeakPanel />
            </section>

            {/* Locations Table */}
            <section>
              <LocationsTable />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
