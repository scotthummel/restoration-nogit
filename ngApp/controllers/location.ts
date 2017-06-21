namespace restoration.Controllers {

    export class LocationController extends BaseController{
        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }
}