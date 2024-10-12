import esbuildServe from "esbuild-serve";
import inlineImage from "esbuild-plugin-inline-image";

esbuildServe(
    {
        minify: false,
        keepNames: true,
        logLevel: "info",
        entryPoints: ["src/main.ts"],
        bundle: true,
        sourcemap: true,
        outfile: "public/bundle.min.js",
        plugins: [ inlineImage() ]
    },
    { root: "public", port: 8080 },
);