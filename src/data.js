import itemThird from './assets/items/item3.svg';
import itemFourth from './assets/items/item4.svg';
import itemFifth from './assets/items/item5.svg';
import itemSixth from './assets/items/item6.svg';
import itemSeventh from './assets/items/item7.svg';
import itemEights from './assets/items/item8.svg';

import beltZoom from './assets/belt-zoom.png';
import belt from './assets/belt.png';
import charackterZoom from './assets/man-zoom.png';
import charackter from './assets/man.png';

import slidesImg from './assets/charackter.svg';

import jacket from './assets/jacket.svg';
import jacket2 from './assets/jacket2.svg';

import jacketPreviewCheckout from './assets/jacket-preview.svg';

export const dataHero = [
	{
		id: 1,
		img: itemThird,
		type: 'cranium',
		lock: false,
	},
	{
		id: 2,
		img: itemFourth,
		type: 'armor',
		lock: false,
	},
	{
		id: 3,
		img: itemFifth,
		type: '2nd skin',
		lock: false,
	},
	{
		id: 4,
		img: itemSixth,
		type: 'skin',
		lock: false,
	},
	{
		id: 5,
		img: itemSeventh,
		type: 'limbs',
		lock: false,
	},
	{
		id: 6,
		img: itemEights,
		type: 'attach',
		lock: true,
	},
];

export const dataItems = [
	{
		id: 1,
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [
			charackter,
			belt,
			charackter,
			belt,
			charackter,
			belt,
			charackter,
			belt,
			charackter,
			belt,
			charackter,
			belt,
		],
		imgAppearance: [slidesImg, slidesImg, slidesImg, slidesImg, slidesImg],
		model: 'armor',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'gray',
				hex: 'gray',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 2,
		name: 'B31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket2,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'armor',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		sizes: ['medium'],
		sizesShort: ['M', 'L', 'XL'],
		price: '300.00',
		inStock: 1,
		availability: '01/02/23',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '2/100',
	},
	{
		id: 3,
		name: 'C31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket2,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'armor',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '1000.00',
		inStock: 1,
		availability: '',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 4,
		name: 'D31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'armor',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 5,
		name: 'E31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'cranium',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '1000.00',
		inStock: 1,
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '2/100',
	},
	{
		id: 6,
		name: 'F31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'cranium',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 7,
		name: 'G31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'limbs',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '1000.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 8,
		name: 'H31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'limbs',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 9,
		name: 'I31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'armor',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '1000.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 10,
		name: 'J31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'skin',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 11,
		name: 'K31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: '2nd skin',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
	{
		id: 12,
		name: 'L31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
			charackterZoom,
			beltZoom,
		],
		imgSlider: [charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg],
		model: 'spec armr',
		color: [
			{
				name: 'green',
				hex: '#24391d',
			},
			{
				name: 'black',
				hex: '#000000',
			},
			{
				name: 'red',
				hex: 'red',
			},
		],
		size: [
			{
				short: 'S',
				full: 'small',
			},
			{
				short: 'M',
				full: 'medium',
			},
			{
				short: 'L',
				full: 'large',
			},
			{
				short: 'XL',
				full: 'extra large',
			},
		],
		price: '200.00',
		inStock: 1,
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: '1/100',
	},
];

export const dataCheckout = [
	{
		id: 1,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '200.00',
	},
	{
		id: 2,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100.00',
	},
	{
		id: 3,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000.00',
	},
	{
		id: 4,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '400.00',
	},
	{
		id: 5,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '200.00',
	},
	{
		id: 6,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100.00',
	},
	{
		id: 7,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000.00',
	},
	{
		id: 8,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '400.00',
	},
];

export const dataOrder = [
	{
		id: 1,
		model: 'armor',
		color: 'black',
		size: 'small',
		sizeShort: 'S',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '200.00',
		inStock: 1,
	},
	{
		id: 2,
		model: 'armor',
		color: 'olive',
		size: 'small',
		sizeShort: 'M',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100.00',
		inStock: 1,
	},
	{
		id: 3,
		model: 'armor',
		color: 'black',
		size: 'small',
		sizeShort: 'XL',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000.00',
		inStock: 1,
	},
];