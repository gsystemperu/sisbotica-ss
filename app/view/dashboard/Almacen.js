
Ext.define('sisbotica_paulino.view.dashboard.Almacen',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sisbotica_paulino.view.dashboard.AlmacenController',
        'sisbotica_paulino.view.dashboard.AlmacenModel'
    ],

    controller: 'dashboard-almacen',
    viewModel: {
        type: 'dashboard-almacen'
    },

    html: 'Hello, World!!'
});
