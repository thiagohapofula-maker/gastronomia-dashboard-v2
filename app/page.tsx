import { DashboardHeader } from "@/components/dashboard-header";
import { ExecutiveSummary } from "@/components/executive-summary";
import { OperationalHeatmap } from "@/components/operational-heatmap";
import { MoneyLeakPanel } from "@/components/money-leak-panel";
import { LocationsTable } from "@/components/locations-table";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Encabezado */}
          <DashboardHeader />

          {/* Cuadrícula de Resumen Ejecutivo */}
          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Resumen Ejecutivo
            </h2>
            <ExecutiveSummary />
          </section>

          {/* Mapa de Calor Operativo */}
          <section>
            <OperationalHeatmap />
          </section>

          {/* Diseño de dos columnas: Alertas + Tabla */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Alertas de Fugas de Dinero (Money Leak) */}
            <section>
              <MoneyLeakPanel />
            </section>

            {/* Tabla de Sucursales */}
            <section>
              <LocationsTable />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
