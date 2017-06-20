namespace restoration.Controllers {

    export class EditPostController {
        public post;
        public id;
        public options;

        constructor(private BlogService: restoration.Services.BlogService, private $state, private $stateParams: ng.ui.IStateParamsService
        ) {
            let postId = this.id = $stateParams['id'];
            this.BlogService.get(postId).then(post => {
                this.post = post;
            });
            this.options = {
                language: 'en',
                allowedContent: true,
                entities: false
            };
        }

        editPost() {
            this.BlogService.update(this.id, this.post);
        }
    }
}