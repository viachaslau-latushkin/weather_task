describe('Testing searchController', function () {

    beforeEach(module('weatherApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    // describe('Testing search function', function () {
    //     it('if isSet(1) must be equal', function () {
    //         var $scope = {};
    //         var controller = $controller('searchController', { $scope: $scope });
    //
    //         $scope.keywords = 'brest';
    //         $scope.search();
    //
    //
    //         console.log($scope.searchResultArray);
    //
    //         expect($scope.search).toBeDefined();
    //
    //         // expect($scope.isSet(1)).toEqual(true);
    //         // expect($scope.isSet(2)).toEqual(false);
    //         //
    //         // $scope.setTab(1)
    //         // expect($scope.isSet(1)).toEqual(true);
    //
    //     });
    // });

    // describe('Testing addToAvailableCity function', function () {
    //         it('not set if find equal cityId', function () {
    //             var $scope = {};
    //             var controller = $controller('searchController', { $scope: $scope });
    //
    //             $scope.addToAvailableCity(625144);
    //
    //             console.log(dataStorage.availableCity[625144]);
    //
    //             expect($scope.search).toBeDefined();
    //
    //         });
    //     });
});