import React from "react"
import { Link } from "gatsby"

import LeftIcon from "images/arrow-left.svg"
import RightIcon from "images/arrow-right.svg"

import { PostNavigationWrapper, ItemWrapper, ImgWrapper } from "./PostNavigation.styles"

const PostNavigation = ({ previousPage, nextPage }) => (

    <PostNavigationWrapper>

      <ItemWrapper>
        <ImgWrapper>
          {previousPage && (
            <Link to={previousPage.fields.slug} rel="prev">
              <input type="image" alt="left-nav" src={LeftIcon} />
            </Link>
          )}
        </ImgWrapper>
      </ItemWrapper>

      <ItemWrapper>
        <ImgWrapper>
          {nextPage && (
            <Link to={nextPage.fields.slug} rel="next">
              <input type="image" alt="right-nav" src={RightIcon} />
            </Link>
          )}
        </ImgWrapper>
      </ItemWrapper>

    </PostNavigationWrapper>
)

export default PostNavigation
