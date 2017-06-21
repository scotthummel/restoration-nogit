namespace restoration.Controllers {

    export class ContactController extends BaseController {
        public message;

        sendEmail() {
          this.mailService.sendEmail(this.message);
        }

        constructor(private $http, private $state, private mailService, public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }
    }


}