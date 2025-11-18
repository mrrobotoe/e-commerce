// import { CupSoda } from 'lucide-react';
import { CartContext } from '@/lib/cart-store';
import {
    BASES,
    ADD_INS,
    FLAVORS,
    DrinkCustomization,
} from '@/components/drink-customizer';
import Discount from '@/components/discount';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';

const TAX_RATE = 0.08;


export default function DrinkCart() {
    const { cartItems, clearCart } = useContext(CartContext);
    const [discount, setDiscount] =  useState(0);
    // const cartItems = [];
    console.log(cartItems);
    const totalCost = cartItems.reduce((total: number, item: DrinkCustomization) => total + (item.cost || 0), 0);

    return (
            <div className="flex h-full flex-1 gap-2 overflow-x-auto rounded-xl p-4">
                <div className={"flex-1"}>
                    <div className={'flex-1'}>
                        {cartItems.map((item: DrinkCustomization) => (
                            <div
                                key={item.id}
                                className={
                                    'mb-4 rounded-lg border border-gray-300 p-4'
                                }
                            >
                                <p className={'mb-2 font-semibold'}>
                                    Drink Base:{' '}
                                    {
                                        BASES.find((base) => {
                                            return base.id === item.base;
                                        })?.label
                                    }
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Flavor:{' '}
                                    {
                                        FLAVORS.find((flavor) => {
                                            return flavor.id == item.flavor;
                                        })?.label
                                    }
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Add Ins:{' '}
                                    {
                                        item.addIns.map((addIn) => {
                                            const addInItem = ADD_INS.find(
                                                (ai) => ai.id == addIn
                                            );
                                            return addInItem ? addInItem.label : null;
                                        })
                                    }
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Ice Level: {item.ice[0].toUpperCase() + item.ice.slice(1)}
                                </p>
                                {/*<p className={'mb-2 font-semibold'}>*/}
                                {/*    Cost: {(item.cost / 100).toLocaleString(*/}
                                {/*    "en-US", { style: "currency", currency: "USD" }*/}
                                {/*)}*/}
                                {/*</p>*/}
                            </div>
                        ))}
                        {/*{drinkState?.base ? (*/}
                        {/*    <div*/}
                        {/*        className={*/}
                        {/*            'mb-4 rounded-lg border border-gray-300 p-4'*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        <p className={'mb-2 font-semibold'}>*/}
                        {/*            Drink Base:{' '}*/}
                        {/*            {*/}
                        {/*                BASES.find((base) => {*/}
                        {/*                    return base.id === drinkState.base;*/}
                        {/*                })?.label*/}
                        {/*            }*/}
                        {/*        </p>*/}
                        {/*        <p className={'mb-2 font-semibold'}>*/}
                        {/*            Flavor:{' '}*/}
                        {/*            {*/}
                        {/*                FLAVORS.find((flavor) => {*/}
                        {/*                    return flavor.id == drinkState.flavor;*/}
                        {/*                })?.label*/}
                        {/*            }*/}
                        {/*        </p>*/}
                        {/*        <p className={'mb-2 font-semibold'}>*/}
                        {/*            Add Ins:{' '}*/}
                        {/*            {*/}
                        {/*                JSON.parse(drinkState.addIns as unknown as string).map((addInId: string) => {*/}
                        {/*                    const addIn = ADD_INS.find(*/}
                        {/*                        (item) => item.id == addInId*/}
                        {/*                    );*/}
                        {/*                    return addIn ? addIn.label : null;*/}
                        {/*                }).filter((label: string | null) => label !== null).join(', ')*/}
                        {/*            }*/}
                        {/*        </p>*/}
                        {/*        <p className={'mb-2 font-semibold'}>*/}
                        {/*            Ice Level: {drinkState.ice}*/}
                        {/*        </p>*/}
                        {/*        /!*<p className={'mb-2 font-semibold'}>*!/*/}
                        {/*        /!*    Cost: {(drinkState.cost / 100).toLocaleString(*!/*/}
                        {/*        /!*    "en-US", { style: "currency", currency: "USD" }*!/*/}
                        {/*        /!*)}*!/*/}
                        {/*        /!*</p>*!/*/}
                        {/*    </div>*/}
                        {/*    ) : (*/}
                        {/*    <p className={'text-lg text-gray-600'}>*/}
                        {/*        You have no items in your cart. Start adding some*/}
                        {/*        delicious drinks!*/}
                        {/*    </p>*/}
                        {/*)}*/}
                        <Button variant={"ghost"} className={"text-destructive hover:text-destructive hover:bg-destructive/20"} onClick={clearCart}>
                            Clear Cart
                        </Button>
                    </div>
                </div>
                <div className={'min-w-1/3'}>
                    {/* Order Summary */}
                    <div
                        className={
                            'w-full rounded-lg border border-gray-300 p-4'
                        }
                    >
                        <h2 className={'mb-4 text-xl font-semibold'}>
                            Order Summary
                        </h2>
                        <div className={'mb-2 flex justify-between'}>
                            <span>Subtotal:</span>
                            <span>
                                {(totalCost / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                {/*{*/}
                                {/*    drinkState?.cost ? (*/}
                                {/*        (drinkState.cost / 100).toLocaleString(*/}
                                {/*        "en-US", { style: "currency", currency: "USD" })*/}
                                {/*    ) : (*/}
                                {/*        (0).toLocaleString("en-US", { style: "currency", currency: "USD" })*/}
                                {/*    )*/}
                                {/*}*/}
                            </span>
                        </div>
                        <div className={'mb-2 flex justify-between'}>
                            <span>Tax:</span>
                            <span>
                                {
                                    ((totalCost * TAX_RATE) / 100).toLocaleString(
                                        "en-US", { style: "currency", currency: "USD" })
                                }
                            </span>
                        </div>
                        <hr className={'my-2'} />
                        <div className={'mb-2 flex justify-between'}>
                            {
                                discount > 0 ? (
                                    <>
                                        <span>Discount:</span>
                                        <span>- {
                                            (discount / 100).toLocaleString(
                                                "en-US", { style: "currency", currency: "USD" }
                                            )
                                        }</span>
                                    </>
                                ) : (
                                    <Discount setDiscount={setDiscount}/>
                                )
                            }
                        </div>
                        <hr className={'my-2'} />
                        <div className={'flex justify-between font-bold'}>
                            <span>Subtotal:</span>
                            <span>
                                {
                                    (((totalCost * (TAX_RATE + 1)) / 100) - (discount / 100))
                                        .toLocaleString("en-US", { style: "currency", currency: "USD" })
                                }
                            </span>
                        </div>
                        {/* Checkout Button */}
                        <button
                            className={
                                'mt-4 w-full rounded bg-primary px-4 py-2 text-white hover:bg-primary/80'
                            }
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
    );
}
