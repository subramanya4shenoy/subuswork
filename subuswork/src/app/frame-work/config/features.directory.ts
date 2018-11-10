
/*************************************************** */
//        Please follow the following format        //
//       This note is for sober me to know,         //
//       why the drunk me has written it           //
/************************************************* */

//  the latest feature should be listed on top
// features : [
//     {
//         feature_id: <number: increment the value form the toppest one>,
//         feature_category: <string: choose where it belongs, element|extra|logo>,
//         feature_type: <string: text|image|video>
//         feature_banner_style: { <specify the styles for the banner>
//             'color' : 'red', <color of the text>
//             'background': 'grey' <color of the banner>
//         },
//         feature_img_url: '', <if type = image then specify the url>
//         feature_description: 'new text' <the text in the description make sure it fits the all views, lesser the better>
//     }
// ]

export const FeaturesList = {
    total_count: 0,
    total_element_count: 0,
    total_extra_count: 0,
    total_logo_count: 0,
    // the latest feature should be listed on top
    features: [
        {
            feature_id: 3,
            feature_category: 'element',
            feature_type: 'image',
            feature_banner_style: {
                'color': '#e19c2c',
                'background': '#001424'
            },
            feature_img_url: 'https://thumbs.gfycat.com/BaggyHonoredErmine-size_restricted.gif',
            feature_description: 'Above images are from internet Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                                  Autem vero at assumenda voluptatibus recusandae quod explicabo atque nihil nisi hic quos officiis,\
                                  dolores enim, dolorum voluptate, perferendis dolore obcaecati amet! ',
            feature_short_description: 'Not my images, Its from internet Not my images, Its from internet Not my images, Its'
        },
        {
            feature_id: 2,
            feature_category: 'extra',
            feature_type: 'image',
            feature_banner_style: {
                'color': '#13224b',
                'background': '#feeede'
            },
            feature_img_url: 'http://www.realat.lv/wp-content/uploads/2017/05/pivot-and-pilot-creative-viewing.gif',
            feature_description: 'Above images are from internet Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                                  Autem vero at assumenda voluptatibus recusandae quod explicabo atque nihil nisi hic quos officiis,\
                                  dolores enim, dolorum voluptate, perferendis dolore obcaecati amet! ',
            feature_short_description: 'Not my images, Its from internet Not my images, Its from internet Not my images, Its from internet \
                                        Not my images, Its from internet '
        },
        {
            feature_id: 1,
            feature_category: 'logo',
            feature_type: 'image',
            feature_banner_style: {
                'color': '#445689',
                'background': '#eef7fe'
            },
            feature_img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5eca0a59752143.5a392f2aed603.gif',
            feature_description: 'Above images are from internet Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                                  Autem vero at assumenda voluptatibus recusandae quod explicabo atque nihil nisi hic quos officiis,\
                                  dolores enim, dolorum voluptate, perferendis dolore obcaecati amet! ',
            feature_short_description: 'Not my images, Its from internet vinternet \
                                        Not my images, Its from internet'
        },
    ]
};
