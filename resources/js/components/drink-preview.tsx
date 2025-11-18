"use client"

import { Card } from "@/components/ui/card"
import type { DrinkCustomization } from "./drink-customizer"

interface DrinkPreviewProps {
    customization: DrinkCustomization
    bases: Array<{ id: string; label: string; color: string }>
}

export function DrinkPreview({ customization, bases }: DrinkPreviewProps) {
    const selectedBase = bases.find((b) => b.id === customization.base)
    const baseColor = selectedBase?.color || "#F5F5F5"

    return (
        <Card className="p-8 border border-border flex flex-col items-center justify-center sticky top-8">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Your Drink</h3>

            {/* Glass Container */}
            <div className="relative w-32 h-56 mx-auto mb-6">
                {/* Glass */}
                <div className="absolute inset-0 rounded-b-3xl rounded-t-lg border-5 border-black/60 bg-white/30 backdrop-blur-sm overflow-hidden">
                    {/* Liquid */}
                    <div
                        className="absolute bottom-0 left-0 right-0 transition-all duration-300 rounded-bl-2xl rounded-br-2xl"
                        style={{
                            height: customization.base ? "60%" : "0%",
                            backgroundColor: baseColor,
                            opacity: 0.85,
                        }}
                    />

                    {/* Carbonation Bubbles */}
                    {customization.carbonated && (
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full bg-white/40"
                                    style={{
                                        width: `${Math.random() * 8 + 4}px`,
                                        height: `${Math.random() * 8 + 4}px`,
                                        left: `${Math.random() * 100}%`,
                                        top: `${100 - Math.random() * 80}%`,
                                        animation: `float ${2 + Math.random() * 2}s ease-in infinite`,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Ice */}
                    {customization.ice !== "none" && (
                        <div className="absolute top-0 left-0 right-0 pointer-events-none">
                            {customization.ice === "light" && <div className="h-1/4 bg-white/40 rounded-t-2xl" />}
                            {customization.ice === "regular" && <div className="h-1/3 bg-white/50 rounded-t-2xl" />}
                            {customization.ice === "extra" && <div className="h-1/2 bg-white/60 rounded-t-2xl" />}
                        </div>
                    )}
                </div>

                {/* Straw */}
                {customization.base && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-48 bg-gradient-to-b from-secondary to-secondary/50 rounded-full -z-10" />
                )}
            </div>

            {/* Status Text */}
            <div className="text-center mt-4">
                {customization.base ? (
                    <p className="text-sm text-muted-foreground">{customization.carbonated ? "✨ Sparkling" : "💧 Still"}</p>
                ) : (
                    <p className="text-sm text-muted-foreground italic">Select a base to start</p>
                )}
            </div>

            <style>{`
                @keyframes float {
                  0% {
                    transform: translateY(0px);
                    opacity: 0;
                  }
                  10% {
                    opacity: 0.5;
                  }
                  90% {
                    opacity: 0.5;
                  }
                  100% {
                    transform: translateY(-100vh);
                    opacity: 0;
                  }
                }
          `}</style>
        </Card>
    )
}
