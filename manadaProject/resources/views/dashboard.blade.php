<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container"></div>
        <hr>
        @if (session()->has('flash'))
            <div class="alet alert-info">{{ session('flash') }}</div>            
        @endif
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h1 class="panel-title">Bienvenido {{ auth()->user()->name }}</h1>
                    </div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('logout') }}">
                            {{ csrf_field() }}
                            <button class="btn btn-danger">Cerrar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>