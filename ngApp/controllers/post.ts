namespace restoration.Controllers {

    export class BlogPostController extends BaseController {
        public post;

        constructor(public AuthService: restoration.Services.AuthService, public BlogService: restoration.Services.BlogService, public $stateParams, public $sce, public $document) {
            super(AuthService, $document);
            this.BlogService.slug(this.$stateParams['slug']).then((post:any) => {
                post.body = this.$sce.trustAsHtml(post.body);
                this.post = post;
            });
        }
    }
}