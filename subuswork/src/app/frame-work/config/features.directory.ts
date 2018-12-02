
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
    total_count: 1,
    total_element_count: 0,
    total_extra_count: 1,
    total_logo_count: 0,
    // the latest feature should be listed on top
    features: [
        {
            feature_id: 1,
            feature_category: 'extra',
            feature_type: 'image',
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
