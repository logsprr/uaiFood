import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stars from '../Stars';

import { Container, Image, ContainerInfo, Title, Adress, ContainerValue, ContainerCategory, ValueText, TextCategory } from './styles';

const imagePad = 'https://i2.wp.com/www.buenasdicas.com/wp-content/uploads/2020/01/comidas-tipicas-eua-macncheese.jpg?fit=900%2C675&ssl=1';

const CardDetail = ({ item, number, type }) => {
    const [restaurant, setRestaurant] = useState();
    const [cuisinesItems, setCuisinesItems] = useState();
    useEffect(() => {
        const searchRestaurant = async () => {
            if (item) {
                const { data, status } = await axios.request({
                    method: 'get',
                    url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${item.id}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'user-key': 'd7316ed8ef39d981ca4d5877fb8fae0d'
                    }
                });
                if (status === 200) {
                    if (type == 'normal') {
                        setRestaurant(data);
                        const cuisines = data.cuisines.split(',');
                        setCuisinesItems(cuisines);
                    } else if (type == 'money') {
                        const cuisines = data.cuisines.split(',');
                        setCuisinesItems(cuisines);
                        setRestaurant(data.price_range == number && data)
                    } else if (type == 'cuisine') {
                        const cuisines = data.cuisines.split(',');
                        setCuisinesItems(cuisines);
                        for (const key in cuisines) {
                            if (cuisines[key] == number) {
                                setRestaurant(data);
                            }
                        }
                    } else if (type == 'note') {
                        const cuisines = data.cuisines.split(',');
                        setCuisinesItems(cuisines);
                        setRestaurant(Math.round(data.user_rating.aggregate_rating) == number && data)
                    }
                    else {
                        return;
                    }
                }
            }
        };
        searchRestaurant();
    }, [type])



    return (
        <>
            {restaurant &&
                <Grid item xs={12} md={4}>
                    <Container className="containerCard" container xs={12} md={12} image={restaurant.thumb == "" ? imagePad : restaurant.thumb}  >
                        <ContainerInfo className="containerInfo">
                            <div style={{ padding: 10 }}>
                                <Title>
                                    {restaurant.name}
                                </Title>
                                <Adress>
                                    {restaurant.location.address}
                                </Adress>
                                <Stars
                                    number={Math.round(restaurant.user_rating.aggregate_rating)}
                                    type="full"
                                />
                                <Grid container item xs={12} md={12}>
                                    <Grid>
                                        <ContainerValue>
                                            <i style={{ color: '#fff' }} class="fas fa-user-friends"></i>
                                            <ValueText>
                                                RS150
                                        </ValueText>
                                        </ContainerValue>
                                    </Grid>

                                    {cuisinesItems && cuisinesItems.map(item => {
                                        console.log(item)
                                        return (
                                            <Grid>
                                                <ContainerCategory>
                                                    <TextCategory>
                                                        {item}
                                                    </TextCategory>
                                                </ContainerCategory>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        </ContainerInfo>

                    </Container>
                </Grid>
            }
        </>

    );
}

export default CardDetail;