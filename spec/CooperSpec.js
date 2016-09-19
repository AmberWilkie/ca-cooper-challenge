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

    it("should calculate through getCooper", function() {
        expect(person.getCooper(2100)).toBe("Above average")
    });

    describe('Calculate results - ladies!', function() {

        describe('Results for 13-year-old female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 13
                });
            });

            it('2100 should be Excellent', function () {
                expect(person.getCooperForWomen(2100)).toBe('Excellent')
            });

            it('1950 should be Above Average', function () {
                expect(person.getCooperForWomen(1950)).toBe('Above average')
            });

            it('1700 should be Average', function () {
                expect(person.getCooperForWomen(1700)).toBe('Average')
            });

            it('1550 should be Average', function () {
                expect(person.getCooperForWomen(1550)).toBe('Below average')
            });

            it('1400 should be Poor', function () {
                expect(person.getCooperForWomen(1400)).toBe('Poor')
            });
        });

        describe('Results for 15yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 15
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2200)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1500)).toBe('Poor')
            });
        });

        describe('Results for 17yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 17
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2400)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1600)).toBe('Poor')
            });
        });

        describe('Results for 20yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 20
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2700)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1400)).toBe('Poor')
            });
        });

        describe('Results for 30yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 30
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2600)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1300)).toBe('Poor')
            });
        });

        describe('Results for 40yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 40
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2400)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1100)).toBe('Poor')
            });
        });

        describe('Results for 50yr female', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'female',
                    age: 50
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForWomen(2300)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForWomen(1000)).toBe('Poor')
            });
        });
    });

    describe('Calculate results - mens :(', function() {

        describe('Results for 13-year-old male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 13
                });
            });

            it("should calculate through getCooper", function() {
                expect(person.getCooper(2100)).toBe("Below average")
            });

            it('2800 should be Excellent', function () {
                expect(person.getCooperForMen(2800)).toBe('Excellent')
            });

            it('2600 should be Above Average', function () {
                expect(person.getCooperForMen(2600)).toBe('Above average')
            });

            it('2200 should be Average', function () {
                expect(person.getCooperForMen(2200)).toBe('Average')
            });

            it('2100 should be Average', function () {
                expect(person.getCooperForMen(2100)).toBe('Below average')
            });

            it('2000 should be Poor', function () {
                expect(person.getCooperForMen(2000)).toBe('Poor')
            });
        });

        describe('Results for 15yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 15
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(2900)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(2100)).toBe('Poor')
            });
        });

        describe('Results for 17yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 17
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(3100)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(2100)).toBe('Poor')
            });
        });

        describe('Results for 20yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 20
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(2850)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(1500)).toBe('Poor')
            });
        });

        describe('Results for 30yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 30
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(2800)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(1300)).toBe('Poor')
            });
        });

        describe('Results for 40yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 40
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(2600)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(1100)).toBe('Poor')
            });
        });

        describe('Results for 50yr male', function () {
            beforeEach(function () {
                person = new Person({
                    gender: 'male',
                    age: 50
                });
            });

            it('should be Excellent', function () {
                expect(person.getCooperForMen(2500)).toBe('Excellent')
            });

            it('should be Poor', function () {
                expect(person.getCooperForMen(1000)).toBe('Poor')
            });
        });
    });

});