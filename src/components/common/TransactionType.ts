export type Transaction = {
  id: string;
  sender: { name: string; account: string };
  receiver: { name: string; account: string };
  amount_with_currency: string;
  amount: number;
  amount_in_base_currency: string;
  currency: string;
  cause: string;
  sender_caption: string;
  receiver_caption: string;
  created_at_time: Date;
};
