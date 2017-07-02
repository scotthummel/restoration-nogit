namespace restoration.Controllers {

    export class ModalitiesController extends BaseController{
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }
}