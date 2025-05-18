
import { OutcomePredictor } from "@/components/analysis/OutcomePredictor";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, FileText, UploadCloud, File, Clock, Download, Share2 } from "lucide-react";

// Sample case data
const caseData = {
  id: "CA-2023-001",
  title: "Supply Contract Dispute",
  category: "Contract",
  createdAt: "2023-04-12",
  status: "Completed",
  description: "Dispute regarding delivery timelines and payment terms for a commercial supply agreement between two logistics companies.",
  documents: [
    { name: "Supply Agreement.pdf", size: "1.2 MB", type: "Contract" },
    { name: "Email Correspondence.pdf", size: "0.7 MB", type: "Correspondence" },
    { name: "Invoice 2023-03.pdf", size: "0.3 MB", type: "Financial" },
  ]
};

const AnalysisResults = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tight">{caseData.title}</h1>
            <Badge className="ml-2">{caseData.category}</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Case ID: {caseData.id} • Created {new Date(caseData.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-6">
        <div className="order-last lg:order-first lg:col-span-4">
          <Tabs defaultValue="outcome" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="outcome">Outcome Prediction</TabsTrigger>
              <TabsTrigger value="details">Case Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="outcome" className="py-4">
              <OutcomePredictor />
            </TabsContent>
            <TabsContent value="details" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Case Information</CardTitle>
                  <CardDescription>
                    Details provided for the case analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {caseData.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Category</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Contract Law
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Jurisdiction</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ontario
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Opposing Party</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        ABC Logistics Ltd.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Issue Timeline</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        January 15, 2023 - March 30, 2023
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Uploaded Documents</CardTitle>
                  <CardDescription>
                    Documents used in the case analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {caseData.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded">
                            <File className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.size} • {doc.type}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Upload Additional Documents
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Case Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Documents Uploaded</span>
                    <span className="text-xs text-muted-foreground">Apr 12, 2023 • 10:24 AM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">AI Analysis Complete</span>
                    <span className="text-xs text-muted-foreground">Apr 12, 2023 • 10:30 AM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Prediction Generated</span>
                    <span className="text-xs text-muted-foreground">Apr 12, 2023 • 10:35 AM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recommended Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <AlertCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <span>Provide additional evidence of contract performance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <AlertCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <span>Upload communications regarding delivery schedule changes</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <AlertCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <span>Consider obtaining expert testimony on industry standards</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                See Full Recommendations
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AnalysisResults;
