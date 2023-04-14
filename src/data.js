import itemThird from './assets/items/item3.svg';
import itemFourth from './assets/items/item4.svg';
import itemFifth from './assets/items/item5.svg';
import itemSixth from './assets/items/item6.svg';
import itemSeventh from './assets/items/item7.svg';
import itemEights from './assets/items/item8.svg';
import itemNinth from './assets/items/item2.svg';
import itemTenth from './assets/items/item1.svg';

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
	{
		id: 7,
		img: itemNinth,
		type: 'spec armr',
		lock: false,
		mobile: true,
	},
	{
		id: 8,
		img: itemTenth,
		type: 'items',
		lock: true,
		mobile: true,
	},
];

export const dataItems = [
	{
		id: 1,
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		imgMain: jacket,
		imgSliderZoom: [charackterZoom, beltZoom, charackterZoom, beltZoom],
		imgSlider: [charackter, belt, charackter, belt, charackter, belt],
		imgAppearance: [slidesImg, slidesImg, slidesImg, slidesImg, slidesImg],
		model: 'armor',
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 5,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'M',
				sizeFull: 'medium',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 11,
					},
					{
						name: 'gray',
						hex: 'gray',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 300,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 5,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'M',
				sizeFull: 'medium',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 11,
					},
					{
						name: 'gray',
						hex: 'gray',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 300,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: '',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: '100',
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 300,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'soon',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: 'S',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: 'L',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: 'XL',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 300,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
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
		options: [
			{
				sizeShort: '',
				sizeFull: 'small',
				color: [
					{
						name: 'pink',
						hex: 'pink',
						inStock: 5,
					},
					{
						name: 'yellow',
						hex: 'yellow',
						inStock: 3,
					},
					{
						name: 'red',
						hex: 'red',
						inStock: 3,
					},
				],
			},
			{
				sizeShort: '',
				sizeFull: 'large',
				color: [
					{
						name: 'green',
						hex: '#24391d',
						inStock: 3,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
					{
						name: 'blue',
						hex: 'blue',
						inStock: 7,
					},
				],
			},
			{
				sizeShort: '',
				sizeFull: 'extra large',
				color: [
					{
						name: 'red',
						hex: 'red',
						inStock: 2,
					},
					{
						name: 'black',
						hex: '#000000',
						inStock: 3,
					},
				],
			},
		],
		price: 200,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
		availability: 'new',
		technicalInformation: '',
		specification: '',
		careSpecification: '',
		limitedEdition: 'LIMITED EDITION - 1/100',
	},
];

export const shippingData = [
	// {
	// 	id: 1,
	// 	type: 'text',
	// 	name: 'country',
	// 	placeholder: 'Country',
	// },
	{
		id: 2,
		type: 'text',
		name: 'state',
		placeholder: 'State',
	},
	{
		id: 3,
		type: 'text',
		name: 'lastname',
		placeholder: 'LAST NAME',
	},
	{
		id: 4,
		type: 'text',
		name: 'code',
		placeholder: 'ZIP CODEail',
	},
	{
		id: 5,
		type: 'text',
		name: 'location',
		placeholder: 'CITY / TOWN',
	},
	{
		id: 6,
		type: 'text',
		name: 'adress',
		placeholder: 'ADRESS / STREET / BUILDING',
	},
	{
		id: 7,
		type: 'text',
		name: 'appartment',
		placeholder: 'APPARTMENT / SUIT ( OPTIONAL)',
	},
	{
		id: 8,
		type: 'tel',
		name: 'phone',
		placeholder: 'CELL PHONE NUMBER',
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
		price: 200,
	},
	{
		id: 2,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100',
	},
	{
		id: 3,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000',
	},
	{
		id: 4,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '400',
	},
	{
		id: 5,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: 200,
	},
	{
		id: 6,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100',
	},
	{
		id: 7,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000',
	},
	{
		id: 8,
		img: jacketPreviewCheckout,
		model: 'armor',
		color: 'black',
		size: 'small',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '400',
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
		price: 200,
		// inStock: 5,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
	},
	{
		id: 2,
		model: 'armor',
		color: 'olive',
		size: 'small',
		sizeShort: 'M',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '100',
		// inStock: 5,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
	},
	{
		id: 3,
		model: 'armor',
		color: 'black',
		size: 'small',
		sizeShort: 'XL',
		name: 'A31 jacket',
		desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
		price: '3000',
		// inStock: 5,
		ifNoSize: 'ONLY ONE SIZE - AVAILABLE ADITIONAL TEXT',
	},
];
