/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "cdn.imagin.studio"}]
    },
    // Stop `next dev` from generating AGENTS.md
    agentRules: false,
    typescript:{
        ignoreBuildErrors:true,
    }
}

module.exports = nextConfig
