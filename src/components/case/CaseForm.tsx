import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CaseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to analysis page would go here
    }, 1500);
  };

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
          <CardDescription>
            Please provide details about your legal issue to help our AI generate more accurate predictions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Case Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Case Title</Label>
            <Input
              id="title"
              placeholder="Enter a descriptive title for your case"
              required
            />
          </div>

          {/* Case Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Legal Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corporate">Corporate Law</SelectItem>
                <SelectItem value="civil">Civil Procedure</SelectItem>
                <SelectItem value="tort">Tort Law</SelectItem>
                <SelectItem value="contract">Contract Dispute</SelectItem>
                <SelectItem value="shipping">Shipping & Logistics</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Issue Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Case Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your legal issue in detail"
              className="min-h-32"
              required
            />
            <p className="text-xs text-muted-foreground">
              Be as specific as possible about the facts, disputes, and legal questions.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="space-y-2">
            <Label htmlFor="jurisdiction">Jurisdiction</Label>
            <Select>
              <SelectTrigger id="jurisdiction">
                <SelectValue placeholder="Select jurisdiction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="federal">Federal</SelectItem>
                <SelectItem value="alberta">Alberta</SelectItem>
                <SelectItem value="bc">British Columbia</SelectItem>
                <SelectItem value="manitoba">Manitoba</SelectItem>
                <SelectItem value="newbrunswick">New Brunswick</SelectItem>
                <SelectItem value="newfoundland">Newfoundland and Labrador</SelectItem>
                <SelectItem value="nwt">Northwest Territories</SelectItem>
                <SelectItem value="novascotia">Nova Scotia</SelectItem>
                <SelectItem value="nunavut">Nunavut</SelectItem>
                <SelectItem value="ontario">Ontario</SelectItem>
                <SelectItem value="pei">Prince Edward Island</SelectItem>
                <SelectItem value="quebec">Quebec</SelectItem>
                <SelectItem value="saskatchewan">Saskatchewan</SelectItem>
                <SelectItem value="yukon">Yukon</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Additional Fields Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Opposing Party */}
            <div className="space-y-2">
              <Label htmlFor="opposing">Opposing Party</Label>
              <Input
                id="opposing"
                placeholder="Individual or company name"
              />
            </div>
            
            {/* Timeline */}
            <div className="space-y-2">
              <Label htmlFor="timeline">When did this issue begin?</Label>
              <Input 
                id="timeline" 
                type="date" 
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary" type="button">
            Save Draft
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Submit for Analysis"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
