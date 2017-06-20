namespace restoration.Controllers {

    export class EditTagController {
        public tag;
        public id;

        constructor(private TagService: restoration.Services.TagService, private $state, private $stateParams: ng.ui.IStateParamsService
        ) {
            let tagId = this.id = $stateParams['id'];
            this.TagService.get(tagId).then(tag => {
                this.tag = tag;
            });
        }

        editTag() {
            this.TagService.update(this.id, this.tag);
        }
    }
}