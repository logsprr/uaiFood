import React, { useState } from 'react';
import { Container, Logo, SearchButton, Title } from './styles';
import LogoWhite from '../../assets/imgs/logo-white.jpg';
import RestaurantsSelector from '../../Components/RestaurantsSelector';
import { Grid } from "@material-ui/core";

const Home = ({ history }) => {

    const [citie, setCitie] = useState(null);
    const [cities, setCities] = useState(null);

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
    return (
        <Container>
            <Grid container justify="center">
                <Grid style={{ display: 'flex' }} justify="center" item xs={12} md={12}  >
                    <Logo src={LogoWhite} />
                </Grid>
                <Grid style={{ margin: 10, marginTop: 150, textAlign: 'center' }} item xs={12} md={12}  >
                    <Title >
                        Descubra os melhores restaurantes em sua cidade
                    </Title>
                </Grid>
                <Grid container style={{ margin: 50 }} item xs={12} md={6}  >
                    <Grid item xs={12} md={10}  >
                        <RestaurantsSelector onChangeCity={setCitie} onChangeCities={setCities} />
                    </Grid>
                    <Grid item xs={12} md={2}  >
                        <SearchButton onClick={() => onNavigateAll(citie)} >
                            BUSCAR
                        </SearchButton>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;