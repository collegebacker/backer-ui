// import resolve from '@rollup/plugin-node-resolve'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import commonjs from '@rollup/plugin-commonjs'
// import typescript from '@rollup/plugin-typescript'
// import json from '@rollup/plugin-json'
// import dts from 'rollup-plugin-dts'
// import postcss from 'rollup-plugin-postcss'
// import autoprefixer from 'autoprefixer'
// import { terser } from 'rollup-plugin-terser'
// import filesize from 'rollup-plugin-filesize'

// export default [
//   {
//     input: 'src/components/index.ts',
//     external: ['react', 'react-dom', '@collegebacker/shared'],
//     output: [
//       {
//         dir: 'ui',
//         format: 'cjs',
//         sourcemap: true
//       }
//     ],
//     plugins: [
//       peerDepsExternal({
//         includeDependencies: false
//       }),
//       resolve(),
//       postcss({
//         plugins: [autoprefixer()],
//         extract: 'ui.css',
//         modules: true,
//         minimize: true,
//         use: ['sass']
//       }),
//       json(),
//       commonjs(),
//       typescript({
//         compilerOptions: {
//           declaration: false
//         },
//         exclude: [
//           'node_modules/**',
//           'ui',
//           'src/**/*.stories.tsx',
//           'src/**/*.test.tsx'
//         ]
//       }),
//       terser({ compress: { drop_console: true } }),
//       filesize()
//     ]
//   },
//   {
//     input: 'src/components/index.ts',
//     output: [{ file: 'ui/index.d.ts', format: 'esm' }],
//     plugins: [dts()]
//   }
// ]

import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const bundle = (config, folder) => ({
  ...config,
  input: `src/${folder}/index.ts`,
  external: [
    'react',
    'react-dom',
    '@collegebacker/shared',
    '@collegebacker/shared/utils',
    '@collegebacker/shared/hooks',
    'gsap/dist/Draggable',
    'gsap',
    'react-calendar',
    'react-avatar-editor'
  ]
})

const commonPlugins = [
  nodeResolve(),
  peerDepsExternal({
    includeDependencies: false
  }),
  commonjs(),
  postcss({
    plugins: [autoprefixer()],
    extract: 'ui.css',
    modules: true,
    minimize: true,
    use: ['sass']
  }),
  json(),
  esbuild(),
  terser({ compress: { drop_console: true } }),
  filesize()
]

export default [
  bundle(
    {
      plugins: commonPlugins,
      output: [
        {
          file: `ui/index.js`,
          format: 'cjs',
          sourcemap: true
        },
        {
          file: `ui/index.mjs`,
          format: 'es',
          sourcemap: true
        }
      ]
    },
    'components'
  ),
  bundle(
    {
      plugins: [dts()],
      output: {
        file: `ui/index.d.ts`,
        format: 'es'
      }
    },
    'components'
  )
]
