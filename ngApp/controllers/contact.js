var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var restoration;
(function (restoration) {
    var Controllers;
    (function (Controllers) {
        var ContactController = (function (_super) {
            __extends(ContactController, _super);
            function ContactController($http, $state, mailService, AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.$http = $http;
                _this.$state = $state;
                _this.mailService = mailService;
                _this.AuthService = AuthService;
                _this.$document = $document;
                return _this;
            }
            ContactController.prototype.sendEmail = function () {
                if (this.message !== undefined) {
                    this.mailService.sendEmail(this.message);
                }
            };
            return ContactController;
        }(Controllers.BaseController));
        Controllers.ContactController = ContactController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
