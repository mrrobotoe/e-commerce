// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { cart } from '@/routes';
import { Head, useRemember } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
// import { CupSoda } from 'lucide-react';
import {
    BASES,
    ADD_INS,
    FLAVORS,
    DrinkCustomization,
} from '@/components/drink-customizer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cart',
        href: cart().url,
    },
];

export default function Cart({drink}: { drink: DrinkCustomization}) {

    const [drinkState, setDrinkState] = useRemember<DrinkCustomization | null>({
            base: drink ? drink.base : '',
            flavor: drink ? drink.flavor : '',
            addIns: drink ? drink.addIns as string[] : [],
            carbonated: drink ? drink.carbonated : false,
            ice: drink ? drink.ice : 'regular',
            cost: drink ? drink.cost : 0,
    });

    const addInsArray = drink ? JSON.parse(drink.addIns as unknown as string) : [];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Cart" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className={''}>
                    {drinkState?.base ? (
                        <div
                            className={
                                'mb-4 rounded-lg border border-gray-300 p-4'
                            }
                        >
                            <p className={'mb-2 font-semibold'}>
                                Drink Base:{' '}
                                {
                                    BASES.find((base) => {
                                        return base.id === drinkState.base;
                                    })?.label
                                }
                            </p>
                            <p className={'mb-2 font-semibold'}>
                                Flavor:{' '}
                                {
                                    FLAVORS.find((flavor) => {
                                        return flavor.id == drinkState.flavor;
                                    })?.label
                                }
                            </p>
                            <p className={'mb-2 font-semibold'}>
                                Add Ins:{' '}
                                {
                                    JSON.parse(drinkState.addIns as unknown as string).map((addInId: string) => {
                                        const addIn = ADD_INS.find(
                                            (item) => item.id == addInId
                                        );
                                        return addIn ? addIn.label : null;
                                    }).filter((label: string | null) => label !== null).join(', ')
                                }
                            </p>
                            <p className={'mb-2 font-semibold'}>
                                Ice Level: {drinkState.ice}
                            </p>
                            <p className={'mb-2 font-semibold'}>
                                Cost: {(drinkState.cost / 100).toLocaleString(
                                "en-US", { style: "currency", currency: "USD" }
                            )}
                            </p>
                        </div>
                        ) : (
                        <p className={'text-lg text-gray-600'}>
                            You have no items in your cart. Start adding some
                            delicious drinks!
                        </p>
                    )}

                </div>
            </div>
        </AppLayout>
    );
}
