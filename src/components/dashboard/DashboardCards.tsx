
import {
  BarChart3,
  Clock,
  FileCheck,
  FileInput,
  Gavel,
  HelpCircle,
  UploadCloud,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Case</CardTitle>
          <FileInput className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Start a new legal case analysis
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/new-case">Start New Case</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upload Documents</CardTitle>
          <UploadCloud className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Upload and manage legal documents
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="secondary" className="w-full">
            <Link to="/upload">Upload Documents</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Cases</CardTitle>
          <Gavel className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">
            Active case analyses
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="secondary" className="w-full">
            <Link to="/cases">View Cases</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Analysis Pending</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1</div>
          <p className="text-xs text-muted-foreground">
            Case waiting for AI analysis
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">Check Status</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Analyses</CardTitle>
          <FileCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            Completed case predictions
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">View History</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Legal Resources</CardTitle>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Access Canadian legal resources and precedents
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="secondary" className="w-full">
            <Link to="/resources">Browse Resources</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
