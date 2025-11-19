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
import { Form, router, usePage } from '@inertiajs/react';
// import { store } from 'App/Http/Controllers/FlavorController';

export default function AddFlavorForm() {
    const props = usePage().props;
    console.log(props.errors);
    return (
        <Dialog>
            <Form method={"post"} action={"/flavors"} id={"add-flavor-form"}>
                <DialogTrigger asChild>
                    <Button variant={"outline"}>Add Flavor</Button>
                </DialogTrigger>
                <DialogContent className={"sm:max-w-[425px]"}>
                    <DialogHeader>
                        <DialogTitle>Add New Flavor</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to add a new flavor to the menu.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mb-4">
                        <Label htmlFor="flavorName">Flavor Name</Label>
                        <Input
                            type="text"
                            id="flavorName"
                            name="name"
                            form={"add-flavor-form"}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="flavorSlug">Flavor Slug</Label>
                        <Input
                            type="text"
                            id="flavorSlug"
                            name="slug"
                            form={"add-flavor-form"}
                            required
                        />
                    </div>
                    <div className={"mb-4"}>
                        <Label htmlFor="flavorCategory">Flavor Category</Label>
                        <Input
                            type="text"
                            id="flavorCategory"
                            name="category"
                            form={"add-flavor-form"}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="flavorPrice">Flavor Price</Label>
                        <Input
                            type="number"
                            id="flavorPrice"
                            name="price"
                            form={"add-flavor-form"}
                            required
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={"outline"}>Cancel</Button>
                        </DialogClose>
                        <Button type={"submit"} form={"add-flavor-form"}>Save Flavor</Button>
                    </DialogFooter>
                </DialogContent>
            </Form>
        </Dialog>
    );
}
