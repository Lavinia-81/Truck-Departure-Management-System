"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import type { Departure } from "@/lib/types"
import type { SuggestOptimizedRouteOutput } from "@/ai/flows/suggest-optimized-route";
import { Loader2, Route, Clock, Lightbulb, TrafficCone, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface RouteStatusDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  departure: Departure | null;
  routeStatus: SuggestOptimizedRouteOutput | null;
  isLoading: boolean;
}

export function RouteStatusDialog({ isOpen, onOpenChange, departure, routeStatus, isLoading }: RouteStatusDialogProps) {
  
  const hasWarnings = routeStatus?.roadWarnings && !routeStatus.roadWarnings.toLowerCase().includes("no significant warnings");
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Route Status for Trailer {departure?.trailerNumber}</DialogTitle>
          <DialogDescription>
            Live traffic warnings for the route from <span className="font-semibold">Depot, Liverpool</span> to <span className="font-semibold">{departure?.destination}</span>.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6">
            {isLoading && (
                <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
                    <Loader2 className="h-10 w-10 animate-spin text-primary"/>
                    <p>Checking for live traffic warnings...</p>
                </div>
            )}
            {!isLoading && routeStatus && (
                <>
                <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${hasWarnings ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                        <TrafficCone className={`h-6 w-6 ${hasWarnings ? 'text-destructive' : 'text-primary'}`} />
                    </div>
                    <div>
                        <p className="font-semibold">Road Warnings</p>
                        <p className="text-muted-foreground">{routeStatus.roadWarnings}</p>
                        {hasWarnings ? (
                            <Badge variant="destructive" className="mt-2">Action may be required</Badge>
                        ) : (
                            <Badge className="mt-2 bg-green-600/80 hover:bg-green-700">Route Clear</Badge>
                        )}
                    </div>
                </div>
                <Separator/>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full"><Route className="h-6 w-6 text-primary" /></div>
                    <div>
                        <p className="font-semibold">Suggested Route</p>
                        <p className="text-muted-foreground">{routeStatus.optimizedRoute}</p>
                    </div>
                </div>
                <Separator/>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full"><Clock className="h-6 w-6 text-primary" /></div>
                    <div>
                        <p className="font-semibold">Estimated Time</p>
                        <p className="text-muted-foreground">{routeStatus.estimatedTime}</p>
                    </div>
                </div>
                <Separator/>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full"><Lightbulb className="h-6 w-6 text-primary" /></div>
                    <div>
                        <p className="font-semibold">AI Reasoning</p>
                        <p className="text-muted-foreground">{routeStatus.reasoning}</p>
                    </div>
                </div>
                </>
            )}
            {!isLoading && !routeStatus && (
                <div className="flex flex-col items-center justify-center gap-4 text-destructive">
                     <TrafficCone className="h-10 w-10 "/>
                    <p className="font-semibold">Could not retrieve route status</p>
                    <p className="text-sm text-center">There was an error fetching the live traffic data. Please try again.</p>
                </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
