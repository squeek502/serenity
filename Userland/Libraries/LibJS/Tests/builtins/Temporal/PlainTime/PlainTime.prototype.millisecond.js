describe("correct behavior", () => {
    test("basic functionality", () => {
        const plainTime = new Temporal.PlainTime(0, 0, 0, 12);
        expect(plainTime.millisecond).toBe(12);
    });
});

test("errors", () => {
    test("this value must be a Temporal.PlainTime object", () => {
        expect(() => {
            Reflect.get(Temporal.PlainTime.prototype, "millisecond", "foo");
        }).toThrowWithMessage(TypeError, "Not a Temporal.PlainTime");
    });
});
