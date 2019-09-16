import { sum, reverseString } from "./helpers";

// describe("number functions", () => {
//   it("adds two numbers", () => {
//     // Arrange, Act
//     let actual = sum(2, 2);
//     let expected = 4;
//     // Assert
//     expect(actual).toBe(expected);

//     // Arrange, Act
//     actual = sum(2, 3);
//     expected = 5;
//     // Assert
//     expect(actual).toBe(expected);
//   });
// });

test("adds two numbers", () => {
    // Arrange, Act
    let actual = sum(2, 2);
    let expected = 4;
    // Assert
    expect(actual).toBe(expected);

    // Arrange, Act
    actual = sum(2, 3);
    expected = 5;
    // Assert
    expect(actual).toBe(expected);
});

test("adds two numbers", () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 3)).toBe(5);
});

test("reverses a string", () => {
    expect(reverseString("cat")).toBe("tac");
    expect(reverseString("dog")).toBe("god");
});
