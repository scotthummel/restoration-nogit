namespace restoration.Controllers {

    export class ContraindicationsController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }
}