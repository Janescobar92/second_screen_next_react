export interface Province {
  id: number;
  name: string;
}

export interface Address {
  id?: number;
  url?: string;
  city: string;
  province: Province | number;
  postal_code: string;
  street: string;
}

export interface Company {
  address: Address;
  cif: string;
  email: string;
  id?: number;
  name: string;
  phone_number: string;
  phone_number_2: string;
  url?: string;
}

export interface Person {
  id?: number;
  url?: string;
  address: Address | null;
  phone_number: string;
  phone_number_2?: string;
  email: string;
  identity_document_number: string;
  first_name: string;
  last_name: string;
}

export interface Customer {
  as_generic: boolean;
  birth_date?: string;
  credit_limit?: number;
  company: Company | null;
  current_credit?: number;
  customer_type: number;
  customer_category: number;
  customer_info: Person | Company;
  document_type: number;
  nav_id: string;
  person?: Person;
  generic?: boolean;
  id?: number;
  is_credit?: boolean;
  name: string;
  require_authorization?: boolean;
}
