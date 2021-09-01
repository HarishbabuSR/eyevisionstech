import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar";

test('renders 3rd Eye Visions Technology as a text', ()=>{
    //Arrange
    render(<Navbar/>);

    //Act


    //Assert
   const visionElement = screen.getByText('3rd Eye Visions Technology');
   expect(visionElemen).toBeInTheDocument();
})