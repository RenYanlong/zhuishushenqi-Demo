import Vue from "vue";
import Router from "vue-router";
//定义路由组件
import Home from "./components/home/Home.vue";
import Booklist from "./components/booklist/booklist.vue";
import Category from "./components/category/Category.vue";
import BookListDetails from "./components/booklistmain/bookListDetails.vue";
import Book from "./components/book/book.vue";
import Ranking from './components/ranking/ranking.vue'

Vue.use(Router);
//实例化路由对象
export default new Router({
  mode: "history",
  routes: [
    {
      // 匹配到/shouye时，渲染shouye组件
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      // 匹配到/booklist时，渲染booklist组件
      path: "/booklist",
      name: "booklist",
      component: Booklist
    },
    {
      path: "/bookListDetails",
      name: "bookListDetails",
      component: BookListDetails
    },
    {
      path: "/book",
      name: "book",
      component: Book
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
});
