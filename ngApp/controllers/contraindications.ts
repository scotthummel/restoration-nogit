namespace restoration.Controllers {

    export class ContraindicationsController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}