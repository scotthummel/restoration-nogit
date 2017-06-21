namespace restoration.Controllers {

    export class BlogTagController  extends BaseController {
        public tag;
        public posts;

        constructor(public TagService: restoration.Services.TagService, public $stateParams, public AuthService: restoration.Services.AuthService) {
            super(AuthService);

            this.TagService.slug(this.$stateParams['slug']).then((posts) => {
                this.tag = posts[0];
                this.posts = posts[0].posts;
            });
        }
    }
}