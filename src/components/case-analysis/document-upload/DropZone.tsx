
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilePlus, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropZoneProps {
  onFilesDrop: (files: FileList) => void;
}

const DropZone = ({ onFilesDrop }: DropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesDrop(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesDrop(e.target.files);
    }
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200",
        isDragging ? "border-primary/70 bg-primary/5 shadow-inner" : "border-muted hover:border-muted-foreground/50 hover:bg-muted/10"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <div className="rounded-full bg-primary/10 p-4 mb-2">
          <UploadCloud className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Drag & drop files here</h3>
        <p className="text-sm text-muted-foreground max-w-md mb-2">
          Upload contracts, invoices, bills of lading, shipping documents, or any relevant legal documents in PDF, DOCX, or image formats.
        </p>
        <div className="mt-2">
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.docx,.doc,.txt,.jpg,.jpeg,.png"
          />
          <label htmlFor="file-upload">
            <Button variant="default" className="cursor-pointer font-medium shadow-sm hover:shadow">
              <FilePlus className="mr-2 h-4 w-4" />
              Select Files
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
