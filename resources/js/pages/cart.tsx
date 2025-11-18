import AppLayout from '@/layouts/app-layout';
import { cart } from '@/routes';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
// import { CupSoda } from 'lucide-react';
import DrinkCart from '@/components/drink-cart';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cart',
        href: cart().url,
    },
];

export default function Cart() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Cart" />
            <DrinkCart />
        </AppLayout>
    );
}
