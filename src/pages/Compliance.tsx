
import { useToast } from "@/hooks/use-toast";
import ProductUpload from "@/components/compliance/ProductUpload";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Shield } from "lucide-react";

const Compliance = () => {
  const { toast } = useToast();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Compliance Check</h1>
          <p className="text-muted-foreground mt-1">
            Verify your products against Canadian regulatory requirements
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>
                Upload product details to check compliance with Canadian regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProductUpload />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                <span>Compliance Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our system will check your product against the following Canadian regulations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    1
                  </div>
                  <div>
                    <strong className="font-medium">Health Canada Requirements</strong>
                    <p className="text-sm text-muted-foreground">Safety standards for consumer products</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    2
                  </div>
                  <div>
                    <strong className="font-medium">CSA Standards</strong>
                    <p className="text-sm text-muted-foreground">Canadian Standards Association certifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    3
                  </div>
                  <div>
                    <strong className="font-medium">Import Requirements</strong>
                    <p className="text-sm text-muted-foreground">Documentation and tariff considerations</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    4
                  </div>
                  <div>
                    <strong className="font-medium">Labeling Standards</strong>
                    <p className="text-sm text-muted-foreground">Required product information and warnings</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Compliance;
