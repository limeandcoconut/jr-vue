/**
 * export - description
 * @param  {type} Vue description
 */
export default function(Vue) {
    Vue.http.interceptors.push((request, next) => {
        request.body = request.body || {};
        request.body.user_id = localStorage.user_id;
        request.body.guest = localStorage.guest;
        next();
    });
}
