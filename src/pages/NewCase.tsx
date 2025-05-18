
import { CaseForm } from "@/components/case/CaseForm";
import { DocumentUpload } from "@/components/documents/DocumentUpload";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, FileText, UploadCloud } from "lucide-react";

const NewCase = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">New Case Analysis</h1>
      </div>

      <Card className="mb-6">
        <CardHeader className="bg-muted/50">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Start Your Legal Case Analysis</CardTitle>
              <CardDescription>
                Submit your case details and relevant documents for AI-powered outcome prediction
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-sm text-muted-foreground space-y-4">
            <p>
              CourtAI will analyze your case under Canadian law including corporate law, civil procedure, 
              tort law, and relevant legal precedents to predict the likely outcome of your case.
            </p>
            <p>
              <strong>For the most accurate prediction:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Complete the case details form with thorough information</li>
              <li>Upload relevant legal documents (contracts, invoices, etc.)</li>
              <li>Specify the exact legal issues in dispute</li>
              <li>Provide context about all involved parties</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Case Details
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center">
            <UploadCloud className="mr-2 h-4 w-4" />
            Document Upload
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="py-4">
          <CaseForm />
        </TabsContent>
        <TabsContent value="documents" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Case Documents</CardTitle>
              <CardDescription>
                Upload relevant legal documents to strengthen the AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentUpload />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default NewCase;
