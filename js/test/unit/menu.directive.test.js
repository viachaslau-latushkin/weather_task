describe('Testing mainPanel directive', function () {
    var suite = null;

    beforeEach(module('weatherApp'));


    beforeEach(inject(function($injector) {


        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');


        // suite.parentScope = suite.$rootScope.$new();
        //
        // suite.panelsElement = suite.$compile('<div panels></div>')(suite.parentScope);
        // suite.panelsController = suite.panelsElement.controller('panels');
        // suite.panelsScope = suite.panelsElement.scope();
        // spyOn(suite.panelsController, 'add').andCallThrough();
        //
        // suite.barElement = angular.element('<div bar></div>');
        // suite.panelsElement.append(suite.barElement);
        // suite.barElement = suite.$compile(suite.barElement)(suite.panelsScope);
        // suite.barScope = suite.barElement.scope();

    }));


    afterEach(function() {
        //suite.barScope.$destroy();
        //suite.panelsScope.$destroy();
        //rootScope.$digest();
        //suite.barElement.remove();
        //suite.panelsElement.remove();
        suite = null;
    });


    describe('', function () {

        beforeEach(module('templates'));

        it('should call method in require controller', function() {

            var element = suite.$compile("<div main-panel></div>")(suite.$rootScope);
            //suite.$rootScope.$digest();
            console.log(element);

            //expect(element.find()).toContain("lidless, wreathed in flame, 2 times");

        // <select ng-model="selectedCityId">
        //         <option disabled selected value ng-show="selectedCityId === ''"> -- Choose a city -- </option>
        //     <option ng-repeat="(cityId,objectCity) in filterCityEnable()"
        //     ng-selected="selectedCityId == cityId"
        //     ng-value="cityId">{{objectCity.name}}</option>
        //     </select>
        //     <span ng-click="add(selectedCityId)" class="size"><i class="fas fa-plus-circle"></i></span>

            // expect(suite.barScope.sum).toBe(3);
            // expect(suite.panelsController.add).toHaveBeenCalled();
        });
    });
});