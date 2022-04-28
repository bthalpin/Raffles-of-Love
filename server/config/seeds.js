const db = require('./connection');
const { User, Ticket, Product, Charity } = require('../models');

db.once('open', async () => {
    await Charity.deleteMany();

    const charities = await Charity.insertMany([
        {
            name: "St Jude Children's Research Hospital",
            website: "https://www.stjude.org/promotion/hello/charitable-gifts-for-kids.html?sc_dcm=58700007222382216&sc_cid=kwp&sc_cat=nb&ds_rl=1290693&gclid=CjwKCAjwx46TBhBhEiwArA_DjAmeqnouXYwYBxLbKN82OpoM4LFo-0norJlIqlYTWI0zY5vjJFX3ihoCK_AQAvD_BwE&gclsrc=aw.ds",
            image: "https://www.stjude.org/content/sites/www/en_US/home/promotion/hello/charitable-gifts-for-kids/jcr:content/par-2/cnt_row_copy_copy_co/par-1/cnt_column_109669490/par-1/cnt_image.img.1200.high.jpg/1639513375113.jpg",
            description: "There are great research institutions, great hospitals and great charities — St. Jude Children's Research Hospital is all three. "
        },
        {
            name: "Red Cross",
            website: "https://www.redcross.org/",
            image: "https://www.redcross.org/content/dam/redcross/local/holiday-hero/Sound-the-Alarm-Volunteers-2019-960x540.jpg.transform/1288/q82/feature/image.jpeg",
            description: 'Your financial gift helps people affected by disasters big and small.'
        },
        {
            name: 'Doctors without Borders',
            website: "https://www.doctorswithoutborders.org/",
            image: "https://www.doctorswithoutborders.org/sites/default/files/styles/media_besides_text_666_520/public/image_base_media/2018/10/MSF245141.jpg?itok=hKLZxzjN",
            description: "We are independent, impartial, and neutral. We are guided by universal medical ethics. We are committed to bearing witness. We are transparent and accountable. We are committed to diversity, equity and inclusion."
        },
        {
            name: 'Save the Children',
            website: 'https://www.savethechildren.org/',
            image: 'https://www.savethechildren.org/content/dam/usa/images/global-programs/emergency/ukraine-conflict-children-in-crisis-ch1494283-sq.jpg/_jcr_content/renditions/cq5dam.thumbnail.768.768.jpg',
            description: "We work in the hardest-to-reach places, where it’s toughest to be a child."
        },
        {
            name: 'World Vision',
            website: 'https://www.worldvision.org/',
            image: 'https://www.worldvision.org/wp-content/uploads/2022/03/W322-0032-025-640x380.jpg',
            description: 'Our presence in nearly 100 countries enables us to quickly provide immediate support in all types of disasters and humanitarian crises—and we are committed to long-term support, staying to help children, families, and communities recover and rebuild.'
        },
        {
            name: 'Care',
            website: 'https://www.care.org/',
            image: 'https://static.dw.com/image/52138936_303.jpg',
            description: 'People are facing desperate, life-threatening situations around the world along with the impact of COVID-19. Help us send CARE Packages to meet their needs.'
        },
        {
            name: 'The Marine Mammal Center',
            website: 'https://www.marinemammalcenter.org/',
            image: 'https://www.marinemammalcenter.org/storage/app/uploads/public/6ce/836/80e/thumb__407_318_0_0_crop.jpg',
            description: 'The Marine Mammal Center advances global ocean conservation through rescue and rehabilitation, scientific research, and education.'
        },
        {
            name: 'Cancer Research Institute',
            website: 'https://www.cancerresearch.org/',
            image: 'https://www.cancerresearch.org/CRI/Files/eb/ebd202b2-e665-47a2-ad59-57441dd7f9ac.jpg',
            description: 'Together with our donor, patient, and scientist communities, we continue to fund revolutionary breakthroughs to cure all types of cancer.'
        },
        {
            name: 'The Conservation Fund',
            website: 'https://www.conservationfund.org/',
            image: 'https://www.conservationfund.org/images/Blog_Images/4_18_22_Pleasant_River_Headwaters_Forest_Katahdin_ME_Working_Forest_FundJerry_Monkman_065.jpg',
            description: 'We make conservation work for America by creating solutions that make environmental and economic sense.'
        },
        {
            name: 'National Alliance to End Homelessness',
            website: 'https://endhomelessness.org/',
            image: 'https://housing.az.gov/sites/default/files/Homeless%20Article%20Cover%20cropped.png',
            description: 'The National Alliance to End Homelessness is a nonpartisan organization committed to preventing and ending homelessness in the United States.',
        },
    ]);

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Baseball",
            description: "Signed Baseball from Casey Jones",
            image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg",
            price: "25",
            ticketCount: 100,
            charity: charities[0]._id,
            tickets:[] 
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
            tickets:[]  
        },
        {
            name: 'Shoes',
            description: 'Rare signature sneakers',
            image: 'https://cdn.cheapism.com/images/PSX_20201025_151656.max-784x410.jpg',
            price: "55",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[]  
        },
        {
            name: 'Cabin get away',
            description: 'Three days four nights at luxury remote cabin.',
            image: 'https://images.ctfassets.net/gxwgulxyxxy1/6n3HlHC8kwrWcL1A7ilwXF/6716baa9c91dd572058d63c4798341d2/c5602606-3746-44b9-94cb-9a1b5d22deca.lg1.jpg',
            price: "200",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[]  
        },
        {
            name: 'Concert Tickets',
            description: 'EDM festival Tickets',
            image: 'https://www.palmharborfootball.com/wp-content/uploads/2017/11/tickets.png',
            price: "100",
            ticketCount: 100,
            charity: charities[1]._id,
            tickets:[]  
        },
        {
            name: 'Opera Tickets',
            description: 'Local Opera House tickets for any event, balcony seats.',
            image: 'https://www.palmharborfootball.com/wp-content/uploads/2017/11/tickets.png',
            price: "100",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[]  
        },
        {
            name: 'Gift Basket',
            description: 'Country style gift basket with all your favorites.',
            image: 'https://www.adorablegiftbaskets.com/media/ready-country_thing_20201.jpg',
            price: "35",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[]  
        },
        {
            name: 'Pocket Watch',
            description: '1895 Pocket Watch',
            image: 'https://www.keepthetime.com/wp-content/uploads/2018/11/elgin-vintage-pocket-watch-55643212-movement.jpg',
            price: "80",
            ticketCount: 100,
            charity: charities[2]._id,
            tickets:[]  
        },
        {
            name: 'Boat Tour',
            description: 'Boat tour going down the Allegheny.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Nile_Tour_Boat_R02.jpg',
            price: "200",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[]  
        },
        {
            name: 'Casino Boat',
            description: 'Tickets for a night on a casino boat.',
            image: 'https://media.timeout.com/images/103232470/750/422/image.jpg',
            price: "300",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[]  
        },
        {
            name: 'Light Bar',
            description: 'LED Light bar to fit any truck',
            image: 'https://cdn11.bigcommerce.com/s-40fv8/images/stencil/original/uploaded_images/image-1.jpg?t=1524145615',
            price: "50",
            ticketCount: 100,
            charity: charities[3]._id,
            tickets:[]  
        },
        {
            name: 'Guitar',
            description: 'Acoustic Guitar',
            image: 'https://images.squarespace-cdn.com/content/v1/5b7d8ac7697a988b951bdc95/1611728210677-016BGGS79ZRHB96CKQS3/image-9.jpg?format=2500w',
            price: "125",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[]  
        },
        {
            name: 'Guitar Lessons',
            description: 'Ten hour long guitar lessons.',
            image: 'https://cdn.schoolofrock.com/img/hero-large/guitar-lessons1527266771.jpg',
            price: "80",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[]  
        },
        {
            name: 'Guitar Amp',
            description: 'Marshall Amplifies',
            image: 'https://media.sweetwater.com/api/i/q-82__ha-0d44bbbedefe82fc__hmac-822ce55a891c718898be0561a5385780ece38dc0/images/items/750/MG50GFX-large.jpg',
            price: "100",
            ticketCount: 100,
            charity: charities[4]._id,
            tickets:[]  
        },
        {
            name: 'Cowboy Hat',
            description: 'Cowboy hat made to fit the winner.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X2t7JrXjpv2WRaNiA65nbAAiMT1NrgWWeJzVOK_N_gcqOA5HbC6Mdre4HXuIjuMo0yc&usqp=CAU',
            price: "65",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[]  
        },
        {
            name: 'Cowboy Boots',
            description: "Cowboy boots in any size.",
            image: 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw8983c7ea/images/zoom/10040327_3-4_front.jpg',
            price: "50",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[]  
        },
        {
            name: 'Cowboy Jacket',
            description: 'Vintage Long Cowboy Jacket',
            image: 'https://canary.contestimg.wish.com/api/webimage/5f6470948ab312086f7f50f0-large.jpg?cache_buster=dac5e8a0101ce2f662a91d9a6da14c52',
            price: "125",
            ticketCount: 100,
            charity: charities[5]._id,
            tickets:[]  
        },
        {
            name: "Mountain Art",
            description: 'Mountain Wall Art',
            image: 'https://i.etsystatic.com/29345702/c/2500/1500/0/0/il/e73f67/3333681583/il_340x270.3333681583_qv2i.jpg',
            price: "65",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[]  
        },
        {
            name: 'Wall Art',
            description: 'Modern Wall Art',
            image: 'https://m.media-amazon.com/images/I/71c+zy+x-3L._AC_SL1000_.jpg',
            price: "75",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[]  
        },
        {
            name: "Custom Art",
            description: "Custom wall painting done by local artist.",
            image: 'https://images.thdstatic.com/productImages/92ef591d-aaae-5c10-b68e-adb93550eb9b/svn/white-litton-lane-art-paintings-87892-64_400.jpg',
            price: "100",
            ticketCount: 100,
            charity: charities[6]._id,
            tickets:[]  
        },
        {
            name: 'Metal Flowers',
            description: 'Twelve custom metal flowers.',
            image: 'https://images.coplusk.net/project_images/189032/image/109460_2F2015-06-21-145136-FEM5I69IB0MGCON.LARGE.jpg',
            price: "20",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[]  
        },
        {
            name: 'Decorative Yard Art',
            description: 'Decorative metal flowers for your yard.',
            image: 'https://www.plowhearth.com/medias/sys_master/images/images/he3/hf6/10819510468638/54779-PHSP19-AF9820.jpg',
            price: "15",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[]  
        },
        {
            name: 'Custom Street Sign Art',
            description: "Custom street sign art personalized for you.",
            image: 'https://www.boredpanda.com/blog/wp-content/uploads/2021/10/funny-street-signs-cletabraham-fb-png__700.jpg',
            price: "65",
            ticketCount: 100,
            charity: charities[7]._id,
            tickets:[]  
        },
        {
            name: 'Monster Truck Tickets',
            description: 'Monster Truck tickets for the biggest event of the summer.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Superman_monster_truck.jpg',
            price: "50",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[]  
        },
        {
            name: 'Demolition Derby',
            description: 'State Fair main event demolition derby tickets.',
            image: "https://www.gannett-cdn.com/-mm-/aba259da292344ac9a6afadbf035ab231d4f95c3/c=0-147-3643-2205/local/-/media/2018/07/21/OHGroup/Mansfield/636678028376425633-0721-DEMODERBY-001.JPG",
            price: "25",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[]  
        },
        {
            name: 'MotoCross',
            description: 'Largest Motocross race of the year.  Tickets in the pit.',
            image: 'https://img.redbull.com/images/c_crop,w_4433,h_2217,x_0,y_81,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/04/12/a77d096b-7b1b-447e-acb0-9f6db95f2ddd/ben-watson-motocross',
            price: "100",
            ticketCount: 100,
            charity: charities[8]._id,
            tickets:[]  
        },
        {
            name: 'Horn Tankard',
            description: 'Custom viking horn tankard.',
            image: 'https://i.pinimg.com/originals/e7/a0/66/e7a0661831d5787031b6214e63496ce0.jpg',
            price: "25",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[]  
        },
        {
            name: 'Viking Jewelry',
            description: 'Replica viking jewelry lot.',
            image: 'https://cdn.shopify.com/s/files/1/0078/0530/4890/files/viking-pendants-1_480x480.jpg?v=1548870401',
            price: "40",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[]  
        },
        {
            name: 'Mardi Gras Trip',
            description: 'A three day, four night trip to Mardi Gras.',
            image: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgwMjU4MDUzNDQ5/mardi-gras-mask-and-beads.jpg',
            price: "500",
            ticketCount: 100,
            charity: charities[9]._id,
            tickets:[]  
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
        ticket: tickets[0]._id
    },
    {
        userName: 'ducks4sale',
        email: 'sellingDucks@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'JohnD',
        email: 'jdoe123@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {   
        userName: 'jDoe',
        email: 'janeDoe@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'tigerBalm',
        email: 'orangestripes@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    }, 
    {
        userName: 'hammerHead',
        email: 'sharks4life@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'tinCanAllstar',
        email: 'collectKickCans@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'general',
        email: 'fourstarG@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'preacher',
        email: 'ofaafo@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
    {
        userName: 'savetheseals',
        email: 'ilikeseals@gmail.com',
        password: 'password1234',
        location: "Nowhere, NJ",
        tickets: []
    },
]);

    process.exit();
});