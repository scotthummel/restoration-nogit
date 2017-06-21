namespace restoration.Controllers {

    export class BlogController extends BaseController{
        public posts;
        public tags;

        constructor(public BlogService: restoration.Services.BlogService, public TagService: restoration.Services.TagService, public AuthService: restoration.Services.AuthService) {
            super(AuthService);

            this.BlogService.list().then((posts) => {
                this.posts = posts;
            });
            this.TagService.list().then(tags => {
                this.tags = tags;
            });
        }
    }
}