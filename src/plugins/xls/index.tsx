// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from "react";
import styled from "styled-components";
import { DocRenderer } from "../..";
import ExcelViewer from "excel-viewer";

const XLSRenderer: DocRenderer = ({ mainState: { currentDocument } }) => {
  useEffect(() => {
    if (currentDocument) {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(currentDocument.file);
      fileReader.onloadend = function () {
        const buffer = new Uint8Array(fileReader.result).buffer;
        new ExcelViewer("#excel-view", buffer, {
          theme: "light",
          lang: "en",
          themeBtn: false,
        });
      };
    }
  }, [currentDocument]);

  return (
    <Container>
      <div id="excel-view"></div>
    </Container>
  );
};

export default XLSRenderer;

XLSRenderer.fileTypes = [
  "xls",
  "application/vnd.ms-excel",
  "xlsx",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "csv",
  "text/csv",
];
XLSRenderer.weight = 0;
XLSRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
  width: 100%;
`;
