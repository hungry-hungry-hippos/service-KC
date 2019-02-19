import React from 'react';
import styled from 'styled-components';


export const GTKArticleImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 120px;
  height: 120px;
  transition: transform .3s cubic-bezier(0.645,0.045,0.355,1.000),background-size .3s cubic-bezier(0.645,-7.955,0.355,1.000),
  opacity .3s cubic-bezier(0.645,0.045,0.355,1.000),background-position .3s cubic-bezier(0.645,0.045,0.355,1.000);
`;

export const GTKArticleSpan = styled.span`
  border-bottom: 1px transparent solid;
  transition: border-bottom 0.2s ease-in-out;
`;

export const GTKArticleItemDiv = styled.div`
  font: 19px/24px 'Calibre-Medium';
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-bottom: 40px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:last-child, &:nth-last-child(2) {
    margin-bottom: 0;
  }

  &:hover ${GTKArticleImage} {
    transform: scale(1.01);
    opacity: 0.92;
  }

  &:hover ${GTKArticleSpan} {
    border-bottom: 1px #b70038 solid;
  }
`;

export const GTKArticleImageContainer = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  background-color: rgba(16, 24, 32, 1);
`;

export const GTKArticleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: calc(100% - 120px);
  height: 120px;
  padding: 22px 14px 26px;
  box-sizing: border-box;
`;

export const GTKArticleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GTKArticleItem = (props) => {
  const { article, id } = props;

  const articleDiv = (
    <GTKArticleItemDiv onClick={() => (window.location.replace(`/${id}`))} onKeyPress={() => (window.location.replace(`/${id}`))} tabIndex={0} role="button">
      <GTKArticleImageContainer>
        <GTKArticleImage style={{ backgroundImage: `url(${article.image})` }} />
      </GTKArticleImageContainer>
      <GTKArticleTextContainer>
        <GTKArticleText>
          <GTKArticleSpan>{article.name}</GTKArticleSpan>
        </GTKArticleText>
      </GTKArticleTextContainer>
    </GTKArticleItemDiv>
  );

  return articleDiv;
};

export default GTKArticleItem;
