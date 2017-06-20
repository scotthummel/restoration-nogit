namespace restoration.Controllers {

    export class BlogTagController {
        public tag;
        public posts;

        constructor(public TagService: restoration.Services.TagService, public $stateParams) {
            this.TagService.slug(this.$stateParams['slug']).then((posts) => {
                this.tag = posts[0];
                this.posts = posts[0].posts;
            });
        }
    }
}