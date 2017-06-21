namespace restoration.Controllers {

    export class FirstTimeClientsController extends BaseController{
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}