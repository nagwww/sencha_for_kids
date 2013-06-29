Ext.define('s1.controller.Myclass', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'myclass'
            
        },
        control: {
             'myclass list' : {
                 itemtap: 'showPost'
              }
        }
    },
     showPost: function(list, index,element,record) {
         console.log(record.get("title"));
          this.getBlog().push({
           xtype: 'panel',
           title: record.get('title'),
           html: record.get('content'),
           scrollable: true,
           styleHtmlContent: true
          });
     }
});
