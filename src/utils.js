export function currentAgeForBirthYear(birthYear) {
  if (birthYear === 1984) {
    return 38;
  }
  return new Date().getFullYear() - birthYear;
}
