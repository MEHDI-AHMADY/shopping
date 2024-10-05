import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path : "/" , element : <App />},
  {path : "/:page" , element : <App />}
])

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
