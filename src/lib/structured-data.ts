export const forumStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vera Rust Servers',
  url: 'https://verarust.com',
  description: 'Premium vanilla Rust server with authentic 2018-2019 gameplay experience',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://verarust.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vera Rust Servers',
  url: 'https://verarust.com',
  logo: 'https://verarust.com/logo.png',
  description: 'Premier European vanilla Rust server providing authentic 2018-2019 gameplay experience',
  sameAs: [
    'https://twitter.com/VeraRust',
    'https://discord.gg/verarust',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: ['English'],
  },
};

export const gameServerStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Rust',
  gamePlatform: 'PC',
  applicationCategory: 'Game',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '500',
    bestRating: '5',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export const breadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
