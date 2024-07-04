export interface Connection {
    name: string;
    image_url?: string;
    enabled: boolean;
    details?: {
      first_name: string;
      second_name: string;
      email: string;
    }
  }
  