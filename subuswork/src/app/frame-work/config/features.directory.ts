
/*************************************************** */
//        Please follow the following format        //
//       This note is for sober me to know,         //
//       why the drunk me has written it           //
/************************************************* */

//  the latest feature should be listed on top
// features : [
//     {
//         feature_id: <number: increment the value form the bottom one>,
//         feature_category: <string: choose where it belongs, element|extra|logo>,
//         feature_type: <string: text|image|video>
//         feature_banner_style: { <specify the styles for the banner>
//             'color' : 'red', <color of the text>
//             'background': 'grey' <color of the banner>
//         },
//         feature_img_url: '', <if type = image then specify the url>
//         feature_description: 'new text' <the text in the description make sure it fits the all views, lesser the better>
//        feature_short_description: 'new short text' <this isto fit the description in smaller devices>
//     }
// ]

export const FeaturesList = {
    total_count: 3,
    total_element_count: 0,
    total_extra_count: 2,
    total_logo_count: 1,
    // the latest feature should be listed on top
    features: [
        {
            feature_id: 3,
            feature_category: 'extra',
            feature_type: 'image',
            feature_url: '/extra/2',
            feature_banner_style: {
                'background': '#350074',
                'color': '#dd1174'
            },
            // tslint:disable-next-line:max-line-length
            feature_img_url: 'https://firebasestorage.googleapis.com/v0/b/subuswork.appspot.com/o/extra%2F2%2FWhatsApp%20Image%202019-09-07%20at%2010.04.44%20PM%20(9).jpeg?alt=media&token=1e260ca0-0135-49c0-8096-cb7fd0661816',
            feature_description: 'Drew a vegetable every day for a week in pro create.',
            feature_short_description: 'Drew a vegetable every day for a week in pro create.'
        },
        {
            feature_id: 2,
            feature_category: 'element',
            feature_type: 'image',
            feature_url: '/logo/9',
            feature_banner_style: {
                'background': '#f8d552',
                'color': '#000'
            },
            // tslint:disable-next-line:max-line-length
            feature_img_url: 'https://firebasestorage.googleapis.com/v0/b/subuswork.appspot.com/o/logo%2F3.png?alt=media&token=2aae263e-9dcb-4ddf-b321-980ce64a02c1',
            feature_description: 'Been sick for 3 days now due to the weather. caught cold and fever, swallowing bitter pills.',
            feature_short_description: 'Been sick for 3 days now due to the weather. caught cold and fever, swallowing bitter pills.'
        },
        {
            feature_id: 1,
            feature_category: 'extra',
            feature_type: 'image',
            feature_url: '/extra/1',
            feature_banner_style: {
                'background': '#000',
                'color': '#d48b8a'
            },
            // tslint:disable-next-line:max-line-length
            feature_img_url: 'https://firebasestorage.googleapis.com/v0/b/subuswork.appspot.com/o/extra%2F1%2F2.jpg?alt=media&token=99c4ea97-a547-450e-b4fe-b9df4d493964',
            feature_description: '#SubusDailyAnimal: images of group of animals put in a self descriptive manner.',
            feature_short_description: '#SubusDailyAnimal: images of group of animals put in a self descriptive manner.'
        }
    ]
};
