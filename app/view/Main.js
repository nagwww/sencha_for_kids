Ext.define('s1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome'
                },

                html: [
                    " Hello ",
                    " ",
                    ""
                ].join("")
            },
            {
                title: 'My Class',
                iconCls: 'team',
                xtype : 'myclass',
            /*    styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome'
                },

                html: [
                    " Hello ",
                    " ",
                    ""
                ].join("") */
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                    }
                ]
            }
        ]
    }
});
