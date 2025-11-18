import AppLayout from '@/layouts/app-layout';
import { menu } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DrinkCustomizer } from '@/components/drink-customizer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu',
        href: menu().url,
    },
];1

export default function Menu() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <DrinkCustomizer />
            </div>
        </AppLayout>
    );
}
