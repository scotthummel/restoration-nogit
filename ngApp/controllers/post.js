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
        var BlogPostController = (function (_super) {
            __extends(BlogPostController, _super);
            function BlogPostController(AuthService, BlogService, $stateParams, $sce, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.AuthService = AuthService;
                _this.BlogService = BlogService;
                _this.$stateParams = $stateParams;
                _this.$sce = $sce;
                _this.$document = $document;
                _this.BlogService.slug(_this.$stateParams['slug']).then(function (post) {
                    post.body = _this.$sce.trustAsHtml(post.body);
                    _this.post = post;
                });
                return _this;
            }
            return BlogPostController;
        }(Controllers.BaseController));
        Controllers.BlogPostController = BlogPostController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
