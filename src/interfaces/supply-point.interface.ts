// Generated by https://quicktype.io

export interface SupplyPoint {
  cups:            string;
  tariff:          string;
  invoiced_amount: string;
  power:           Power;
  neighbors:       string[];
}

export interface Power {
  p1: string;
  p2: string;
}