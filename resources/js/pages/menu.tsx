// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { menu } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu',
        href: menu().url,
    },
];

export default function Menu() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/*/!*<div className="grid auto-rows-min gap-4 md:grid-cols-3">*!/*/}
                {/*/!*    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">*!/*/}
                {/*/!*        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*!/*/}
                {/*/!*        /!*<img src={"/logo.png"} alt="Logo" className="absolute inset-0 size-full object-contain p-4 stroke-neutral-900/20 dark:stroke-neutral-100/20" />*!/*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">*!/*/}
                {/*/!*        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">*!/*/}
                {/*/!*        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</div>*!/*/}
                {/*<div className="relative h-1/2 flex flex-col justify-center rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border bg-sky-200/90">*/}
                {/*    <div className={"flex flex-col items-center justify-center gap-4 -mt-12 overflow-hidden"}>*/}
                {/*        <img src={"/soda-drinks-layout.png"} className={"min-w-[400px] max-w-[650px] -mr-3"} alt={"strawberry drink bg"} />*/}
                {/*    </div>*/}
                {/*    /!*<div className={"w-min mx-auto p-4 rounded-md flex flex-col items-center justify-center gap-4 bg-emerald-800/60 border border-emerald-800"}>*!/*/}
                {/*    /!*    <h2 className={'text-4xl font-bold text-white'}>ChugHub</h2>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*    <div className={"flex flex-col items-center justify-center overflow-hidden"}>*/}
                {/*        <p className={"text-xl font-medium text-gray-800"}>Blend. Chill. Enjoy your custom drink.</p>*/}
                {/*    </div>*/}
                {/*    /!*<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />*!/*/}
                {/*    <div className={"mt-4 mx-auto"}>*/}
                {/*        <button className={"rounded-full bg-yellow-200/70 px-4 py-3 text-gray-800 font-semibold border border-gray-600"}>Shop now</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        {/*<img src={"/logo.png"} alt="Logo" className="absolute inset-0 size-full object-contain p-4 stroke-neutral-900/20 dark:stroke-neutral-100/20" />*/}
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
