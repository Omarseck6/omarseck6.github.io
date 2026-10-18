"use client";

import { ArrowUpRight, Download, X } from "lucide-react";
import { useId, useRef, type ReactNode } from "react";
import { portfolio } from "@/data/portfolio";

type CvButtonProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

// Opens a dialog to pick the French or English CV, then shows the PDF in a new tab (where it can also be saved).
export function CvButton({ children, className, label }: CvButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className={className} aria-label={label} aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={dialogRef}
        className="cv-dialog"
        aria-labelledby={titleId}
        data-lenis-prevent
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="cv-dialog-panel">
          <div className="cv-dialog-head">
            <p>Curriculum vitae</p>
            <button type="button" className="cv-dialog-close" onClick={close} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <h2 id={titleId}>Choose a version</h2>
          <span className="cv-dialog-copy">The PDF opens in a new tab — read it online or save it from there.</span>
          <ul className="cv-options">
            {portfolio.cv.map((version) => (
              <li key={version.code}>
                <a href={version.href} hrefLang={version.language} target="_blank" rel="noopener" className="cv-option" onClick={close}>
                  <span className="cv-option-code">{version.code}</span>
                  <span className="cv-option-label">
                    <strong>{version.label}</strong>
                    <small>View PDF</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={version.href} download className="cv-option-download" aria-label={`Download CV (${version.label})`} onClick={close}>
                  <Download size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
