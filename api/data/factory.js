const factories = [
    {
        factory: {
            name: string,
            apparats: [
                {
                    name: string,
                    desc: string,
                    ups: [
                        {
                            name: string,
                            desc: string,
                            special: Boolean,
                            parameters: [
                                {
                                    name: string,
                                    desc: string,
                                    value: any,
                                    update: [
                                        {
                                            date: Date,
                                            value: any,
                                        },
                                    ],
                                },
                            ]
                        },
                    ],
                },
            ],
        },
    },
];
