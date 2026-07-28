/**
 * The Scanbot SDK exposes two different "field" shapes depending on which
 * scanner produced them:
 *
 *  - Generic document fields (MRZ, Check, Credit Card, German ID, ...)
 *    have `type: { name: string, ... }` and `value: { text: string } | null`.
 *  - EHIC scanner fields have a flat `type: string` and `value: string`.
 *
 * This type covers both shapes structurally so `parseScanbotFields` can be
 * called safely with the result of any of the scanner services below.
 */
export type ScanbotParsableField = {
  type?: { name?: string | null } | string | null;
  value?: { text?: string | null } | string | null;
};

export type ParsedScanbotFields = Record<string, string | null>;

export function parseScanbotFields(
  fields: ScanbotParsableField[] = []
): ParsedScanbotFields {
  const parsed: ParsedScanbotFields = {};

  fields.forEach((field) => {
    const key =
      (typeof field?.type === "object" ? field.type?.name : null) ||
      (typeof field?.type === "string" ? field.type : null) ||
      null;

    const value =
      (typeof field?.value === "object" ? field.value?.text : null) ??
      (typeof field?.value === "string" ? field.value : null) ??
      null;

    if (key) {
      parsed[key] = value;
    }
  });

  return parsed;
}
