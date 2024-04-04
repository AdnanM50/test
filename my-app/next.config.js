module.exports = {
  env: {
    product_mode: "demo",
    // product_mode: "production",
    backend_url:
      process.env.NODE_ENV === "production"
        ? " https://car2goprobackend.appstick.com.bd/"
        : " https://car2goprobackend.appstick.com.bd/",
    is_laravel_backend: 'false'
  },
  images: {
    domains: [
      "appstick.s3.ap-southeast-1.amazonaws.com", ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

