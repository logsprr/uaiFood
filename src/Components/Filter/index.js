import React, { useCallback, useEffect, useState } from 'react';
import { Checkbox, Grid } from '@material-ui/core';
import { Container, TitleHead, TitleOption } from './styles';
import Stars from '../Stars';
import axios from 'axios';


// import { Container } from './styles';

function Filter({ location, OnSearch }) {

    const [checkedNote, setCheckedNote] = useState(null);
    const [checkedMoney, setCheckedMoney] = useState(null);
    const [checkedCuisine, setCheckedCuisine] = useState(null);
    const [cuisine, setCuisine] = useState(null);

    useEffect(() => {
        const cuisine = async () => {
            if (location) {
                const { data, status } = await axios.request({
                    method: 'get',
                    url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=${location}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'user-key': 'd7316ed8ef39d981ca4d5877fb8fae0d'
                    }
                });
                if (status === 200) {
                    setCuisine(data.cuisines)
                }
            }
        };
        cuisine();
    }, [])

    const setTypeNote = useCallback(
        (itemValue) => {
            OnSearch(itemValue, 'note');
        },
        [checkedNote]
    );

    const setTypeMoney = useCallback(
        (itemValue) => {
            OnSearch(itemValue, 'money');
        },
        [checkedMoney]
    );

    const setTypeCuisine = useCallback(
        (itemValue) => {
            OnSearch(itemValue, 'cuisine');
        },
        [checkedCuisine]
    );

    return (
        <Grid container item xs={12} md={12} style={{ marginTop: 10 }}>
            <Container container xs={12} md={12} style={{ margin: 10 }} >
                <Grid item xs={12} md={12} >
                    <TitleHead>
                        NOTA
                    </TitleHead>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedNote === 1}
                            onChange={() => {
                                setCheckedNote(1 === checkedNote ? null : 1);
                                setTypeNote(1 === checkedNote ? null : 1)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Stars number={1} type="nonSolid" />
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedNote === 2}
                            onChange={() => {
                                setCheckedNote(2 === checkedNote ? null : 2);
                                setTypeNote(2 === checkedNote ? null : 2)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Stars number={2} />
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedNote === 3}
                            onChange={() => {
                                setCheckedNote(3 === checkedNote ? null : 3);
                                setTypeNote(3 === checkedNote ? null : 3)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Stars number={3} />
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedNote === 4}
                            onChange={() => {
                                setCheckedNote(4 === checkedNote ? null : 4);
                                setTypeNote(4 === checkedNote ? null : 4)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Stars number={4} />
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedNote === 5}
                            onChange={() => {
                                setCheckedNote(5 === checkedNote ? null : 5);
                                setTypeNote(5 === checkedNote ? null : 5)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Stars number={5} />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TitleHead>
                        CUSTO PARA 2 PESSOAS
                    </TitleHead>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedMoney === 1}
                            onChange={() => {
                                setCheckedMoney(1 === checkedMoney ? null : 1);
                                setTypeMoney(1 === checkedMoney ? null : 1)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <TitleOption>
                            Até R$50
                        </TitleOption>
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedMoney === 2}
                            onChange={() => {
                                setCheckedMoney(2 === checkedMoney ? null : 2);
                                setTypeMoney(2 === checkedMoney ? null : 2)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <TitleOption>
                            De R$50 a R$80
                        </TitleOption>
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedMoney === 3}
                            onChange={() => {
                                setCheckedMoney(3 === checkedMoney ? null : 3);
                                setTypeMoney(3 === checkedMoney ? null : 3)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <TitleOption>
                            De R$80 a R$110
                        </TitleOption>
                    </Grid>
                    <Grid style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                        <Checkbox
                            checked={checkedMoney === 4}
                            onChange={() => {
                                setCheckedMoney(4 === checkedMoney ? null : 4);
                                setTypeMoney(4 === checkedMoney ? null : 4)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <TitleOption>
                            Acima de R$110
                        </TitleOption>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TitleHead>
                        TIPO DE COZINHA
                    </TitleHead>
                    {cuisine &&
                        cuisine.map(item => {
                            return (
                                <Grid key={item.cuisine.cuisine_id} style={{ flexDirection: "row", display: 'flex', alignItems: 'center' }} >
                                    <Checkbox
                                        checked={checkedCuisine === item.cuisine.cuisine_id}
                                        onChange={() => {
                                            setCuisine(item.cuisine.cuisine_id === checkedCuisine ? null : item.cuisine.cuisine_id);
                                            setTypeCuisine(item.cuisine.cuisine_id === checkedCuisine ? null : item.cuisine.cuisine_name)
                                        }}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <TitleOption>
                                        {item.cuisine.cuisine_name}
                                    </TitleOption>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Grid>

    )
}

export default Filter;