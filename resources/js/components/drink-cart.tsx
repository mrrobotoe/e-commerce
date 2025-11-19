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

    const subTotal = cartItems.reduce((total: number, item: DrinkCustomization) => total + (item.cost || 0), 0);
    const totalCost = (subTotal / 100) + (subTotal * TAX_RATE / 100) - ((subTotal * (discount / 100)) / 100);

    return (
            <div className="flex h-full flex-col md:flex-row md:flex-1 gap-2 overflow-x-auto rounded-xl p-4">
                <div className={"md:flex-1"}>
                    <Button variant={"outline"} className={"md:hidden mb-2"} onClick={clearCart}>
                        Clear Cart
                    </Button>
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
                                    <span className={"font-light text-sm"}>
                                    {
                                        BASES.find((base) => {
                                            return base.id === item.base;
                                        })?.label
                                    }
                                    </span>
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Flavor:{' '}
                                    <span className={"font-light text-sm"}>
                                        {
                                            FLAVORS.find((flavor) => {
                                                return flavor.id == item.flavor;
                                            })?.label
                                        }
                                    </span>
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Add Ins:{' '}
                                    <span className={"font-light text-sm"}>
                                    {
                                        item.addIns.map((addIn) => {
                                            const addInItem = ADD_INS.find(
                                                (ai) => ai.id == addIn
                                            );
                                            return addInItem ? addInItem.label : null;
                                        }).join(", ")
                                    }
                                    </span>
                                </p>
                                <p className={'mb-2 font-semibold'}>
                                    Ice Level:{' '}
                                    <span className={"font-light text-sm"}>
                                        {item.ice[0].toUpperCase() + item.ice.slice(1)}
                                    </span>
                                </p>
                            </div>
                        ))}
                        <Button variant={"outline"} className={"hidden sm:block mb-2"} onClick={clearCart}>
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
                                {(subTotal / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}
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
                                    ((subTotal * TAX_RATE) / 100).toLocaleString(
                                        "en-US", { style: "currency", currency: "USD" })
                                }
                            </span>
                        </div>
                        <hr className={'my-2'} />
                        <div className={'mb-2 flex justify-between'}>
                            {
                                (discount > 0) ? (
                                    <>
                                        <span>Discount:</span>
                                        <span>- {
                                            (Math.ceil((subTotal * (discount / 100))) / 100).toLocaleString(
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
                            <span>Total:</span>
                            <span>
                                {
                                    (
                                        (
                                            totalCost < 0 ? 0 : totalCost
                                        )
                                        .toLocaleString("en-US", { style: "currency", currency: "USD" })
                                    )
                                }
                            </span>
                        </div>
                        {/* Checkout Button */}
                        <Button
                            className={
                                'mt-4 w-full'
                            }
                        >
                            Purchase
                        </Button>
                    </div>
                </div>
            </div>
    );
}
