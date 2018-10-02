Ext.define('sisbotica_paulino.store.StoreVentas', {
    extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }
});

// @DataSet :

Ext.define('sisbotica_paulino.store.Clientes', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Cliente',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idper',direction: 'ASC'}],
    extraParams: { vDocumento: '', vRuc: '', vDatos: ''},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
Ext.define('sisbotica_paulino.store.ProductosPorPrecioPersona', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.ProductoPorCliente',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idprod',direction: 'ASC'}],
    extraParams: { 
        vCodigo: '', 
        vDescripcion: '', 
        vCategoria : null,
        vIdCliente:0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_producto_por_persona'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.DetalleCotizacion', {
    extend: 'Ext.data.Store',
    fields: [
            {name: "idprod", type:'int' },
            {name: "descripcion", type:'string' },
            {name: "cantidad", type:'int' },
            {name: "precio", type:'float' },
            {name: "total", type:'float' }  ,
            {name: "vencimiento",type:'date', format:'d/m/Y'},
            {name: "presentacion", type:'string' },
            {name: "unidadcantidad", type:'float' },
            {name: "preciofraccion", type:'float' },
            {name: "precioventa", type:'float' },
            {name: "mv", type:'string' }
            
    ],
    proxy: { type: 'memory' }
});

Ext.define('sisbotica_paulino.store.TipoDocumentos', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TipoDocumento',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idtipdoc',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_documentos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Cotizaciones', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Cotizacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde      : '',
        vHasta      : '',
        vPersona    : '',
        vCodigo     : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_cotizaciones'},
        reader: {
            type: 'json',
            rootProperty: 'data',
            //totalProperty: 'totalreg'
        }
    }
});

Ext.define('sisbotica_paulino.store.CotizacionesDetalle', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.CotizacionDetalle',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'item',direction: 'ASC'}],
    extraParams: { vIdCotizacion: 0 },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/cotizacion_detalle_vista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.FormaPago', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.FormaPago',
    autoLoad: false,
    autoSync  : true,
    sorters: [{property: 'idfopag',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_forma_pago'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.ModoEntrega', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.ModoEntrega',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idmodo',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_modo_entrega'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.Vendedores', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Vendedor',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idvend',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_vendedores'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.UnidadMedida', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.UnidadMedida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idumed',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_unidad_medida'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



Ext.define('sisbotica_paulino.store.Presentacion', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Presentacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idpres',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_presentacion'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.Categoria', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Categoria',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcate',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_categorias'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.CotizacionesEstadistica', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Cotizacion',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vPersona : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.CotizacionesEstadisticaProducto', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.EstProducto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vProducto : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_producto'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.CotizacionesEstadisticaVendedor', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Cotizacion',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vProducto : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_vendedor'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.CotizacionesDelCliente', {
    extend: 'Ext.data.Store',requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.Cotizacion',
    autoLoad: false,extraParams: {vCodigo : 0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_cotizaciones_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.CotizacionesFacturar', {
    extend: 'Ext.data.Store',requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.CotizacionesFacturar',
    autoLoad: true,
    extraParams: {vDesde : '',vHasta:''},
    groupField: 'fechacoti',
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/cotizaciones_a_facturar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.ClienteVentasFacturacion', {
    extend: 'Ext.data.Store',requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.CotizacionesFacturar',
    autoLoad: false,
    extraParams: {idper : 0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/persona_buscar_ventas'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.DocumentoVenta', {
    extend: 'Ext.data.Store',requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TipoDocumentoVenta',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/documentos_venta_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



Ext.define('sisbotica_paulino.store.PuntoVentaPagos', {
    extend: 'Ext.data.Store',requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.CotizacionesFacturar',
    autoLoad: false,
    extraParams: {desde : '',hasta:''},
    groupField: 'fechafact',
    autoSort :false,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_punto_venta_pagos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.DetalleFacturacion', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.DetFacturacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams: {idfacturacion:101},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/detalle_facturacion'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('sisbotica_paulino.store.NombreMoneda', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModel'],
    model   :'sisbotica_paulino.model.NombreMoneda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_nombre_moneda'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

//@ Store : Muestra los datos de los ingresos de una orden de compra

Ext.define('sisbotica_paulino.store.DetalleIngresoGuiaVista', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.DetalleIngresoGuiaVista',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ordercompra_lista_detalle_ingresos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


// @ Store : Listado de Motivos de Translado para las guias de remisión

Ext.define('sisbotica_paulino.store.MotivosTranslados', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.MotivoTranslado',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_motivos_translado'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


// @ Store : Listado de Documentos de venta asignados a una tienda
Ext.define('sisbotica_paulino.store.TiendaDocumentosVentaAsignados', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TiendaDocumentoVentaAsignado',
    autoLoad: false,
    extraParams: {
        idtienda : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/empresa_listar_doc_ventas_asignados'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

// @ Store : Listado de Documentos de venta para asignar
Ext.define('sisbotica_paulino.store.TiendaDocumentosVenta', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TiendaDocumentoVenta',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/empresa_listar_doc_ventas'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

// @ Store : Listado de Ticketeras de venta asignadas a una tienda
Ext.define('sisbotica_paulino.store.TiendaTicketerasAsignadas', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TiendaTicketeraAsignada',
    autoLoad: false,
    extraParams: {
        idtienda : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/empresa_listar_ticketeras_asignadas'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

// @ Store : Listado de Ticketeras de venta para asignar
Ext.define('sisbotica_paulino.store.TiendaTicketeras', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.TiendaTicketera',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/empresa_listar_ticketeras'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


// @ Store : Listado de metodos de pago

Ext.define('sisbotica_paulino.store.MetodosPago', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.MetodoPago',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_metodo_pago'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
// @ Store : Listado de metodos de pago

Ext.define('sisbotica_paulino.store.ListaAperturaCaja', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.AperturaCaja',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_apetura_caja'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('sisbotica_paulino.store.ListaAperturaCajaHistorico', {
    extend: 'Ext.data.Store',
    requiere:['sisbotica_paulino.model.DataModelVentas'],
    model   :'sisbotica_paulino.model.AperturaCaja',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_apetura_caja_his'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
