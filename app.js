Ext.setGlyphFontFamily('FontAwesome');
Ext.require('sisbotica_paulino.util.Glyphs');
Ext.require('sisbotica_paulino.Global');
Ext.require('sisbotica_paulino.util.Data');

/*Ext.Loader.setConfig({
  enabled:true,
  paths:{
      'gsperu':'./util'
  }
});*/


Ext.application(
{
    name: 'sisbotica_paulino',
    extend: 'sisbotica_paulino.Application'

});
