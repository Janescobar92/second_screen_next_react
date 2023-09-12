import { Customer } from "./customer";
import { User, OrderAPI } from "./order";
import { Vehicle } from "./vehicle";

export interface ComparativeQuote {
  id?: number;
  customer: Customer;
  created_at: string;
  created_by: User | number;
  has_expired?: boolean;
  quotes: OrderAPI[];
  vehicle?: Vehicle;
  seller_id?: string;
}
