namespace restoration.Controllers {

    export class HomeController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }

    }
}