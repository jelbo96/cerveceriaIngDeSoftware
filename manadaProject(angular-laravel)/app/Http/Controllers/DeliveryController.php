<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Delivery;
use App\Bash;

class DeliveryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
       // return Delivery::all();
        return Delivery::with(['bash', 'client'])->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $delivery = new Delivery;

        $delivery->delivery_date = date('Y-m-d H:i:s');
        $delivery->type_beer = $request->type_beer;
        $delivery->liters = $request->liters;
        $delivery->folio = $request->folio;
        $delivery->additional_info = $request->additional_info;
        $delivery->package = $request->package;
        $delivery->client_id = $request->client_id;
        $delivery->bash_id = $request->bash_id;

     

       // $delivery->save();

       if ($request->additional_info == ""){
        $delivery->additional_info ="Sin info adicional";
       }
        
        $bash = Bash::find($request->bash_id);

        /** Si los litros actuales son menos que los que tiene el bash retornar un error */

        if ($request->liters > $bash->liters_now){
            /** Retornar un error */
            echo "Error! Se ingresaron mas litros de los disponibles";
        } else {
             /** Litros actuales = litros actuales - litros que se ingresaron */
            $bash->liters_now = $bash->liters_now - $request->liters;;
	        $bash->save();

            $delivery->save();
        }

       

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Delivery::where('id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}