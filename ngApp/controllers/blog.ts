namespace restoration.Controllers {

    export class BlogController extends BaseController{
        public posts;
        public tags;

        constructor(public BlogService: restoration.Services.BlogService, public TagService: restoration.Services.TagService, public AuthService: restoration.Services.AuthService, public $sce) {
            super(AuthService);

            this.BlogService.list().then((posts:any) => {
                posts.forEach(post => {
                    post.body = this.$sce.trustAsHtml(post.body);
                });
                this.posts = posts;
            });
            this.TagService.list().then(tags => {
                this.tags = tags;
            });
        }
    }
}