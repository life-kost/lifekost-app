import { ProgressSavingChart } from "@/components/dashboard/progress-saving-chart"
import { AgendaWeekly } from "@/components/dashboard/agenda-weekly"
import { GreetingSection } from "@/components/dashboard/greetings-section"
import { StatCardSection } from "@/components/dashboard/star-section"
import { DailyMotivation } from "@/components/dashboard/daily-motivation"

export default function DashboardUser() {
  return (
    <div className="space-y-6">
      <GreetingSection />
      <StatCardSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProgressSavingChart />
        <AgendaWeekly />
        <DailyMotivation />
      </div>
    </div>
  )
}
