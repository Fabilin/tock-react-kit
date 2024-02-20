import commonjs from 'rollup-plugin-commonjs';
import dts from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
    output: [
      {
        file: 'build/tock-react-kit.umd.js',
        format: 'umd',
        name: 'TockReact',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/styled': 'emotionStyled',
          '@emotion/react': 'emotionReact',
        },
      },
      {
        file: 'build/tock-react-kit.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  },
  {
    // path to your declaration files root
    input: 'src/index.ts',
    output: [{ file: 'build/tock-react-kit.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
