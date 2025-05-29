import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import { ProductProvider } from "./context/ProductContext";
import About from "./pages/About";
import Roadmap from "./components/Roadmap";
import Contato from "./pages/contato";
import Certificacao from "./pages/Certificaçao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/certificados" element={<Certificacao />} />
            
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProductProvider>
  </QueryClientProvider>
);

export default App;
