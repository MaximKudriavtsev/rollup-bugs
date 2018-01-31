import { external, globals } from './rollup-utils';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.globalName,
      sourcemap: true,
      globals: globals(),
    },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: external(__dirname),
};
