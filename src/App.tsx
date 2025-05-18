
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewCase from "./pages/NewCase";
import Upload from "./pages/Upload";
import Cases from "./pages/Cases";
import AnalysisResults from "./pages/AnalysisResults";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import LegalCaseAnalysis from "./pages/LegalCaseAnalysis";
import Compliance from "./pages/Compliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Old routes - kept for compatibility */}
            <Route path="/new-case" element={<Navigate to="/legal-case-analysis/case-details" replace />} />
            <Route path="/upload" element={<Navigate to="/legal-case-analysis/upload-documents" replace />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/analysis" element={<AnalysisResults />} />
            
            {/* New routes */}
            <Route path="/legal-case-analysis" element={<LegalCaseAnalysis />} />
            <Route path="/legal-case-analysis/case-details" element={<LegalCaseAnalysis />} />
            <Route path="/legal-case-analysis/upload-documents" element={<LegalCaseAnalysis />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/payment" element={<Payment />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
