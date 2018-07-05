Ext.define('sisbotica_paulino.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'sisbotica_paulino.util.Util'
    ],
    model: 'sisbotica_paulino.model.menu.Accordion',
    extraParams:{
      vusuario : 0
    },
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'resources/api/usuario_menu',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                sisbotica_paulino.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});
