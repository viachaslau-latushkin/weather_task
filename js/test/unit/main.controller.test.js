describe('Testing mainController', function () {

    beforeEach(module('weatherApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('All key variable initialized', function () {
        it('selectedArray,availableCity should be init, selectedCity should be equal empty string ("")', function () {
            var $scope = {};
            var controller = $controller('mainController', { $scope: $scope });

            expect($scope.selectedArray).toBeDefined();
            expect($scope.availableCity).toBeDefined();
        	expect($scope.selectedCityId).toEqual('');

        });

        it('availableCity have id and name', function () {
            var $scope = {};
            var controller = $controller('mainController', { $scope: $scope });

            for (var key in $scope.availableCity) {
                expect($scope.availableCity[key].id).toBeDefined();
                expect($scope.availableCity[key].name).toBeDefined();
                expect($scope.availableCity[key].id).toMatch(/\d{1,}/);
                expect($scope.availableCity[key].name).toEqual(jasmine.any(String));
            }
        });

        it('custom filter return correct array', function () {
            var $scope = {};
            var controller = $controller('mainController', { $scope: $scope });

            var ret = $scope.filterCityEnable();
            expect(Object.keys(ret).length).toBe(Object.keys($scope.availableCity).length);

            for (var key in $scope.availableCity) {
                $scope.availableCity[key].enable = false;
            }
            var ret = $scope.filterCityEnable();
            expect(Object.keys(ret).length).toBe(0);

            for (var key in $scope.availableCity) {
                $scope.availableCity[key].enable = true;
            }
            var ret = $scope.filterCityEnable();
            expect(Object.keys(ret).length).toEqual(Object.keys($scope.availableCity).length);

            $scope.availableCity[Object.keys($scope.availableCity)[0]].enable = false;
            var ret = $scope.filterCityEnable();
            expect(Object.keys(ret).length).toEqual(Object.keys($scope.availableCity).length - 1);
        });
    });
});