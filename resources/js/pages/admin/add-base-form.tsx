import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, usePage } from '@inertiajs/react';
// import { store } from 'App/Http/Controllers/FlavorController';

export default function AddBaseForm() {
    // const props = usePage().props;

    return (
        <Dialog>
            <Form method={"post"} action={"/bases"} id={"add-base-form"}>
                <DialogTrigger asChild>
                    <Button variant={"outline"}>Add Base</Button>
                </DialogTrigger>
                <DialogContent className={"sm:max-w-[425px]"}>
                    <DialogHeader>
                        <DialogTitle>Add New Base</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to add a new base to the menu.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mb-4">
                        <Label htmlFor="baseName">Base Name</Label>
                        <Input
                            type="text"
                            id="baseName"
                            name="name"
                            form={"add-base-form"}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="baseSlug">Base Slug</Label>
                        <Input
                            type="text"
                            id="baseSlug"
                            name="slug"
                            form={"add-base-form"}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="basePrice">Base Price</Label>
                        <Input
                            type="number"
                            id="basePrice"
                            name="price"
                            form={"add-base-form"}
                            required
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={"outline"}>Cancel</Button>
                        </DialogClose>
                        <Button type={"submit"} form={"add-base-form"}>Save Base</Button>
                    </DialogFooter>
                </DialogContent>
            </Form>
        </Dialog>
    );
}
