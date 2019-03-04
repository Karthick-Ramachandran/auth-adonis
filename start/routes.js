'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/hello/:name', function({ request, response}) {
const name = request.params.name;
return  `Hello ${name}`;
});

Route.get('/register', 'UserController.getregister');
Route.post('/register', 'UserController.register').as('register');
Route.get('/login', 'UserController.getlogin');

Route.post('login', 'UserController.login').as('login');

Route.get('home', 'UserController.home').middleware('auth');
Route.get('logout', 'UserController.logout').as('logout');