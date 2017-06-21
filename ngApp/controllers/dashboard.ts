namespace restoration.Controllers {

    export class DashboardController extends BaseController{
        public posts;
        public tags;

        constructor(public AuthService: restoration.Services.AuthService, public BlogService: restoration.Services.BlogService, public TagService: restoration.Services.TagService, private $state) {
            super(AuthService);

            let token = this.AuthService.getToken();
            if (token === 'null') {
                this.$state.go('home');
            }

            this.BlogService.list().then(posts => {
                this.posts = posts;
            });
            this.TagService.list().then(tags => {
                this.tags = tags;
            });
        }

        logout() {
            this.AuthService.setToken(null);
            this.$state.go('home');
        }

        remove(id) {
            this.BlogService.remove(id);
        }
    }
}