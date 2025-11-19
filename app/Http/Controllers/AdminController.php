<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $addIns = DB::table('addins')->get();
        $flavors = DB::table('flavors')->get();
        $bases = DB::table('bases')->get();
//        dd($addIns, $flavors, $bases);
        return Inertia::render('admin/dashboard', [
            'addIns' => $addIns,
            'flavors' => $flavors,
            'bases' => $bases,
        ]);
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
    public function store(StoreDrinkRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Drink $drink)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Drink $drink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDrinkRequest $request, Drink $drink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Drink $drink)
    {
        //
    }
}
