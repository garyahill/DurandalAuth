//TODO: Inject dependencies
define(['services/errorhandler', 'services/logger', 'services/unitofwork'],
    function (errorhandler, logger, unitofwork) {

        // Internal properties and functions
        var unitofwork = unitofwork.create();
        var profile = ko.observable();

        // Reveal the bindable properties and functions
        var vm = {
            attached: attached,
            clear: clear,
            profile: profile,
            goBack: goBack,
            saveProfile: saveProfile,
            title: 'editProfile'
        };

        errorhandler.includeIn(vm);
        return vm;

        function attached() {
                       
            unitofwork.profile.all().then(function (data) {
                profile(data[0]);
            });
        }

        function clear() {
            unitofwork.rollback();
        }

        function goBack(complete) {
            router.navigateBack();
        }

        function saveProfile() {

            if (!unitofwork.hasChanges()) return;

            unitofwork.commit()
               .then(function () {
                   logger.logSuccess('Profile was saved', null, null, true);
               }).fail(this.handleError);
                       
        }



    });