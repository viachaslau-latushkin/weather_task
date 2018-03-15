describe('Testing tabController', function () {

    beforeEach(module('weatherApp'));

    describe('Testing isSet() function', function () {

        var suite = null;
        beforeEach(inject(function ($injector) {
            suite = {};
            suite.$controller = $injector.get('$controller');
        }));

        afterEach(function () {
            suite = null;
        });

        it('if isSet(1) must be equal', function () {
            var $scope = {};
            suite.$controller('tabController', { $scope: $scope });

            expect($scope.tab).toBeDefined();
            expect($scope.isSet(1)).toEqual(true);
            expect($scope.isSet(2)).toEqual(false);

            $scope.setTab(1)
            expect($scope.isSet(1)).toEqual(true);

        });
    });
});