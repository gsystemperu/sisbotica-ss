Ext.define('sisbotica_paulino.store.StoreOrdenCompra', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/*
@DataSet :
Stores para las operaciones de Abastecimiento
==============================================================
*/
Ext.define('sisbotica_paulino.store.OrdenesCompras', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.OrdenCompra',
    autoLoad: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
        desde       : null,
        hasta       : null,
        proveedor   : 0
    },
    groupField: 'fordencompra',
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ordencompra_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'totalreg'

        }
    }
});

/*
@DataSet :
Stores para las orden de compra confirmadas para ingresar a almacen
==============================================================
*/

Ext.define('sisbotica_paulino.store.OrdenesCompraConfirmadas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.OrdenCompra',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
        desde       : null,
        hasta       : null,
        proveedor   : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ordencompra_listaconfirmadas'},
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'totalreg'

        }
    }
});



/*
@DataSet :
Stores para las orden de compra confirmadas para ingresar a almacen
==============================================================
*/

Ext.define('sisbotica_paulino.store.OrdenesCompraConfirmadasDetalle', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.OrdenCompraDetalle',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{id : 0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ordencompra_detalleconfirmadas'},
        reader: {
            type: 'json',
            rootProperty: 'data'

        }
    }
});


/*
@DataSet :
Stores para listar los tipos de compras
==============================================================
*/

Ext.define('sisbotica_paulino.store.Monedas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Moneda',
    autoLoad: true,
    autoSync  : false,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_moneda'},
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});






/*
@DataSet :
Stores para las operaciones de Abastecimiento Detalle
==============================================================
*//*
Ext.define('sisbotica_paulino.store.AbastecimientoDetalle', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.AbastecimientoDetalle',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{id       : null},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/abastecimiento_detalle'},
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
*/
