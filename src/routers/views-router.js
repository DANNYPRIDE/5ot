import * as Api from './../views/api.js';
import express from 'express';
import path from 'path';

const viewsRouter = express.Router();

// 페이지별로 html, css, js 파일들을 라우팅함
// 아래와 같이 하면, http://localhost:5000/ 에서는 views/home/home.html 파일을,
// http://localhost:5000/register 에서는 views/register/register.html 파일을 화면에 띄움
viewsRouter.use('/', serveStatic('home'));
viewsRouter.use('/register', serveStatic('register'));
viewsRouter.use('/login', serveStatic('login'));
viewsRouter.use('/cart', serveStatic('cart'));
viewsRouter.use('/order', serveStatic('order'));
viewsRouter.use('/order/complete', serveStatic('complete'));

viewsRouter.use('/search', serveStatic('search'));
viewsRouter.use('/mypage', serveStatic('mypage'));
viewsRouter.use('/mypage/profile', serveStatic('mypage-profile'));

viewsRouter.use('/list/:sex/:type', serveStatic('product-list'));
viewsRouter.use('/list/:sex/:type/:product_id', serveStatic('product-detail'));

viewsRouter.use('/orderlist', serveStatic('orderlist'));
viewsRouter.use('/mypage/orderlist', serveStatic('orderlist'));
viewsRouter.use('/mypage/manage', serveStatic('manage-select-page'));
viewsRouter.use('/mypage/manage/category', serveStatic('manage-category'));
viewsRouter.use('/mypage/manage/product', serveStatic('manage-product'));
viewsRouter.use('/mypage/unregister', serveStatic('unregister-user'));
viewsRouter.use('/searchlist', serveStatic('search-list'));

// views 폴더의 최상단 파일인 rabbit.png, api.js 등을 쓸 수 있게 함
viewsRouter.use('/', serveStatic(''));

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.
function serveStatic(resource) {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  // express.static 은 express 가 기본으로 제공하는 함수임
  return express.static(resourcePath, option);
}

export { viewsRouter };
