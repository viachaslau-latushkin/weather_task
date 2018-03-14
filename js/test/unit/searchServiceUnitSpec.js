describe('Testing search service', function () {
    beforeEach(module('weatherApp'));

    describe('Tests for search service', function() {

        var service, $httpBackend;

        beforeEach(inject(function($injector) {
            service = $injector.get('searchService');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.whenGET(/.*q=(.*?)&type.*/g).respond('{"list":[{"id":1275339,"name":"Mumbai","coord":{"lat":19.0144,"lon":72.8479},"main":{"temp":310.65,"pressure":1010,"humidity":12,"temp_min":310.15,"temp_max":311.15},"dt":1521014400,"wind":{"speed":5.7,"deg":330},"sys":{"country":"IN"},"rain":null,"snow":null,"clouds":{"all":36},"weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50d"}]}]}');
        }));

        it('Methods should define', function() {

            expect(service.search).toBeDefined();
            expect(service.search).toEqual(jasmine.any(Function));

        });

        it('Search function should get response', function () {

            service.search('mumbai').then(function(response) {
                expect(response.data.list).toBeDefined();
                expect(response.data.list).toEqual(jasmine.any(Object));
            });
            $httpBackend.flush();

        });
    });
});