define(['services/logger', 'services/unitofwork'],
    function (logger, unitofwork) {

        // Internal properties and functions
        var unitofwork = unitofwork.create();
        var profile = ko.observable();

        // Reveal the bindable properties and functions
        var vm = {
            activate: activate,
            profile: profile
        };

        function activate(queryString) {

            var predicate = breeze.Predicate.create('userId', '==', queryString.id);

            unitofwork.profiles.find(predicate)
                .then(function (data) {
                    profile(data[0]);
                });
        }

        return vm;
        
    });