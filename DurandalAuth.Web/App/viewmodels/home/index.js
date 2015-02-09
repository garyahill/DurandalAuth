define(['plugins/router', 'services/unitofwork'], function (router, unitofwork) {

    var unitofwork = unitofwork.create();

    return {

        profiles: ko.observableArray(),
        convertRouteToHash: router.convertRouteToHash,

        activate: function () {
            var self = this;
            ga('send', 'pageview', { 'page': window.location.href, 'title': document.title });
            unitofwork.profiles.all().then(function (data) {
                self.profiles(data);
            });
        }
    };
});