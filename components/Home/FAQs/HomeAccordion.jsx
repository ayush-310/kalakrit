"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HomeAccordion({ faq }) {
  return (
    <div className="w-full h-auto mb-[1em]">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#201F22]" />}
          aria-controls="panel1a-content"
          className="text-[#201F22BF] bg-[#201f220d]  border border-[#eb5a0040] font-Poppins"
          id="panel1a-header"
        >
          <Typography className="text-xl">{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails className="text-xl leading-9 tracking-wide py-12 box-border">
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
