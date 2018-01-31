import { readFileSync } from 'fs';
import { join } from 'path';

export const external = (packageDirectory) => {
  const pkg = JSON.parse(readFileSync(join(packageDirectory, 'package.json')));
  const externalDependencies = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ];

  return moduleId => externalDependencies
    .filter(dependency => moduleId.startsWith(dependency))
    .length > 0;
};

const knownGlobals = {
  'uuid/v4': 'uuid.v4',
  'jquery' : '$'
};

export const globals = () => {
  return (moduleId) => {
    if (moduleId in knownGlobals) return knownGlobals[moduleId];

    const modulePkg = JSON.parse(readFileSync(require.resolve(join(moduleId, 'package.json'))));
    return modulePkg.globalName;
  }
};
