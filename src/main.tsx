import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import BookPage from "./pages/BookPage";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path : "/" , element : <Home />},
      { path: "/books/:book", element: <BookPage /> },
      { path: "/:page", element: <Home /> },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
