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
        var AddPostController = (function (_super) {
            __extends(AddPostController, _super);
            function AddPostController(BlogService, TagService, $state, AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.BlogService = BlogService;
                _this.TagService = TagService;
                _this.$state = $state;
                _this.AuthService = AuthService;
                _this.$document = $document;
                _this.TagService.list().then(function (tags) {
                    _this.tags = tags;
                }).catch(function (err) {
                    _this.displayError(err.data.errors);
                });
                _this.options = {
                    language: 'en',
                    allowedContent: true,
                    entities: false
                };
                return _this;
            }
            AddPostController.prototype.addPost = function (post) {
                var _this = this;
                this.BlogService.save(this.post, this.selectedTags).then(function (post) {
                    _this.$state.go('dashboard');
                });
            };
            return AddPostController;
        }(Controllers.BaseController));
        Controllers.AddPostController = AddPostController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));
