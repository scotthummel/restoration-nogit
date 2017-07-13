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
        var DashboardController = (function (_super) {
            __extends(DashboardController, _super);
            function DashboardController(AuthService, BlogService, TagService, $state, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.AuthService = AuthService;
                _this.BlogService = BlogService;
                _this.TagService = TagService;
                _this.$state = $state;
                _this.$document = $document;
                var token = _this.AuthService.getToken();
                if (token === 'null') {
                    _this.$state.go('home');
                }
                _this.BlogService.list().then(function (posts) {
                    _this.posts = posts;
                });
                _this.TagService.list().then(function (tags) {
                    _this.tags = tags;
                });
                return _this;
            }
            DashboardController.prototype.logout = function () {
                this.AuthService.setToken(null);
                this.$state.go('home');
            };
            DashboardController.prototype.remove = function (id) {
                this.BlogService.remove(id);
            };
            DashboardController.prototype.delete = function (id) {
                this.TagService.remove(id);
            };
            return DashboardController;
        }(Controllers.BaseController));
        Controllers.DashboardController = DashboardController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
