var restoration;
(function (restoration) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($http, $window, $q, $state, $document) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$state = $state;
                this.$document = $document;
            }
            AuthService.prototype.register = function (user) {
                var _this = this;
                return this.$http.post('/api/v1/register', { user: user })
                    .then(function (res) {
                    console.log(res);
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            AuthService.prototype.login = function (email, password) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/login/local', { email: email, password: password })
                    .then(function (res) {
                    _this.setToken(res.data.token);
                    _this.$q.resolve();
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data);
                });
                return q.promise;
            };
            AuthService.prototype.setToken = function (token) {
                this.$window.localStorage.setItem('token', token);
            };
            AuthService.prototype.getToken = function () {
                return this.$window.localStorage['token'];
            };
            AuthService.prototype.displayError = function (error) {
                var body = this.$document.find('body').eq(0);
                body.prepend(angular.element('<div class="alert alert-danger">' + error + '</div>'));
            };
            return AuthService;
        }());
        Services.AuthService = AuthService;
        var BlogService = (function () {
            function BlogService($http, $window, $q, $state, $document) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$state = $state;
                this.$document = $document;
            }
            BlogService.prototype.displayError = function (errors) {
                var body = this.$document.find('body').eq(0);
                var keys = Object.keys(errors);
                keys.forEach(function (key) {
                    body.prepend(angular.element('<div class="alert alert-danger">' + eval('errors.' + key + '.message') + '</div>'));
                });
            };
            BlogService.prototype.save = function (post, tags) {
                var _this = this;
                var keys = null;
                try {
                    keys = Object.keys(tags);
                }
                catch (e) { }
                if (post === undefined) {
                    post = { title: '', body: '' };
                }
                var q = this.$q.defer();
                this.$http.post('/api/v1/posts', { post: post, tags: keys })
                    .then(function (res) {
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            BlogService.prototype.list = function () {
                var _this = this;
                return this.$http.get('/api/v1/posts')
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            BlogService.prototype.get = function (id) {
                var _this = this;
                return this.$http.get('/api/v1/posts/' + id)
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            BlogService.prototype.slug = function (slug) {
                var _this = this;
                return this.$http.get('/api/v1/posts/post/' + slug)
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            BlogService.prototype.update = function (id, post) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/posts/' + id, { post: post })
                    .then(function (res) {
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            BlogService.prototype.remove = function (id) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.delete('/api/v1/posts/' + id)
                    .then(function (res) {
                    _this.$state.reload();
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            return BlogService;
        }());
        Services.BlogService = BlogService;
        var TagService = (function () {
            function TagService($http, $window, $q, $state, $document) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$state = $state;
                this.$document = $document;
            }
            TagService.prototype.displayError = function (errors) {
                var body = this.$document.find('body').eq(0);
                var keys = Object.keys(errors);
                keys.forEach(function (key) {
                    body.prepend(angular.element('<div class="alert alert-danger">' + eval('errors.' + key + '.message') + '</div>'));
                });
            };
            TagService.prototype.save = function (tag) {
                var _this = this;
                var q = this.$q.defer();
                if (tag == undefined) {
                    tag = { name: '' };
                }
                this.$http.post('/api/v1/tags', { tag: tag })
                    .then(function (res) {
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            TagService.prototype.list = function () {
                var _this = this;
                return this.$http.get('/api/v1/tags')
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            TagService.prototype.get = function (id) {
                var _this = this;
                return this.$http.get('/api/v1/tags/' + id)
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            TagService.prototype.slug = function (slug) {
                var _this = this;
                return this.$http.get('/api/v1/tags/tag/' + slug)
                    .then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    _this.displayError(res.data.errors);
                });
            };
            TagService.prototype.update = function (id, tag) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/tags/' + id, { tag: tag })
                    .then(function (res) {
                    _this.$state.go('dashboard');
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            TagService.prototype.remove = function (id) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.delete('/api/v1/tags/' + id)
                    .then(function (res) {
                    _this.$state.reload();
                })
                    .catch(function (res) {
                    _this.displayError(res.data.errors);
                });
                return q.promise;
            };
            return TagService;
        }());
        Services.TagService = TagService;
        var MailService = (function () {
            function MailService($http, $window, $q, $state) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$state = $state;
            }
            MailService.prototype.sendEmail = function (message) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/mail', { message: message })
                    .then(function (message) {
                    _this.$state.go('home');
                }).catch(function (err) {
                    console.error(err);
                });
                return q.promise;
            };
            return MailService;
        }());
        Services.MailService = MailService;
        angular.module('restoration').service('AuthService', AuthService);
        angular.module('restoration').service('BlogService', BlogService);
        angular.module('restoration').service('TagService', TagService);
        angular.module('restoration').service('mailService', MailService);
    })(Services = restoration.Services || (restoration.Services = {}));
})(restoration || (restoration = {}));
