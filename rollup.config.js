import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        dir: "ui",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      styles({
        modules: true,
      }),
      json(),
      commonjs(),

      typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: "ui/types",
        },
        exclude: [
          "node_modules/**",
          "ui",
          "src/**/*.stories.tsx",
          "src/**/*.test.tsx",
        ],
      }),
    ],
  },
  {
    input: "ui/types/components/index.d.ts",
    output: [{ file: "ui/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];