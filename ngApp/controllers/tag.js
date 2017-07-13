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
        var BlogTagController = (function (_super) {
            __extends(BlogTagController, _super);
            function BlogTagController(TagService, $stateParams, AuthService, $sce, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.TagService = TagService;
                _this.$stateParams = $stateParams;
                _this.AuthService = AuthService;
                _this.$sce = $sce;
                _this.$document = $document;
                _this.TagService.slug(_this.$stateParams['slug']).then(function (posts) {
                    _this.tag = posts[0];
                    posts[0].posts.forEach(function (post) {
                        post.body = _this.$sce.trustAsHtml(post.body);
                    });
                    _this.posts = posts[0].posts;
                });
                return _this;
            }
            return BlogTagController;
        }(Controllers.BaseController));
        Controllers.BlogTagController = BlogTagController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
