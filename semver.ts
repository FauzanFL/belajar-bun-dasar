import { semver } from "bun";
const appVersion = '1.2.3';

console.info(semver.satisfies(appVersion, '1.x'));
console.info(semver.satisfies(appVersion, '2.x'));
console.info(semver.satisfies(appVersion, '>=1.0.0'));
console.info(semver.satisfies(appVersion, '<2.0.0'));
console.info(semver.satisfies(appVersion, '^1.1.1'));