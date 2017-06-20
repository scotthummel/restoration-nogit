namespace restoration.Controllers {

    export class RegisterController {
        public email;
        public password;
        public user;

        constructor(public AuthService: restoration.Services.AuthService) {

        }

        register(user) {
            this.AuthService.register(user).then(res => {
                console.log(res);
            });
        }
    }
}