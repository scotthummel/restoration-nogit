namespace restoration.Controllers {
    export class LoginController extends BaseController {
        public email;
        public password;

        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }

        login() {
            this.AuthService.login(this.email, this.password).then(res => {
                console.log(res);
            });
        }
    }
}