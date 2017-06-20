namespace restoration.Services {

    export class AuthService {

        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state) {

        }

        register(user) {
            return this.$http.post('/api/v1/register', { user: user })
                .then(res => {
                    console.log(res);
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
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
                    console.error(res);
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
    }

    export class BlogService {
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state) {
        }

        save(post, tags) {
            let keys = Object.keys(tags);
            let q = this.$q.defer();
            this.$http.post('/api/v1/posts', { post: post, tags: keys })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
                });
            return q.promise;
        }

        public list() {
            return this.$http.get('/api/v1/posts')
                .then(res => {
                   return res.data
                }).catch(res => {
                    console.log(res)
                });
        }

        public get(id) {
            return this.$http.get('/api/v1/posts/' + id)
                .then(res => {
                    return res.data
                }).catch(res => {
                    console.log(res)
                });
        }

        public update(id, post) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/posts/' + id, { post: post })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
                });
            return q.promise;
        }

        public remove(id) {
            let q = this.$q.defer();
            this.$http.delete('/api/v1/posts/' + id)
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
                });
            return q.promise;
        }
    }

    export class TagService {
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $q: ng.IQService, private $state) {
        }

        save(tag) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/tags', { tag: tag })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
                });
            return q.promise;
        }

        public list() {
            return this.$http.get('/api/v1/tags')
                .then(res => {
                    return res.data
                }).catch(res => {
                    console.log(res)
                });
        }

        public get(id) {
            return this.$http.get('/api/v1/tags/' + id)
                .then(res => {
                    return res.data
                }).catch(res => {
                    console.log(res)
                });
        }

        public slug(slug) {
            return this.$http.get('/api/v1/tags/tag/' + slug)
                .then(res => {
                    return res.data
                }).catch(res => {
                    console.log(res)
                });
        }

        public update(id, tag) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/tags/' + id, { tag: tag })
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
                });
            return q.promise;
        }

        public remove(id) {
            let q = this.$q.defer();
            this.$http.delete('/api/v1/tags/' + id)
                .then(res => {
                    this.$state.go('dashboard');
                })
                .catch(res => {
                    console.error(res);
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
