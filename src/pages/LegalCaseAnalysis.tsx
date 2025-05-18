
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Save, CheckCircle } from "lucide-react";
import CaseDetails from "@/components/case-analysis/CaseDetails";
import DocumentUpload from "@/components/case-analysis/document-upload/DocumentUpload";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LegalCaseAnalysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("case-details");
  const { toast } = useToast();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("upload-documents")) {
      setActiveTab("upload-documents");
    } else {
      setActiveTab("case-details");
    }
  }, [location.pathname]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "case-details") {
      navigate("/legal-case-analysis/case-details");
    } else {
      navigate("/legal-case-analysis/upload-documents");
    }
  };

  const handleSaveProgress = () => {
    toast({
      title: "Progress Saved",
      description: "Your case analysis progress has been saved successfully.",
      action: (
        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Legal Case Analysis</h1>
        <Button variant="default" onClick={handleSaveProgress} className="shadow-sm hover:shadow">
          <Save className="mr-2 h-4 w-4" />
          Save Progress
        </Button>
      </div>
      
      <div className="bg-card rounded-lg shadow-sm border p-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6 bg-muted/50 p-1">
            <TabsTrigger 
              value="case-details" 
              className="flex items-center data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <FileText className="mr-2 h-4 w-4" />
              Case Details
            </TabsTrigger>
            <TabsTrigger 
              value="upload-documents" 
              className="flex items-center data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Documents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="case-details" className="pt-2">
            <CaseDetails />
          </TabsContent>
          
          <TabsContent value="upload-documents" className="pt-2">
            <DocumentUpload />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LegalCaseAnalysis;
