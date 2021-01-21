import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import { formatNumber } from '../../utils/formatNumber';

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from './styles';

function Offers({ navigation }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const response = await api.get('offers');

      const data = response.data.map(offer => ({
        id: offer.id,
        offer_url: offer.offer_url,
        title: offer.title,
        newPrice: formatNumber(offer.newPrice),
        price: formatNumber(offer.price),
        ingredients: offer.ingredients,
        delivery: offer.delivery,
        delay: offer.delay,
        icon: offer.icon,
      }));

      setOffers(data);
    }
    loadOffers();
  }, []);

  
  return (
    <Container>
     <Header>
       <Info>
         <Title>Está com fome?</Title>
         <SubTitle>Pratos com entrega grátis</SubTitle>
       </Info>
     </Header>
     <OfferList horizontal>
       {offers.map(offer => (
         <Item key={offer.id} onPress={() => handleNavigation(offer)}>
           <ItemImage source={{ uri: offer.offer_url }} />
           <ItemInfo>
             <ItemTitle>{offer.title}</ItemTitle>
             <ItemPrice>
               <Price>${offer.newPrice}</Price>
               <OldPrice>${offer.price}</OldPrice>
               <MaterialIcons name="local-offer" size={15} color="#000" />
             </ItemPrice>
           </ItemInfo>
         </Item>
       ))}
     </OfferList>
    </Container>
  );
}

export default withNavigation(Offers);
