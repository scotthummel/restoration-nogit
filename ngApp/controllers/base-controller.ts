namespace restoration.Controllers {
    export class BaseController {
        public isLoggedIn = false;
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            let token = this.AuthService.getToken();
            if (token !== 'null') {
                this.isLoggedIn = true;
            }
        }

        public displayError(error) {
            let body = this.$document.find('body').eq(0);
            body.prepend(angular.element('<div class="alert alert-danger">' + error + '</div>'));
        }
    }
}