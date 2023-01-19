import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { renderAsync, defaultOptions } from "docx-preview";
import { DocRenderer } from "../..";

const DOCRenderer: DocRenderer = ({ mainState: { currentDocument } }) => {
  useEffect(() => {
    const con = document.getElementById("docx-preview") as HTMLElement;
    if (currentDocument) {
      renderAsync(currentDocument.file, con, undefined, {
        ...defaultOptions,
      }).then((x) => console.log("docx: finished"));
    }
  }, [currentDocument]);

  return (
    <Container>
      <div id="docx-preview"></div>
    </Container>
  );
};

export default DOCRenderer;

DOCRenderer.fileTypes = [
  "application/msword",
  "docx",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream",
];
DOCRenderer.weight = 0;
DOCRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
  width: 100%;
`;
