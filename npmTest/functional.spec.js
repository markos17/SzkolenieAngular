describe('arrayMultiplier', function() {
    it('returns an array with every item miltiplied by given number', function(){
        var input = [2,3,7];
        // expect([]).toEqual([]);
       expect(arrayMultiplier(input,3)).toEqual([6,9,21]);
    });

    it('returns a new array (does not mutate input)', function()
    {
        var input = [2,3,7];
        expect(arrayMultiplier(input,2)).not.toBe(input);
    });
});

describe('validateCode', function(){
    it('returns true when number of ")" == number of "("', function(){
        expect(validateCode('((aaff))()')).toBe(true);
    });

    it('returns false when number of ")" == number of "("', function(){
        expect(validateCode('((aaff))()(')).toBe(false);
    });

    it('returns false if at some point number of ")" > number of "("', function(){
        expect(validateCode('((aaff))()(')).toBe(false);
    });
})

