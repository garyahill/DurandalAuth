define(['plugins/router', 'services/unitofwork'], function (router, unitofwork) {

    var unitofwork = unitofwork.create();
    var profiles = ko.observableArray();

    vm = {

        profiles: profiles,
        convertRouteToHash: router.convertRouteToHash,
        activate: activate, 
        search: search
    };

    return vm;

    function activate () {

        ga('send', 'pageview', { 'page': window.location.href, 'title': document.title });
        unitofwork.profiles.all().then(function (data) {
            profiles(data);
        });
    }

    //we get data and event from knockout
    function search(data, event) {
        
        //if enter key
        if (event.which == 13) {

            //event.target.value = value of the input box
            unitofwork.profiles.find(breeze.Predicate.create('firstName', 'contains', event.target.value))
           .then(function (data) {
               profiles(data);
           });
        }

        return true;
       
    }
});