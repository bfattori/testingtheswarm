describe("Testing the Swarm", function() {
    it("Should exist", function() {
        expect(Test).toBeDefined();
    });

    it("Should have a method called 'foo' which returns 'foo'", function() {

        var myTest = new Test();

        spyOn(myTest, "foo").andCallThrough();
        var out = myTest.foo();
        expect(myTest.foo).toHaveBeenCalled();
        expect(out).toEqual("foo");
    });

    it("Should have a property named 'bar' which has the value 'bar'", function() {
        var myTest = new Test();
        expect(myTest.bar).toEqual("bar");
    });

});
