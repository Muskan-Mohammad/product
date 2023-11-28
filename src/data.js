const data = [
{
    id:'1',
    hashtag:'#GETTHISLOOK',
    type:'instagram',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1089221593/preview/stock-footage-portrait-adult-beautiful-blonde-girl-princess-sitting-on-windowsill-young-woman-enjoys-view-large.webm',
    image:'https://petalandpup.com.au/cdn/shop/files/petal-and-pup-au-dresses-soliel-puff-sleeve-midi-dress-tan-black-32526337310831_540x.jpg?v=1694484743',
    name:'SOLIEL PUFF SLEEVE MIDI DRESS - TAN BLACK',
    code:'XYZ2023',
    money:'$50',
    mode:'casual'
},
{
    id:'2',
    hashtag:'#STYLEUP',
    type:'youtube',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1063852420/preview/stock-footage-beautiful-woman-wear-earrings-jewelry.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18481330/2022/5/29/812475b2-94c4-489a-93cb-acba925ecf081653810166907UnwindbyYellowChimesWhiteContemporaryJhumkasEarrings1.jpg',
    name:'Unwind by Yellow Chimes',
    code:'XON2023',
    money:'$80',
    mode:'casual'
},
{
    id:'3',
    hashtag:'#HIGHLIGHT',
    type:'instagram',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1093832593/preview/stock-footage-attractive-middle-aged-woman-walking-down-the-street-and-looking-ahead-happy-relaxed-lady-walking.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2110558/2018/4/13/11523617167748-Vishudh-Women-Black--Gold-Toned-Printed-Straight-Kurta-9041523617167566-1.jpg',
    name:'Yoke Design Straight Kurta',
    code:'KYZ2023',
    money:'$90',
    mode:'festive'
},
{
    id:'4',
    hashtag:'#YOUGLAM',
    type:'youtube',
    vedio:'https://www.shutterstock.com/shutterstock/videos/29064202/preview/stock-footage-the-young-woman-puts-on-beautiful-earrings.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16665110/2022/1/3/f3252274-e12f-43a0-b420-88930d7daeb11641208806311OxidisedHeavyKundanBeadsDanglerHoopChandbaliEarring1.jpg',
    name:'Silver-Toned Kundan Beads Dangler Hoop Chandbali Earring',
    code:'VNB2023',
    money:'$70',
    mode:'festive'
},
{
    id:'5',
    hashtag:'#NOMAKEWAY',
    type:'instagram',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1046995819/preview/stock-footage-glamorous-fashion-model-posing-in-a-maxi-dress.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17171788/2022/3/2/79806943-5b90-485c-920b-1b6371e682b21646218466371-QUIERO-Women-Dresses-1441646218465761-1.jpg',
    name:'Women Classic Peach Checked Summer Gingham Dress',
    code:'WES2023',
    money:'$50',
    mode:'occassion'
},
{
    id:'6',
    hashtag:'#STYLEGOWN',
    type:'youtube',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1061770642/preview/stock-footage-beautiful-curly-brunette-woman-wearing-pearl-necklaces-happy-smiling-fashionable-lady-posing-in.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11900578/2020/6/2/6a2119ec-aaaf-4fae-aa6b-dc0901faef001591093489268ShiningDivaBlackGold-TonedContemporaryDropEarrings1.jpg',
    name:'Black and Gold-Plated Contemporary Drop Earrings',
    code:'BKL2023',
    money:'$80',
    mode:'occassion'
},
{
    id:'7',
    hashtag:'#ROCKSTORE',
    type:'instagram',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1048362712/preview/stock-footage-close-up-of-girl-in-traditional-abaya-dress-walking-barefoot-along-the-dunes-in-the-desert-of-dubai.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23354150/2023/5/23/774fd59f-0cce-4a8c-9aa5-a69f9e202c6b1684856031854FemvyBlackPuffSleeveGeorgetteMaxiDress1.jpg',
    name:'V- Neck Bishop Sleeves A-line Maxi Gown',
    code:'CVD2023',
    money:'$100',
    mode:'party'
},
{
    id:'8',
    hashtag:'#LOVESPARKLE',
    type:'youtube',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1086057572/preview/stock-footage-karachi-pakistan-asian-bride-showing-off-her-earrings-with-bokeh-background-slow.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19204362/2022/7/28/5a5467f6-fff8-4a2c-b62e-8d5a8b3c5e3a1658946735604ZaveriPearlsBlueMeenakariTraditionalButterflyJhumkiEarring1.jpg',
    name:'Blue Meenakari Traditional Butterfly Jhumki Earring',
    code:'POI2023',
    money:'$60',
    mode:'party'
},
{
    id:'9',
    hashtag:'#SHINESTAR',
    type:'instagram',
    vedio:'https://www.shutterstock.com/shutterstock/videos/1091104039/preview/stock-footage-attractive-middle-aged-woman-in-white-dress-walking-down-the-street-and-looking-ahead-happy.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25584256/2023/10/23/c7d2c3fc-38b9-43b5-99f9-bba0701636331698042421940SANSKRUTIHOMESFloralPrintedPureCottonTunicWithTrousersCo-Ord1.jpg',
    name:'Floral Printed Kaftan Pure Cotton Tunic With Trouser',
    code:'NUJ2023',
    money:'$40',
    mode:'travel'
},
{
    id:'10',
    hashtag:'#GLAMUP',
    type:'youtube',
    vedio:'https://www.shutterstock.com/shutterstock/videos/29202334/preview/stock-footage-jewelry-store-expensive-purchase-in-a-jewelry-store-gold-for-luxury-women-buying-in-jewelry-store.webm',
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17276114/2023/8/23/2233d2f4-8680-46a5-837d-c40adcede8a51692781714607-JOKER--WITCH-Yellow--Yellow-Contemporary-Studs-Earrings-7951-1.jpg',
    name:'Java Green Petal Floral Earring',
    code:'TYH2023',
    money:'$90',
    mode:'travel'
},

]

export default data;