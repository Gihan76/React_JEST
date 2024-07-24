import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe(Counter, () => {
    
    //  below also works but not recommended
    /*
    it("Verify whether initial value of the counter is correct when page load without screen", () => {
        const { getByTestId } = render(<Counter initialCount={5} />);
        const countVal = Number(getByTestId("final_count").textContent);
        expect(countVal).toEqual(5);
    });
    */
    
    it("Verify whether initial value of the counter is correct when page load", () => {
        render(<Counter initialCount={5} />);
        const countVal = Number(screen.getByTestId("final_count").textContent);
        expect(countVal).toEqual(5);
    });

    it("Verify whether increment button works as intended", () => {
        render(<Counter initialCount={0} />)
        const button = screen.getByRole("button", {name : "Increase"});
        const initialCountVal = Number(screen.getByTestId("final_count").textContent);
        expect(initialCountVal).toEqual(0);
        fireEvent.click(button);
        const incrementedCountVal = Number(screen.getByTestId("final_count").textContent);
        expect(incrementedCountVal).toEqual(1);
    });

    it("Verify whether decrement button works as intended", () => {
        render(<Counter initialCount={5} />)
        const button = screen.getByRole("button", {name : "Decrease"});
        const initialCount = Number(screen.getByTestId("final_count").textContent);
        expect(initialCount).toEqual(5);
        fireEvent.click(button);
        const decreasedCount = Number(screen.getByTestId("final_count").textContent);
        expect(decreasedCount).toEqual(4);
    });

    it("Verify whether reset button works as intended", () => {
        render(<Counter initialCount={5} />)
        const IncrementButton = screen.getByRole("button", {name : "Increase"});
        const initialCount = Number(screen.getByTestId("final_count").textContent);
        expect(initialCount).toEqual(5);
        fireEvent.click(IncrementButton);
        fireEvent.click(IncrementButton);
        const IncreasedCount = Number(screen.getByTestId("final_count").textContent);
        expect(IncreasedCount).toEqual(7);
        const resetButton = screen.getByRole("button", {name : "Reset"});
        fireEvent.click(resetButton)
        const resetCount = Number(screen.getByTestId("final_count").textContent);
        expect(resetCount).toEqual(5);
    });

    it("Verify whether switch button works as intended", () => {
        render(<Counter initialCount={50} />)
        const initialCount = Number(screen.getByTestId("final_count").textContent);
        expect(initialCount).toEqual(50);
        const switchSignButton = screen.getByRole("button", {name : "Switch Signs"});
        fireEvent.click(switchSignButton)
        const switchedCount = Number(screen.getByTestId("final_count").textContent);
        expect(switchedCount).toEqual(-50);
    });

});
