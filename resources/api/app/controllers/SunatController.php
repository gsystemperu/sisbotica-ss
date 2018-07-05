<?php
use Greenter\Model\Client\Client;
use Greenter\Model\Sale\Invoice;
use Greenter\Model\Sale\SaleDetail;
use Greenter\Model\Sale\Legend;
use Greenter\Ws\Services\SunatEndpoints;

use \Phalcon\Mvc\Controller as Controller;

class SunatController extends Controller
{
    public function initialize(){$this->view->disable(); }

    public function enviarboletaAction()
    {
      $request        = new Phalcon\Http\Request();
      $response       = new \Phalcon\Http\Response();

      $util = Util::getInstance();
      // Cliente
      $client = new Client();
      $client->setTipoDoc('1')
          ->setNumDoc('20203030')
          ->setRznSocial('PERSON 1');
      
      // Venta
      $invoice = new Invoice();
      $invoice->setTipoDoc('03')
          ->setSerie('B001')
          ->setCorrelativo('1')
          ->setFechaEmision(new DateTime())
          ->setTipoMoneda('PEN')
          ->setClient($client)
          ->setMtoOperGravadas(200)
          ->setMtoOperExoneradas(0)
          ->setMtoOperInafectas(0)
          ->setMtoIGV(36)
          ->setMtoImpVenta(100)
          ->setCompany($util->getCompany());
      
      $item1 = new SaleDetail();
      $item1->setCodProducto('C023')
          ->setUnidad('NIU')
          ->setCantidad(2)
          ->setDescripcion('PROD 1')
          ->setIgv(18)
          ->setTipAfeIgv('10')
          ->setMtoValorVenta(100)
          ->setMtoValorUnitario(50)
          ->setMtoPrecioUnitario(56);
      
      $items = Util::generator($item1, 14);
      
      $legend = new Legend();
      $legend->setCode('1000')
          ->setValue('SON CIEN CON 00/100 SOLES');
      
      $invoice->setDetails($items)
          ->setLegends([$legend]);
      
      // Envio a SUNAT.
      $see = $util->getSee(SunatEndpoints::FE_BETA);
      $res = $see->send($invoice);
      $util->writeXml($invoice, $see->getFactory()->getLastXml());

      if ($res->isSuccess()) {
        /**@var $res \Greenter\Model\Response\BillResult*/
        $cdr = $res->getCdrResponse();
        
        $util->writeCdr($invoice, $res->getCdrZip());

        echo $util->getResponseFromCdr($cdr);
        } else {
            var_dump($res->getError());
        }
            

    }
    public function pdfboletaAction(){
        
        $util = Util::getInstance();
        // Cliente
        $client = new Client();
        $client->setTipoDoc('1')
            ->setNumDoc('20203030')
            ->setRznSocial('PERSON 1');

        // Venta
        $invoice = new Invoice();
        $invoice->setTipoDoc('03')
            ->setSerie('B001')
            ->setCorrelativo('1')
            ->setFechaEmision(new DateTime())
            ->setTipoMoneda('PEN')
            ->setClient($client)
            ->setMtoOperGravadas(200)
            ->setMtoOperExoneradas(0)
            ->setMtoOperInafectas(0)
            ->setMtoIGV(36)
            ->setMtoImpVenta(100)
            ->setCompany($util->getCompany());

        $item1 = new SaleDetail();
        $item1->setCodProducto('C023')
            ->setUnidad('NIU')
            ->setCantidad(2)
            ->setDescripcion('PROD 1')
            ->setIgv(18)
            ->setTipAfeIgv('10')
            ->setMtoValorVenta(100)
            ->setMtoValorUnitario(50)
            ->setMtoPrecioUnitario(56);

        $items = $util->generator($item1, 10);

        $legend = new Legend();
        $legend->setCode('1000')
            ->setValue('SON CIEN CON 00/100 SOLES');

        $invoice->setDetails($items)
            ->setLegends([$legend]);

        try {
            $pdf = $util->getPdf($invoice);
            $util->showPdf($pdf, $invoice->getName().'.pdf');
        } catch (Exception $e) {
            var_dump($e);
        }
    }
}
