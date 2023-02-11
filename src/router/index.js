"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_router_1 = require("vue-router");
var HomeView_vue_1 = tslib_1.__importDefault(require("../views/HomeView.vue"));
var routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView_vue_1.default
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "about" */ '../views/AboutView.vue')); }); }
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(process.env.BASE_URL),
    routes: routes
});
exports.default = router;
//# sourceMappingURL=index.js.map