import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details.jsx";
import SearchParams from "./SearchParams.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { 
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return(
    <BrowserRouter>
    <StrictMode>
    <QueryClientProvider client={queryClient}>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchParams />} /> 
    </Routes>
    </QueryClientProvider>
  </StrictMode>
  </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
