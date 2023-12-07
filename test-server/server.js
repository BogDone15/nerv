const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const itemThird = 'https://i.ibb.co/KqpWD2b/item-Third.png';
const itemFourth = 'https://i.ibb.co/9H1B4zF/item-Fourth.png';
const itemFifth = 'https://i.ibb.co/mSntFR8/item-Fifth.png';
const itemSixth = 'https://i.ibb.co/92X3bc4/item-Sixth.png';
const itemSeventh = 'https://i.ibb.co/MpLYsYc/item-Seventh.png';
const itemEights = 'https://i.ibb.co/PmnBVcJ/item-Eights.png';
const itemNinth = 'https://i.ibb.co/nbD4zRt/item-Ninth.png';
const itemTenthMob = 'https://i.ibb.co/vmCf4gH/item-Tenth-Mob.png';
const charackter = 'https://i.ibb.co/k9PCZYj/charackter.png';
const jacket = 'https://i.ibb.co/yPR09Ht/jacket.png';
const jacket2 = 'https://i.ibb.co/yPR09Ht/jacket.png';
const belt = 'https://i.ibb.co/kMKxVyS/belt.png';
const beltZoom = 'https://i.ibb.co/BCjm8fW/belt-zoom.png';
const charackterZoom = 'https://i.ibb.co/R33X0P7/man-zoom.png';
const slidesImg = 'https://i.ibb.co/k9PCZYj/charackter.png';

app.get('/data-items', (httpRequest, httpResponse) => {
	httpResponse.json([
		{
			products: [
				{
					id: 1421,
					name: 'A31 jacket',
					desc: 'Windstopper® PrimaLoft® Modular Liner Vest',
					imgMain: jacket,
					imgSliderZoom: [charackterZoom, beltZoom, charackterZoom, beltZoom],
					imgSlider: [charackter, belt, charackter, belt, charackter, belt],
					imgAppearance: [
						slidesImg,
						slidesImg,
						slidesImg,
						slidesImg,
						slidesImg,
					],
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: `SPECIFICSDWR /
		Shape memory fabricFront pleated
		construction
		Front knee articulated seamZip-fastened
		expandable transform cargo pocketExpanded
		reinforcement gusset
		SPECIFICSDWR /
		Shape memory fabricFront pleated
		Shape memory fabricFront pleated
		Front knee articulated seamZip-fastened
		expandable transform cargo pocketExpanded
		reinforcement gusset
		SPECIFICSDWR /
		Shape memory fabricFront pleated
		Shape memory fabricFront pleated
		Front knee articulated seamZip-fastened
		expandable transform cargo pocketExpanded
		reinforcement gusset`,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 242,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: '2/100',
				},
				{
					id: 333,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 411,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 4325,
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
							sizeShort: '',
							sizeFull: '',
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
							sizeFull: '',
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
							sizeFull: '',
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: '2/100',
				},
				{
					id: 666,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 75,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 84,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 912,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 1034,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 1111,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
				{
					id: 1322,
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
					technicalInformation: `3L GORE-TEX® PRO [Most breathable technology]
				_(72% PA, 28% ePTFE)
				_With solution-dyed Micro Grid™ backer for improved environmental footprint
		_GUARANTEED TO KEEP YOU DRY™
				`,
					specification: `Korean exclusive .................................... most celebr ated wide-spectrum jacket. Outside of the J1E, they are the first J1A equipped with a TensionZipǽ flak pocket and 3 layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be identified by its high-gloss WR zippers, unique dual tone flak pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř logo tape.
		*J1A was the first ever jacket designed by ǍCROŇYMř. Originally conceived in the years between 1999 and 2001, it is the progenitor of the Type 2371**, and of every other ǍCROŇYMř jacket that has followed.
		J1A-GT is the culmination of everything we have learned about building apparel since that time.`,
					specificationIndividual: ``,
					careSpecification: `Should be ironed at a temperature between 180°C - 210°C
				Can be dry cleaned / Use solvent of perchloroethylene or of petroleum based solvent
				Hang dry / Tumble dry possible / Normal drying cycle
		`,
					limitedEdition: 'LIMITED EDITION - 1/100',
				},
			],
			categories: [
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
					img: itemTenthMob,
					type: 'items',
					lock: true,
					mobile: true,
				},
			],
		},
	]);
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
