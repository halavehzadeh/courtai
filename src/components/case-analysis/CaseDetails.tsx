
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { AlertCircle, Building, FileText, Globe, HandshakeIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const CaseDetails = () => {
  const [caseType, setCaseType] = useState("")
  const [contractType, setContractType] = useState("")
  const [jurisdiction, setJurisdiction] = useState("")

  return (
    <div className="space-y-8">
      <Card className="border-primary/20">
        <CardHeader className="space-y-1 bg-accent/30">
          <div className="flex items-center space-x-2">
            <HandshakeIcon className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">Contract Information</CardTitle>
          </div>
          <CardDescription>Details about the contract and signing process</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="contract-type">How was the contract signed?</Label>
              <Select value={contractType} onValueChange={setContractType}>
                <SelectTrigger id="contract-type">
                  <SelectValue placeholder="Select signing method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In Person</SelectItem>
                  <SelectItem value="email">Via Email</SelectItem>
                  <SelectItem value="oral">Oral Agreement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {contractType === "in-person" && (
              <div className="space-y-2">
                <Label htmlFor="signing-location">Where was the contract signed?</Label>
                <Input 
                  id="signing-location" 
                  placeholder="Enter the location where the contract was signed"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader className="space-y-1 bg-accent/30">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">Parties Information</CardTitle>
          </div>
          <CardDescription>Information about plaintiff and defendant</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Plaintiff Details</h3>
              <div className="space-y-2">
                <Label htmlFor="plaintiff-jurisdiction">Jurisdiction</Label>
                <Select>
                  <SelectTrigger id="plaintiff-jurisdiction">
                    <SelectValue placeholder="Select jurisdiction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="federal">Federal Court</SelectItem>
                    <SelectItem value="alberta">Alberta</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    <SelectItem value="manitoba">Manitoba</SelectItem>
                    <SelectItem value="nb">New Brunswick</SelectItem>
                    <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                    <SelectItem value="ns">Nova Scotia</SelectItem>
                    <SelectItem value="ontario">Ontario</SelectItem>
                    <SelectItem value="pei">Prince Edward Island</SelectItem>
                    <SelectItem value="quebec">Quebec</SelectItem>
                    <SelectItem value="sask">Saskatchewan</SelectItem>
                    <SelectItem value="yukon">Yukon</SelectItem>
                    <SelectItem value="nwt">Northwest Territories</SelectItem>
                    <SelectItem value="nunavut">Nunavut</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="plaintiff-location">Location</Label>
                <Input id="plaintiff-location" placeholder="Enter plaintiff's address" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Defendant Details</h3>
              <div className="space-y-2">
                <Label htmlFor="defendant-hq">Headquarters Location</Label>
                <Input id="defendant-hq" placeholder="Enter defendant's headquarters location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="defendant-jurisdiction">Jurisdiction</Label>
                <Select>
                  <SelectTrigger id="defendant-jurisdiction">
                    <SelectValue placeholder="Select jurisdiction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="federal">Federal Court</SelectItem>
                    <SelectItem value="alberta">Alberta</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    <SelectItem value="manitoba">Manitoba</SelectItem>
                    <SelectItem value="nb">New Brunswick</SelectItem>
                    <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                    <SelectItem value="ns">Nova Scotia</SelectItem>
                    <SelectItem value="ontario">Ontario</SelectItem>
                    <SelectItem value="pei">Prince Edward Island</SelectItem>
                    <SelectItem value="quebec">Quebec</SelectItem>
                    <SelectItem value="sask">Saskatchewan</SelectItem>
                    <SelectItem value="yukon">Yukon</SelectItem>
                    <SelectItem value="nwt">Northwest Territories</SelectItem>
                    <SelectItem value="nunavut">Nunavut</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader className="space-y-1 bg-accent/30">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">Case Information</CardTitle>
          </div>
          <CardDescription>General details about your legal case</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="case-name">Case Name</Label>
              <Input id="case-name" placeholder="Enter a name for this case" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="case-type">Case Type</Label>
              <Select value={caseType} onValueChange={setCaseType}>
                <SelectTrigger id="case-type">
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contract Dispute</SelectItem>
                  <SelectItem value="shipping">Shipping/Delivery Dispute</SelectItem>
                  <SelectItem value="payment">Payment Dispute</SelectItem>
                  <SelectItem value="quality">Quality Control Issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jurisdiction">Jurisdiction</Label>
              <Select>
                <SelectTrigger id="jurisdiction">
                  <SelectValue placeholder="Select jurisdiction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="federal">Federal Court</SelectItem>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="bc">British Columbia</SelectItem>
                  <SelectItem value="manitoba">Manitoba</SelectItem>
                  <SelectItem value="nb">New Brunswick</SelectItem>
                  <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                  <SelectItem value="ns">Nova Scotia</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                  <SelectItem value="pei">Prince Edward Island</SelectItem>
                  <SelectItem value="quebec">Quebec</SelectItem>
                  <SelectItem value="sask">Saskatchewan</SelectItem>
                  <SelectItem value="yukon">Yukon</SelectItem>
                  <SelectItem value="nwt">Northwest Territories</SelectItem>
                  <SelectItem value="nunavut">Nunavut</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dispute-amount">Disputed Amount (CAD)</Label>
              <Input id="dispute-amount" type="number" placeholder="e.g. 25000" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="case-description">Case Description</Label>
            <Textarea 
              id="case-description" 
              placeholder="Describe the details of your legal issue..."
              className="min-h-[120px] resize-none"
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="opposing-party">Opposing Party</Label>
              <Input id="opposing-party" placeholder="Name of the other party involved" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incident-date">Incident Date</Label>
              <Input id="incident-date" type="date" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="legal-argument">Legal Argument</Label>
            <Textarea 
              id="legal-argument" 
              placeholder="Outline your main legal arguments..."
              className="min-h-[120px] resize-none"
            />
          </div>
          
          {caseType === "contract" && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important Information</AlertTitle>
              <AlertDescription>
                For contract disputes, please ensure you upload the signed agreement
                and any amendments in the Documents section.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <Button variant="secondary" className="w-full sm:w-auto">
          Save Draft
        </Button>
        <Button className="w-full sm:w-auto">
          Continue to Document Upload
        </Button>
      </div>
    </div>
  );
};

export default CaseDetails;
