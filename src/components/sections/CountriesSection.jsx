import React from 'react';
import {Link} from "react-router-dom";
import {getCountries} from "../../data";
import './../../scss/countriesSection.scss'

const CountriesSection = () => {
    let countries = getCountries();
    return (
        <div className={'countries__section container'}>
            <h2>Страны импорта</h2>
            <p>
                Своим клиентам мы предоставляем комплексные услуги по доставке товаров из Европы, США, Индии, Турции.
                Мы готовы предложить вам услуги по поиску необходимого товара,  закупке, декларированию груза,
                его полного таможенного оформления и доставки.
            </p>

            <div  className={'flags flags__first'}>
                {
                    countries.filter(countryId => countryId.id <= 5).map(country =>
                        <Link to={`/countries/${country.url}`} className={'flags__item'} key={country.id }>
                            <img src={`/flags/${country.image}`}  alt={country.name}/>
                            <p>{country.name}</p>
                        </Link>
                    )
                }
            </div>

            <div  className={'flags flags__second'}>
                {
                    countries.filter(countryId => countryId.id > 5 && countryId.id <= 39).map(country =>
                        <Link to={`/countries/${country.url}`} className={'flags__item'} key={country.id }>
                            <img src={`/flags/${country.image}`} alt={country.name}/>
                            <p>{country.name}</p>
                        </Link>
                    )
                }
            </div>

            <div  className={'flags flags__three'}>
                {
                    countries.filter(countryId => countryId.id > 39 && countryId.id <= 53).map(country =>
                        <Link to={`/countries/${country.url}`} className={'flags__item'} key={country.id }>
                            <img src={`/flags/${country.image}`} alt={country.name}/>
                            <p>{country.name}</p>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default CountriesSection;