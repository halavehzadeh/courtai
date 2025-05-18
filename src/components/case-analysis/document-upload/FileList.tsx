
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileCheck, FileText, FileX } from "lucide-react";
import type { FileWithPreview } from "@/utils/fileHandling";

interface FileListProps {
  files: FileWithPreview[];
  onRemoveFile: (id: string) => void;
}

const FileList = ({ files, onRemoveFile }: FileListProps) => {
  if (files.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border shadow-sm bg-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b bg-muted/30">
        <h4 className="text-sm font-semibold text-foreground">Uploaded Documents ({files.length})</h4>
      </div>
      <div className="divide-y">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-center space-x-4">
              {file.status === "success" ? (
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-green-600" />
                </div>
              ) : file.status === "error" ? (
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <FileX className="h-6 w-6 text-red-500" />
                </div>
              ) : (
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              )}
              <div>
                <p className="text-sm font-medium truncate max-w-[200px] md:max-w-[300px] text-foreground">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {file.status !== "success" && (
                <div className="w-36">
                  <Progress value={file.progress} className="h-2" />
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveFile(file.id)}
                className="text-muted-foreground hover:text-destructive rounded-full"
              >
                <FileX className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileList;
