import React from 'react';
import CardItem from './CardsItem';
import './product.css'

function Product() {
return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='images/cumi_tepung.png'
                text='Cumi Tepung'
            />
            <CardItem
                  src='images/cumi_bakar.png'
                  text='Cumi Bakar'
            />
            <CardItem
                src='images/cumi_cabe_goreng.png'
                text='Cumi Cabe Goreng'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/udang_bakar.png'
                text='Udang Bakar'
            />
            <CardItem
                  src='images/udang_saos.png'
                  text='Udang Saos'
            />
            <CardItem
                src='images/udang_mayonaise.png'
                text='Udang Mayonaise'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/iced_tea.png'
                text='Iced Tea'
            />
            <CardItem
                  src='images/jeruk_nipis.png'
                  text='Ice Jeruk Nipis'
            />
            <CardItem
                src='images/lemon_tea.png'
                text='Lemon Tea'
            />
          </ul>
        </div>
      </div>
      <div class="main">
        <h1>Pesanan</h1>
        <input type="button" id="button_clear" class='btn btn-primary center-block' value="Clear Sale"></input>
        <input type="button" id="button_save" class='btn btn-primary center-block' value="Save Bill"></input>
        <input type="button" id="button_print" class='btn btn-primary center-block' value="Print Bill"></input>
        <input type="button" id="button_charge" class='btn btn-primary center-block' value="Charge"></input>
      </div>
    </div>
);
}

export default Product;