import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export function IndexPageTemplate({ title, image }) {
	return (
		<>
			<h1>{title}</h1>
			<Img fluid={image} />
			<style jsx>{`
				h1 {
					color: red;
				}
			`}</style>
		</>
	);
}

export default function IndexPage({ data }) {
	const { frontmatter } = data.markdownRemark;

	return (
		<IndexPageTemplate title={frontmatter.title} image={frontmatter.image.childImageSharp.fluid} />
	);
}

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 1922, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
