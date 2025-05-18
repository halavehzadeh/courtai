
import {
  FileText,
  FileSpreadsheet, 
  Ship, 
  BanknoteIcon, 
  ClipboardCheck, 
  FilePlus, 
  FileSearch, 
  Scale, 
  Handshake,
  ScrollText,
  Receipt,
  Truck
} from "lucide-react";

export const documentTypes = [
  { id: "contract", label: "Contract", icon: Handshake, description: "Upload contract documents and agreements" },
  { id: "invoice", label: "Performa Invoice", icon: Receipt, description: "Upload invoice and financial documents" },
  { id: "shipping", label: "Shipping Documents", icon: Truck, description: "Upload shipping & delivery documents" },
  { id: "payment", label: "Bank Payment", icon: BanknoteIcon, description: "Upload payment confirmations" },
  { id: "inspection", label: "Inspection Report", icon: ClipboardCheck, description: "Upload quality inspection reports" },
  { id: "legal", label: "Legal Precedents", icon: ScrollText, description: "Upload relevant legal precedents" },
  { id: "evidence", label: "Evidence", icon: FileSearch, description: "Upload supporting evidence documents" },
  { id: "others", label: "Others", icon: FilePlus, description: "Upload any other relevant documents" },
];
