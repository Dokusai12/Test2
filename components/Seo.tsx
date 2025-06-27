import Head from "next/head";

type SeoProps = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

const Seo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: SeoProps) => (
  <Head>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={ogTitle || title} />
    {ogDescription || description ? (
      <meta property="og:description" content={ogDescription || description} />
    ) : null}
    {ogImage ? <meta property="og:image" content={ogImage} /> : null}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default Seo;