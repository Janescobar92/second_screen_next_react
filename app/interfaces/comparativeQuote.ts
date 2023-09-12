import { Customer } from "./customer";
import { User, Order } from "./order";
import { Vehicle } from "./vehicle";

export interface ComparativeQuote {
  id?: number;
  customer: Customer;
  created_at: string;
  created_by: User | number;
  has_expired?: boolean;
  quotes: Order[];
  vehicle?: Vehicle;
  seller_id?: string;
}
