
import { useState } from "react";
import { 
  FileCheck, 
  FilePlus, 
  AlertTriangle, 
  CheckCircle,
  Download,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductDetails } from "./ProductUpload";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ComplianceReportProps {
  productDetails: ProductDetails;
}

type ComplianceStatus = "compliant" | "partially" | "non-compliant";

interface RegulationInfo {
  id: string;
  title: string;
  description: string;
  status: ComplianceStatus;
  requirements: {
    title: string;
    description: string;
    action: string;
    status: ComplianceStatus;
  }[];
}

const ComplianceReport = ({ productDetails }: ComplianceReportProps) => {
  const { toast } = useToast();
  const [expandedSection, setExpandedSection] = useState<string | null>("health");
  
  // Generate mock compliance data based on product details
  const getComplianceData = (): RegulationInfo[] => {
    const isKitchenProduct = productDetails.category === "kitchen";
    const importedFromOutside = productDetails.countryOfOrigin !== "Canada";

    return [
      {
        id: "health",
        title: "Health Canada Requirements",
        description: "Safety standards for consumer products under the Canada Consumer Product Safety Act",
        status: isKitchenProduct ? "partially" : "compliant",
        requirements: [
          {
            title: "Material Safety",
            description: isKitchenProduct 
              ? "Cookware materials must not exceed lead and cadmium leaching limits" 
              : "Product materials comply with safety standards",
            action: isKitchenProduct 
              ? "Submit materials for testing by an accredited laboratory" 
              : "No action required",
            status: isKitchenProduct ? "partially" : "compliant"
          },
          {
            title: "Product Warning Labels",
            description: "Warning labels must be visible, bilingual and follow Canadian guidelines",
            action: "Ensure bilingual (English/French) warning labels are included",
            status: "partially"
          }
        ]
      },
      {
        id: "standards",
        title: "Canadian Standards Association (CSA)",
        description: "Technical standards that ensure products sold in Canada are safe and reliable",
        status: "non-compliant",
        requirements: [
          {
            title: "CSA Certification",
            description: isKitchenProduct 
              ? "Cookware products should have CSA certification for safety standards" 
              : "Products in this category require CSA certification",
            action: "Apply for CSA certification through approved testing laboratories",
            status: "non-compliant"
          }
        ]
      },
      {
        id: "import",
        title: "Import Requirements",
        description: "Documentation and procedures required by the Canada Border Services Agency",
        status: importedFromOutside ? "non-compliant" : "compliant",
        requirements: [
          {
            title: "Import Documentation",
            description: importedFromOutside 
              ? "Products imported into Canada require proper documentation" 
              : "Locally manufactured products do not require import documentation",
            action: importedFromOutside 
              ? "Prepare Commercial Invoice, Certificate of Origin, and Cargo Control Document" 
              : "No action required",
            status: importedFromOutside ? "non-compliant" : "compliant"
          },
          {
            title: "Tariff Classification",
            description: "Products must be properly classified according to the Harmonized System",
            action: importedFromOutside 
              ? "Determine the correct HS code for your product category" 
              : "No action required for domestic products",
            status: importedFromOutside ? "partially" : "compliant"
          }
        ]
      },
      {
        id: "labeling",
        title: "Labeling Standards",
        description: "Requirements under the Consumer Packaging and Labelling Act",
        status: "partially",
        requirements: [
          {
            title: "Bilingual Labeling",
            description: "Product information must be displayed in both English and French",
            action: "Update product labels to include both English and French text",
            status: "partially"
          },
          {
            title: "Country of Origin",
            description: "Products must clearly indicate the country where they were manufactured",
            action: "Add 'Made in " + productDetails.countryOfOrigin + "' to product labels",
            status: "partially"
          }
        ]
      }
    ];
  };

  const complianceData = getComplianceData();

  const getStatusColor = (status: ComplianceStatus) => {
    switch (status) {
      case "compliant":
        return "text-green-500 bg-green-50";
      case "partially":
        return "text-amber-500 bg-amber-50";
      case "non-compliant":
        return "text-red-500 bg-red-50";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: ComplianceStatus) => {
    switch (status) {
      case "compliant":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "partially":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case "non-compliant":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getComplianceStatusText = (status: ComplianceStatus) => {
    switch (status) {
      case "compliant":
        return "Compliant";
      case "partially":
        return "Partially Compliant";
      case "non-compliant":
        return "Non-Compliant";
      default:
        return "";
    }
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Compliance report has been downloaded successfully.",
    });
    // In a real application, this would generate a PDF or document for download
  };

  return (
    <div className="space-y-6">
      {/* Product Summary Section */}
      <Card className="border-primary/30">
        <CardHeader className="bg-primary/5 pb-2">
          <CardTitle className="text-xl flex items-center">
            <FileCheck className="mr-2 h-5 w-5 text-primary" />
            Product Compliance Summary
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">Product Name</div>
              <div className="font-medium">{productDetails.name}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">Category</div>
              <div className="font-medium">
                {productCategories.find(c => c.value === productDetails.category)?.label}
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">Country of Origin</div>
              <div className="font-medium">{productDetails.countryOfOrigin}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Compliance Results</h3>
          <Button onClick={handleDownloadReport} variant="secondary" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        <div className="space-y-3">
          {complianceData.map((regulation) => (
            <Card key={regulation.id} className="overflow-hidden">
              <CardHeader 
                className={cn(
                  "p-4 flex flex-row items-center justify-between cursor-pointer",
                  expandedSection === regulation.id ? "pb-2" : ""
                )}
                onClick={() => setExpandedSection(expandedSection === regulation.id ? null : regulation.id)}
              >
                <div className="flex items-center space-x-2">
                  <div className={cn(
                    "p-1.5 rounded-full",
                    getStatusColor(regulation.status)
                  )}>
                    {getStatusIcon(regulation.status)}
                  </div>
                  <CardTitle className="text-base font-semibold">{regulation.title}</CardTitle>
                </div>
                <div className="flex items-center">
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full mr-2",
                    getStatusColor(regulation.status)
                  )}>
                    {getComplianceStatusText(regulation.status)}
                  </span>
                  {expandedSection === regulation.id ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              
              {expandedSection === regulation.id && (
                <CardContent className="pt-2 pb-4">
                  <p className="text-sm text-muted-foreground mb-4">{regulation.description}</p>
                  
                  <div className="space-y-3 mt-2">
                    {regulation.requirements.map((req, index) => (
                      <div key={index} className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{req.title}</h4>
                          <span className={cn(
                            "text-xs font-medium px-2 py-0.5 rounded-full",
                            getStatusColor(req.status)
                          )}>
                            {getComplianceStatusText(req.status)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{req.description}</p>
                        <div className="mt-2 bg-muted/40 p-2 rounded-md">
                          <div className="text-xs font-medium mb-1">Required Action:</div>
                          <p className="text-sm">{req.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const productCategories = [
  { value: "kitchen", label: "Kitchen Appliances & Cookware" },
  { value: "electronics", label: "Electronics & Gadgets" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing & Textiles" },
  { value: "toys", label: "Toys & Children's Products" },
  { value: "health", label: "Health & Beauty" },
  { value: "food", label: "Food Products" },
  { value: "other", label: "Other" }
];

export default ComplianceReport;
