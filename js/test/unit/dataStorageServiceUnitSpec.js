describe('Testing dataStorage service', function () {
    beforeEach(module('weatherApp'));

    var $controller;
    beforeEach(inject(function(_$controller_, _$window_) {
        $controller = _$controller_;
        $window = _$window_;
    }));

    // Factory of interest is called MyFactory
    describe('tests for dataStorage factory', function() {
        var factory = null;
        beforeEach(inject(function(dataStorage) {
            factory = dataStorage;
        }));

        it('Should define methods', function() {
            expect(factory.availableCity).toBeDefined();

            expect(factory.saveData).toBeDefined();
            expect(factory.restoreData).toBeDefined();

            expect(factory.saveData).toEqual(jasmine.any(Function));
            expect(factory.restoreData).toEqual(jasmine.any(Function));
        });

        it('Should save and restore data correctly', function() {

            expect(factory.restoreData()).toEqual(factory.availableCity);
            factory.availableCity[123] = {id: 123, name: 'privetCity'};
            factory.saveData();
            factory.restoreData();
            expect(factory.availableCity[123]).toBeDefined();
            expect(factory.availableCity[123].id).toBe(123);
            expect(factory.availableCity[123].name).toBe('privetCity');

        });

        it('Should delete enable property after restoreData', function() {

            factory.availableCity[123] = {id: 123, name: 'privetCity', enable: true};
            factory.saveData();
            factory.restoreData();
            expect(factory.availableCity[123]).toBeDefined();
            expect(factory.availableCity[123].id).toBe(123);
            expect(factory.availableCity[123].name).toBe('privetCity');
            expect(factory.availableCity[123].enable).not.toBeDefined();

        });
    });
});