// "PIIRRO – Food & Music Discovery Platform" -> ["PIIRRO", "Food & ..."]
export const splitTitle = (title) => {
  const [name, ...rest] = title.split(" – ");
  return [name, rest.join(" – ")];
};

// "Mero Hisab – ..." -> "mero-hisab" (used for /work#mero-hisab anchors)
export const projectSlug = (project) =>
  splitTitle(project.title)[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// WebP derivatives sit beside the original: /projects/piirro-960.webp etc.
export const webpSet = (src) => {
  const base = src.replace(/\.(png|jpe?g)$/i, "");
  return `${base}-960.webp 960w, ${base}-1600.webp 1600w`;
};
