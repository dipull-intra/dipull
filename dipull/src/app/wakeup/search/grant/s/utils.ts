import { ErrorMessage } from "@/components/providers/utils";

export type YTSearchResponse = {
  success: boolean;
  data?: {
    id: string;
    title: string;
  }[]; 
  error?: ErrorMessage;
}