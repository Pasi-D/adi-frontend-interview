/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: (() => {
      const imageHostsString = process.env.NEXT_PUBLIC_IMAGE_HOSTS;

      let imageHosts = [];
      try {
        if (imageHostsString) {
          // Remove single quotes if present and parse the JSON
          const cleanedString = imageHostsString.replace(/'/g, '"');
          imageHosts = JSON.parse(cleanedString);
        }
      } catch (error) {
        console.error("Failed to parse NEXT_PUBLIC_IMAGE_HOSTS:", error);
      }

      return imageHosts
        .map(url => {
          try {
            const { protocol, hostname } = new URL(url);
            return {
              protocol: protocol.replace(":", ""),
              hostname,
            };
          } catch (error) {
            console.error("Invalid URL in NEXT_PUBLIC_IMAGE_HOSTS:", url, error);
            return null;
          }
        })
        .filter(pattern => pattern !== null);
    })(),
  },
};

export default nextConfig;
