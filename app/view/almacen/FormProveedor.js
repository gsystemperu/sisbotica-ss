Ext.define('sisbotica_paulino.view.almacen.FormProveedor', {
    extend: 'Ext.window.Window',
    xtype: 'wFormProveedor',
    alias: 'widget.wFormProveedor',
    requires: [
        'Ext.layout.container.VBox',
        'Ext.form.field.*',
        'Ext.form.Panel',
        'sisbotica_paulino.view.almacen.AccionesProveedor'
    ],
    layout: 'fit',
    title: '..:: Registro de Proveedor ::..',
    width: 480,
    height: 450,
    autoShow: true,
    controller :'acciones-proveedor',
    config : {
        control:''
    },
    initComponent: function () {
       me = this;
        Ext.apply(this, {
            items: this.getFormulario(me.getControl())
        });
        this.callParent();
    },
    getFormulario: function (_idcontrol) {
        storeTipoDoc = Ext.create('sisbotica_paulino.store.TipoDocumentos');
        return obj = [
            {
                xtype: 'form',
                defaultType:'textfield',
                reference :'frmProveedor',
                bodyPadding : 10,
                defaults:{
                      anchor :'100%',
                      flex :1
                },
                url : sisbotica_paulino.util.Rutas.proveedorGuardar,
                items:[
                    {
                        xtype:'hiddenfield',
                        name :'id',
                        value : 0
                    },
                    {
                        fieldLabel:'Razon Social',
                        allowBlank : false,
                        name : 'razonsocial',
                    },
                    {
                        xtype: 'combo',
                        name: 'iddocidentidad',
                        store: storeTipoDoc,
                        queryMode: 'local',
                        displayField: 'descripcion',
                        valueField: 'idtipdoc',
                        fieldLabel : 'Tipo Documento',
                        value: 1,
                        editable: false,
                        flex: 1.5
                    },
                    {
                        fieldLabel:'Numero',
                        name : 'numrucprov'
                    },
                    {
                        fieldLabel:'Correo',
                        name : 'correo',
                        type:'mail'
                        
                    },
                    {
                        fieldLabel:'Contacto',
                        name :'contacto'
                       
                    },
                    {
                        fieldLabel:'Telefono',
                        name :'telefono'
                        
                    },
                    {
                        xtype:'textarea',
                        fieldLabel:'Direccion',
                        name :'direccion'
                        
                    },
                    {
                        xtype:'textarea',
                        fieldLabel:'Direccion Fiscal',
                        name :'direccionfiscal'
                        
                    }
                ],
                buttons:[
                    {
                        text :'Cancelar',
                        handler : 'onClickCancelarProveedor',
                        
                    },
                    {
                        text :'Guardar',
                        handler : 'onClickGuardarProveedorModal',
                        idcontrol : _idcontrol
                    }
                    
                ]
            }
        ];

    }
});