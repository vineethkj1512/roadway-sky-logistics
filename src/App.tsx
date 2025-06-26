
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Track from "./pages/Track";
import FreightBooking from "./pages/FreightBooking";
import RealTimeTracking from "./pages/RealTimeTracking";
import SecureTransportation from "./pages/SecureTransportation";
import ExpressQuote from "./pages/ExpressQuote";
import SupportContact from "./pages/SupportContact";
import CustomSolutions from "./pages/CustomSolutions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track" element={<Track />} />
          <Route path="/freight-booking" element={<FreightBooking />} />
          <Route path="/real-time-tracking" element={<RealTimeTracking />} />
          <Route path="/secure-transportation" element={<SecureTransportation />} />
          <Route path="/express-quote" element={<ExpressQuote />} />
          <Route path="/support-contact" element={<SupportContact />} />
          <Route path="/custom-solutions" element={<CustomSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
