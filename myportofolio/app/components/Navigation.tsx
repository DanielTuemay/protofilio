import { Button } from "@/components/ui/button"

interface NavigationProps {
  setCurrentPage: (page: string) => void
  currentPage: string
  isNightMode: boolean
}

export default function Navigation({ setCurrentPage, currentPage, isNightMode }: NavigationProps) {
  const pages = ["home", "about", "contact", "projects", "plans", "blog"]

  return (
    <nav className="flex space-x-2">
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => setCurrentPage(page)}
          variant={currentPage === page ? "default" : "outline"}
          className={`text-base font-medium ${
            isNightMode
              ? currentPage === page
                ? "bg-night-primary text-night-bg"
                : "text-night-text hover:text-night-accent"
              : currentPage === page
                ? "bg-day-primary text-day-bg"
                : "text-day-text hover:text-day-accent"
          }`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Button>
      ))}
    </nav>
  )
}

