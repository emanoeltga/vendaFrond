import { OrderStatus } from '../enums/order-status.enum';
import { PaymentStatus } from '../enums/payment-status.enum';

export interface Order {
  id: string;
  createdAt: string;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
}
