Ext.define('sisbotica_paulino.store.StoreProductos', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/*
@DataSet :
Stores para las operaciones de Producto
==============================================================
*/
Ext.define('sisbotica_paulino.store.Productos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Producto',
    autoLoad: false,
    extraParams :{
      nombre : '',
      tipoproducto : 0,
      codigobarras: '',
      query : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
Stores para listar los productos para las ordenes de compra
==============================================================
*/
Ext.define('sisbotica_paulino.store.ProductosOrdenCompra', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Producto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
        idprov : 0,
        nombre : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_listar_oc'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/*
@DataSet :
Stores para visualizar las series de cada producto por lote y guia
==============================================================
*/
Ext.define('sisbotica_paulino.store.ProductoExistencias', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.ProductoExistencia',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    groupField: 'vencimiento',
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_existencias'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
@Descripcion : 
DataSet para los registros de los inventarios
==============================================================
*/
Ext.define('sisbotica_paulino.store.InventarioRegistros', {
    extend  : 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.InventarioRegistro',
    autoLoad: true,
    remoteSort: true,
    autoSync  : false,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_inventario_registros'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
==============================================================
*/
Ext.define('sisbotica_paulino.store.ProductoInventarioLista', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.ProductoInventario',
    autoLoad: false,
    remoteSort: true,
    autoSync  : false,
    extraParams :{ idinventario : 0 },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_inventario_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



/*
@DataSet :
==============================================================
*/
Ext.define('sisbotica_paulino.store.FormaFarmaceutica', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.FormaFarmaceutica',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/forma_farmaceutica_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/*
@DataSet :
Stores para las operaciones de Producto
==============================================================
*/
Ext.define('sisbotica_paulino.store.ProductosGenericos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Producto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
        nombregenerico : '',idprod : 0,
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_genericos_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
Stores para filtro en venta de productos por marca
==============================================================
*/
Ext.define('sisbotica_paulino.store.MarcaVenta', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Producto',
    autoLoad: false,
    extraParams :{
      query : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/marca_listar_venta'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
