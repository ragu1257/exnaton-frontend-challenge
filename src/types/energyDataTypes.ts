export interface IEnergyData {
    ts: string;
    prod: number;
    cons: number;
    self: number;
    fromGrid: number;
    toGrid: number;
  }