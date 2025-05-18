import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data
const recentCases = [
  {
    id: "CA-2023-001",
    title: "Supply Contract Dispute",
    category: "Contract",
    date: "2023-04-12",
    status: "Completed",
    result: "72% Favorable",
  },
  {
    id: "CA-2023-002",
    title: "Shipping Delay Liability",
    category: "Shipping",
    date: "2023-04-08",
    status: "In Progress",
    result: "Pending",
  },
  {
    id: "CA-2023-003",
    title: "Invoice Payment Dispute",
    category: "Corporate",
    date: "2023-04-02",
    status: "Completed",
    result: "45% Favorable",
  },
  {
    id: "CA-2023-004",
    title: "International Billing Dispute",
    category: "Corporate",
    date: "2023-03-28",
    status: "Awaiting Documents",
    result: "Pending",
  },
];

export function RecentCases() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Cases</CardTitle>
          <CardDescription>
            View and manage your recent case analyses
          </CardDescription>
        </div>
        <Button asChild variant="secondary" size="sm">
          <Link to="/cases">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Result</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentCases.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Completed"
                        ? "default"
                        : item.status === "In Progress"
                        ? "secondary"
                        : "secondary"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {item.result === "Pending" ? (
                    <span className="text-muted-foreground">Pending</span>
                  ) : (
                    <span
                      className={
                        parseInt(item.result) > 60
                          ? "text-green-500 font-medium"
                          : parseInt(item.result) > 40
                          ? "text-amber-500 font-medium"
                          : "text-red-500 font-medium"
                      }
                    >
                      {item.result}
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
