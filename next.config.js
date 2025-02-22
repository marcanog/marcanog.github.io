/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    output: "export",
    images: {
        unoptimized:true, //evita problemas con la optimización de las imágenes
    },
    assetPrefix: isProd ? "/portafolio-georgelys/" : "",
}
module.exports = nextConfig;
