
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from "./ProductForm";
import ProductImageUpload from "./ProductImageUpload";
import ComplianceReport from "./ComplianceReport";

export type ProductDetails = {
  name: string;
  description: string;
  materials: string;
  category: string;
  countryOfOrigin: string;
  image: File | null;
  imagePreview: string | null;
};

const initialProductDetails: ProductDetails = {
  name: "",
  description: "",
  materials: "",
  category: "kitchen",
  countryOfOrigin: "Canada",
  image: null,
  imagePreview: null,
};

const ProductUpload = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState<string>("details");
  const [productDetails, setProductDetails] = useState<ProductDetails>(initialProductDetails);
  const [isLoading, setIsLoading] = useState(false);
  const [complianceGenerated, setComplianceGenerated] = useState(false);
  
  const handleProductDetailsChange = (updatedDetails: Partial<ProductDetails>) => {
    setProductDetails((prev) => ({ ...prev, ...updatedDetails }));
  };

  const handleImageUpload = (file: File | null) => {
    if (!file) {
      setProductDetails(prev => ({
        ...prev,
        image: null,
        imagePreview: null
      }));
      return;
    }

    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setProductDetails(prev => ({
        ...prev,
        image: file,
        imagePreview: e.target?.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const isFormValid = () => {
    return (
      productDetails.name.trim() !== "" &&
      productDetails.description.trim() !== "" &&
      productDetails.materials.trim() !== "" &&
      productDetails.category !== "" &&
      productDetails.image !== null
    );
  };

  const generateComplianceReport = async () => {
    if (!isFormValid()) {
      toast({
        title: "Missing Information",
        description: "Please complete all required fields and upload a product image.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call for compliance checking
    setTimeout(() => {
      setIsLoading(false);
      setComplianceGenerated(true);
      setCurrentTab("report");
      
      toast({
        title: "Compliance Report Generated",
        description: "Your product compliance report is ready to view.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="report" disabled={!complianceGenerated}>
            Compliance Report
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-4 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <ProductImageUpload 
              imagePreview={productDetails.imagePreview} 
              onImageUpload={handleImageUpload} 
            />
            <ProductForm
              productDetails={productDetails}
              onProductDetailsChange={handleProductDetailsChange}
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={generateComplianceReport}
              disabled={isLoading || !isFormValid()}
            >
              {isLoading ? "Generating..." : "Generate Compliance Report"}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="report">
          {complianceGenerated && (
            <ComplianceReport productDetails={productDetails} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductUpload;
