export interface Connection {
  name: string;
  image_url?: string;
  enabled: boolean;
  details?: {
    first_name: string;
    second_name: string;
    email: string;
  };
}
export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
