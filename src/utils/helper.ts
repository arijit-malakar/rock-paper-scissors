export function generateHouseOutcome(options: string[]): string {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
