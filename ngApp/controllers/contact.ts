namespace restoration.Controllers {

    export class ContactController {
        public message;

        sendEmail() {
          this.mailService.sendEmail(this.message);
        }

        constructor(private $http, private $state, private mailService) {

        }
    }


}