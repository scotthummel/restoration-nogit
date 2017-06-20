namespace restoration.Controllers {

    export class BlogController {
        public posts;
        public tags;

        constructor(public BlogService: restoration.Services.BlogService, public TagService: restoration.Services.TagService) {
            this.BlogService.list().then((posts) => {
                this.posts = posts;
            });
            this.TagService.list().then(tags => {
                this.tags = tags;
            });
        }
    }
}