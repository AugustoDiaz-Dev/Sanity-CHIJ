export default {
    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
        {
            name: 'reviewDescription',
            title: 'Review description',
            type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [
                    {title: '5 Starts', value: '5-stars'},
                    {title: '4 Starts', value: '4-stars'},
                    {title: '3 Starts', value: '3-stars'},
                    {title: '2 Starts', value: '2-stars'},
                    {title: '1 Starts', value: '1-stars'},
                ], 
                layout: 'radio'
            }
        }
    ]
}