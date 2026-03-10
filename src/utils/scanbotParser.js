export function parseScanbotFields(fields = []) {

  const parsed = {};

  fields.forEach(field => {

    const key =
      field?.type?.name ||
      field?.type ||
      null;

    const value =
      field?.value?.text ??
      field?.value ??
      null;

    if (key) {
      parsed[key] = value;
    }

  });

  return parsed;
}