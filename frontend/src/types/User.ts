interface Group {
  id: number;
  name: string;
}

export interface User {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string | null;
  groups: Group[];
  is_active: boolean;
  token: string;
}