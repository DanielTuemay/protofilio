import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DayNightToggleProps {
  isNightMode: boolean
  setIsNightMode: (isNight: boolean) => void
}

export default function DayNightToggle({ isNightMode, setIsNightMode }: DayNightToggleProps) {
  return (
    <Button
      className="rounded-full p-2 transition-all duration-300 ease-in-out"
      onClick={() => setIsNightMode(!isNightMode)}
      variant="outline"
      style={{
        background: isNightMode ? "var(--night-primary)" : "var(--day-primary)",
        border: `2px solid ${isNightMode ? "var(--night-accent)" : "var(--day-accent)"}`,
      }}
    >
      {isNightMode ? <Sun className="h-5 w-5 text-night-bg" /> : <Moon className="h-5 w-5 text-day-bg" />}
    </Button>
  )
}

