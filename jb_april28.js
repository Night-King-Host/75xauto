if(main_ret == 179 || main_ret == 0){
	document.getElementById("load").remove();
    document.getElementById('menu').innerHTML='<tr id="mexp">'+
			'<td align="center" id="jailbreak" colspan="5" >'+
      '<div style=font-size:20px;text-align:center;color:yellow;>MIRA / GOLDHEN / ORBIS-TOOLBOX</div>'+
			'<a href="#" id="mira75X" class="button pointer" onMouseOver="progress.innerHTML=\'Mira by Al-Azif\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'mira75X\'); return false">Mira 75X</a>&nbsp;'+
			'<a href="#" id="mirab" class="button pointer" onMouseOver="progress.innerHTML=\'Mira2b Spoof to 9.99\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'mirab\'); return false">Mira2b</a>&nbsp;'+
			'<a href="#" id="goldhen10" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.0 By SiSTRo\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'goldhen10\'); return false" style="background-color: goldenrod;color: white">GoldHen V1.0</a>&nbsp;'+
			'<a href="#" id="goldhen11b7" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.1 Beta 7 by SiSTRo\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'goldhen11b7\'); return false" style="background-color: goldenrod;color: white">GoldHen V1.1B7</a>&nbsp;'+
			'<a href="#" id="goldhen11" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.1 by SiSTRo\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.1\'" onclick="toggle_payload(\'goldhen11\'); return false" style="background-color: goldenrod;color: white">GoldHen V1.1</a>&nbsp;'+
			'<a href="#" id="orbistoolbox" class="button pointer" onMouseOver="progress.innerHTML=\'OSM Orbis ToolBox Alpha Build 1167\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'orbistoolbox\'); return false" style="background-color: orangered;color: white">Orbis-ToolBox</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
      '<div style=font-size:20px;text-align:center;color:yellow;>PAYLOADS</div>'+
      '<a href="#" id="binloader" class="button pointer" onMouseOver="progress.innerHTML=\'Binloader\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'binloader\'); return false">Bin-Loader</a>&nbsp;'+
			'<a href="#" id="app2usb" class="button pointer" onMouseOver="progress.innerHTML=\'App to USB\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'app2usb\'); return false">App-2-USB</a>&nbsp;'+
			'<a href="#" id="disableupdates" class="button pointer" onMouseOver="progress.innerHTML=\'Disable Updates\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'disableupdates\'); return false">Disable-Updates</a>&nbsp;'+
			'<a href="#" id="enableupdates" class="button pointer" onMouseOver="progress.innerHTML=\'Enable Updates\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'enableupdates\'); return false">Enable-Updates</a>&nbsp;'+
			'<a href="#" id="dumper" class="button pointer" onMouseOver="progress.innerHTML=\'Games Dumper\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'dumper\'); return false">Dumper</a>&nbsp;'+
			'<a href="#" id="rifrenamer" class="button pointer" onMouseOver="progress.innerHTML=\'Rif Renamer\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'rifrenamer\'); return false">Rif-Renamer</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
			'<a href="#" id="backup" class="button pointer" onMouseOver="progress.innerHTML=\'Backup database\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'backup\'); return false">Back-Up</a>&nbsp;'+
			'<a href="#" id="restore" class="button pointer" onMouseOver="progress.innerHTML=\'Restore database\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'restore\'); return false">Restore</a>&nbsp;'+
			'<a href="#" id="module" class="button pointer" onMouseOver="progress.innerHTML=\'Kernel Module Dumper\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'module\'); return false">Module-Dumper</a>&nbsp;'+
			'<a href="#" id="ftp" class="button pointer" onMouseOver="progress.innerHTML=\'FTP server\'"; onmouseout="progress.innerHTML=\'Night King 7.5X FW Full Auto V1.0\'" onclick="toggle_payload(\'ftp\'); return false">FTP</a>&nbsp;'+
            '</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
      '</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'</td>'+
			'</tr>'+