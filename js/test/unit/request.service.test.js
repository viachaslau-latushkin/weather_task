describe('Testing request service', function () {
    beforeEach(module('weatherApp'));

    describe('tests for requestService factory', function() {

        var suite = null;
        beforeEach(inject(function ($injector) {
            suite = {};
            suite.factory = $injector.get('requestService');
            suite.$httpBackend = $injector.get('$httpBackend');
            suite.$httpBackend.whenGET(/.*id=(.*?)&units.*/g).respond('{"coord":{"lon":23.7,"lat":52.1},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":13,"pressure":1000,"humidity":66,"temp_min":13,"temp_max":13},"visibility":8000,"wind":{"speed":4,"deg":240},"clouds":{"all":40},"dt":1520946000,"sys":{"type":1,"id":7372,"message":0.0039,"country":"BY","sunrise":1520916189,"sunset":1520958411},"id":629634,"name":"Brest","cod":200}');
        }));

        afterEach(function () {
            suite = null;
        });

        it('Methods should define', function() {

            expect(suite.factory.timestampToTime).toBeDefined();
            expect(suite.factory.request).toBeDefined();

            expect(suite.factory.timestampToTime).toEqual(jasmine.any(Function));
            expect(suite.factory.request).toEqual(jasmine.any(Function));

        });

        it('timestampToTime function should return string', function() {

            var time = suite.factory.timestampToTime(+ new Date);
            expect(time).toBeDefined(jasmine.any(String));
            expect(time.length).not.toBeLessThan(4);

        });

        it('request function get response', function () {

            //cityId from dataStorage service
            suite.factory.request(625144).then(function(response) {
                expect(response).toEqual(jasmine.any(Object));
                expect(response.main).toBeDefined();
                expect(response.sys).toBeDefined();
            });
            suite.$httpBackend.flush();

        });

        it('request function should return object', function () {

            expect(suite.factory.request(625144)).toEqual(jasmine.any(Object));

        });

    });
});