import * as express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'home | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { pageTitle: 'about | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/therapeutic-benefits', function(req, res, next) {
  res.render('index', { pageTitle: 'therapeutic benefits | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/contraindications', function(req, res, next) {
  res.render('index', { pageTitle: 'contraindications | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/modalities', function(req, res, next) {
  res.render('index', { pageTitle: 'modalities | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/first-time-clients', function(req, res, next) {
  res.render('index', { pageTitle: 'first-time clients | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/policies', function(req, res, next) {
  res.render('index', { pageTitle: 'policies | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/location', function(req, res, next) {
  res.render('index', { pageTitle: 'location | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/links', function(req, res, next) {
  res.render('index', { pageTitle: 'links | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/rates', function(req, res, next) {
  res.render('index', { pageTitle: 'rates | restoration bodywork and massage therapy | phoenix, az' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { pageTitle: 'contact | restoration bodywork and massage therapy | phoenix, az' });
});



export default router;
