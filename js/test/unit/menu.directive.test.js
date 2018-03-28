describe('Testing mainPanel directive', function () {
    var suite = null;

    function compileDirective() {
        var tmpl = '<div main-panel></div>';
        suite.element = suite.$compile(tmpl)(suite.parentScope);
        suite.parentScope.$digest();
        suite.scope = suite.element.scope();
    }

    beforeEach(module('templates'));
    beforeEach(module('weatherApp', function ($provide) {
        suite = {};
        suite.dataStorage = {
            availableCity: {
                625144: {id: 625144, name: 'Minsk'}
            },
            saveData: function () {},
            restoreData: function () {
                return
                    suite.dataStorage.availableCity;
            }
        };
        $provide.value('dataStorage', suite.dataStorage);
    }));

    beforeEach(inject(function ($injector) {

        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');
        suite.$controller = $injector.get('$controller');
        suite.parentScope = suite.$rootScope.$new();
        suite.$controller('mainController', {$scope: suite.parentScope});

        suite.$httpBackend = $injector.get('$httpBackend');
        suite.$httpBackend.whenGET(/.*id=(.*?)&units.*/g).respond('{"coord":{"lon":27.57,"lat":53.9},"weather":[{"id":620,"main":"Snow","description":"light shower snow","icon":"13d"}],"base":"stations","main":{"temp":1.39,"pressure":1005,"humidity":74,"temp_min":1,"temp_max":2},"visibility":10000,"wind":{"speed":5,"deg":230},"clouds":{"all":75},"dt":1521810000,"sys":{"type":1,"id":7378,"message":0.0131,"country":"BY","sunrise":1521777834,"sunset":1521822568},"id":625144,"name":"Minsk","cod":200}');

        compileDirective();

    }));

    afterEach(function () {
        suite = null;
    });

    describe('', function () {

        it('should have select and span elements', function () {

            expect(suite.element.find('select').length).toBe(1);
            expect(suite.element.find('span').length).toBe(1);

        });

        it('add() dunction should work well', function () {

            expect(suite.parentScope.add()).toEqual(undefined);

            suite.parentScope.availableCity = suite.dataStorage.availableCity;
            expect(suite.parentScope.add(6251441)).toEqual(undefined);

            // console.log(suite.parentScope.selectedArray);
            //
            // // expect(Object.keys(suite.parentScope.availableCity).length).toBe(1);
            // // suite.parentScope.add(625144);
            // //
            // // console.log(suite.parentScope);
            // // expect(Object.keys(suite.parentScope.availableCity).length).toBe(1);
            // //
            // // //suite.parentScope.add(62514411);
            // //
            // // //console.log(suite.parentScope.availableCity);
            // // //console.log(suite.parentScope.availableCity);
            // // // expect(suite.element.find('select').length).toBe(1);
            // // // expect(suite.element.find('span').length).toBe(1);

        });


    });
});