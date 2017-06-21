namespace restoration.Controllers {

    export class TherapeuticBenefitsController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}