import { Helmet } from "react-helmet-async";

const SITE_URL = "https://alm-shop-bloom.lovable.app";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  jsonLd?: object | object[];
  preloadImage?: string;
}

export const SEO = ({ title, description, path, image, type = "website", jsonLd, preloadImage }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchpriority="high" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;