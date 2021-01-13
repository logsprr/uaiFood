import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import LogoRed from '../../assets/imgs/logo-red.jpg';
import { ContainerSearch, Logo, SearchButton, Title } from './styles';
import RestaurantsSelector from '../../Components/RestaurantsSelector';
import axios from 'axios';
import CardDetail from '../../Components/CardDetail';
import { TitleCity } from '../../Components/RestaurantsSelector/styles';
import Filter from '../../Components/Filter';

const Search = ({ history }) => {
    const location = useLocation();
    const [citie, setCitie] = useState(null);
    const [cities, setCities] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [typeSearch, setTypeSearch] = useState('normal');
    const [numTypeSearch, setNumTypeSearch] = useState('normal');
    const [cuisineItem, setCuisineItem] = useState(null);

    useEffect(() => {
        const searchPlaces = async () => {
            if (location.state.citie) {
                const { data, status } = await axios.request({
                    method: 'get',
                    url: `https://developers.zomato.com/api/v2.1/establishments?city_id=${location.state.citie.id}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'user-key': 'd7316ed8ef39d981ca4d5877fb8fae0d'
                    }
                });
                if (status === 200) {
                    setRestaurants(data.establishments)
                }
            }
        };
        searchPlaces();
    }, [location])

    const onNavigateAll = async (citie) => {
        if (cities && citie) {
            const newCitie = await cities.find(newCitie => newCitie.name === citie);
            if (newCitie) {
                history.push({
                    pathname: '/search',
                    state: { citie: newCitie }
                })
            } else {
                alert('Selecione uma cidade')
            }
        } else {
            alert('Selecione uma cidade');
        }
    }

    const OnSearch = (item, type) => {
        if (item) {
            setTypeSearch(type);
            setNumTypeSearch(item);
        } else {
            setTypeSearch('normal');
        }
    }

    return (
        <Grid container justify="center" >
            <ContainerSearch container style={{ display: 'flex', alignItems: 'center', padding: 10 }} justify="center" item xs={12} md={12}>

                <Grid style={{ display: 'flex' }} justify="center" item xs={12} md={2}>
                    <Logo src={LogoRed} />
                </Grid>
                <Grid item xs={12} md={8} style={{ marginTop: 10 }}>
                    <RestaurantsSelector onChangeCity={setCitie} onChangeCities={setCities} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <SearchButton onClick={() => onNavigateAll(citie)} >
                        BUSCAR
                </SearchButton>
                </Grid>

            </ContainerSearch>
            <Grid container style={{ display: 'flex' }} justify="center" item xs={12} md={12}>
                <Grid item xs={12} md={2} spacing={4}>
                    {location.state.citie && <Filter OnSearch={OnSearch} location={location.state.citie.id} />}
                </Grid>
                <Grid item xs={12} md={10} >
                    <Grid container item xs={12} md={12} >
                        <Grid item xs={12} md={12} style={{ padding: 10 }}>
                            {location.state.citie &&
                                <TitleCity style={{}}>
                                    Restaurantes em {location.state.citie.name}
                                </TitleCity>
                            }
                        </Grid>
                        <Grid container item xs={12} md={12} spacing={4} style={{ margin: 0 }}>
                            {restaurants && restaurants.map(item => {
                                return (<CardDetail type={typeSearch} number={numTypeSearch} key={item.establishment.id} item={item.establishment} />)
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default Search;