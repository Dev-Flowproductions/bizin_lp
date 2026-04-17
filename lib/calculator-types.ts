export type SectorKey =
  | "industria"
  | "tecnologia"
  | "servicos"
  | "turismo"
  | "saude"
  | "educacao"
  | "logistica"
  | "energia"
  | "outro";

export type RegionKey =
  | "norte"
  | "centro"
  | "lisboa"
  | "alentejo"
  | "algarve"
  | "madeira"
  | "acores";

export type EmployeeBandKey =
  | "1_9"
  | "10_49"
  | "50_249"
  | "250_plus";

export type InvestmentBandKey =
  | "under_50k"
  | "50k_200k"
  | "200k_1m"
  | "1m_5m"
  | "over_5m";

export type EligibilityBand = "high" | "medium" | "low";

export interface CalculatorInput {
  sector: SectorKey | "";
  employees: EmployeeBandKey | "";
  region: RegionKey | "";
  investment: InvestmentBandKey | "";
}

export interface Programme {
  name: string;
  description: string;
}

export interface CalculatorResult {
  score: number;
  band: EligibilityBand;
  programmes: Programme[];
  nextSteps: string[];
  disclaimer: string;
}
