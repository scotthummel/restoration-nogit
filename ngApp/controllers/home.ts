namespace restoration.Controllers {

    export class HomeController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }

    }
}