namespace restoration.Controllers {

    export class BlogTagController  extends BaseController {
        public tag;
        public posts;

        constructor(public TagService: restoration.Services.TagService, public $stateParams, public AuthService: restoration.Services.AuthService, private $sce, public $document) {
            super(AuthService, $document);

            this.TagService.slug(this.$stateParams['slug']).then((posts:any) => {
                this.tag = posts[0];

                posts[0].posts.forEach(post => {
                    post.body = this.$sce.trustAsHtml(post.body);
                });
                this.posts = posts[0].posts;
            });
        }
    }
}