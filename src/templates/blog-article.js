import React from "react"
import Img from "gatsby-image"
import ArticleStyles from "./blog-article.module.css"
import { Link } from "gatsby"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import Title from "../components/Title/Title"
import { Helmet } from "react-helmet"

export default function Article({ data }) {
    const article = data.markdownRemark

    let featuredImgFluid = article.frontmatter.featuredImage.childImageSharp.fluid
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={article.excerpt} />
                <title>{article.frontmatter.title} | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title={article.frontmatter.title} subtitle={article.frontmatter.date} />
            <BreadcrumbBar currentPage={article.frontmatter.title} parentPages={[{name: "Home", path: "/"}, {name: "Blog", path: "/blog"}]} />
            <section className={ArticleStyles.section}>
                <div className={ArticleStyles.articleBody}>
                    <Img style={{margin: "30px 0 30px 0", maxHeight: 550}} fluid={featuredImgFluid} />
                    <div dangerouslySetInnerHTML={{ __html: article.html }} />
                </div>
                <div className={ArticleStyles.recentArticles}>
                    <h2>Recent Articles</h2>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <Link className={ArticleStyles.articleLink} to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 960, quality: 72) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            excerpt
        }
        allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
    }
`