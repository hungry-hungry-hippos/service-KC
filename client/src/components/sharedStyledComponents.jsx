import styled from 'styled-components';

export const ComponentDiv = styled.div`
  background-color: white;
  margin-top: 40px;
  margin-right: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
`;

export const SectionHeaderDiv = styled.div`
  font: 16px/24px 'Calibre-Semibold';
  letter-spacing: 0.086em;
  text-transform: uppercase;
  color: #656666;
  margin: 0;
`;

export const GTKHeader = styled(SectionHeaderDiv)`
  padding-top: 33px;
`;

export const ReviewsHeader = styled(SectionHeaderDiv)`
  padding-top: 32px;
  padding-bottom: 34px;
  border-bottom: 1px #d0d2d3 solid;
`;
