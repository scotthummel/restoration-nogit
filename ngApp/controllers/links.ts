namespace restoration.Controllers {

    export class LinksController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }
}