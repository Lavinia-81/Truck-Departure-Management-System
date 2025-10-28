import Link from "next/link"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Clock from "./clock"
import { Separator } from "./ui/separator"

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Truck className="h-6 w-6 text-primary" />
          <span className="font-headline">Depot Dispatch Display</span>
        </Link>
        <Separator orientation="vertical" className="h-6 hidden md:block" />
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4 ml-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href="/optimize">
              Route Optimizer
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Clock />
        </div>
      </nav>
    </header>
  )
}
