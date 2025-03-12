export function noOp() {}

export const hasDuplicateValue = (array: unknown[]) => {
  return array.some(
    (v1, index) => array.findIndex((v2) => v2 === v1) !== index
  );
};

export const hasDuplicateValueForGivenProperty = (
  array: Record<string, any>[],
  property: string
) => {
  return array.some(
    (o1, index) =>
      array.findIndex((o2) => o2[property] === o1[property]) !== index
  );
};

export const isValidJson = (text?: string) => {
  if (!text) return false;

  try {
    const json = JSON.parse(text);
    return typeof json === "object";
  } catch (e) {
    return false;
  }
};
