Ext.define('sisbotica_paulino.store.StoreMantenimientos', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/* 
@DataSet :
Stores para los mantenimientos de las tablas maestras
==============================================================
*/
Ext.define('sisbotica_paulino.store.Estados', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Estado',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estados_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Bancos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Banco',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/bancos_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Almacenes', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Almacen',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.AlmacenSecciones', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.AlmacenSecciones',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_secciones_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Categoria', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Categoria',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/categoria_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.Colores', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Color',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/color_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Medidas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Medida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/medidas_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.TipoDeProductos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.TipoDeProducto',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tipo_producto_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.UnidadDeMedidas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.UnidadDeMedida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/unidad_medida_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Tarifas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Tarifa',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tarifa_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



/* 
@DataSet :
Stores para los mantenimientos Tabla Modelo
==============================================================
*/
Ext.define('sisbotica_paulino.store.Modelos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Modelo',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/modelo_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para los mantenimientos Tabla Marca
==============================================================
*/
Ext.define('sisbotica_paulino.store.Marcas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Marca',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/marca_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las series de documentos del sistema
==============================================================
*/

Ext.define('sisbotica_paulino.store.Series', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Serie',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/series_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las ticketeras del sistema
==============================================================
*/

Ext.define('sisbotica_paulino.store.Ticketeras', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Ticketera',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ticketeras_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/* 
@DataSet :
Stores tiendas 
==============================================================
*/

Ext.define('sisbotica_paulino.store.Tiendas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Tienda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tiendas_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



/* 
@DataSet :
Stores Perfiles 
==============================================================
*/

Ext.define('sisbotica_paulino.store.Perfiles', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Perfil',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/perfiles_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});




/* 
@DataSet :
Stores Usuarios
==============================================================
*/

Ext.define('sisbotica_paulino.store.Usuarios', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModels'],
    model   :'sisbotica_paulino.model.Usuario',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/usuarios_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
