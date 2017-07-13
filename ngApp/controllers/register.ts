namespace restoration.Controllers {

    export class RegisterController extends BaseController {
        public email;
        public password;
        public user;

        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }

        register(user) {
            this.AuthService.register(user).then(res => {
                console.log(res);
            });
        }
    }
}