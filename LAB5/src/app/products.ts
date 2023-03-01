export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	rating: number;
	url: string;
	image: string;
	category: string;
	numofLikes:number;
     
}

export const products = [
	{
		id: 1,
		name: 'Смартфон Samsung Galaxy A23 ',
		price: 98990 ,
		description: '6 ГБ/128 ГБ черный',
		rating: 1,
		url: "https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
	    category: 'phone',
		numofLikes:0,
	},
	{
		id: 2,
		name: 'Смартфон Apple iPhone 14 Pro Max ',
		price: 702867,
		description: '256Gb фиолетовый',
		rating: 7,
		url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
		category: 'phone',
		numofLikes:0,
	},
	{
		id: 3,
		name: 'Смартфон Apple iPhone 13 ',
		price:377750,
		description: '128Gb белый',
		rating:10,
		url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
		category: 'phone',
		numofLikes:0,
	},
	{
		id: 4,
		name: 'Смартфон Xiaomi Redmi Note 11 Pro ',
		price: 138549,
		description: '8 ГБ/128 ГБ серый',
		rating: 10,
		url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
		category: 'phone',
		numofLikes:0,
	},
	{
		id: 5,
		name: 'Смартфон Samsung Galaxy A13 ',
		price:88794,
		description: "4 ГБ/128 ГБ голубой",
		rating: 3,
		url: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hb5/49613818069022/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg",
		category: 'phone',
		numofLikes:0,
	},
	{
		id: 6,
		name: 'Платье DOLOWEAR DOLO-DRES-Blc-2 ',
		price: 4599,
		description: "черный 46",
		rating: 5,
		url: "https://kaspi.kz/shop/p/dolowear-dolo-dres-blc-2-chernyi-46-108212152/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/hb2/67275634212894/dolowear-dolo-dres-blc-48-2-chernyi-48-l-chernyi-108212130-1.jpg",
		category: 'Dress',
		numofLikes:0,
	},
	{
		id: 7,
		name: 'Платье Alfasa SHBL1005 голубое стандарт',
		price: 6490,
		description: "blue dress",
		rating: 5,
		url: "https://kaspi.kz/shop/p/alfasa-shbl1005-goluboe-standart-105495290/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/hfe/52104505360414/alfasa-shbl1005-105620290-1jpg.jpg",
		category: 'Dress',
		numofLikes:0,
	},
	{
		id: 8,
		name: 'Платье SofiCo SM2231-3 ',
		price: 12000,
		description: "черный 42",
		rating: 8,
		url: "https://kaspi.kz/shop/p/sofico-sm2231-3-chernyi-42-105819435/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h23/61778246533150/sofico-sm2231-3-106102952-1jpg.jpg",
		category: 'Dress',
		numofLikes:0,
	},
	{
		id: 9,
		name: "Платье PDWR Comfort 22005 ",
		price: 57999,
		description: "черное L",
		rating: 3,
		url: "https://kaspi.kz/shop/p/pdwr-comfort-22005-chernoe-l-101563195/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h4e/50291975454750/pdwr-comfort-22005-104609669-1JPEG.jpg",
		category: 'Dress',
		numofLikes:0,
	},
	{
		id: 10,
		name: "Платье Амадэль Кармелита акварель 3601 50",
		price: 184890,
		description: "black dress",
		rating: 6,
		url: "https://kaspi.kz/shop/p/amadel-karmelita-akvarel-3601-50-102172667/?c=195253200&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIvxHajfSfFM-0xaEY78g5fBWsNsRBBmZv9gqgT6KjoZBtTvzhzR3oxoC2toQAvD_BwE#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/hb4/51443020791838/amadel-karmelita-akvarel-3601-104268713-1.jpg",
		category: 'Dress',
		numofLikes:0,
	},
	{
		id: 11,
		name: "Кроссовки Stay Tory 8452 ",
		price: 18480,
		description: "белый 37",
		rating: 2,
		url: "https://kaspi.kz/shop/p/stay-tory-8452-belyi-37-105711190/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/hae/52285729570846/fashion-8452-belyj-105711188-1.jpg",
		category: 'Shoes',
		numofLikes:0,
	},
	{
		id: 12,
		name: "Кроссовки Alina shoes.kz P10AS38 ",
		price: 15500,
		description: "белый 37",
		rating: 7,
		url: "https://kaspi.kz/shop/p/alina-shoes-kz-p10as38-belyi-37-108260173/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/hce/67409158406174/alina-shoes-kz-p10as38-belyi-108260161-1.jpg",
		category: 'Shoes',
		numofLikes:0,
	},
	{
		id: 13,
		name: "Кроссовки Alina shoes.kz M-01AS88 ",
		price: 13900,
		description: "бежевый, желтый, синий 36",
		rating: 5,
		url: "https://kaspi.kz/shop/p/alina-shoes-kz-m-01as88-bezhevyi-zheltyi-sinii-36-108260068/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h4e/67405792215070/alina-shoes-kz-m-01as88-bezhevyi-zheltyi-sinii-108260063-1.jpg",
		category: 'Shoes',
		numofLikes:0,
	},
	{
		id: 14,
		name: "DJ контроллер Pioneer DJ DDJ-REV1",
		price: 184890,
		description: "2-канальный DJ-контроллер",
		rating: 6,
		url: "https://kaspi.kz/shop/p/dian-d82-belyi-36-108631996/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h68/68346929315870/dian-d82-belyi-108631957-1.jpg",
		category: 'Shoes',
		numofLikes:0,
	},
	{
		id: 15,
		name: "Кроссовки DIAN D82",
		price:9800,
		description: " белый 36",
		rating: 33,
		url: "https://kaspi.kz/shop/p/dd-oo-86as95-belyi-chernyi-37-108550749/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/h05/68143068119070/dd-oo-86as95-belyi-chernyi-108550748-1.jpg",
		category: 'Shoes',
		numofLikes:0,
	},
	{
		id: 16,
		name: "Кольцо Kol регулируемый бижутерный сплав, цирконий",
		price: 2503,
		description: "вид изделия: кольцо ,материал: бижутерный сплав,вставка: цирконий",
		rating: 6,
		url: "https://kaspi.kz/shop/p/kol-reguliruemyi-bizhuternyi-splav-tsirkonii-107579372/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h0d/65755017412638/kol-reguliruemyi-bizhuternyi-splav-tsirkonii-107579372-1.jpg",
		category: 'Jewllery',
		numofLikes:0,
	},
	{
		id: 17,
		name: "Комплект ВТК UKR-3 18 9.6 г серебро, ",
		price: 20855,
		description: "золото, фианит",
		rating: 11,
		url: "https://kaspi.kz/shop/p/vtk-ukr-3-18-9-6-g-serebro-zoloto-fianit-106120933/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/h47/67261692117022/vtk-ukr-3-18-9-6-g-serebro-zoloto-fianit-106120933-1.jpg",
		category: 'Jewllery',
		numofLikes:0,
	},
	{
		id: 18,
		name: "Zere подвеска Древо жизни 01-13-32 ",
		price: 89000,
		description: "3.4 г золото, фианит",
		rating: 8,
		url: "https://kaspi.kz/shop/p/zere-podveska-drevo-zhizni-01-13-32-3-4-g-zoloto-fianit-104950688/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hff/50925196869662/podveska-zere-zoloto-3-45-104950688-1.jpg",
		category: 'Jewllery',
		numofLikes:0,
	},
	{
		id: 19,
		name: "Янтарь России бусы 5110288 ",
		price:2000,
		description: "45 см натуральный янтарь, янтарь",
		rating: 6,
		url: "https://kaspi.kz/shop/p/jantar-rossii-busy-5110288-45-sm-natural-nyi-jantar-jantar--102252344/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/h5b/45377520730142/antar-rossii-5110288-45sm-antar-102252344-1-Container.jpg",
		category: 'Jewllery',
		numofLikes:0,
	},
	{
		id: 20,
		name: "Комплект Premium jewellery",
		price: 2914,
		description: " T1019 бижутерный сплав, цирконий",
		rating: 10,
		url: "https://kaspi.kz/shop/p/premium-jewellery-t1019-bizhuternyi-splav-tsirkonii-104267718/?c=195253200#!/item",
		image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/hea/49645178617886/premium-jewellery-t1019-bizuternyj-splav-cirkonij-104267718-1.jpg",
		category: 'Jewllery',
		numofLikes:0,
	},

];