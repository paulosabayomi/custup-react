import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";

import packageJson from "./package.json" assert { type: "json" };


export default [
  {
    input: "src/lib/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "src/lib/index.ts",
    output: [{ file: "dist/index.ts", format: "esm" }],
    plugins: [dts()],
  },
];