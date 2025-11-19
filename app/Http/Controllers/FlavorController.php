<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFlavorRequest;
use App\Http\Requests\UpdateFlavorRequest;
use App\Models\Flavor;

class FlavorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFlavorRequest $request)
    {
        $request->validated();

        $flavor = Flavor::create([
            'name' => $request->name,
            'price' => $request->price,
            'category' => $request->category,
            'slug' => $request->slug
        ]);

        if ($flavor) {
            return redirect()->back()->with('success', 'Flavor created successfully.');
        } else {
            return redirect()->back()->with('error', 'Failed to create flavor.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Flavor $flavor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Flavor $flavor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFlavorRequest $request, Flavor $flavor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flavor $flavor)
    {
        //
    }
}
