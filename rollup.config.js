import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'RootName.ProjectName',
      globals: (moduleId) => {
        console.log(moduleId);
      },
    }
  ],
};
