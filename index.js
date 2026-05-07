export const PETAL = "Storage-Gold";
export const INVARIANT = "STORAGE_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "storage-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Storage-Gold" &&
    input.petal === "Storage-Gold" &&
    input.ring === 1 &&
    input.invariant === "STORAGE_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "storage-gold:STATIONARY" : "storage-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
