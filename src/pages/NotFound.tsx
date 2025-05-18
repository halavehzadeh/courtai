
import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <FileWarning className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          We couldn't find the page you're looking for.
        </p>
        <p className="text-muted-foreground mb-8">
          The page may have been moved, deleted, or may never have existed. 
          Please check the URL or return to the dashboard.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
