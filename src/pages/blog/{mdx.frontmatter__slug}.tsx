import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

interface QueryDate {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

interface Props {
  data: QueryDate;
  children?: React.ReactNode;
}

const BlogPost: React.FC<Props> = ({ data, children }) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head: React.FC<Props> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
