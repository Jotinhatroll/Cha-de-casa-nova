(() => {
  const productCatalog = [
  {
    "name": "Jogo De Jarra 1100ml Diamond + 4 ou 6 Taças 340ml Diamond Suco Agua Transparente Luxo",
    "url": "https://s.shopee.com.br/1LgZ4EuNde?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-820nr-mnq4xcnhdg5if8",
    "category": "Mesa e servir"
  },
  {
    "name": "Jogo De Assadeira Forma de Bolo Retangular  Com 3 Peças - Padrão Tabuleiro Forma Para Biscoito, Forma de Rocombole",
    "url": "https://s.shopee.com.br/3B8DFgymr5?share_channel_code=1",
    "image": "https://a-static.mlcdn.com.br/420x420/jogo-3-formas-retangular-antiaderente-teflon-assadeira-bolo-lasanha-pao-cuca-alta-grande-media-torta-mokfa-import/megscomercialltda/mk469kit3/98a5b4d506d076416b5b9ee6780c59d5.jpeg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Kit 3 Formas com Fundo Removível Antiaderente com Fundo Removível para torta Bolo",
    "url": "https://s.shopee.com.br/7facbyymWE?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-823pn-mold8pxs5825fa",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Frigideira 24cm/28cm Antiaderente De Alumínio Revestimento Cerâmico Premium Funda Cabo Madeira Não Gruda",
    "url": "https://s.shopee.com.br/80DMrx0kRU?share_channel_code=1",
    "image": "https://www.havan.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/f/r/frigideira-antiaderente-cinza-norma-fracalanza-_1054995.jpg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Kit Colcha Cobre Leito Bouti Casal Dupla Face com Viés",
    "url": "https://s.shopee.com.br/60SITY0HJ5?share_channel_code=1",
    "image": "https://images.yampi.me/assets/stores/lindacasa/uploads/images/kit-cobre-leito-colcha-king-3-pecas-boutis-estampada-dupla-face-porta-travesseiro-aba-americana-cartagena-areia-62b5b4eaf1c16-large.jpg",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Conjunto Assadeira Marinex 1576 com Tampa Cinza 6 Peças",
    "url": "https://s.shopee.com.br/W7LvHC7nw?share_channel_code=1",
    "image": "https://imgs.via.com.br/special-contents/24d4e498-42c0-4175-af5e-6de61b562f3c/acc47866-74a6-4328-9977-51b2a355a4e9.jpg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "KIT ESCORREDOR INOX ARROZ + MASSAS",
    "url": "https://s.shopee.com.br/7faccBKGOW?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0x0wu1att8ga1",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Centrífuga De Salada Secador Verduras  Manual 4l",
    "url": "https://s.shopee.com.br/30on3izX1f?share_channel_code=1",
    "image": "https://item-shopping.c.yimg.jp/i/n/aquadoor_wy2058",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Boleira de Vidro com Tampa Transparente Redonda para Bolos Tortas e Doces",
    "url": "https://s.shopee.com.br/80DT0wxQRH?share_channel_code=1",
    "image": "https://balashovbrasil.com.br/cdn/shop/files/boleira-de-vidro-com-pe-4.jpg?v=1743032464&width=1090",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Kit Utensílios Ralador 4 Faces Amassador Batata Amassador Alho Descascador de Legumes em Aço Inox",
    "url": "https://s.shopee.com.br/5AtHdq5rDg?share_channel_code=1",
    "image": "https://a-static.mlcdn.com.br/800x800/kit-amassador-de-batata-descascador-legumes-esmagador-e-ralador-4-faces-para-cozinha-aco-inox-sq/rytweb2/kit-alho-batata-descasca-ralador/87cfe5992dfe3434d98fefc65472ab58.jpeg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Jogo 6 Canecas Café Chá Ryo Maresia 260ml Oxford Porcelanas",
    "url": "https://s.shopee.com.br/9V2Go9xw0Q?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2tls75oa8yd86",
    "category": "Mesa e servir"
  },
  {
    "name": "Kit 2 Jarras De Vidro 1 Litro Com Tampa Suco Água Geladeira Transparente",
    "url": "https://s.shopee.com.br/7VHCQYm00C?share_channel_code=1",
    "image": "https://d10aktedg4flw1.cloudfront.net/offers/images/01K5C3WCJX6TFQWR9FVCWCHBVJ/01K5C3WCJYXKQ8G462WYTPDPB0.png",
    "category": "Mesa e servir"
  },
  {
    "name": "Jarra Vidro Canelada 1.4 Litros Tampa Inox Suco Chá Água Gelada Mesa  Presente Cozinha Luxo",
    "url": "https://s.shopee.com.br/5q8yRXDXB8?share_channel_code=1",
    "image": "https://static.mobly.com.br/p/Modern-Jarra-Twinkle-Canelada-com-Tampa-em-AC3A7o-12C4L-0844-6725431-1.jpg",
    "category": "Mesa e servir"
  },
  {
    "name": "Mixer 3 em 1 Elgin Turbo Chef 200W Preto Mixer de Mão com Triturador e Batedor 3 peças",
    "url": "https://s.shopee.com.br/2gBwfowQrY?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820l4-mozjfbokly4lad",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Jogo Toalha de Banho 4 Peças 100% Algodão Grossa Felpuda Super Macia Excelente Absorção New Premier Habitat",
    "url": "https://s.shopee.com.br/1BN8uT6b2D?share_channel_code=1",
    "image": "https://product-hub-prd.madeiramadeira.com.br/554957474/images/662f0f22-24d2-4bc2-bf33-7b4ef43af90fetoalhasmaster4pecasbranca.jpg",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Jogo De Toalha 4 Pçs Banho Rosto 100% Algodão Macia Felpuda Excelente Absorção Brisa Habitat",
    "url": "https://s.shopee.com.br/W7S7I3WXS?share_channel_code=1",
    "image": "https://http2.mlstatic.com/D_NQ_NP_822544-MLB108239262812_032026-O-jogo-de-toalhas-banho-gigante-algodo-4-pecas-grossas-macias.webp",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Jogo De Cama 600 Fios 100% Algodão Queen 3 Peças",
    "url": "https://meli.la/1bEtLfF",
    "image": "https://http2.mlstatic.com/D_NQ_NP_737683-MLB86468614747_062025-O-jogo-de-cama-600-fios-100-algodo-queen-3-pecas.webp",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Jogo De Cama Lençol Casal 3pç C/ 2 Fronha 100% Algodão Malha",
    "url": "https://meli.la/2suqhtu",
    "image": "https://acdn-us.mitiendanube.com/stores/002/860/780/products/29-8fd434decf8faf83f917582200180911-640-0.webp",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Edredom Sherpa Coberdrom Casal Queen Cobertor Grande Grosso Cor Azul-marinho Desenho Do Tecido Liso LuckBaby",
    "url": "https://meli.la/18AAaMV",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhgldd4h7ztpba",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Cobre Leito Casal Microfibra Verona 150 Fios com 2 Porta-Travesseiros",
    "url": "https://meli.la/1nU7nFv",
    "image": "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/livorno_azul_2025_1_20250729__g.jpg",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Jogo De Panelas Antiaderentes 10 Peças Baunilha Nacional",
    "url": "https://meli.la/1hZDeg2",
    "image": "https://a-static.mlcdn.com.br/800x800/jogo-de-panelas-antiaderente-ceramica-cooktop-fogao-inducao-kit-10-pecas-conjunto-marmol-mimo-style/magazinegeraiscomercio/ut1900-1/b28af03f406a1c7f9df412d2334d3722.jpeg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Panela De Pressão 4,5l Tramontina Vancouver Effect 20591-720 Cor Vermelho",
    "url": "https://meli.la/1EM8eoc",
    "image": "https://cdn.awsli.com.br/2500x2500/1354/1354913/produto/18043095077e544c3a2.jpg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Conjunto Panelas Francesas Genebra 12 Peças Inox E Vidro Prata/vidro",
    "url": "https://meli.la/2uQTmfb",
    "image": "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/jogo-panela-galya-12-pecas/olistplus/opmgr89nqd86yb7c/8cb57fe2c14e017ec446bd3f51ecbe66.jpeg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Panela de Pressão 4,5L Alumínio Globo Cinza 22cm Alças Silicone",
    "url": "https://meli.la/1ZzFCRr",
    "image": "https://goiasatacado.agilecdn.com.br/23166_1.jpg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Jogo Talheres Faqueiro Tramontina Aço Inox 24 Peças Buzios I",
    "url": "https://meli.la/2Las9Hm",
    "image": "https://cdn.awsli.com.br/800x800/2657/2657296/produto/264025117/faqueiro-talheres-inox-24pc-buzios-tramontina-23799075-0b4ec967-nwwb3i3dc3.jpg",
    "category": "Mesa e servir"
  },
  {
    "name": "Faqueiro 20 Peças Leme Preto Tramontina",
    "url": "https://meli.la/1qfu2ko",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsaj16w0xk4k75",
    "category": "Mesa e servir"
  },
  {
    "name": "Kit 6 Copos Oca Nadir 300ml Vidro para Água e Suco",
    "url": "https://meli.la/1bUfWQ9",
    "image": "https://down-br.img.susercontent.com/file/br-11134201-23010-1qw9k10jt7lv5d",
    "category": "Mesa e servir"
  },
  {
    "name": "Jogo 6 Copos 300ML Grande Vidro Grosso Diamond Resistente Transparente Kit para Drink Água Suco Restaurante Diamante Sólar",
    "url": "https://meli.la/1aXzrEk",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lf-mn4lmh4ow0sg4a",
    "category": "Mesa e servir"
  },
  {
    "name": "Conjunto 6 Xic Pires Ryo Maresia Off White Marrom 220ml Oxford",
    "url": "https://meli.la/1pn8QPx",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rbmi-lm6f2kvnck0p4f",
    "category": "Mesa e servir"
  },
  {
    "name": "Jogo Facas Tramontina Kit Conjunto Faca Cozinha Churrasco 4p",
    "url": "https://meli.la/1SBCSmq",
    "image": "https://lumienergy.cdn.magazord.com.br/img/2025/04/produto/49582/jogo-de-facas-e-chaira-4-pecas-tramontina-24699825-branco-3.jpg?ims=650x650",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Jogo De Facas Faqueiro 9 Peças Plenus Aço Inox Tramontina",
    "url": "https://meli.la/1Z9E1Rg",
    "image": "https://assets.tramontina.com.br/upload/tramon/imagens/CUT/23498048EBM001G.jpg",
    "category": "Mesa e servir"
  },
  {
    "name": "Kit 5 Panos De Copa Atoalhado Felpudo 100% Algodão Colorido",
    "url": "https://meli.la/1Ztte5g",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-821f9-mgwde0d4nea282",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Kit 6 Jogo Americano Redondo Sousplat Supla Mesa Posta 39cm",
    "url": "https://meli.la/1igNuPF",
    "image": "https://cdn.awsli.com.br/2500x2500/2589/2589926/produto/371341265/202509151122155889fotos_4_-_2025-09-15t112117-412-q9ilalse3y.png",
    "category": "Mesa e servir"
  },
  {
    "name": "Jogo Kit 4 Utensílios Cozinha Inox Colher Escumadeira Concha Prateado",
    "url": "https://meli.la/1AH8YWg",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-maixjlxin6hb46",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Kit Conjunto 19 Pçs De Utensílios Facas Silicone e Plástico Cozinha Jogo Completo Batedeira Colher Pegador",
    "url": "https://s.shopee.com.br/AAHxfIcV9l?share_channel_code=1",
    "image": "https://a-static.mlcdn.com.br/800x800/conjunto-de-19-pcs-de-cozinha-em-silicone-com-cabo-em-madeira-kit-completo-de-utensilios-kit-19-pecas-utensilios/4irmaoscomercio/kitutensilioefaca6-preto/289df2f42a906b71db4ed697822f3a59.jpeg",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Conjunto Bowls de Inox Electrolux com Tampa Plástica 3 Peças",
    "url": "https://s.shopee.com.br/5q8yVMaaft?share_channel_code=1",
    "image": "https://cdn.awsli.com.br/2500x2500/1156/1156320/produto/372368547/bowls-3-a060lkhdy7.jpg",
    "category": "Organização e utilidades"
  },
  {
    "name": "Kit Potes Herméticos Porta Mantimentos Acrílico Empilháveis Quadrado Resistente Cozinha Dispensa",
    "url": "https://s.shopee.com.br/2BFg8e1HAC?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rdxt-m0x7wk85hjb34e",
    "category": "Organização e utilidades"
  },
  {
    "name": "Kit 5/ kit 10 Potes de Vidro 640ml Hermético Marmita Fit com Tampa 4 Travas Oliver Home",
    "url": "https://s.shopee.com.br/9060HGMW38?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81zue-mkwi06jt0bnme3",
    "category": "Organização e utilidades"
  },
  {
    "name": "Kit 2 Tabua de Carne Churrasco Corte Legumes Frutas Antibacteriana Geométrico",
    "url": "https://meli.la/2fXJtH6",
    "image": "https://eg.raazz.store/cdn/shop/files/WhatsAppImage2025-07-01at3.22.56AM_2.jpg?v=1751474167&width=3840",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Jogo De Toalha Banho 4 peças 100 Algodão 400 gr/m Loft Camesa",
    "url": "https://meli.la/1rrfMsg",
    "image": "https://http2.mlstatic.com/D_NQ_NP_955466-MLU73885434399_012024-O.webp",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Kit Tapetes De Cozinha Rústico 3 Peças Jogo Listrado 100% Algodão Natural Lavável Decorativo",
    "url": "https://meli.la/18mWLJY",
    "image": "https://images.yampi.me/assets/stores/crochevitoria/uploads/images/jogo-passadeira-de-tear-3-pecas-austria-cru-com-chumbo-68b83fad1ffd9-large.png",
    "category": "Cama, mesa e banho"
  },
  {
    "name": "Aspirador De Pó e Água Wap Gtw 10 Compacto 1400w 10 Litros Amarelo",
    "url": "https://meli.la/2Xnpqby",
    "image": "https://product-hub-prd.madeiramadeira.com.br/688762/images/89855295-3579-4620-9094-9e04033c6a0e10wap220v1630585977200zoom.jpg",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Aparelho de Jantar Tramontina Floralis Porcelana 20 peças",
    "url": "https://meli.la/2ixcQ34",
    "image": "https://73035.cdn.simplo7.net/static/73035/sku/12520019543.jpg",
    "category": "Mesa e servir"
  },
  {
    "name": "Pote Hermético 1,5L Porta Pão Bolo Organizador Cozinha Alimento mais Fofo Fresco Compacto e Empilhavel",
    "url": "https://s.shopee.com.br/W7SAQm8ux?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m13a5xzxsufy83",
    "category": "Organização e utilidades"
  },
  {
    "name": "haosin Kit 3 Potes Herméticos Organizadores de Geladeira – 6.2L + 3L + 1.15L p/ Alimentos e Vegetais",
    "url": "https://s.shopee.com.br/7pu2tyW0yZ?share_channel_code=1",
    "image": "https://s.500fd.com/tt_product/33a616b3bb1447f1b71afdf5a4a24c43~tplv-aphluv4xwc-resize-jpeg%3A800%3A800.jpeg",
    "category": "Organização e utilidades"
  },
  {
    "name": "Conjunto de Assadeiras Retangular Nadir Sempre em Vidro 2 Peças",
    "url": "https://s.shopee.com.br/4fx18e4wY7?share_channel_code=1",
    "image": "https://carrefourbrfood.vtexassets.com/arquivos/ids/213152389/assadeira-de-vidro-sempre-1512-2.jpg?v=639078143508530000",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Formas de Pudim Nº 18, 20 e 22 BoloTubo/Cone Aluminio Bolo Vulcão Suiço com furo",
    "url": "https://s.shopee.com.br/4LKAk41DAS?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lswxrfotvwnhd6",
    "category": "Cozinha e preparo"
  },
  {
    "name": "Capa Protetora Para Maquina de Lavar Roupas Zíper Preta Flanelada Brastemp Electrolux Consul",
    "url": "https://s.shopee.com.br/20wFxp05F5?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5kf5ntpe3io82",
    "category": "Organização e utilidades"
  },
  {
    "name": "Organizador de Armário de Cozinha kit com 5 Organizadores",
    "url": "https://s.shopee.com.br/9pf7IOA9Rj?share_channel_code=1",
    "image": "https://a-static.mlcdn.com.br/800x560/kit-organizador-cozinha-aramado-prateleiras-aco-luxo-5un-dicarlo/brunojoinha/kit3g2m1pt/d0a0e4188bb586c2594bf6928a4a70d9.jpeg",
    "category": "Organização e utilidades"
  },
  {
    "name": "Jogo De Copos 6 Peças De Vidro Cameratta Canelado 420ml Suco Agua",
    "url": "https://s.shopee.com.br/qkIZuP86U?share_channel_code=1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mk2isun5sglfab",
    "category": "Mesa e servir"
  },
  {
    "name": "Liquidificador Oster Oliq520 Preto de 1,8L 1250W Jarra De Vidro e Laminas em Inox",
    "url": "https://meli.la/1qFC2uS",
    "image": "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/74/1074873_liquidificador-oster-oliq520-22l-jarra-de-vidro-10-velocidades-pulsar-1250w-10011756_m63_639124721685938650.webp",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Batedeira Planetária Philco 900W 5L Preta 12 Velocidades Turbo PBP90A",
    "url": "https://meli.la/2wD9qhw",
    "image": "https://casaspernambucanas.vtexassets.com/unsafe/1440x0/center/middle/https%3A%2F%2Fcasaspernambucanas.vtexassets.com%2Farquivos%2Fids%2F2260230%2F423763.jpg%3Fv%3D638987501515000000",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Cafeteira Elétrica Dolce Arome Digital, Mondial, 800W - C-44-32X-SDI",
    "url": "https://meli.la/28qKStC",
    "image": "https://a-static.mlcdn.com.br/1500x1500/cafeteira-eletrica-mondial-dolce-arome-digital/magazineluiza/236674000/42a6f6ac7afbb10b574df99e069dd544.jpg",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Kit Para Churrasco Tramontina Plenus com 3 Peças",
    "url": "https://meli.la/2UqBuy2",
    "image": "https://images.tcdn.com.br/img/img_prod/1292607/kit_churrasco_tramontina_plenus_inox_e_cabo_marrom_3_pcs_23498449_9657_1_fefb3e2faee2325bf5cb2439378c8ae6.jpg",
    "category": "Churrasco e área gourmet"
  },
  {
    "name": "Grill Sanduicheira Cadence SAN400 Elétrica",
    "url": "https://meli.la/2faujD2",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcb11oza988b71",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Ferro a Vapor Philips Walita Série 2000 DST2020/32 1400W Lilás 127V",
    "url": "https://meli.la/1B3dhm5",
    "image": "https://walitastore.vtexassets.com/arquivos/ids/162215/DST2020_4.png.png?v=638804265573230000",
    "category": "Eletrodomésticos"
  }
];
  const groupsRoot = document.querySelector('[data-gift-groups]');

  function createProductCard(product, number) {
    const card = document.createElement('article');
    card.className = 'gift-card';
    const link = document.createElement('a');
    link.className = 'gift-product-link';
    link.href = product.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Ver produto: ' + product.name);

    const photo = document.createElement('span');
    photo.className = 'gift-photo';
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    image.addEventListener('error', () => {
      photo.classList.add('image-unavailable');
      image.remove();
    }, { once: true });
    const missing = document.createElement('span');
    missing.className = 'photo-missing';
    missing.setAttribute('aria-hidden', 'true');
    missing.textContent = 'Foto indisponível';
    photo.append(image, missing);

    const info = document.createElement('span');
    info.className = 'gift-card-info';
    const numberLabel = document.createElement('span');
    numberLabel.className = 'gift-number';
    numberLabel.textContent = String(number).padStart(2, '0');
    const title = document.createElement('span');
    title.className = 'gift-title';
    title.textContent = product.name;
    info.append(numberLabel, title);
    link.append(photo, info);

    const actions = document.createElement('div');
    actions.className = 'gift-actions';
    const buyLink = document.createElement('a');
    buyLink.className = 'gift-buy-link';
    buyLink.href = product.url;
    buyLink.target = '_blank';
    buyLink.rel = 'noopener noreferrer';
    buyLink.textContent = 'Comprar na loja ↗';
    const pixButton = document.createElement('button');
    pixButton.className = 'gift-pix-button';
    pixButton.type = 'button';
    pixButton.dataset.pixGift = product.name;
    pixButton.textContent = 'Pix + WhatsApp';
    actions.append(buyLink, pixButton);
    card.append(link, actions);
    return card;
  }

  if (groupsRoot) {
    const categoryFor = product => {
      const name = product.name.toLocaleLowerCase('pt-BR');
      if (product.category === 'Eletrodomésticos') return 'Eletrodomésticos';
      if (/panelas?|frigideiras?/.test(name)) return 'Panelas e frigideiras';
      if (/potes?|porta mantimentos|organizadores de geladeira/.test(name)) return 'Potes e organização';
      if (/churrasco|tábua de carne/.test(name)) return 'Churrasco e área gourmet';
      if (/faqueiro|talheres|jogo de facas|jogo facas|utensílios facas|escumadeira|concha/.test(name)) return 'Talheres, facas e utensílios';
      if (/copos|taças|canecas|xic|jarra|aparelho de jantar|boleira|bowls|jogo americano/.test(name)) return 'Mesa posta, copos e pratos';
      return product.category;
    };
    const order = ['Eletrodomésticos', 'Panelas e frigideiras', 'Cozinha e preparo', 'Talheres, facas e utensílios', 'Mesa posta, copos e pratos', 'Potes e organização', 'Churrasco e área gourmet', 'Cama, mesa e banho', 'Organização e utilidades'];
    const applianceOrder = ["Liquidificador Oster Oliq520 Preto de 1,8L 1250W Jarra De Vidro e Laminas em Inox","Batedeira Planetária Philco 900W 5L Preta 12 Velocidades Turbo PBP90A","Cafeteira Elétrica Dolce Arome Digital, Mondial, 800W - C-44-32X-SDI","Grill Sanduicheira Cadence SAN400 Elétrica","Mixer 3 em 1 Elgin Turbo Chef 200W Preto Mixer de Mão com Triturador e Batedor 3 peças","Aspirador De Pó e Água Wap Gtw 10 Compacto 1400w 10 Litros Amarelo","Ferro a Vapor Philips Walita Série 2000 DST2020/32 1400W Lilás 127V"];
    const tablewareOrder = [
      "Jogo De Jarra 1100ml Diamond + 4 ou 6 Taças 340ml Diamond Suco Agua Transparente Luxo",
      "Kit 6 Copos Oca Nadir 300ml Vidro para Água e Suco",
      "Jogo 6 Copos 300ML Grande Vidro Grosso Diamond Resistente Transparente Kit para Drink Água Suco Restaurante Diamante Sólar",
      "Jogo De Copos 6 Peças De Vidro Cameratta Canelado 420ml Suco Agua",
      "Jogo 6 Canecas Café Chá Ryo Maresia 260ml Oxford Porcelanas",
      "Conjunto 6 Xic Pires Ryo Maresia Off White Marrom 220ml Oxford",
      "Aparelho de Jantar Tramontina Floralis Porcelana 20 peças",
      "Conjunto Bowls de Inox Electrolux com Tampa Plástica 3 Peças",
      "Kit 6 Jogo Americano Redondo Sousplat Supla Mesa Posta 39cm",
      "Boleira de Vidro com Tampa Transparente Redonda para Bolos Tortas e Doces",
      "Kit 2 Jarras De Vidro 1 Litro Com Tampa Suco Água Geladeira Transparente",
      "Jarra Vidro Canelada 1.4 Litros Tampa Inox Suco Chá Água Gelada Mesa  Presente Cozinha Luxo"
    ];
    let number = 1;

    order.forEach(category => {
      let products = productCatalog.filter(product => categoryFor(product) === category);
      if (category === 'Eletrodomésticos') {
        products = products.sort((a, b) => applianceOrder.indexOf(a.name) - applianceOrder.indexOf(b.name));
      }
      if (category === 'Mesa posta, copos e pratos') {
        products = products.sort((a, b) => tablewareOrder.indexOf(a.name) - tablewareOrder.indexOf(b.name));
      }
      if (!products.length) return;

      const section = document.createElement('section');
      section.className = 'gift-group';
      section.setAttribute('aria-label', category);
      const heading = document.createElement('h3');
      heading.className = 'gift-group-title';
      heading.append(document.createTextNode(category + ' '));
      const count = document.createElement('span');
      count.textContent = products.length + (products.length === 1 ? ' item' : ' itens');
      heading.append(count);

      const grid = document.createElement('div');
      grid.className = 'gift-grid';
      products.forEach(product => grid.append(createProductCard(product, number++)));
      section.append(heading, grid);
      groupsRoot.append(section);
    });
  }

  const pixKey = '16981492681';
  const whatsappNumber = '5516981492681';
  const pixDialog = document.querySelector('[data-pix-dialog]');
  const pixFeedback = document.querySelector('[data-pix-feedback]');
  let selectedPixGift = '';

  document.addEventListener('click', async event => {
    const pixButton = event.target.closest('[data-pix-gift]');
    if (pixButton) {
      selectedPixGift = pixButton.dataset.pixGift;
      document.querySelector('[data-pix-gift-name]').textContent = selectedPixGift;
      document.querySelector('[data-pix-name]').value = '';
      document.querySelector('[data-pix-amount]').value = '';
      pixFeedback.textContent = '';
      pixDialog.showModal();
      return;
    }

    if (event.target.closest('[data-pix-close]')) pixDialog.close();

    if (event.target.closest('[data-copy-pix]')) {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(pixKey);
        } else {
          const field = document.createElement('textarea');
          field.value = pixKey;
          field.setAttribute('readonly', '');
          field.style.position = 'fixed';
          field.style.opacity = '0';
          document.body.append(field);
          field.select();
          const copied = document.execCommand('copy');
          field.remove();
          if (!copied) throw new Error('copy failed');
        }
        pixFeedback.textContent = 'Chave Pix copiada. Abra o app do seu banco para fazer a transferência.';
      } catch {
        pixFeedback.textContent = 'Não foi possível copiar. Selecione a chave Pix e copie manualmente.';
      }
    }
  });

  pixDialog.addEventListener('click', event => {
    if (event.target === pixDialog) pixDialog.close();
  });

  document.querySelector('[data-pix-form]').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('[data-pix-name]').value.trim();
    const amount = document.querySelector('[data-pix-amount]').value;
    if (!name) {
      pixFeedback.textContent = 'Informe seu nome para enviar a confirmação.';
      document.querySelector('[data-pix-name]').focus();
      return;
    }
    const amountLine = amount ? `\nValor transferido: R$ ${Number(amount).toFixed(2).replace('.', ',')}` : '';
    const message = `Olá, Hellen e Jean! Fiz um Pix para o presente: ${selectedPixGift}.${amountLine}\nMeu nome: ${name}. Por favor, atualizem a lista de presentes e confirmem o recebimento. ❤️`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    pixDialog.close();
  });

  const addressButton = document.querySelector('[data-copy-address]');
  const addressFeedback = document.querySelector('[data-address-feedback]');
  const deliveryAddress = 'Rua Bastilha, Qd. 47, Lt. 15\nCampos Elísios\nCEP: 74959-042\nReferência: portão preto, muro cinza.';

  addressButton.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(deliveryAddress);
      } else {
        const field = document.createElement('textarea');
        field.value = deliveryAddress;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.append(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('copy failed');
      }
      addressFeedback.textContent = 'Endereço copiado.';
    } catch {
      addressFeedback.textContent = 'Não foi possível copiar. Selecione o endereço acima.';
    }
  });

  const shareButton = document.querySelector('[data-share]');
  const feedback = document.querySelector('[data-share-feedback]');
  if (!shareButton || !feedback) return;

  async function copyInviteLink() {
    const url = window.location.href;
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      return;
    }
    const field = document.createElement('textarea');
    field.value = url;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) throw new Error('Não foi possível copiar o link.');
  }

  shareButton.addEventListener('click', async () => {
    feedback.textContent = '';
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: 'Você está convidado para o chá de casa nova de Hellen e Jean!',
          url: window.location.href
        });
        feedback.textContent = 'Convite compartilhado.';
      } else {
        await copyInviteLink();
        feedback.textContent = 'Link do convite copiado.';
      }
    } catch (error) {
      if (error && error.name === 'AbortError') return;
      feedback.textContent = 'Não foi possível compartilhar agora. Copie o endereço da página.';
    }
  });
})();
