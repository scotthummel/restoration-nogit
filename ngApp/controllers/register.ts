namespace restoration.Controllers {

    export class RegisterController extends BaseController {
        public email;
        public password;
        public user;

        constructor(public AuthService: restoration.Services.AuthService, public $documnet) {
            super(AuthService, $documnet);
        }

        register(user) {
            this.AuthService.register(user).then(res => {
                console.log(res);
            });
        }
    }
}