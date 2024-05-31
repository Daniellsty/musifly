import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  dynamicStartUrlRedirect: true,
  disable: false,
  register: true,
  reloadOnOnline: true,
 
  
});

export default withPWA({
  // Your Next.js config
});
