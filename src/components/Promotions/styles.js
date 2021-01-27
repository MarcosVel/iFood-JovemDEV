import styled from 'styled-components/native';

export const PromoList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin: 20px 0;
  margin-left: 20px;
`;

export const Item = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const PromoImage = styled.Image`
  width: 300px;
  height: 150px;
`;
