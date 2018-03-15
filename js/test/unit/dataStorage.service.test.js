describe('Testing dataStorage service', function () {
    beforeEach(module('weatherApp'));

    describe('tests for dataStorage factory', function() {

        var suite = null;
        beforeEach(inject(function ($injector) {
            suite = {};
            suite.factory = $injector.get('dataStorage');
            suite.$window = $injector.get('$window');
        }));

        afterEach(function () {
            suite = null;
        });

        it('Should define methods', function() {
            expect(suite.factory.availableCity).toBeDefined();

            expect(suite.factory.saveData).toBeDefined();
            expect(suite.factory.restoreData).toBeDefined();

            expect(suite.factory.saveData).toEqual(jasmine.any(Function));
            expect(suite.factory.restoreData).toEqual(jasmine.any(Function));
        });

        it('Should save data in the sessionStorage', function() {

            suite.factory.availableCity[123] = {id: 123, name: 'privetCity'};
            suite.factory.saveData();
            expect(suite.$window.sessionStorage.cityData).toBeDefined();
            expect(suite.$window.sessionStorage.cityData[123]).toBeDefined();
            expect(suite.factory.availableCity[123].id).toBe(123);
            expect(suite.factory.availableCity[123].name).toBe('privetCity');

        });

        it('Should save and restore data correctly', function() {

            expect(suite.factory.restoreData()).toEqual(suite.factory.availableCity);
            suite.factory.availableCity[123] = {id: 123, name: 'privetCity'};
            suite.factory.saveData();
            suite.factory.restoreData();
            expect(suite.factory.availableCity[123]).toBeDefined();
            expect(suite.factory.availableCity[123].id).toBe(123);
            expect(suite.factory.availableCity[123].name).toBe('privetCity');

        });

        it('Should delete enable property after restoreData', function() {

            suite.factory.availableCity[123] = {id: 123, name: 'privetCity', enable: true};
            suite.factory.saveData();
            suite.factory.restoreData();
            expect(suite.factory.availableCity[123]).toBeDefined();
            expect(suite.factory.availableCity[123].id).toBe(123);
            expect(suite.factory.availableCity[123].name).toBe('privetCity');
            expect(suite.factory.availableCity[123].enable).not.toBeDefined();

        });
    });
});