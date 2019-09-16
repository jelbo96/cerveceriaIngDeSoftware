<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
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
                        <h1 class="panel-title">Acceso a Manada</h1>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('login') }}" method="post">
                            {{ csrf_field() }}
                            <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                                <label for="name">Nombre</label>
                                <input class="form-control" 
                                    type="text" 
                                    name="name" 
                                    value="{{ old('name') }}"
                                    placeholder="Ingresa tu nombre">
                                {!! $errors->first('name', '<span class="help-block">:message</span>') !!}
                            </div>
                            <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                                <label for="password">Contraseña</label>
                                <input class="form-control" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Ingresa tu contraseña">
                                {!! $errors->first('password', '<span class="help-block">:message</span>') !!}
                            </div>
                            <button class="btn btn-primary btn-block">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>