import type { ChatMarketData } from "@/lib/types";

export function getMarketResponse(
  text: string,
  marketData: ChatMarketData,
): string {
  const lower = text.toLowerCase();
  let area: string | null = null;

  for (const k of Object.keys(marketData)) {
    if (lower.includes(k)) {
      area = k;
      break;
    }
  }

  if (area) {
    const d = marketData[area];
    const name = area.charAt(0).toUpperCase() + area.slice(1);

    if (lower.includes("overbied") || lower.includes("bied"))
      return `In <strong>${name}</strong> wordt momenteel gemiddeld <strong>${d.overbid}</strong> overboden op de vraagprijs.`;
    if (lower.includes("m2") || lower.includes("prijs"))
      return `De gemiddelde vierkante meter prijs in <strong>${name}</strong> ligt momenteel rond de <strong>€ 9.850,-</strong>.`;

    return `Statistieken voor <strong>${name}</strong>:<br>• Overbieding: ${d.overbid}<br>• Verkocht (30d): ${d.sold} woningen.`;
  }

  if (lower.includes("hallo") || lower.includes("hoi"))
    return "Goedemiddag! Waarmee kan ik u helpen? Ik heb data over alle Amsterdamse buurten.";

  return "Ik begrijp niet helemaal wat u bedoelt. Kunt u vragen naar een specifieke buurt (bijv. Centrum of De Pijp)?";
}
