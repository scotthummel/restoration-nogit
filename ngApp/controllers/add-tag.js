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
        var AddTagController = (function (_super) {
            __extends(AddTagController, _super);
            function AddTagController(TagService, $state, AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.TagService = TagService;
                _this.$state = $state;
                _this.AuthService = AuthService;
                _this.$document = $document;
                return _this;
            }
            AddTagController.prototype.addTag = function (tag) {
                var _this = this;
                this.TagService.save(this.tag).then(function (tag) {
                    _this.$state.go('dashboard');
                });
            };
            return AddTagController;
        }(Controllers.BaseController));
        Controllers.AddTagController = AddTagController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
