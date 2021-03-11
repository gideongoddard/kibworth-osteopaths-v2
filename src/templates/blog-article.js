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
                <title>{article.frontmatter.title} | Kibworth Osteopaths & Pilates</title>
                <meta name="description" content={article.excerpt} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://kibworthosteopaths.co.uk${article.fields.slug}`} />
                <meta property="og:title" content={`${article.frontmatter.title} | Kibworth Osteopaths & Pilates`} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={article.frontmatter.featuredImage.childImageSharp.fluid} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://kibworthosteopaths.co.uk${article.fields.slug}`} />
                <meta name="twitter:title" content={`${article.frontmatter.title} | Kibworth Osteopaths & Pilates`} />
                <meta name="twitter:description" content={article.excerpt} />
                <meta name="twitter:image" content={article.frontmatter.featuredImage.childImageSharp.fluid} />

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
            fields {
                slug
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