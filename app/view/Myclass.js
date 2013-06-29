Ext.define('s1.view.Myclass', {
    extend: 'Ext.navigation.View',
    xtype: 'myclass',
    config: {
             title: 'Blog',
             iconCls: 'star',
 
             items : {
                xtype : 'list',
                itemTpl: '{title}',
                store : {
                    autoLoad: true,
                    fields : ['title','author','content'],
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://hortonworks.blogspot.com/feeds/posts/default?alt=rss',
                        reader: {
                              type: 'json',
                              rootProperty: 'responseData.feed.entries'
                          }
                      } 
                }
            }
    }
});
