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
        var EditTagController = (function (_super) {
            __extends(EditTagController, _super);
            function EditTagController(TagService, $state, $stateParams, AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.TagService = TagService;
                _this.$state = $state;
                _this.$stateParams = $stateParams;
                _this.AuthService = AuthService;
                _this.$document = $document;
                var tagId = _this.id = $stateParams['id'];
                _this.TagService.get(tagId).then(function (tag) {
                    _this.tag = tag;
                });
                return _this;
            }
            EditTagController.prototype.editTag = function () {
                this.TagService.update(this.id, this.tag);
            };
            return EditTagController;
        }(Controllers.BaseController));
        Controllers.EditTagController = EditTagController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
