// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import { useQuery } from "@tanstack/react-query";
// import { useToast } from "@/hooks/use-toast";
// import "@testing-library/jest-dom"; // Ensure jest-dom matchers are loaded
// import ProductListingPage from "@/pages/product-listing-page";

// jest.mock("@tanstack/react-query", () => ({
//   useQuery: jest.fn(),
// }));

// jest.mock("@/hooks/use-toast", () => ({
//   useToast: jest.fn(),
// }));

// describe("ProductListingPage", () => {
//   const mockUseQuery = useQuery as jest.Mock;
//   const mockUseToast = useToast as jest.Mock;

//   beforeEach(() => {
//     jest.clearAllMocks();
//     mockUseToast.mockReturnValue({
//       toast: jest.fn(),
//     });
//   });

//   test("renders loading state", () => {
//     mockUseQuery.mockReturnValue({
//       status: "loading",
//       data: undefined,
//       error: null,
//     });

//     render(<ProductListingPage />);
//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   test("renders error state and shows toast", async () => {
//     const mockToast = jest.fn();
//     mockUseToast.mockReturnValue({ toast: mockToast });

//     mockUseQuery.mockReturnValue({
//       status: "error",
//       data: undefined,
//       error: { message: "Network error" },
//     });

//     render(<ProductListingPage />);

//     await waitFor(() => {
//       expect(
//         screen.getByText(/error fetching product list/i)
//       ).toBeInTheDocument();
//       expect(mockToast).toHaveBeenCalledWith(
//         expect.objectContaining({
//           description: expect.stringContaining("Network error"),
//         })
//       );
//     });
//   });

//   test("renders empty state when no products are found", () => {
//     mockUseQuery.mockReturnValue({
//       status: "success",
//       data: [],
//       error: null,
//     });

//     render(<ProductListingPage />);
//     expect(screen.getByText(/no products found/i)).toBeInTheDocument();
//   });

//   test("renders product list when data is available", () => {
//     const mockProducts = [
//       {
//         id: 1,
//         title: "Product 1",
//         price: 100,
//         description: "Test",
//         category: "Category",
//         image: "",
//         rating: { rate: 4, count: 20 },
//       },
//       {
//         id: 2,
//         title: "Product 2",
//         price: 200,
//         description: "Test",
//         category: "Category",
//         image: "",
//         rating: { rate: 5, count: 10 },
//       },
//     ];

//     mockUseQuery.mockReturnValue({
//       status: "success",
//       data: mockProducts,
//       error: null,
//     });

//     render(<ProductListingPage />);

//     expect(screen.getByTestId("product-list")).toBeInTheDocument();
//     expect(screen.getByTestId("product-list")).toHaveTextContent(
//       JSON.stringify(mockProducts)
//     );
//   });
// });
