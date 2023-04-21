import Head from "next/head";

export type SeoProps = {
  title: string;
  description?: string;
  keywords?: string;
};

export const Seo = ({ title, description, keywords }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
};
