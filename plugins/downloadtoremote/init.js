plugin.loadLang();

if(plugin.canChangeMenu() && (theWebUI.systemInfo.rTorrent.iVersion >= 0x805))
{
	theWebUI.downloadToRemote = function()
	{
		var h = "";
		var sr = theWebUI.getTable("trt").rowSel;
		for(var k in sr) 
			if((sr[k] == true) && (k.length==40))
			{
				h += "&hash="+k;
			}

		var action = "?action=downloadToRemote" + h;
		theWebUI.request(action);

		alert("requesting action: " + action);
	}

	plugin.createMenu = theWebUI.createMenu;
	theWebUI.createMenu = function( e, id )
	{
		plugin.createMenu.call(this, e, id);
		if(plugin.enabled)
		{
			theContextMenu.add( ["Download to pi", theWebUI.downloadToRemote] );
		}
	}
}