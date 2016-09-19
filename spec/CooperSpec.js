describe("Cooper", function() {
    var person;

    beforeEach(function () {
        person = new Person({
            gender: 'female',
            age: 32
        });
    });

    it("should have an age", function () {
        expect(person.age).toEqual(32);
    });

    it("should have a gender", function () {
        expect(person.gender).toEqual('female');
    });

    describe('Calculate results', function() {
        beforeEach(function() {
            person = new Person({
                gender: 'female',
                age: 13
            });
        });

        describe('Results for 13-year-old female', function(){

            it('2100 should be Excellent', function() {
                expect(person.getCooperForWomen(2100)).toBe('Excellent')
            });

            it('1950 should be Above Average', function() {
                expect(person.getCooperForWomen(1950)).toBe('Above average')
            });

            it('1700 should be Average', function() {
                expect(person.getCooperForWomen(1700)).toBe('Average')
            });

            it('1400 should be Poor', function() {
                expect(person.getCooperForWomen(1400)).toBe('Poor')
            });
        })
    })

});