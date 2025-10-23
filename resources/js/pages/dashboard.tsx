// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="flex md:h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative h-full py-15 flex flex-col justify-center rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border bg-sky-200/90 dark:bg-sky-800/90">
                    <div className={"flex flex-col items-center justify-center gap-4 -mt-12 overflow-hidden"}>
                        <img src={"/soda-drinks-layout.png"} className={"min-w-[400px] max-w-[650px] -mr-3"} alt={"strawberry drink bg"} />
                    </div>

                    <div className={"flex flex-col items-center justify-center overflow-hidden"}>
                        <p className={"text-xl font-medium text-gray-800 dark:text-gray-50"}>Blend. Chill. Enjoy your custom drink.</p>
                    </div>

                    <div className={"mt-6 mx-auto"}>
                        <a href='/menu' className={"rounded-full bg-yellow-200/70 px-4 py-3 text-gray-800 font-semibold border border-gray-600"}>
                            Create your drink!
                        </a>
                    </div>
                </div>
                <div className="grid auto-rows-min gap-4 grid-cols-1 lg:grid-cols-3">
                        <div className="flex items-center justify-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 hover:bg-red-200/30 dark:border-sidebar-border">
                            {/*<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*/}
                            <img src={"/fruits.jpg"} alt="Logo" className="absolute inset-0 size-full object-cover opacity-70 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <div className="bg-amber-300 flex items-center justify-center text-white text-2xl font-bold px-4 py-2 z-20 rounded-md border border-gray-800">
                                <h3 className={"font-bold text-xl lg:text-2xl text-black"}>Flavors</h3>
                            </div>
                        </div>

                        <div className="flex items-center justify-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 hover:bg-sky-200/30 dark:border-sidebar-border">
                            {/*<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*/}
                            <img src={"/sodas.jpg"} alt="Logo" className="absolute inset-0 size-full object-cover opacity-70 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <div className="bg-emerald-300 flex items-center justify-center text-white text-2xl font-bold px-4 py-2 z-20 rounded-md border border-gray-800">
                                <h3 className={"font-bold text-xl lg:text-2xl text-black"}>Sodas</h3>
                            </div>
                        </div>

                        <div className="flex items-center justify-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 hover:bg-yellow-200/30 dark:border-sidebar-border">
                            {/*<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*/}
                            <img src={"/power-up.jpg"} alt="Logo" className="absolute inset-0 size-full object-cover opacity-70 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <div className="bg-red-300 flex items-center justify-center text-white text-2xl font-bold px-4 py-2 z-20 rounded-md border border-gray-800">
                                <h3 className={"font-bold text-xl lg:text-2xl text-black"}>Add Ons</h3>
                            </div>
                        </div>
                </div>
            </div>
        </AppLayout>
    );
}
