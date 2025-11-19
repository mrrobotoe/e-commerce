// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { admin } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';

import AddFlavorForm from '@/pages/admin/add-flavor-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: admin().url,
    },
];

interface ITypes {
    name: string;
    slug: string;
    price: string;
}
export default function AdminDashboard({
    flavors,
    bases,
    addIns
                                       } : {
    flavors: ITypes[];
    bases: ITypes[];
    addIns: ITypes[];
}) {
    const { auth } = usePage().props;

    if (!auth?.user?.is_admin) {
        router.get('dashboard');
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin" />
            <div className="flex md:h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <div className="flex md:flex-row gap-4">
                    <div className="flex-1 rounded-lg border border-dashed border-gray-300 p-4">
                        <h2 className="text-xl font-semibold mb-2">Available Drink Options</h2>
                        <div className="mb-4">
                            <h3 className="font-semibold">Flavors:</h3>
                            <ul className="list-disc list-inside">
                                {flavors.map((flavor) => (
                                    <li key={flavor.slug}>{flavor.name} ( {flavor.price} )</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold">Bases:</h3>
                            <ul className="list-disc list-inside">
                                {bases.map((base) => (
                                    <li key={base.slug}>{base.name} ( {base.price} )</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Add-Ins:</h3>
                            <ul className="list-disc list-inside">
                                {addIns.map((addIn) => (
                                    <li key={addIn.slug}>{addIn.name} ( {addIn.price} )</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Buttons to add new flavors, bases, add-ins could go here */}
                <AddFlavorForm />
            </div>
        </AppLayout>
    );
}
