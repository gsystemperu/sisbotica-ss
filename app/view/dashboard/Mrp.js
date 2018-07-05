
Ext.define('sisbotica_paulino.view.dashboard.Mrp',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sisbotica_paulino.view.dashboard.MrpController',
        'sisbotica_paulino.view.dashboard.MrpModel'
    ],

    controller: 'dashboard-mrp',
    viewModel: {
        type: 'dashboard-mrp'
    },

    html: 'Hello, World!!'
});
