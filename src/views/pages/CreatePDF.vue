<template>
    <main>
        <div>create pdf</div>
        <v-btn @click="downloadPDF">Descargar pdf</v-btn>
        <div id="text">
            hola com estasd
        </div>
    </main>
</template>
<script>
import { jsPDF } from "jspdf";

import './arial-italic.js'
export default{
    name:'createpdf',
    data(){
        return{
        contrato:{
            nombre:'celina tapia',
            ci:'9834934',
            expedido:'CBBA',
            nit:'34534534',
            nombrecompleto:'josue jiemenz',
            nivel:'Primaria',
            curso:'1ro',
            direccion:'barrio solterito',
            numero:'334',
            telefono:'9983948394',
            celular:'778378343',
            monto:'435'
        }
        }
    },
    methods:{
        downloadPDF(){
            const doc = new jsPDF();
             var imgLogo = new Image()
            imgLogo.src ="https://raw.githubusercontent.com/Jeziel-Guiev/sadosa_fotos/main/logo.jpg";

            var firstline=`Conste por el presente documento privado, que reconocido tendrá el valor de documento público que le asignan los Art. 519 y 1.297 del Código Civil, un contrato de prestación de servicios educativos, de acuerdo a las cláusulas siguientes:`;
            doc.addImage(imgLogo, 'JPG', 35, 12, 30, 30,"LOGO","NONE",0)//,'png',300,300,100,100,'MEDIUM',0);
            doc.setFontSize(12);
            doc.setFont("Times-Roman","bolditalic");
            doc.text(`COLEGIO SALESIANO "SANTO DOMINGO SAVIO"`,65, 20);
            doc.setFontSize(12);
            //doc.setFont("Times-Roman","bolditalic");
            doc.text(`SALESIANOS DE DON BOSCO`, 80, 25);
            doc.setFontSize(9);
            //doc.setFont("Times-Roman","bolditalic");
            doc.text(`"Da mihi animas, coetera tolle"`, 87, 30);
            doc.setFontSize(9);
            //doc.setFont("Times-Roman","bolditalic");
            doc.text(`(DB)`, 105, 35);
            doc.setFontSize(12);
            //doc.setFont("Times-Roman","bolditalic");
            doc.text(`CONTRATO DE PRESTACION DE`, 74, 45);
            doc.setFontSize(12);
            //doc.setFont("Times-Roman","bolditalic");
            doc.text(`SERVICIOS EDUCATIVOS`, 80, 50);
            doc.setFontSize(9.5);
            doc.setFont('times','italic');
            doc.text(firstline,20,60,{maxWidth: 170, align: "justify"});
            doc.setFontSize(9.5);
            doc.setFont('times','bolditalic');
            doc.text('PRIMERA.- DE LAS PARTES CONTRATANTES.- ',20,70);
            doc.setFontSize(9.5);
            doc.setFont('times','italic');
            doc.text('Intervienen en el presente contrato de una parte Sociedad',98,70,{maxWidth: 170, align: "left"});
            const d="sdfsdf"
           const secondline=`Salesiana - Unidad  Educativa  Santo Domingo  Savio de la ciudad de Cochabamba,  Autorizado  por la Resolución  Administrativa  No
            2314/98 SIE N.º 80980411, representado legalmente por su Director General el Reverendo Padre Tomas Mamani Tejerina con C.I. 2953827 Sc. facultado mediante poder Nº 484/2.021 otorgado ante Notaria N.º 25 otorgado ante Notaria Dra. Zhenia Jheney Celis Arambulo para fines del presente documento en adelante se denominará la UNIDAD EDUCATIVA.`;
            doc.setFontSize(9.5);
            doc.setFont('times','italic');
            doc.text(secondline,20,75,{maxWidth: 170, align: "justify"});

            const parrafocuatro=`Por otra parte, el Sr. (a) ${(this.contrato.nombre.toUpperCase())} con CI ${(this.contrato.ci.toUpperCase())} en su calidad de padre, madre o apoderado legal del/la estudiante ${(this.contrato.nombrecompleto.toUpperCase())} del CURSO: ${(this.contrato.curso.toUpperCase())} NIVEL: ${(this.contrato.nivel.toUpperCase())} TURNO: MANANA, con domicilio: ${(this.contrato.direccion.toUpperCase())} Telf.: ${(this.contrato.telefono.toUpperCase())} y/o celular N° ${(this.contrato.celular.toUpperCase())}, quien además declara tener los derechos y obligaciones en todos los ámbitos respecto al estudiante, en adelante denominado (a) simplemente el (a) RESPONSABLE.`;
            doc.text(parrafocuatro,20,100,{maxWidth: 170, align: "justify"});
  
            
            const parrafoquinto=`SEGUNDA.- ANTECEDENTES.-  Sociedad Salesiana se constituye en una Asociación Privada de Fieles, sin fines de lucro, perteneciente a la Iglesia Católica, de naturaleza jurídica eclesial con presencia a nivel nacional y tiene por objeto primordial promover  el desarrollo  integral de las personas  bolivianas,  sobre todo de los estudiantes  a través  de obras de carácter educativo. El Ministerio de Educación, como ente rector del sector de la educación en el país, emite en fecha 03 de Enero del
            2022, la Resolución Ministerial No 001/2022 denominada "NORMAS GENERALES PARA LA GESTION EDUCATIVA 2022" la cual constituye la base legal de este Contrato de servicios educativos privados.
            `;
            doc.text(parrafoquinto,20,120,{maxWidth: 170, align: "justify"});  
            
            const parrafosexto=`TERCERA.-DEL OBJETO.- Por el presente contrato de servicios educativos la UNIDAD EDUCATIVA y el RESPONSABLE acuerdan conformar una relación obligacional entre ambas partes, el RESPONSABLE  contrata los servicios educativos de carácter privado de la UNIDAD EDUCATIVA;  por su parte ésta se compromete a otorgar al estudiante durante la gestión escolar 2022 los servicios de Enseñanza - Aprendizaje, sea en la modalidad a distancia, presencial, semi presencial, siempre y cuando esté establecida y permitida por el Ministerio de Educación, servicio que se desarrollará con parámetros de calidad y exigencia  basados en los programas  oficiales del Estado Plurinacional  de Bolivia y programas  complementarios  de la intitución, aplicando sistemas modernos, manejo adecuado de las Tecnologías de Información y Comunicación, plataformas educativas, teniendo como pilar fundamental la educación cristiana acorde a la moral y las normas de la Iglesia Católica, poniendo en práctica el Sistema Preventivo de Don Bosco, formación en valores morales y respetando ante todo la libertad religiosa y de culto.`;
            doc.text(parrafosexto,20,152,{maxWidth: 170, align: "justify"});

            const parrafoseptimo=`CUARTA.- DEL PRECIO Y FORMA DE PAGO DE LOS SERVICIOS EDUCATIVOS, CONSTITUCIÓN  DE MORA.- Por la prestación de servicios educativos EL RESPONSABLE se obliga a cancelar a la UNIDAD EDUCATIVA un MONTO TOTAL de Bs. 4350 (CUATRO MIL TRESCIENTOS  CINCUENTA  00/100 Bolivianos) Por la gestión escolar 2022, que puede ser cancelado en un solo pago al inicio o en 10 cuotas mensuales de Bs. ${(this.contrato.monto.toUpperCase())}, hasta el día 10 de cada mes de forma anticipada. Los pagos deberán realizarse en la forma que establezca la UNIDAD EDUCATIVA, la cual emitirá la factura correspondiente al nombre del RESPONSABLE firmante de este contrato con N. de NIT/CI: 939444.`;
            doc.text(parrafoseptimo,20,192,{maxWidth: 170, align: "justify"});

            const parrafooctavo=`
En  el  caso  que  las  Autoridades  competentes  determinen  porcentajes  de  incremento  a  las  pensiones  escolares,  el RESPONSABLE se obliga a cancelar el mismo a la UNIDAD EDUCATIVA de manera retroactiva al primer mes de prestación de servicio educativo.

En el entendido que el Gobierno a través del Ministerio de Educación apruebe el bachillerato técnico – Humanístico, o se añadan otras actividades extracurriculares, el RESPONSABLE se compromete a cubrir el nuevo precio a establecer con los padres de familia por las nuevas materias y actividades.

En el caso que la unidad  educativa  hubiese  prestado  los servicios  educativos  al estudiante  y el  RESPONSABLE no cumpliese  con la obligación  de realizar  los pagos  mensuales,  vencido  el plazo  establecido  en la presente  cláusula  el RESPONSABLE se constituirá en mora automática y se obligará al cumplimiento total de la deuda en la vía ejeciutiva.

Así mismo el RESPONSABLE  autoriza a la SOCIEDAD  SALESIANA,  representada  por P. Reinaldo Villazón  Chávez, a solicitar, verificar y reportar su información  financiera,  judicial y comercial  registrada  en el buró de  información  crediticia INFOCENTER S.A., mientras dure su relación contractual con SOCIEDAD SALESIANA. 
            `;
            doc.text(parrafooctavo,20,215,{maxWidth: 170, align: "justify"});
            doc.save("a4.pdf");  
        }
    }
}

</script>
