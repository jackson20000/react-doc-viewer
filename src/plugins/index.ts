import BMPRenderer from "./bmp";
import HTMLRenderer from "./html";
import JPGRenderer from "./jpg";
// import MSDocRenderer from "./msdoc";
import PDFRenderer from "./pdf";
import PNGRenderer from "./png";
import TIFFRenderer from "./tiff";
import TXTRenderer from "./txt";
// import CSVRenderer from "./csv";
import GIFRenderer from "./gif";
import DOCRenderer from "./doc";
import xlsRenderer from "./xls";

export const DocViewerRenderers = [
  xlsRenderer,
  DOCRenderer,
  BMPRenderer,
  HTMLRenderer,
  JPGRenderer,
  // MSDocRenderer,
  PDFRenderer,
  PNGRenderer,
  TIFFRenderer,
  TXTRenderer,
  // CSVRenderer,
  GIFRenderer,
];
