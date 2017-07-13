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
        var BlogController = (function (_super) {
            __extends(BlogController, _super);
            function BlogController(BlogService, TagService, AuthService, $sce, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.BlogService = BlogService;
                _this.TagService = TagService;
                _this.AuthService = AuthService;
                _this.$sce = $sce;
                _this.$document = $document;
                _this.BlogService.list().then(function (posts) {
                    posts.forEach(function (post) {
                        post.body = _this.$sce.trustAsHtml(post.body);
                    });
                    _this.posts = posts;
                });
                _this.TagService.list().then(function (tags) {
                    _this.tags = tags;
                });
                return _this;
            }
            return BlogController;
        }(Controllers.BaseController));
        Controllers.BlogController = BlogController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
