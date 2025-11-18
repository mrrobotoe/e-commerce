"use client"

import { Card } from "@/components/ui/card"

interface OptionSelectorProps {
    title: string
    description: string
    options: Array<{ id: string; label: string }>
    selected: string | string[] | null
    onSelect: (id: string) => void
    multiSelect: boolean
}

export function OptionSelector({ title, description, options, selected, onSelect, multiSelect }: OptionSelectorProps) {
    const isSelected = (id: string) => {
        if (Array.isArray(selected)) {
            return selected.includes(id)
        }
        return selected === id
    }

    return (
        <Card className="p-6 border border-border">
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onSelect(option.id)}
                        className={`p-3 rounded-lg font-medium text-sm transition-all border-2 ${
                            isSelected(option.id)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-muted text-foreground hover:border-primary/50 hover:bg-muted/80"
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </Card>
    )
}
