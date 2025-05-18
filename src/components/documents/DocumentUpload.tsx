
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCheck, FilePlus, FileX, UploadCloud } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface FileWithPreview extends File {
  preview?: string;
  id: string;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
}

export function DocumentUpload() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
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
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
        ...file,
        id: crypto.randomUUID(),
        progress: 0,
        status: "pending" as const,
      }));
      
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      
      // Simulate upload progress
      newFiles.forEach((file) => {
        simulateFileUpload(file.id);
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        ...file,
        id: crypto.randomUUID(),
        progress: 0,
        status: "pending" as const,
      }));
      
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      
      // Simulate upload progress
      newFiles.forEach((file) => {
        simulateFileUpload(file.id);
      });
    }
  };

  const simulateFileUpload = (fileId: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, status: "uploading" } : file
      )
    );

    const interval = setInterval(() => {
      setFiles((prevFiles) => {
        const fileIndex = prevFiles.findIndex((file) => file.id === fileId);
        
        if (fileIndex === -1) {
          clearInterval(interval);
          return prevFiles;
        }
        
        const file = prevFiles[fileIndex];
        
        if (file.progress >= 100) {
          clearInterval(interval);
          return prevFiles.map((f) =>
            f.id === fileId ? { ...f, status: "success" } : f
          );
        }
        
        return [
          ...prevFiles.slice(0, fileIndex),
          { ...file, progress: file.progress + 10 },
          ...prevFiles.slice(fileIndex + 1),
        ];
      });
    }, 300);
  };

  const removeFile = (fileId: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center",
          isDragging ? "border-primary bg-primary/5" : "border-border"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-2">
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Drag & drop files here</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Upload contracts, invoices, bills of lading, shipping documents, or any relevant legal documents in PDF, DOCX, or TXT format.
          </p>
          <div className="mt-4">
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.docx,.doc,.txt"
            />
            <label htmlFor="file-upload">
              <Button variant="secondary" className="cursor-pointer">
                <FilePlus className="mr-2 h-4 w-4" />
                Select Files
              </Button>
            </label>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="rounded-lg border shadow-sm">
          <div className="p-4">
            <h4 className="text-sm font-medium">Uploaded Documents</h4>
          </div>
          <div className="divide-y">
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  {file.status === "success" ? (
                    <FileCheck className="h-8 w-8 text-green-500" />
                  ) : file.status === "error" ? (
                    <FileX className="h-8 w-8 text-red-500" />
                  ) : (
                    <div className="h-8 w-8 flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {file.status !== "success" && (
                    <div className="w-32">
                      <Progress value={file.progress} className="h-2" />
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(file.id)}
                  >
                    <FileX className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
