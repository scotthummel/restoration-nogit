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
        var EditPostController = (function (_super) {
            __extends(EditPostController, _super);
            function EditPostController(BlogService, $state, $stateParams, AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.BlogService = BlogService;
                _this.$state = $state;
                _this.$stateParams = $stateParams;
                _this.AuthService = AuthService;
                _this.$document = $document;
                var postId = _this.id = $stateParams['id'];
                _this.BlogService.get(postId).then(function (post) {
                    _this.post = post;
                });
                _this.options = {
                    language: 'en',
                    allowedContent: true,
                    entities: false
                };
                return _this;
            }
            EditPostController.prototype.editPost = function () {
                this.BlogService.update(this.id, this.post);
            };
            return EditPostController;
        }(Controllers.BaseController));
        Controllers.EditPostController = EditPostController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
