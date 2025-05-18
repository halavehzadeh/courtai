
export interface FileWithPreview extends File {
  preview?: string;
  id: string;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
}

export const prepareNewFiles = (files: FileList): FileWithPreview[] => {
  return Array.from(files).map((file) => ({
    ...file,
    id: crypto.randomUUID(),
    progress: 0,
    status: "pending" as const,
  }));
};
