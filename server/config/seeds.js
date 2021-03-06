const db = require('./connection');
const { User, Ticket, Product, Charity } = require('../models');

db.once('open', async () => {
    await Charity.deleteMany();

    const charities = await Charity.insertMany([
        {
            name: "St Jude Children's Research Hospital",
            website: "https://www.stjude.org",
            image: "https://www.stjude.org/content/sites/www/en_US/home/promotion/hello/charitable-gifts-for-kids/jcr:content/par-2/cnt_row_copy_copy_co/par-1/cnt_column_109669490/par-1/cnt_image.img.1200.high.jpg/1639513375113.jpg",
            logo: "https://1000logos.net/wp-content/uploads/2017/08/St.-Jude-Logo.png",
            mission: "The mission of St. Jude Children’s Research Hospital is to advance cures, and means of prevention, for pediatric catastrophic diseases through research and treatment.",
            youtube: "https://www.youtube-nocookie.com/embed/n78D5XpPv-c",
            description: "There are great research institutions, great hospitals and great charities — St. Jude Children's Research Hospital is all three."
        },
        {
            name: "Red Cross",
            website: "https://www.redcross.org/",
            image: "https://www.redcross.org/content/dam/redcross/local/holiday-hero/Sound-the-Alarm-Volunteers-2019-960x540.jpg.transform/1288/q82/feature/image.jpeg",
            logo: "https://logos-world.net/wp-content/uploads/2022/01/American-Red-Cross-Logo.png",
            mission: "Red Cross volunteers and staff work to deliver vital services – from providing relief and support to those in crisis, to helping you be prepared to respond in emergencies.",
            youtube: "https://www.youtube-nocookie.com/embed/yocyWr-wSJY",
            description: 'Your financial gift helps people affected by disasters big and small.'
        },
        {
            name: 'Doctors without Borders',
            website: "https://www.doctorswithoutborders.org/",
            image: "https://www.doctorswithoutborders.org/sites/default/files/styles/media_besides_text_666_520/public/image_base_media/2018/10/MSF245141.jpg?itok=hKLZxzjN",
            logo: "https://tukuz.com/wp-content/uploads/2019/09/medecins-sans-frontieres-doctors-without-borders-logo-vector.png",
            mission: "Doctors Without Borders brings medical humanitarian assistance to victims of conflict, natural disasters, epidemics and healthcare exclusion.",
            youtube: "https://www.youtube-nocookie.com/embed/JA4lG9bfVgM",
            description: "We are independent, impartial, and neutral. We are guided by universal medical ethics. We are committed to bearing witness. We are transparent and accountable. We are committed to diversity, equity and inclusion."
        },
        {
            name: 'Save the Children',
            website: 'https://www.savethechildren.org/',
            image: 'https://www.savethechildren.org/content/dam/usa/images/global-programs/emergency/ukraine-conflict-children-in-crisis-ch1494283-sq.jpg/_jcr_content/renditions/cq5dam.thumbnail.768.768.jpg',
            logo: "https://1000logos.net/wp-content/uploads/2020/09/Save-The-Children-logo.png",
            mission: "Through the decades, Save the Children has continued to work to save children’s lives, and that’s still what we do today.",
            youtube: "https://www.youtube-nocookie.com/embed/LoEyd6_jztc",
            description: "We work in the hardest-to-reach places, where it’s toughest to be a child."
        },
        {
            name: 'World Vision',
            website: 'https://www.worldvision.org/',
            image: 'https://www.worldvision.org/wp-content/uploads/2022/03/W322-0032-025-640x380.jpg',
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/World_Vision_logo.svg",
            mission: "We partner with children, families, and their communities to reach their full potential by tackling the causes of poverty and injustice.",
            youtube: "https://www.youtube-nocookie.com/embed/nCVWcQnDX8I",
            description: 'Our presence in nearly 100 countries enables us to quickly provide immediate support in all types of disasters and humanitarian crises—and we are committed to long-term support, staying to help children, families, and communities recover and rebuild.'
        },
        {
            name: 'Care',
            website: 'https://www.care.org/',
            image: 'https://static.dw.com/image/52138936_303.jpg',
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Care-Logo_%28cropped%29.png",
            mission: "Women are a vital part of CARE's community-based efforts to improve basic education, increase access to quality health care and expand economic opportunity for all.",
            youtube: "https://www.youtube-nocookie.com/embed/NRbQW969Bc0",
            description: 'People are facing desperate, life-threatening situations around the world along with the impact of COVID-19. Help us send CARE Packages to meet their needs.'
        },
        {
            name: 'The Marine Mammal Center',
            website: 'https://www.marinemammalcenter.org/',
            image: 'https://www.marinemammalcenter.org/storage/app/uploads/public/6ce/836/80e/thumb__407_318_0_0_crop.jpg',
            logo: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Marine_Mammal_Center_logo.png",
            mission: "The Marine Mammal Center advances global ocean conservation through rescue and rehabilitation, scientific research, and education.",
            youtube: "https://www.youtube-nocookie.com/embed/itYh-JXoiBo",
            description: 'The Marine Mammal Center advances global ocean conservation through rescue and rehabilitation, scientific research, and education.'
        },
        {
            name: 'Cancer Research Institute',
            website: 'https://www.cancerresearch.org/',
            image: 'https://www.cancerresearch.org/CRI/Files/eb/ebd202b2-e665-47a2-ad59-57441dd7f9ac.jpg',
            logo: "https://tukuz.com/wp-content/uploads/2020/10/cancer-research-institute-cri-logo-vector.png",
            mission: "Since 1953, we've led the field with support for immunotherapy research and clinical trials. Together with our donor, patient, and scientist communities, we continue to fund revolutionary breakthroughs to cure all types of cancer.",
            youtube: "https://www.youtube-nocookie.com/embed/fqYWNulGp6U",
            description: 'Together with our donor, patient, and scientist communities, we continue to fund revolutionary breakthroughs to cure all types of cancer.'
        },
        {
            name: 'World Wide Fund for Nature',
            website: 'https://www.worldwildlife.org/',
            image: 'https://www.conservationfund.org/images/Blog_Images/4_18_22_Pleasant_River_Headwaters_Forest_Katahdin_ME_Working_Forest_FundJerry_Monkman_065.jpg',
            logo: "https://logos-world.net/wp-content/uploads/2020/11/World-Wide-Fund-for-Nature-Logo.png",
            mission: "As the world’s leading conservation organization, WWF works in nearly 100 countries to tackle the most pressing issues at the intersection of nature, people, and climate.",
            youtube: "https://www.youtube-nocookie.com/embed/9H01rlQ0Aus",
            description: 'The World Wide Fund for Nature is an international non-governmental organization founded in 1961 that works in the field of wilderness preservation and the reduction of human impact on the environment.'
        },
        {
            name: 'National Alliance to End Homelessness',
            website: 'https://endhomelessness.org/',
            image: 'https://housing.az.gov/sites/default/files/Homeless%20Article%20Cover%20cropped.png',
            logo: "https://endhomelessness.org/wp-content/uploads/2020/01/NAEH-Center-for-Learning-FINAL-LOGO.png",
            mission: "The National Alliance to End Homelessness is a nonpartisan organization committed to preventing and ending homelessness in the United States.",
            youtube: "https://www.youtube-nocookie.com/embed/cN57ub0B8eM",
            description: 'The National Alliance to End Homelessness is a nonpartisan organization committed to preventing and ending homelessness in the United States.',
        },
        {
            name: 'New-Charity-Change-Name',
            website: 'Enter Website',
            image: 'https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png',
            logo:'https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png',
            mission:'Enter Mission Statement',
            youtube:'https://www.youtube-nocookie.com/embed/JnYBvLY0GOg',
            description: 'Enter Description',
        },
    ]);

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Baseball",
            description: "Signed Baseball from Casey Jones",
            image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg",
            price: "25",
            ticketCount: 10,
            charity: charities[0]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'  
        },
        {
            name: "Basketball",
            description: "Signed Basketball from State Champion High School team.",
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png',
            price: "35",
            ticketCount: 3,
            charity: charities[0]._id ,
            tickets:[],
            winningNumber:'000000000000000000000000' 
        },
        {
            name: 'Car',
            description: 'El Camino',
            image: 'https://silodrome.com/wp-content/uploads/2020/11/Chevrolet-El-Camino-SS-396.jpg',
            price: "300",
            ticketCount: 100,
            charity: charities[0]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Shoes',
            description: 'Rare signature sneakers',
            image: 'https://cdn.cheapism.com/images/PSX_20201025_151656.max-784x410.jpg',
            price: "55",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Cabin get away',
            description: 'Three days four nights at luxury remote cabin.',
            image: 'https://images.ctfassets.net/gxwgulxyxxy1/6n3HlHC8kwrWcL1A7ilwXF/6716baa9c91dd572058d63c4798341d2/c5602606-3746-44b9-94cb-9a1b5d22deca.lg1.jpg',
            price: "200",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Concert Tickets',
            description: 'EDM festival Tickets',
            image: 'https://www.palmharborfootball.com/wp-content/uploads/2017/11/tickets.png',
            price: "100",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Opera Tickets',
            description: 'Local Opera House tickets for any event, balcony seats.',
            image: 'https://www.palmharborfootball.com/wp-content/uploads/2017/11/tickets.png',
            price: "100",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Gift Basket',
            description: 'Country style gift basket with all your favorites.',
            image: 'https://www.adorablegiftbaskets.com/media/ready-country_thing_20201.jpg',
            price: "35",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Pocket Watch',
            description: '1895 Pocket Watch',
            image: 'https://www.keepthetime.com/wp-content/uploads/2018/11/elgin-vintage-pocket-watch-55643212-movement.jpg',
            price: "80",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Boat Tour',
            description: 'Boat tour going down the Allegheny.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Nile_Tour_Boat_R02.jpg',
            price: "200",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Casino Boat',
            description: 'Tickets for a night on a casino boat.',
            image: 'https://media.timeout.com/images/103232470/750/422/image.jpg',
            price: "300",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Light Bar',
            description: 'LED Light bar to fit any truck',
            image: 'https://cdn11.bigcommerce.com/s-40fv8/images/stencil/original/uploaded_images/image-1.jpg?t=1524145615',
            price: "50",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Guitar',
            description: 'Acoustic Guitar',
            image: 'https://images.squarespace-cdn.com/content/v1/5b7d8ac7697a988b951bdc95/1611728210677-016BGGS79ZRHB96CKQS3/image-9.jpg?format=2500w',
            price: "125",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Guitar Lessons',
            description: 'Ten hour long guitar lessons.',
            image: 'https://cdn.schoolofrock.com/img/hero-large/guitar-lessons1527266771.jpg',
            price: "80",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Guitar Amp',
            description: 'Marshall Amplifies',
            image: 'https://media.sweetwater.com/api/i/q-82__ha-0d44bbbedefe82fc__hmac-822ce55a891c718898be0561a5385780ece38dc0/images/items/750/MG50GFX-large.jpg',
            price: "100",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Cowboy Hat',
            description: 'Cowboy hat made to fit the winner.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X2t7JrXjpv2WRaNiA65nbAAiMT1NrgWWeJzVOK_N_gcqOA5HbC6Mdre4HXuIjuMo0yc&usqp=CAU',
            price: "65",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Cowboy Boots',
            description: "Cowboy boots in any size.",
            image: 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw8983c7ea/images/zoom/10040327_3-4_front.jpg',
            price: "50",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Cowboy Jacket',
            description: 'Vintage Long Cowboy Jacket',
            image: 'https://canary.contestimg.wish.com/api/webimage/5f6470948ab312086f7f50f0-large.jpg?cache_buster=dac5e8a0101ce2f662a91d9a6da14c52',
            price: "125",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: "Mountain Art",
            description: 'Mountain Wall Art',
            image: 'https://i.etsystatic.com/29345702/c/2500/1500/0/0/il/e73f67/3333681583/il_340x270.3333681583_qv2i.jpg',
            price: "65",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Wall Art',
            description: 'Modern Wall Art',
            image: 'https://m.media-amazon.com/images/I/71c+zy+x-3L._AC_SL1000_.jpg',
            price: "75",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: "Custom Art",
            description: "Custom wall painting done by local artist.",
            image: 'https://images.thdstatic.com/productImages/92ef591d-aaae-5c10-b68e-adb93550eb9b/svn/white-litton-lane-art-paintings-87892-64_400.jpg',
            price: "100",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Metal Flowers',
            description: 'Twelve custom metal flowers.',
            image: 'https://images.coplusk.net/project_images/189032/image/109460_2F2015-06-21-145136-FEM5I69IB0MGCON.LARGE.jpg',
            price: "20",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Decorative Yard Art',
            description: 'Decorative metal flowers for your yard.',
            image: 'https://www.plowhearth.com/medias/sys_master/images/images/he3/hf6/10819510468638/54779-PHSP19-AF9820.jpg',
            price: "15",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Custom Street Sign Art',
            description: "Custom street sign art personalized for you.",
            image: 'https://www.boredpanda.com/blog/wp-content/uploads/2021/10/funny-street-signs-cletabraham-fb-png__700.jpg',
            price: "65",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Monster Truck Tickets',
            description: 'Monster Truck tickets for the biggest event of the summer.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Superman_monster_truck.jpg',
            price: "50",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Demolition Derby',
            description: 'State Fair main event demolition derby tickets.',
            image: "https://www.gannett-cdn.com/-mm-/aba259da292344ac9a6afadbf035ab231d4f95c3/c=0-147-3643-2205/local/-/media/2018/07/21/OHGroup/Mansfield/636678028376425633-0721-DEMODERBY-001.JPG",
            price: "25",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'MotoCross',
            description: 'Largest Motocross race of the year.  Tickets in the pit.',
            image: 'https://img.redbull.com/images/c_crop,w_4433,h_2217,x_0,y_81,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/04/12/a77d096b-7b1b-447e-acb0-9f6db95f2ddd/ben-watson-motocross',
            price: "100",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Horn Tankard',
            description: 'Custom viking horn tankard.',
            image: 'https://i.pinimg.com/originals/e7/a0/66/e7a0661831d5787031b6214e63496ce0.jpg',
            price: "25",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Viking Jewelry',
            description: 'Replica viking jewelry lot.',
            image: 'https://cdn.shopify.com/s/files/1/0078/0530/4890/files/viking-pendants-1_480x480.jpg?v=1548870401',
            price: "40",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
        {
            name: 'Mardi Gras Trip',
            description: 'A three day, four night trip to Mardi Gras.',
            image: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgwMjU4MDUzNDQ5/mardi-gras-mask-and-beads.jpg',
            price: "500",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[],
            winningNumber:'000000000000000000000000'   
        },
    ]);

    await Ticket.deleteMany();

    const tickets = await Ticket.create([
        {
            ticketNumber: "1",
            product: products[0]._id
        },
    ]);

    await User.deleteMany();

    const users = await User.insertMany([
    {
        userName: 'threeBrothers',
        email: '3brothers@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        ticket: tickets[0]._id
    },
    {
        userName: 'ducks4sale',
        email: 'sellingDucks@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'JohnD',
        email: 'jdoe123@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {   
        userName: 'jDoe',
        email: 'janeDoe@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'tigerBalm',
        email: 'orangestripes@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    }, 
    {
        userName: 'hammerHead',
        email: 'sharks4life@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'tinCanAllstar',
        email: 'collectKickCans@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'general',
        email: 'fourstarG@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'preacher',
        email: 'ofaafo@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
    {
        userName: 'savetheseals',
        email: 'ilikeseals@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        favCharities: [],
        tickets: []
    },
]);

    process.exit();
});