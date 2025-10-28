"use client"

import { Button } from "@/components/ui/button"
import { FileDown, FileUp } from "lucide-react"

interface DashboardActionsProps {
    onImportClick: () => void;
    onExport: () => void;
}

export function DashboardActions({ onImportClick, onExport }: DashboardActionsProps) {
    return (
        <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={onImportClick}>
                <FileUp className="mr-2 h-4 w-4" />
                Import
            </Button>
            <Button size="sm" variant="outline" onClick={onExport}>
                <FileDown className="mr-2 h-4 w-4" />
                Export
            </Button>
        </div>
    )
}
