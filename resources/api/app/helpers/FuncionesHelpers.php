<?php

 	class FuncionesHelpers
 	{

 		public function esCadenaNulo($objeto)
 		{
		    if (!empty($objeto)) {
		        $retorna = $objeto;
		        $retorna = "'" . str_replace("'", "''", $retorna) . "'";
		        $retorna = stripslashes($retorna);
		        return $retorna;
		    }
		    return "NULL";
		}

		public function esNumeroNulo($objeto) {
		    if (!empty($objeto) && trim($objeto) != "" && is_numeric($objeto)) {
		        return $objeto;
		    }
		    return "NULL";
		}

		public function esNumeroCero($objeto) {
		    if (!empty($objeto) && trim($objeto) != "" && is_numeric($objeto)) {
		        return $objeto;
		    }
		    return "0";
		}

    public function nombreMes($objeto) {
       $nombre = '';
		    switch ($objeto) {
		      case "01": $nombre='ENERO'; break;
          case "02":$nombre='FEBRERO'; break;
          case "03":$nombre='MARZO'; break;
          case "04":$nombre='ABRIL'; break;
          case "05":$nombre='MAYO'; break;
          case "06":$nombre='JUNIO'; break;
          case "07":$nombre='JULIO'; break;
          case "08":$nombre='AGOSTO'; break;
          case "09":$nombre='SEPTIEMBRE'; break;
          case "10":$nombre='OCTUBRE'; break;
          case "11":$nombre='NOVIEMBRE'; break;
          case "12":$nombre='DICIEMBRE'; break;
		    }
        return $nombre;
	}
	
	public function guardarImagen($obj,$nom){
		$rs = true;
		$image = $obj;
		$pos  = strpos($image, ';');
		$type = explode(':', substr($image, 0, $pos))[1];
		$split = explode( '/', $type );
		$type = $split[1]; 
		switch ($type) {
			case 'jpeg':$image = imagecreatefromjpeg($image);break;
			case 'png' :$image = imagecreatefrompng($image);break;
			case 'bmp' :$image = imagecreatefrombmp($image);break;
			case 'gif' :$image = imagecreatefromgif($image);break;			
		}
		imagejpeg($image, 'img/'.$nom.'.jpg', 100);
		imagedestroy($image);
		return $rs;
	}
	public function guardarImagenProducto($obj,$nom){
		$rs = true;
		$image = $obj;
		$pos   = strpos($image, ';');
		$type  = explode(':', substr($image, 0, $pos))[1];
		$split = explode('/', $type );
		$type = $split[1]; 
		switch ($type) {
			case 'jpeg':$image = imagecreatefromjpeg($image);break;
			case 'png' :$image = imagecreatefrompng($image);break;
			case 'bmp' :$image = imagecreatefrombmp($image);break;
			case 'gif' :$image = imagecreatefromgif($image);break;			
		}
		imagejpeg($image, 'img/P-'.$nom.'.jpg', 100);
		imagedestroy($image);
		return $rs;
	}


 	}
