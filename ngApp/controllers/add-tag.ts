namespace restoration.Controllers {

    export class AddTagController extends BaseController{
        public tag;

        constructor(private TagService: restoration.Services.TagService, private $state, public AuthService: restoration.Services.AuthService) {
            super(AuthService);
        }

        addTag(tag) {
            this.TagService.save(this.tag).then((tag) => {
                this.$state.go('dashboard');
            });
        }
    }
}