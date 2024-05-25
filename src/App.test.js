// import { render, screen, waitFor } from "@testing-library/react";
// import App from "./App";
// import { shallow } from "enzyme";

// describe("MyComponent", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Product Management/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//   test("Check getUser function", async () => {
//     const mockData = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         brand: "Apple",
//       },
//     ];

//     // global.fetch = jest.fn(() =>
//     //   Promise.resolve({
//     //     json: () =>
//     //       Promise.resolve({
//     //         products: [{ id: 1, title: "Product 1", brand: "Brand 1" }],
//     //       }),
//     //   })
//     // );
//     global.fetch = mockData;
//     render(<App />);
//     await waitFor(() => {
//       expect(fetch).toHaveBeenCalled();
//     });
//     ////linkElement.getList().then((resp) => {
//     //});

//     // render(<App />);
//   });
// });
