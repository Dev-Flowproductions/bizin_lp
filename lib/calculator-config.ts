import type {
  SectorKey,
  RegionKey,
  EmployeeBandKey,
  InvestmentBandKey,
} from "./calculator-types";

export const WEIGHTS = {
  sector: 0.30,
  employees: 0.20,
  region: 0.20,
  investment: 0.30,
} as const;

export const SECTOR_SCORES: Record<SectorKey, number> = {
  industria: 90,
  tecnologia: 95,
  energia: 95,
  saude: 80,
  turismo: 75,
  logistica: 80,
  servicos: 70,
  educacao: 65,
  outro: 50,
};

export const REGION_SCORES: Record<RegionKey, number> = {
  norte: 90,
  centro: 90,
  alentejo: 95,
  acores: 95,
  madeira: 95,
  algarve: 75,
  lisboa: 65,
};

export const EMPLOYEE_SCORES: Record<EmployeeBandKey, number> = {
  "1_9": 60,
  "10_49": 85,
  "50_249": 95,
  "250_plus": 75,
};

export const INVESTMENT_SCORES: Record<InvestmentBandKey, number> = {
  under_50k: 50,
  "50k_200k": 70,
  "200k_1m": 90,
  "1m_5m": 95,
  over_5m: 85,
};
