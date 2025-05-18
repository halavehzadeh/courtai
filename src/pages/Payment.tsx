
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";

const Payment = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Payment</h1>
      </div>
      
      <div className="grid gap-6">
        <Tabs defaultValue="billing" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="billing">Billing Details</TabsTrigger>
            <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          </TabsList>
          
          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods and billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your recent payments and invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 font-medium text-sm text-muted-foreground">
                    <div>Date</div>
                    <div>Description</div>
                    <div className="text-right">Amount</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-3 py-2 text-sm">
                      <div>Apr 14, 2025</div>
                      <div>Premium Plan Subscription</div>
                      <div className="text-right">$49.00</div>
                    </div>
                    <div className="grid grid-cols-3 py-2 text-sm">
                      <div>Mar 14, 2025</div>
                      <div>Premium Plan Subscription</div>
                      <div className="text-right">$49.00</div>
                    </div>
                    <div className="grid grid-cols-3 py-2 text-sm">
                      <div>Feb 14, 2025</div>
                      <div>Premium Plan Subscription</div>
                      <div className="text-right">$49.00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm" className="ml-auto">
                  Download All Invoices
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="plans" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-md">
                  Current Plan
                </div>
                <CardHeader>
                  <CardTitle>Basic Plan</CardTitle>
                  <CardDescription>Essential legal analysis tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">$29<span className="text-muted-foreground text-sm font-normal">/month</span></div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      5 case analyses per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Basic document upload
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Case outcome predictions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled>Current Plan</Button>
                </CardFooter>
              </Card>
              
              <Card className="relative border-primary">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-md">
                  Recommended
                </div>
                <CardHeader>
                  <CardTitle>Premium Plan</CardTitle>
                  <CardDescription>Advanced features for legal professionals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">$49<span className="text-muted-foreground text-sm font-normal">/month</span></div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      20 case analyses per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Advanced document categorization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Detailed prediction reports
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Priority customer support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Comparable case suggestions
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upgrade Plan</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Plan</CardTitle>
                  <CardDescription>Custom solutions for law firms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">$199<span className="text-muted-foreground text-sm font-normal">/month</span></div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Unlimited case analyses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Multi-user access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom document templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      API integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      24/7 premium support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
