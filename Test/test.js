var expect = chai.expect;

describe("Linux", function () {
    describe("Env variables", function () {
        it("Linux should be cool!", function () {
            expect(linux.isCool).to.equal(true);
        });

        it("should have the same distro name as the one provided", function () {
            var linux = new Linux("Debian");
            expect(linux.distro).to.equal("Debian");
        });
    });

    describe("features", function () {
        it("should throw because Ubuntu", function () {
            expect(function () {
                new Linux("Ubuntu").math("foo", "bar")
            }).to.throw(Error);
        });
    });
});