import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Search, PlusCircle, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const allCases = [
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
  {
    id: "CA-2023-005",
    title: "Service Agreement Breach",
    category: "Contract",
    date: "2023-03-15",
    status: "Completed",
    result: "88% Favorable",
  },
  {
    id: "CA-2023-006",
    title: "Tort Claim Evaluation",
    category: "Tort",
    date: "2023-03-05",
    status: "Completed",
    result: "35% Favorable",
  },
  {
    id: "CA-2023-007",
    title: "Vendor Contract Dispute",
    category: "Contract",
    date: "2023-02-28",
    status: "Completed",
    result: "62% Favorable",
  },
  {
    id: "CA-2023-008",
    title: "Civil Procedure Review",
    category: "Civil",
    date: "2023-02-15",
    status: "Completed",
    result: "70% Favorable",
  },
];

const Cases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredCases = allCases.filter((caseItem) => {
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || caseItem.status === statusFilter;

    const matchesCategory =
      categoryFilter === "all" || caseItem.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">My Cases</h1>
        <Button asChild>
          <Link to="/new-case">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Case
          </Link>
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Case Management</CardTitle>
          <CardDescription>
            Manage and review all your legal case analyses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Awaiting Documents">Awaiting Documents</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={categoryFilter}
                onValueChange={setCategoryFilter}
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Tort">Tort</SelectItem>
                  <SelectItem value="Civil">Civil</SelectItem>
                  <SelectItem value="Shipping">Shipping</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
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
              {filteredCases.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2" />
                      <p>No cases found matching your filters</p>
                      <Button
                        variant="link"
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("all");
                          setCategoryFilter("all");
                        }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredCases.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>
                      <Link
                        to="/analysis"
                        className="text-primary hover:underline font-medium"
                      >
                        {item.title}
                      </Link>
                    </TableCell>
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
                      <Link to="/analysis">
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Cases;
