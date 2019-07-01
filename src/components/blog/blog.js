
import PropTypes from "prop-types"
import React from "react"
import "./blog.scss"

const BlogPost = ({ articleTitle, articleImage, articleBody, datePosted }) => {
    if( articleTitle, articleImage, articleBody, datePosted) {
        return (
            <div>
                <h2>{articleTitle}</h2>
                <img src={articleImage} />
                <div>
                    {articleBody}
                </div>
                <p>{datePosted}</p>
            </div>
        )} else {
            return (<div></div>);
        }
}

BlogPost.propTypes = {
  articleTitle: PropTypes.string,
  articleImage: PropTypes.string,
  articleBody: PropTypes.div,
  datePosted: PropTypes.string,
}

BlogPost.defaultProps = {
    articleTitle: '',
    articleImage: '',
    articleBody: '',
    datePosted: '',
}

export default BlogPost
