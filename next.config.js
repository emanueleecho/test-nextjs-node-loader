import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    reactStrictMode: false,
    // env: {
    //     BASE_URL: process.env.BASE_URL,
    // },
    webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
        // Trova la regola esistente per i file .node, se presente
        console.log(config.output.path);
        console.log(os.constants.dlopen.RTLD_NOW);
        config.module.rules.push({
            test: /\.node$/,
            use: [
                {
                    loader: "nextjs-node-loader",
                    options: {
                        flags: os.constants.dlopen.RTLD_NOW,
                        outputPath: config.output.path
                    },
                },
            ],
        });

        return config;
    },
};
