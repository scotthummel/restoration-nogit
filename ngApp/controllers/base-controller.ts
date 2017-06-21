namespace restoration.Controllers {
    export class BaseController {
        public isLoggedIn = false;
        constructor(public AuthService: restoration.Services.AuthService) {
            let token = this.AuthService.getToken();
            if (token !== 'null') {
                this.isLoggedIn = true;
            }
        }
    }
}