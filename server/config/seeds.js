const db = require('./connection');
const {User, Ticket, Product, Charity } = require('../models');

db.once('open', async () => {
    await Charity.deleteMany();

    const charities = await Charity.insertMany([
        {
            name: "St Jude Children's Rearch Hospital",
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
            description: 'We work in the hardest-to-reach places, where it’s toughest to be a child.'
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
            image:  'https://static.dw.com/image/52138936_303.jpg',
            description: 'People are facing desperate, life-threatening situations around the world along with the impact of COVID-19. Help us send CARE Packages to meet their needs.'
        },
        {
            name: 'The Marine Mammel Center',
            website: 'https://www.marinemammalcenter.org/',
            image: 'https://www.marinemammalcenter.org/storage/app/uploads/public/6ce/836/80e/thumb__407_318_0_0_crop.jpg',
            description: 'The Marine Mammal Center advances global ocean conservation through rescue and rehabilitation, scientific research, and education.'
        },
        {
            name: 'Cancer Research Institute',
            website: 'https://www.cancerresearch.org/',
            image:  'https://www.cancerresearch.org/CRI/Files/eb/ebd202b2-e665-47a2-ad59-57441dd7f9ac.jpg',
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
    ])
})