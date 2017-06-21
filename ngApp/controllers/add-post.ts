namespace restoration.Controllers {

    export class AddPostController extends BaseController {
        public post;
        public tags;
        public selectedTags;
        public options;

        constructor(private BlogService: restoration.Services.BlogService, private TagService: restoration.Services.TagService, private $state, public AuthService: restoration.Services.AuthService) {
            super(AuthService);

            this.TagService.list().then(tags => {
                this.tags = tags;
            });
            this.options = {
                language: 'en',
                allowedContent: true,
                entities: false
            };
        }

        addPost(post) {
            this.BlogService.save(this.post, this.selectedTags).then((post) => {
                this.$state.go('dashboard');
            });
        }
    }
}