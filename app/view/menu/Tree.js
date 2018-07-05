Ext.define('sisbotica_paulino.view.menu.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'menutree',

    requires: [
       'sisbotica_paulino.overrides.tree.ColumnOverride'
    ],

    border: 0,
    autoScroll: true,
    rootVisible: false
});
