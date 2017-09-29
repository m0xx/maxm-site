import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import Tags from '../components/Tags';

class BlogIndex extends React.Component {
  render() {
    const {props} = this
    const siteTitle = get(props, 'data.site.siteMetadata.title')
    const projects = get(props, 'data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {projects.map(project => {
          const {title, tags, website} = project.node.frontmatter;

          return <div>
              <h3 style={{marginBottom: '1rem'}}>{ title }</h3>
             <div dangerouslySetInnerHTML={{ __html: get(project, 'node.html') }}></div>
            <div><Tags tags={tags.split(',').map((tag) => tag.trim())} /></div>
            <br/>
              {website &&  <div style={{
                      textAlign: 'right'
                  }}>
                    <a target="_blank" href={website}>Voir le projet</a>
                  </div>
              }

          </div>
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            website
          }
          html
        }
      }
    }
  }
`
