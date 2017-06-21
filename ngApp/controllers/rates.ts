namespace restoration.Controllers {

    export class OurRatesController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}