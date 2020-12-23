import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ListingStyles from "./article-list.module.css"
import { Helmet } from "react-helmet"
import Title from "../components/Title/Title"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"

export default class Blog extends React.Component {
    render() {
        const articles = this.props.data.allMarkdownRemark.edges
        const { numPages } = this.props.pageContext

        return (
            <Layout>
                <Title title="Blog" subtitle="The latest news and views from Kibworth Osteopaths & Pilates" />
                <BreadcrumbBar currentPage="Blog" parentPages={[{name: "Home", path: "/"}]} />
                <section className={ListingStyles.section}>
                    <div className={ListingStyles.gridContainer}>
                        {articles.map(({ node }) => (
                            <Card
                                key={node.id}
                                imgSrc={node.frontmatter.featuredImage.childImageSharp.fluid}
                                heading={node.frontmatter.title}
                                description={node.excerpt}
                                linkType="link"
                                linkTo={node.fields.slug}
                                linkText="Read article"
                            />
                        ))}
                    </div>
                </section>
                
            </Layout>
        )
    }
}

export const articleListQuery = graphql`
    query articleListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 750, quality: 72) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`