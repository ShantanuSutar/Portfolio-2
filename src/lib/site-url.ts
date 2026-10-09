const localDevelopmentUrl = "http://localhost:3000";

const configuredSiteUrl = process.env.SITE_URL?.trim();

export const hasConfiguredSiteUrl = Boolean(configuredSiteUrl);
export const siteUrl = new URL(configuredSiteUrl || localDevelopmentUrl);
export const canonicalUrl = new URL("/", siteUrl).toString();
