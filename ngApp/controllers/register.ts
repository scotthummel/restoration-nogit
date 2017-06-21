namespace restoration.Controllers {

    export class RegisterController extends BaseController {
        public email;
        public password;
        public user;

        constructor(public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }

        register(user) {
            this.AuthService.register(user).then(res => {
                console.log(res);
            });
        }
    }
}