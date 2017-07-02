namespace restoration.Controllers {

    export class AddPostController extends BaseController {
        public post;
        public tags;
        public selectedTags;
        public options;

        constructor(private BlogService: restoration.Services.BlogService, private TagService: restoration.Services.TagService, private $state, public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);

            this.TagService.list().then(tags => {
                this.tags = tags;
            }).catch((err) => {
                this.displayError(err.data.errors);
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