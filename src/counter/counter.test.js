import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe(Counter, () => {
    //  recommended way
    it("Verify whether initial value of the counter is correct when page load", () => {
        render(<Counter initialCount={5} />);
        const countVal = Number(screen.getByTestId("final_count").textContent);
        expect(countVal).toEqual(5);
    });

    //  below also works but not recommended
    it("Verify whether initial value of the counter is correct when page load without screen", () => {
        const { getByTestId } = render(<Counter initialCount={5} />);
        const countVal = Number(getByTestId("final_count").textContent);
        expect(countVal).toEqual(5);
    });
});
