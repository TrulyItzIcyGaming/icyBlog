const CONFIG = {
  // profile setting (required)
  profile: {
      name: "ItzIcyHere",
      image: "/2.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
      role: "Cybersecurity Student",
      bio: "Running on pure chaos and the occasional ‘oops’ moment. If you’re wondering what’s going on, so am I—but trust me, it’s all part of the grand tech adventure!",
      email: "Brandonrsn0502v2@gmail.com",
      linkedin: "https://icyblog.vercel.app/",
      github: "TrulyItzIcyGaming",
      instagram: "Brandon_Scott_Rosen",
    },
  projects: [
    {
      name: `Ghost Locker`,
      href: "https://ghostlocker.vercel.app/",
    },
    {
      name: `Retro Age`,
      href: "https://trulyitzicygaming.github.io/Retroage-Icy/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Icy-Blog",
    description: "welcome to Icy-Log!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://icyblog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
