import { Dispatch, useState } from 'react';
import { Button} from '@/components/ui/button';

type disCountCodes = {
    [key: string]: number;
}
const DISCOUNT_CODES: disCountCodes = {
    'SAVE10': 10,
    'SAVE20': 20,
    'FREESHIP': 30,
};
export default function Discount({
    setDiscount
}: {
    setDiscount: Dispatch<number>
}) {
    const [updated, setUpdated] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const submitDiscount = () => {
        if (value in DISCOUNT_CODES) {
            setUpdated(true);
            setValue(`${value} 'discount applied!}`);
            setIsValid(true);
            setDiscount(DISCOUNT_CODES[value] as number);
        } else {
            setUpdated(true);
            setValue('');
            setIsValid(false);
            setDiscount(0);
        }
    }

    console.log(updated);
    return (
        <div className={''}>
            <label htmlFor="discount" className={'block mb-2 font-medium'}>Discount Code</label>
            <input
                type="text"
                id="discount"
                name="discount"
                className={
                    'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                }
                onChange={(e) => setValue(e.target.value)}
            />
            <Button className='mt-2' variant={"outline"} onClick={submitDiscount}>
                Apply Discount
            </Button>
            {
                updated ? (
                    !isValid ? (
                    <p className={'mt-2 text-sm text-red-600'}>
                        {'Not a valid discount code'}
                    </p>
                    ) : (
                        <p className={'mt-2 text-sm text-green-600'}>
                            {'Discount code applied!'}
                        </p>
                    )
                ) : (
                    <span></span>
                )
            }
        </div>
    )
}
