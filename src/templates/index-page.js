import React from 'react';
import { graphql } from 'gatsby';

export function IndexPageTemplate({ title }) {
	return <h1>{title}</h1>;
}

export default function IndexPage({ data }) {
	const { frontmatter } = data.markdownRemark;

	return <IndexPageTemplate title={frontmatter.title} />;
}

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
			}
		}
	}
`;
