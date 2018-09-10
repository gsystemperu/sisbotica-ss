<?php

 class jsPDF extends exFPDF
 {
    function AutoPrint($printer='')
    {
        // Open the print dialog
        if($printer)
        {
            $printer = str_replace('\\', '\\\\', $printer);
            $script = "var pp = getPrintParams();";
            $script .= "pp.interactive = pp.constants.interactionLevel.full;";
            $script .= "pp.printerName = '$printer'";
            $script .= "print(pp);";
        }
        else
            $script = 'print(true);';
        $this->IncludeJS($script);
    }


 }


 class ReporteVentas extends exFPDF
 {
    
    function Header()
    {
        $dataEmpresa =  json_decode(Empresa::listar())->data[0];
        $this->Image('../public/img/logo.jpg', 10, 10, 28);
        $this->SetFont('Arial','B',10);
        $this->setX(40);
        $this->MultiCell(0,4, pinta(''),'T','L');
        $this->setX(40);
        $this->MultiCell(0,4, pinta($dataEmpresa->razonsocial),0,'L');
        $this->SetFont('Arial','',8);
        $this->setX(40);
        $this->MultiCell(120,4, pinta(strtoupper($dataEmpresa->direccion)),0,'L');
        $this->setX(40);
        $this->MultiCell(120,4,"CORREO: ".pinta($dataEmpresa->correo),0,'L');
        $this->setX(40);
        $this->MultiCell(0,5,pinta("TELÉFONO: ".$dataEmpresa->telefono),'B','L');
    }
    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial','',8);
        $this->Cell(0,10,pinta('Página ').$this->PageNo(),0,0,'R');
    }
 }


 ?>