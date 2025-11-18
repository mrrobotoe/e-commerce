"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DrinkPreview } from "./drink-preview"
import { OptionSelector } from "./option-selector"
import { DrinkSummary } from "./drink-summary"
import { router, useRemember } from '@inertiajs/react';
import { useContext } from 'react';
import { CartContext } from '@/lib/cart-store';

function getDrinkUID() {
    return Date.now().toString(36);
}
export interface DrinkCustomization {
    id: string | null
    base: string | null
    flavor: string | null
    addIns: string[]
    carbonated: boolean
    ice: "none" | "light" | "regular" | "extra"
    cost: number
}

export const BASES = [
    { id: 'base_water', label: 'Water', color: '#E8F4F8', price: 300 },
    { id: 'base_soda', label: 'Soda', color: '#612A00', price: 400 },
    // { id: "base", label: "Sparkling Water", color: "#D4E9F7" },
    { id: 'base_juice', label: 'Juice', color: '#AB0B23', price: 400 },
    { id: 'base_tea', label: 'Iced Tea', color: '#D2B48C', price: 400 },
    // { id: "coffee", label: "Coffee", color: "#8B6F47" },
];

export const FLAVORS = [
    // { id: "lemon", label: "Lemon" },
    { id: "flavor_vanilla", label: "Vanilla", price: 25 },
    { id: "flavor_cherry", label: "Cherry", price: 25 },
    { id: "flavor_lime", label: "Lime", price: 25 },
    { id: "flavor_mango", label: "Mango", price: 25 },
    { id: "peach", label: "Peach", price: 25 },
    { id: "flavor_strawberry", label: "Strawberry", price: 25 },
    { id: "flavor_raspberry", label: "Raspberry", price: 25 },
    // { id: "mint", label: "Mint" },
    // { id: "coconut", label: "Coconut" },
    // { id: "ginger", label: "Ginger" },
]

export const ADD_INS = [
    { id: "add_boba", label: "Boba Pearls", price: 50 },
    { id: "add_popping", label: "Popping Pearls", price: 75 },
    { id: "add_crushed_fruit", label: "Crushed Fruit", price: 100 },
    // { id: "honey", label: "Honey" },
    // { id: "sugar", label: "Sugar" },
    // { id: "syrup", label: "Syrup" },
    // { id: "citrus", label: "Citrus Slice" },
    // { id: "herb", label: "Fresh Herb" },
    // { id: "berries", label: "Berries" },
    // { id: "coconut-cream", label: "Coconut Cream" },
    // { id: "spice", label: "Spice" },
]

export function DrinkCustomizer() {
    // const page = usePage<SharedData>();
    // const { drink } = page.props;
    // const { auth } = page.props;
    // const route = useRoute(Ziggy);
    const { cartItems, addToCart } = useContext(CartContext);

    console.log(cartItems);
    const [drinkState, setDrinkState] = useRemember<DrinkCustomization>({
        id: getDrinkUID(),
        base: null,
        flavor: null,
        addIns: [],
        carbonated: false,
        ice: "regular",
        cost: 0
    })

    // const [customization, setCustomization] = useState<DrinkCustomization>({
    //     base: null,
    //     flavor: null,
    //     addIns: [],
    //     carbonated: false,
    //     ice: "regular",
    // })

    const handleBaseChange = (baseId: string) => {
        setDrinkState((prev) => ({
            ...prev,
            base: prev.base === baseId ? null : baseId,
        }))
    }

    const handleFlavorChange = (flavorId: string) => {
        setDrinkState((prev) => ({
            ...prev,
            flavor: prev.flavor === flavorId ? null : flavorId,
        }))
    }

    const handleAddInToggle = (addInId: string) => {
        setDrinkState((prev) => ({
            ...prev,
            addIns: prev.addIns.includes(addInId) ? prev.addIns.filter((id) => id !== addInId) : [...prev.addIns, addInId],
        }))
    }

    const handleCarbonatedToggle = () => {
        setDrinkState((prev) => ({
            ...prev,
            carbonated: !prev.carbonated,
        }))
    }

    const handleIceChange = (iceLevel: "none" | "light" | "regular" | "extra") => {
        setDrinkState((prev) => ({
            ...prev,
            ice: iceLevel,
        }))
    }

    const handleReset = () => {
        setDrinkState({
            id: getDrinkUID(),
            base: null,
            flavor: null,
            addIns: [],
            carbonated: false,
            ice: "regular",
            cost: 0
        })
    }

    const handleAddToCart = () => {
        addToCart({
            ...drinkState,
            cost: (
                (BASES.find(b => b.id === drinkState.base)?.price || 0) +
                (FLAVORS.find(f => f.id === drinkState.flavor)?.price || 0) +
                drinkState.addIns.reduce((sum, addInId) => {
                    return sum + (ADD_INS.find(a => a.id === addInId)?.price || 0);
                }, 0)
            )
        });
        router.get('cart');
    }

    return (
        <div className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
                        Craft Your Perfect Drink
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Customize every element to create your ideal beverage
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Customization Panel */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Base Selection */}
                        <OptionSelector
                            title="Choose Your Base"
                            description="Start with your preferred base liquid"
                            options={BASES.map((base) => ({
                                id: base.id,
                                label: base.label,
                            }))}
                            selected={drinkState.base}
                            onSelect={handleBaseChange}
                            multiSelect={false}
                        />

                        {/* Flavor Selection */}
                        <OptionSelector
                            title="Add a Flavor"
                            description="Select one signature flavor"
                            options={FLAVORS.map((flavor) => ({
                                id: flavor.id,
                                label: flavor.label,
                            }))}
                            selected={drinkState.flavor}
                            onSelect={handleFlavorChange}
                            multiSelect={false}
                        />

                        {/* Add-ins Selection */}
                        <OptionSelector
                            title="Mix in Add-ins"
                            description="Choose multiple complementary ingredients"
                            options={ADD_INS.map((addIn) => ({
                                id: addIn.id,
                                label: addIn.label,
                            }))}
                            selected={drinkState.addIns}
                            onSelect={handleAddInToggle}
                            multiSelect={true}
                        />

                        {/* Carbonation Toggle */}
                        <Card className="border border-border p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold">
                                        Carbonation
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Make it sparkling or still
                                    </p>
                                </div>
                                <button
                                    onClick={handleCarbonatedToggle}
                                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                                        drinkState.carbonated
                                            ? 'bg-primary'
                                            : 'bg-muted'
                                    }`}
                                    role="switch"
                                    aria-checked={drinkState.carbonated}
                                >
                                    <span
                                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                            drinkState.carbonated
                                                ? 'translate-x-7'
                                                : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                            </div>
                        </Card>

                        {/* Ice Selection */}
                        <Card className="border border-border p-6">
                            <h3 className="mb-4 text-lg font-semibold">
                                Ice Level
                            </h3>
                            <div className="grid grid-cols-4 gap-3">
                                {(
                                    [
                                        'none',
                                        'light',
                                        'regular',
                                        'extra',
                                    ] as const
                                ).map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => handleIceChange(level)}
                                        className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                                            drinkState.ice === level
                                                ? 'bg-primary text-primary-foreground shadow-lg'
                                                : 'bg-muted text-foreground hover:bg-muted/80'
                                        }`}
                                    >
                                        {level.charAt(0).toUpperCase() +
                                            level.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <Button
                                onClick={handleReset}
                                variant="outline"
                                className="flex-1 bg-transparent"
                            >
                                Reset
                            </Button>

                            <Button
                                // asChild
                                onClick={handleAddToCart}
                                disabled={
                                    !(
                                        drinkState.base &&
                                        drinkState.flavor &&
                                        drinkState.addIns.length > 0
                                    )
                                }
                                className="flex-1 bg-primary hover:bg-primary/90"
                            >
                                Add to Cart
                                {/*<Link href={router.get('cart', [drinkState])}>Add to Cart</Link>*/}
                            </Button>
                        </div>
                    </div>

                    {/* Preview and Summary */}
                    <div className="space-y-6">
                        <DrinkPreview
                            customization={drinkState}
                            bases={BASES}
                        />
                        <DrinkSummary
                            customization={drinkState}
                            bases={BASES}
                            flavors={FLAVORS}
                            addIns={ADD_INS}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
