import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img style={{ borderRadius: 100 }} fixed={data.placeholderImage.childImageSharp.fixed} />;
};

export default Avatar;
