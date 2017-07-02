namespace restoration.Controllers {

    export class ContactController extends BaseController {
        public message;

        sendEmail() {
          if (this.message !== undefined) {
              this.mailService.sendEmail(this.message);
          }
        }

        constructor(private $http, private $state, private mailService, public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }


}