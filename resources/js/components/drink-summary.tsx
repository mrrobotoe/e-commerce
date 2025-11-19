"use client"

import { Card } from "@/components/ui/card"
import type { DrinkCustomization } from "./drink-customizer"

interface DrinkSummaryProps {
    customization: DrinkCustomization
    bases: Array<{ slug: string; name: string, price: string }>
    flavors: Array<{ slug: string; name: string, price: string }>
    addIns: Array<{ slug: string; name: string, price: string }>
}

export function DrinkSummary({ customization, bases, flavors, addIns }: DrinkSummaryProps) {
    const baseLabel = bases.find((b) => b.slug === customization.base)?.name
    const flavorLabel = flavors.find((f) => f.slug === customization.flavor)?.name
    const addInLabels = addIns.filter((a) => customization.addIns.includes(a.slug)).map((a) => a.name)

    const basePrice = bases.find((b) => b.slug === customization.base)?.price
    const flavorPrice = flavors.find((f) => f.slug === customization.flavor)?.price
    const addInPrice = addIns.filter((a) => customization.addIns.includes(a.slug)).map((a) => a.price)

    const isComplete = customization.base && customization.flavor && customization.addIns.length > 0
    return (
        <Card className="p-6 border border-border bg-accent/5">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm">
                {baseLabel ? (
                    <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">Base:</span>
                        <span className="text-foreground">{baseLabel}</span>
                    </div>
                ) : (
                    <div className="flex items-start gap-2">
                        <span className="text-muted-foreground font-medium">Base:</span>
                        <span className="text-muted-foreground italic">Not selected</span>
                    </div>
                )}

                {flavorLabel ? (
                    <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">Flavor:</span>
                        <span className="text-foreground">{flavorLabel}</span>
                    </div>
                ) : (
                    <div className="flex items-start gap-2">
                        <span className="text-muted-foreground font-medium">Flavor:</span>
                        <span className="text-muted-foreground italic">Not selected</span>
                    </div>
                )}

                {addInLabels.length > 0 ? (
                    <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">Add-ins:</span>
                        <span className="text-foreground">{addInLabels.join(", ")}</span>
                    </div>
                ) : (
                    <div className="flex items-start gap-2">
                        <span className="text-muted-foreground font-medium">Add-ins:</span>
                        <span className="text-muted-foreground italic">None selected</span>
                    </div>
                )}

                <div className="flex items-start gap-2 pt-2 border-t border-border">
                    <span className="text-primary font-medium">Options:</span>
                    <div className="text-foreground space-y-1">
                        <div>{customization.carbonated ? "✓ Sparkling" : "x Non-Sparkling"}</div>
                        <div className="capitalize">
                            {`Ice Level: ${customization.ice}`}
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-border">
                    <span className="text-primary font-medium">Price:</span>
                    <div className="text-foreground space-y-1">
                        {
                            (
                                (
                                    ( basePrice ? parseInt(basePrice) : 0.00 ) +
                                    ( flavorPrice ? parseInt(flavorPrice) : 0.00 ) +
                                    ( addInPrice ? addInPrice.reduce((a, b) => a + parseInt(b), 0 ) : 0.00 )
                                ) / 100
                            ).toLocaleString(
                                "en-US", { style: "currency", currency: "USD" }
                            )
                        }
                    </div>
                </div>
            </div>

            {isComplete && (
                <div className="mt-4 p-3 rounded-lg bg-green-400/10 border border-primary/30">
                    <p className="text-sm font-medium text-primary">✓ Your drink is ready to order!</p>
                </div>
            )}

            {!isComplete && (
                <div className="mt-4 p-3 rounded-lg bg-muted border border-border">
                    <p className="text-sm text-muted-foreground">Complete your selections to order</p>
                </div>
            )}
        </Card>
    )
}
