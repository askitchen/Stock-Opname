routes = [
  {
    path: '/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

        
      // Resolve route to load page
      resolve(
        {
          componentUrl: './pages/home.html',
        },
      );
    },
  },
  {
    path: '/find/:kode',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;
      var kode = routeTo.params.kode;

        
      // Resolve route to load page
      resolve(
        {
          componentUrl: './pages/home.html',
        },
        {
          context: {
            kode: kode,
          }
        }
      );
    },
  },
  {
    path: '/search/',
    componentUrl: './pages/search.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];