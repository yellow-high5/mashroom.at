import { graphql, useStaticQuery } from 'gatsby';

const useBlogList = () => {
  const data = useStaticQuery<Gatsby.BlogListQuery>(graphql`
    query BlogList {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MM/DD YYYY")
              tag
              thumbnail
              title
            }
            slug
          }
        }
      }
    }
  `);
  return data.allMdx.edges;
};

export default useBlogList;
