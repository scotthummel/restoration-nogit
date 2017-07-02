namespace restoration.Services {

    export class AuthService {

        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state, private $document) {

        }

        register(user) {
            return this.$http.post('/api/v1/register', { user: user })
                .then(res => {
                    console.log(res);
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                })
        }

        login(email, password) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/login/local', { email: email, password: password})
                .then((res: any) => {
                    this.setToken(res.data.token);
                    this.$q.resolve();
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data);
                });
            return q.promise;
        }

        // upload() {
        //     return this.$http.post('/api/v1/upload').then(res => {
        //         console.log(res);
        //     })
        // }

        public setToken(token) {
            this.$window.localStorage.setItem('token', token);
        }

        public getToken() {
            return this.$window.localStorage['token'];
        }

        public displayError(error) {
            let body = this.$document.find('body').eq(0);
            body.prepend(angular.element('<div class="alert alert-danger">' + error + '</div>'));
        }
    }

    export class BlogService {
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state, public $document) {
        }

        public displayError(errors) {
            let body = this.$document.find('body').eq(0);
            let keys = Object.keys(errors);
            keys.forEach(key => {
                body.prepend(angular.element('<div class="alert alert-danger">' + eval('errors.' + key + '.message') + '</div>'));
            });
        }

        save(post, tags) {
            let keys = null;
            try {
                keys = Object.keys(tags);
            } catch(e) {}

            if (post === undefined) {
                post = {title: '', body: ''};
            }
            let q = this.$q.defer();
            this.$http.post('/api/v1/posts', { post: post, tags: keys })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }

        public list() {
            return this.$http.get('/api/v1/posts')
                .then(res => {
                   return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public get(id) {
            return this.$http.get('/api/v1/posts/' + id)
                .then(res => {
                    return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public slug(slug) {
            return this.$http.get('/api/v1/posts/post/' + slug)
                .then(res => {
                    return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public update(id, post) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/posts/' + id, { post: post })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }

        public remove(id) {
            let q = this.$q.defer();
            this.$http.delete('/api/v1/posts/' + id)
                .then(res => {
                    this.$state.reload();
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }
    }

    export class TagService {
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state, public $document) {
        }

        public displayError(errors) {
            let body = this.$document.find('body').eq(0);
            let keys = Object.keys(errors);
            keys.forEach(key => {
                body.prepend(angular.element('<div class="alert alert-danger">' + eval('errors.' + key + '.message') + '</div>'));
            });
        }

        save(tag) {
            let q = this.$q.defer();
            if (tag == undefined) {
                tag = {name:''}
            }

            this.$http.post('/api/v1/tags', { tag: tag })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }

        public list() {
            return this.$http.get('/api/v1/tags')
                .then(res => {
                    return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public get(id) {
            return this.$http.get('/api/v1/tags/' + id)
                .then(res => {
                    return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public slug(slug) {
            return this.$http.get('/api/v1/tags/tag/' + slug)
                .then(res => {
                    return res.data
                }).catch(res => {
                    this.displayError(res.data.errors);
                });
        }

        public update(id, tag) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/tags/' + id, { tag: tag })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }

        public remove(id) {
            let q = this.$q.defer();
            this.$http.delete('/api/v1/tags/' + id)
                .then(res => {
                    this.$state.reload();
                })
                .catch(res => {
                    this.displayError(res.data.errors);
                });
            return q.promise;
        }
    }

    export class MailService {
        sendEmail(message) {
            let q = this.$q.defer();

            this.$http.post('/api/v1/mail', { message: message})
                .then(message => {
                    this.$state.go('home');
                }).catch(err => {
                    console.error(err);
                });

            return q.promise;
        }

        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state) {
        }
    }

    angular.module('restoration').service('AuthService', AuthService);
    angular.module('restoration').service('BlogService', BlogService);
    angular.module('restoration').service('TagService', TagService);
    angular.module('restoration').service('mailService', MailService);
}
