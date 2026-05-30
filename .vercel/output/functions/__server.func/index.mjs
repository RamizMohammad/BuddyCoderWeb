import ssr from "./_ssr/index.mjs";

const handler = {
  fetch(request, context) {
    request.runtime ??= { name: "vercel" };
    request.runtime.vercel = { context };
    request.waitUntil = context?.waitUntil;
    return ssr.fetch(request, {}, context);
  },
};

export default handler;
