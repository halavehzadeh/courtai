
import { DocumentUpload } from "@/components/documents/DocumentUpload";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, FileWarning, Shield } from "lucide-react";

const Upload = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Document Upload</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload Legal Documents</CardTitle>
              <CardDescription>
                Provide documents related to your case for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentUpload />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">Save for Later</Button>
              <Button>
                Continue to Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                <span>Document Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All files uploaded to CourtAI are secured with end-to-end encryption. Your confidential 
                legal documents are protected and only accessible by you.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-500" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-500" />
                  <span>Canadian privacy law compliant</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-500" />
                  <span>Secure storage and transmission</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileWarning className="mr-2 h-5 w-5" />
                <span>Recommended Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For more accurate predictions, consider uploading the following document types:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    1
                  </div>
                  <span><strong>Contracts:</strong> Full agreements related to the dispute</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    2
                  </div>
                  <span><strong>Correspondence:</strong> Relevant emails and letters</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    3
                  </div>
                  <span><strong>Invoices:</strong> Financial documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    4
                  </div>
                  <span><strong>Shipping documents:</strong> Bills of lading, delivery records</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Upload;
