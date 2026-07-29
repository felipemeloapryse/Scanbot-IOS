
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
