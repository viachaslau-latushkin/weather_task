describe('Testing tabController', function () {

    beforeEach(module('weatherApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('Testing isSet() function', function () {
        it('if isSet(1) must be equal', function () {
            var $scope = {};
            var controller = $controller('tabController', { $scope: $scope });

            expect($scope.tab).toBeDefined();
            expect($scope.isSet(1)).toEqual(true);
            expect($scope.isSet(2)).toEqual(false);

            $scope.setTab(1)
            expect($scope.isSet(1)).toEqual(true);

        });
    });
});