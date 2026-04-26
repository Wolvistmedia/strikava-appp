import path from "path";

const nextConfig = {
  output: "standalone",  

  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;