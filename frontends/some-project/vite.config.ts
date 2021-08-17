import { UserConfigExport } from "vite";
import styleImport from "vite-plugin-style-import";

export default (): UserConfigExport => {
  return {
    // 1. If you are using the ant-design series, you need to configure this
    // 2. Make sure less is installed in the dependency `yarn add less -D`
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      styleImport({
        libs: [
          {
            libraryName: "antd",
            esModule: true,
            resolveStyle: (name) => {
              return `antd/es/${name}/style/index`;
            },
          },
        ],
      }),
    ],
  };
};
