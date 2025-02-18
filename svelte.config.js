import adapter from "@sveltejs/adapter-static";
export const prerender = true;
export default {
  kit: {
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    },
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
};
