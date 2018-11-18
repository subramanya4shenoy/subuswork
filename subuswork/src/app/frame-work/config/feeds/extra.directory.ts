
/*************************************************** */
//        Please follow the following format        //
//       This note is for sober me to know,         //
//       why the drunk me has written it           //
/************************************************* */

//  the latest logo details should be listed on top
// extra : [
//     {
//       extra_id:number <id number for every project>,
//       extra_hero_image_url: string <Its the url for the Hero image of extra>
//       extra_title: string < title for the project>
//       extra_type: enum <Image | Video | text | iamgeText| videotext| all>
//       extra_content : Array = [
//        {
//          extra_content_id: number;
//          extra_content_img_url: string;
//        }..
//      ]
//     }
// ]

export const extraFeed = {
    total_count: 3,
    // the latest ogo should be listed on top
    features: [
        {
            extra_id: 3,
            extra_hero_image_url: 'http://blog.signalnoise.com/wp-content/uploads/2013/08/i_hulkhogan.jpg',
            extra_title: 'First Project',
            extra_type: 'Image',
            extra_style: {
                background: '#f1f1f1',
                color: '#292929',
            },
            extra_content: [
                {
                    extra_content_id: 1,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                },
                {
                    extra_content_id: 2,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                }
            ]
        },
        {
            extra_id: 2,
            extra_hero_image_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif',
            extra_title: 'First Project',
            extra_type: 'Image',
            extra_style: {
                background: '#f1f1f1',
                color: '#292929',
            },
            extra_content: [
                {
                    extra_content_id: 1,
                    extra_content_img_url: 'http://blog.signalnoise.com/wp-content/uploads/2013/08/i_hulkhogan.jpg'
                },
                {
                    extra_content_id: 2,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                },
                {
                    extra_content_id: 3,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                }
            ]
        },
        {
            extra_id: 1,
            extra_hero_image_url: 'http://blog.signalnoise.com/wp-content/uploads/2013/08/i_hulkhogan.jpg',
            extra_title: 'First Project',
            extra_type: 'Image',
            extra_style: {
                background: '#f1f1f1',
                color: '#292929',
            },
            extra_content: [
                {
                    extra_content_id: 1,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                },
                {
                    extra_content_id: 2,
                    extra_content_img_url: 'http://blog.signalnoise.com/wp-content/uploads/2013/08/i_hulkhogan.jpg'
                },
                {
                    extra_content_id: 3,
                    extra_content_img_url: 'https://i.pinimg.com/originals/26/fd/41/26fd412c9668c65f23a811f640ff8158.gif'
                }
            ]
        }
    ]
};
