namespace restoration {
    angular.module('restoration', ['ui.router', 'ngResource', 'ui.bootstrap', 'ui.router.title', 'ngMap', 'ckeditor']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
    ) => {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/pages/home.html',
                controller: restoration.Controllers.HomeController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'home | restoration bodywork and massage therapy | phoenix, az'; }
                },
                data: {
                    description: 'test'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/pages/about.html',
                controller: restoration.Controllers.AboutController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'about | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('therapeuticBenefits', {
                url: '/therapeutic-benefits',
                templateUrl: '/ngApp/views/pages/therapeutic-benefits.html',
                controller: restoration.Controllers.TherapeuticBenefitsController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'therapeutic benefits | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('contraindications', {
                url: '/contraindications',
                templateUrl: '/ngApp/views/pages/contraindications.html',
                controller: restoration.Controllers.ContraindicationsController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'contraindications | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('modalities', {
                url: '/modalities',
                templateUrl: '/ngApp/views/pages/modalities.html',
                controller: restoration.Controllers.ModalitiesController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'modalities | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('firstTimeClients', {
                url: '/first-time-clients',
                templateUrl: '/ngApp/views/pages/first-time-clients.html',
                controller: restoration.Controllers.FirstTimeClientsController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'first-time clients | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('policies', {
                url: '/policies',
                templateUrl: '/ngApp/views/pages/policies.html',
                controller: restoration.Controllers.PoliciesController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'policies | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('location', {
                url: '/location',
                templateUrl: '/ngApp/views/pages/location.html',
                controller: restoration.Controllers.LocationController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'location | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('links', {
                url: '/links',
                templateUrl: '/ngApp/views/pages/links.html',
                controller: restoration.Controllers.LinksController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'links | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('rates', {
                url: '/rates',
                templateUrl: '/ngApp/views/pages/rates.html',
                controller: restoration.Controllers.OurRatesController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'rates | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '/ngApp/views/pages/blog.html',
                controller: restoration.Controllers.BlogController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'blog | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('post', {
                url: '/blog/post/:slug',
                templateUrl: '/ngApp/views/pages/post.html',
                controller: restoration.Controllers.BlogPostController,
                controllerAs: 'vm',
                resolve: {
                    // tag: ['TagService', '$stateParams', function(TagService, $stateParams) {
                    //     return TagService.slug($stateParams.slug).then(res => {
                    //         return res[0];
                    //     });
                    //
                    // }],
                    //$title: function(tag) { return tag.name + ' | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('tags', {
                url: '/blog/tags/:slug',
                templateUrl: '/ngApp/views/pages/tag.html',
                controller: restoration.Controllers.BlogTagController,
                controllerAs: 'vm',
                resolve: {
                    tag: ['TagService', '$stateParams', function(TagService, $stateParams) {
                        return TagService.slug($stateParams.slug).then(res => {
                            return res[0];
                        });

                    }],
                    $title: function(tag) { return tag.name + ' | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/pages/contact.html',
                controller: restoration.Controllers.ContactController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'contact | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/auth/register.html',
                controller: restoration.Controllers.RegisterController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'register | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/auth/login.html',
                controller: restoration.Controllers.LoginController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'login | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/ngApp/views/auth/dashboard.html',
                controller: restoration.Controllers.DashboardController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'dashboard | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('addPost', {
                url: '/post/add',
                templateUrl: '/ngApp/views/blog/add.html',
                controller: restoration.Controllers.AddPostController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'add post | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('editPost', {
                url: '/post/edit/:id',
                templateUrl: '/ngApp/views/blog/edit.html',
                controller: restoration.Controllers.EditPostController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'edit post | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('addTag', {
                url: '/tag/add',
                templateUrl: '/ngApp/views/tag/add.html',
                controller: restoration.Controllers.AddTagController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'add tag | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('editTag', {
                url: '/tag/edit/:id',
                templateUrl: '/ngApp/views/tag/edit.html',
                controller: restoration.Controllers.EditTagController,
                controllerAs: 'vm',
                resolve: {
                    $title: function() { return 'edit tag | restoration bodywork and massage therapy | phoenix, az'; }
                }
            })
            .state('notFound', {
                url: '/not-found',
                templateUrl: '/ngApp/views/pages/not-found.html',
                resolve: {
                    $title: function() { return 'page not found | restoration bodywork and massage therapy | phoenix, az'; }
                }
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/not-found');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
