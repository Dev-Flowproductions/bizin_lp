import {
  WEIGHTS,
  SECTOR_SCORES,
  REGION_SCORES,
  EMPLOYEE_SCORES,
  INVESTMENT_SCORES,
} from "./calculator-config";
import type { EligibilityCopy } from "./i18n/types";
import type {
  CalculatorInput,
  CalculatorResult,
  EligibilityBand,
} from "./calculator-types";

export function calculateEligibility(
  input: CalculatorInput,
  copy: EligibilityCopy
): CalculatorResult {
  const sectorScore = SECTOR_SCORES[input.sector as keyof typeof SECTOR_SCORES] ?? 50;
  const regionScore = REGION_SCORES[input.region as keyof typeof REGION_SCORES] ?? 50;
  const employeeScore = EMPLOYEE_SCORES[input.employees as keyof typeof EMPLOYEE_SCORES] ?? 50;
  const investmentScore = INVESTMENT_SCORES[input.investment as keyof typeof INVESTMENT_SCORES] ?? 50;

  const score = Math.round(
    sectorScore * WEIGHTS.sector +
    employeeScore * WEIGHTS.employees +
    regionScore * WEIGHTS.region +
    investmentScore * WEIGHTS.investment
  );

  const band: EligibilityBand = score >= 75 ? "high" : score >= 50 ? "medium" : "low";

  const sectorProgrammes = copy.programmeSuggestions[input.sector as string];
  const programmes = sectorProgrammes ?? copy.programmeSuggestions.default;

  return {
    score,
    band,
    programmes: programmes.slice(0, 3),
    nextSteps: copy.nextSteps[band],
    disclaimer: copy.disclaimer,
  };
}
