import axios from 'axios';
import { useCallback, useState } from 'react';
import { AutocompleteBox, Container, TitleCity, TitleState, ContainerItems } from './styles';
import { Grid } from "@material-ui/core";

const RestaurantsSelector = ({ onChangeCity, onNavigate, onChangeCities }) => {
  const [value, setValue] = useState('');
  const [places, setPlaces] = useState([]);
  const searchPlaces = async (item) => {
    setValue(item)
    const { data, status } = await axios.request({
      method: 'get',
      url: `https://developers.zomato.com/api/v2.1/cities?q=${item}`,
      headers: {
        'Content-Type': 'application/json',
        'user-key': 'd7316ed8ef39d981ca4d5877fb8fae0d'
      }
    });
    if (status === 200) {
      setPlaces(data.location_suggestions)
      onChangeCallBackCities(data.location_suggestions);
    }
  }

  const onChangeCallBackCities = useCallback(
    (itemValue) => {
      onChangeCities(itemValue);
    },
    [places],
  );

  const onChangeCallBackCity = useCallback(
    (itemValue) => {
      onChangeCity(itemValue);
    },
    [value],
  );

  return (
    <Grid container
      style={{ backgroundColor: 'white', width: '95%', margin: 10, marginTop: 0, borderWidth: 1, borderColor: '#767676', borderStyle: 'solid' }}  >
      <Grid item xs={1} md={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
        <i style={{ color: '#767676' }} class="fas fa-map-marker-alt"></i>
      </Grid>
      <Grid className="inputBox" item xs={11} md={11}  >
        <AutocompleteBox
          inputProps={{
            placeholder: 'Digite sua cidade',
            style: {
              height: 48,
              border: 'none',
              width: '98%'
            }
          }}
          getItemValue={(item) => item.name}
          items={places}
          //shouldItemRender={(item, value) => item.name.indexOf(value) > -1}
          renderItem={(item, isHighlighted) =>
            <ContainerItems key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              <TitleCity>
                {item.name}
              </TitleCity>
              <TitleState>
                {item.state_name}
              </TitleState>
            </ContainerItems>
          }
          value={value}
          onChange={(e) => {
            searchPlaces(e.target.value);
          }}
          onSelect={(val) => {
            setValue(val);
            onChangeCallBackCity(val);
          }}
        />
      </Grid>
    </Grid>
  )
}

export default RestaurantsSelector;