namespace restoration.Controllers {
    export class LoginController {
        public email;
        public password;

        constructor(public AuthService: restoration.Services.AuthService) {

        }

        login() {
            this.AuthService.login(this.email, this.password).then(res => {
                console.log(res);
            });
        }
    }
}