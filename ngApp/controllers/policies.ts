namespace restoration.Controllers {

    export class PoliciesController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }
}