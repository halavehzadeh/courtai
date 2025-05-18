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
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, Info } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const COLORS = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28'];

// Sample prediction data
const predictionData = {
  outcome: {
    win: 72,
    partial: 15,
    lose: 13,
  },
  factors: [
    { name: "Contract Validity", score: 85 },
    { name: "Procedural Compliance", score: 78 },
    { name: "Evidence Strength", score: 65 },
    { name: "Legal Precedent", score: 80 },
    { name: "Jurisdictional Fit", score: 90 },
  ],
  pieData: [
    { name: "Likely to Win", value: 72 },
    { name: "Partially Favorable", value: 15 },
    { name: "Likely to Lose", value: 13 },
  ]
};

export function OutcomePredictor() {
  const [activeTab, setActiveTab] = useState("bar");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Case Outcome Prediction</CardTitle>
        <CardDescription>
          Based on our AI analysis of your case details and documents, here's the predicted outcome.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg bg-primary/5 p-4">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Overall Prediction</h3>
              <p className="text-sm text-muted-foreground">
                Your case has a <span className="font-medium text-primary">{predictionData.outcome.win}%</span> chance of a favorable outcome.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="bar" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bar">Factors Analysis</TabsTrigger>
            <TabsTrigger value="pie">Outcome Distribution</TabsTrigger>
          </TabsList>
          <TabsContent value="bar" className="pt-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={predictionData.factors}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Score']}
                    labelStyle={{ color: '#333' }}
                    contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="pie" className="pt-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={predictionData.pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {predictionData.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Probability']}
                    contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Key Insights</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">+</span>
              <span>Strong contract documentation strengthens your position.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">+</span>
              <span>Jurisdictional aspects are highly favorable to your case.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">!</span>
              <span>Evidence strength could be improved with additional documentation.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">-</span>
              <span>Timeline of events may present challenges to your argument.</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">View Full Analysis</Button>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </CardFooter>
    </Card>
  );
}
