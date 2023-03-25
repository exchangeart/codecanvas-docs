// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Art born from algorithms, algorithms born from humans',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://codecanvas.art',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'exchangeart', // Usually your GitHub org/user name.
  projectName: 'codecanvas-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exchangeart/codecanvas-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://docs.codecanvas.art",
        },
        {
          name: "og:title",
          content: "Code Canvas Docs | Generative Art on Solana",
        },
        {
          name: "og:site_name",
          content: "Code Canvas Docs | Generative Art on Solana",
        },
        {
          name: "og:description",
          content:
              "Documentation for Code Canvas, the first long-form generative art marketplace on Solana. Learn how to structure your project, receive a seed parameter, capture your artwork, and make it responsive.",
        },
        {
          name: "og:image",
          content: "https://cdn.codecanvas.art/static/meta-logo.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Code Canvas Docs | Generative Art on Solana",
        },
        {
          name: "twitter:description",
          content:
              "Documentation for Code Canvas, the first long-form generative art marketplace on Solana. Learn how to structure your project, receive a seed parameter, capture your artwork, and make it responsive.",
        },
        {
          name: "twitter:image",
          content: "https://cdn.codecanvas.art/static/meta-logo.png",
        },
        {
          name: "twitter:image:alt",
          content: "CodeCanvas.art logo",
        },
        {
          name: "twitter:site",
          content: "@CodeCanvas_Art",
        },
        {
          name: "description",
          content:
              "Documentation for Code Canvas, the first long-form generative art marketplace on Solana. Learn how to structure your project, receive a seed parameter, capture your artwork, and make it responsive.",
        },
        {
          name: "title",
          content: "Code Canvas Docs | Generative Art on Solana",
        },
      ],

      image: 'img/codecanvas-social.png',
      navbar: {
        title: 'Code Canvas Docs',
        logo: {
          alt: 'Code Canvas Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.gg/codecanvas',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/codecanvas_art',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Marketplace',
                href: 'https://codecanvas.art?utm_source=code_canvas_documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code Canvas Limited`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
