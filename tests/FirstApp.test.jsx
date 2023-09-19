import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en el FirstApp", () => {
//   test("debe hacer match con el snapshot", () => {
//     const title = "Hola Mundo";
//     const { container } = render(<FirstApp title={title} subTitle={123} />);
//     // console.log(container)
//     expect(container).toMatchSnapshot();
//   });
  test("debe mostrar el título en un h1", () => {
    const title = "Hola Mundo";
    const subTitle = "Soy un subtitulo";
    const { container,getByText,getByTestId } = render(<FirstApp title={title} subTitle={subTitle} />);

    expect( getByText(title) ).toBeTruthy();

    expect(getByTestId('test-title').innerHTML).toContain(title)

  });

  test('debe de mostrar el subtítulo enviado por props', () => { 
    const title = "Hola Mundo";
    const subTitle = "Soy un subtitulo";
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);

    expect( getAllByText(subTitle).length ).toBe(2);

   })


});
