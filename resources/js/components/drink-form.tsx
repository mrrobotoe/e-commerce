import React from 'react';

const SIZES = ['sm', 'md', 'lg'];
export default function DrinkForm() {
    const [drinks, setDrinks] = React.useState([]);

    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"text-2xl font-semibold"}>
                base (soda or sparkling)
            </h2>
            <div className={"flex gap-2"}>
                {
                    SIZES.map((size) => (
                        <div key={size} className={"flex gap-4"}>
                            <input type="checkbox" id={size} name={size} />
                            <label htmlFor={size}>{size}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
