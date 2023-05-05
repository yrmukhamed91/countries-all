import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CountryListWrapper = styled.div`
     display: flex;
     flex-wrap: wrap;
   `;

   const CountryCard = styled.div`
   width: 200px;
   margin: 10px;
   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   overflow: hidden;
 `;

 const CountryFlag = styled.img`
     width: 100%;
     height: 150px;
     object-fit: cover;
   `;

   const CountryName = styled.h3`
   font-size: 20px;
   font-weight: 600;
   margin: 10px;
 `;
 
 const CountryPopulation = styled.p`
     font-size: 14px;
     margin: 10px;
   `;

const CountryRegion = styled.p`
    font-size: 14px;
    margin: 10px;
`;

const CountryCapital = styled.p`
    font-size: 14px;
    margin: 10px;
`;

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
          .get('https://restcountries.com/v3.1/all')
          .then((res) => setCountries(res.data))
          .catch((err) => console.error(err));
      }, []);

    console.log(countries);
    return (
        <CountryListWrapper>
         {countries.map((country) => (
           <CountryCard key={country.name.common}>
             <CountryFlag src={country.flags.png} alt="{country.name.common}" />
             <CountryName>{country.name.common}</CountryName>
             <CountryPopulation>
               Насиление: {country.population.toLocaleString()}
             </CountryPopulation>
             <CountryCapital>
                Столица: {country.capital}
            </CountryCapital>
             <CountryRegion>
                Регион: {country.region}
             </CountryRegion>
           </CountryCard>
         ))};
       </CountryListWrapper> 
    );
};

export default CountryList;