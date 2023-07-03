/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

module.exports = withPlugins([
  //  plugins here
  [withPWA],
]);
