
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Info } from "lucide-react";
import { documentTypes } from "./DocumentTypes";
import DropZone from "./DropZone";
import FileList from "./FileList";
import type { FileWithPreview } from "@/utils/fileHandling";
import { prepareNewFiles } from "@/utils/fileHandling";

const DocumentUpload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleFilesDrop = (fileList: FileList) => {
    const newFiles = prepareNewFiles(fileList);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    
    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateFileUpload(file.id);
    });
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
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Upload Legal Documents</CardTitle>
              <CardDescription>
                Provide all relevant documents for comprehensive case analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <DropZone onFilesDrop={handleFilesDrop} />
              
              {files.length > 0 && (
                <div className="mt-6">
                  <FileList files={files} onRemoveFile={removeFile} />
                </div>
              )}
              
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-3">Document Categories</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {documentTypes.map((type) => (
                    <button
                      key={type.id}
                      className={`document-type-card text-center ${selectedType === type.id ? 'ring-2 ring-primary/50 bg-accent/50' : ''}`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <type.icon className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center text-base">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                <span>Document Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                All files uploaded to CourtAI are secured with end-to-end encryption. Your confidential 
                legal documents are protected and only accessible by you.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-600" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-600" />
                  <span>Canadian privacy law compliant</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="mr-2 h-4 w-4 text-green-600" />
                  <span>Secure storage and transmission</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center text-base">
                <Info className="mr-2 h-5 w-5 text-primary" />
                <span>Upload Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    1
                  </div>
                  <span>Upload all files relevant to your case</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    2
                  </div>
                  <span>Supported formats: PDF, DOCX, JPG, PNG</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    3
                  </div>
                  <span>Maximum file size: 25MB per document</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                    4
                  </div>
                  <span>Organize documents by selecting categories</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button variant="default" className="w-full">
                  Continue to Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
