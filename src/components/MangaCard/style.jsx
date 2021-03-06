import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  color:${(props) => props.theme.text};
  margin-top: 15px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.background};
  height: 150px;
  width: 90%;
  border-radius:25px;
`;

export const Image = styled.Image`
   height: 90%;
   width: 90px;
   border-radius: 10px;
`;

export const Title = styled.Text`
   font-size: ${({ autor,tag }) => autor || tag ? '14px' : '18px'} ;
   font-weight: ${({ autor,tag }) => autor||tag ? '400' : 'bold'} ;
   color:${({ theme, autor,tag }) => autor ? theme.text :tag?'white':'black'} ;
`;

export const InfoWrapper = styled.View`
  display: flex;
  margin-left: 15px;
  padding: 5px 0;
  flex: 1;
  overflow: hidden;
`

export const TitleContainer = styled.View`
  display: flex;
  flex: 1;
`

export const TagsContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const Tag = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-right: 5px;
  padding: 2px 8px;
  background-color: ${({ theme }) =>theme.tint};
  color:white;
`
