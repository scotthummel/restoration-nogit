namespace restoration.Controllers {

    export class AddTagController {
        public tag;

        constructor(private TagService: restoration.Services.TagService, private $state) {

        }

        addTag(tag) {
            this.TagService.save(this.tag).then((tag) => {
                this.$state.go('dashboard');
            });
        }
    }
}