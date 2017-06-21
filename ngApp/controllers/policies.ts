namespace restoration.Controllers {

    export class PoliciesController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}