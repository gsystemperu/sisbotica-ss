Ext.define('sisbotica_paulino.store.StoreManufactura', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/*
@DataSet :
Stores para la lista de materiales para crear productos de manufactura
==============================================================
*/
Ext.define('sisbotica_paulino.store.ListaMateriales', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelMrp'],
    model   :'sisbotica_paulino.model.ListaMateriales',
    autoLoad: true,
    autoDestroy: true,
    extraParams:{
        nombre: ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/lista_materiales_producto'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
