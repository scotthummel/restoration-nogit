var restoration;
(function (restoration) {
    var Controllers;
    (function (Controllers) {
        var BaseController = (function () {
            function BaseController(AuthService, $document) {
                this.AuthService = AuthService;
                this.$document = $document;
                this.isLoggedIn = false;
                var token = this.AuthService.getToken();
                if (token !== 'null') {
                    this.isLoggedIn = true;
                }
            }
            BaseController.prototype.displayError = function (error) {
                var body = this.$document.find('body').eq(0);
                body.prepend(angular.element('<div class="alert alert-danger">' + error + '</div>'));
            };
            return BaseController;
        }());
        Controllers.BaseController = BaseController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
