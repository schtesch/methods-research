# searchForGuidance — candidates for the open guidance entries

Working document, not part of the rendered site. It lists candidate guidance papers for
every `[to be added]` slot in `approaches/` and `objectives/` so you can decide what goes in.

## How to use

Tick `[x]` for anything you want added. Leave unticked to skip. Add notes inline as you like —
I will read your ticks and edit the `.qmd` files, add missing bib entries, re-render, and push.

Every slot ends with a **None identified** option, because that is the other real end state in
this repo (`3real-datasets.qmd` and `10guidance-reporting.qmd` already use it). Ticking it closes
the slot rather than leaving it open.

**Legend**
- `📗 in bib` — already in `references.bib`, cite key shown, nothing to add
- `➕ new` — not in the bib yet; I add the entry (details verified against Crossref at that point)
- `⚠️` — weak or borderline fit, flagged so you can reject it quickly

**Scope note.** Most slots have no guidance written specifically for *methods research*. Where that
is the case I propose the general health-research guidance for that design, on the assumption that a
reader doing e.g. a qualitative methods study is better served by COREQ than by nothing. Reject any
where you would rather show an honest gap.

**On lights.science.** No public API and no publicly indexed records — its search runs through an
authenticated backend, so I could not query it programmatically and did not push further. If you
have an account, LIGHTS is the best place to sanity-check the gaps below, especially the slots I
marked *None identified*. Candidates here come from your own `references.bib` (53 curated entries
are not yet cited anywhere — see the appendix), targeted web searches, and the EQUATOR catalogue.

**Counts.** 74 open slots across 29 pages. 53 uncited bib entries available.

---

# Part 1 — Approaches

## A1 Theory-based methods research

Nothing exists that tells you how to do mathematical derivation or philosophy-of-science work
*as methods research*. I would expect all three to close as gaps.

**Understanding and applying**
- [ ] **Heinze 2024** — Phases of methodological research in biostatistics · 📗 `Heinze2024-tl` · Positions theoretical work as phase 0/I of a methods pipeline; the closest thing to a roadmap.
- [ ] None identified

**Reporting**
- [ ] None identified

**Assessing**
- [ ] None identified

## A2 Simulation studies

**Assessing** (other two already filled)
- [ ] **White 2024** — How to check a simulation study · 📗 `White2024how` · Already cited under *understanding*; it is functionally a checking/appraisal procedure, so it fits here too.
- [ ] **Nießl 2022** — Over-optimism in benchmark studies and the multiplicity of design and analysis options · ➕ new · WIREs Data Min Knowl Discov; names the researcher-degrees-of-freedom that make simulation/benchmark results untrustworthy.
- [ ] None identified

## A4 Reliability and agreement studies

**Understanding and applying**
- [ ] **Aczel 2021** — Consensus-based guidance for conducting and reporting multi-analyst studies · ➕ new · eLife 10:e72185. Directly covers the many-analyst variant your definition calls out.
- [ ] **Mokkink / COSMIN** — COSMIN methodology for reliability and measurement error studies · ➕ new · The standard framework for reliability study design.
- [ ] None identified

**Reporting**
- [ ] **Kottner 2011 — GRRAS** — Guidelines for Reporting Reliability and Agreement Studies · ➕ new · J Clin Epidemiol 64(1):96–106. Purpose-built, EQUATOR-listed. Strongest single candidate on this page.
- [ ] **Aczel 2021** — as above, covers reporting of multi-analyst studies · ➕ new
- [ ] None identified

**Assessing**
- [ ] **Lucas 2010 — QAREL** — Quality appraisal tool for studies of diagnostic reliability · ➕ new · Built for reliability studies; diagnostic framing may need a caveat. ⚠️
- [ ] **COSMIN risk of bias checklist** · ➕ new · Has a dedicated reliability box.
- [ ] None identified

## A5 Methodological randomized studies

**Understanding and applying**
- [ ] **Treweek 2018** — Trial Forge Guidance 1: what is a SWAT? · 📗 `Treweek2018trial` · The canonical how-to for studies within a trial.
- [ ] **Devane 2022** — Study within a review (SWAR) · 📗 `Devane2022study` · The review-embedded counterpart.
- [ ] **SWAT Store / SWAR Store** · 📗 `OtherOtherswat`, `OtherOtherswar` · Registries of existing protocols; practical rather than guidance. ⚠️
- [ ] None identified

**Reporting**
- [ ] **Hopewell 2025 — CONSORT 2025** · 📗 `Hopewell2025consort` · Methodological randomized studies are randomized trials, so CONSORT applies directly.
- [ ] None identified

**Assessing**
- [ ] **Sterne 2019 — RoB 2** — Revised Cochrane risk-of-bias tool for randomized trials · ➕ new · Same argument as CONSORT above.
- [ ] None identified

## A6 Quantitative surveys

**Understanding and applying**
- [ ] **Kelley 2003** — Good practice in the conduct and reporting of survey research · ➕ new · Int J Qual Health Care 15(3):261–266. Short, practical, widely cited.
- [ ] **Burns 2008** — A guide for the design and conduct of self-administered surveys of clinicians · ➕ new · CMAJ. Closest to surveying researchers specifically.
- [ ] None identified

**Reporting**
- [ ] **Sharma 2021 — CROSS** — Consensus-Based Checklist for Reporting of Survey Studies · ➕ new · J Gen Intern Med. Current EQUATOR-listed standard.
- [ ] **Eysenbach 2004 — CHERRIES** — Checklist for Reporting Results of Internet E-Surveys · ➕ new · Older, but still the reference for web surveys.
- [ ] None identified

**Assessing**
- [ ] None identified — no established appraisal tool for survey research that I can defend; CROSS is sometimes used this way but was not built for it.

## A7 Qualitative studies

**Understanding and applying**
- [ ] **Braun & Clarke 2006** — Using thematic analysis in psychology · ➕ new · The method your definition names.
- [ ] **Hennink 2022** — Sample sizes for saturation in qualitative research · 📗 `Hennink2022sample` · Speaks to the saturation question you flag as a key design feature.
- [ ] **Malterud 2016** — Sample size in qualitative interview studies: information power · ➕ new · The main alternative to saturation reasoning.
- [ ] **Davis 2019** — Beyond interviews and focus groups · 📗 `Davis2019beyond` · Qualitative methods in a trials context specifically.
- [ ] None identified

**Reporting**
- [ ] **Tong 2007 — COREQ** — Consolidated criteria for reporting qualitative research · ➕ new · Interviews and focus groups; matches your definition exactly.
- [ ] **O'Brien 2014 — SRQR** — Standards for Reporting Qualitative Research · ➕ new · Broader than COREQ, less prescriptive.
- [ ] None identified

**Assessing**
- [ ] **CASP Qualitative Checklist** · ➕ new · Most widely used appraisal tool; not a journal article, cite as a web resource. ⚠️
- [ ] None identified

## A8 Consensus studies

**Assessing** (other two already filled)
- [ ] **Khodyakov 2023** — RAND methodological guidance for conducting **and critically appraising** Delphi panels · 📗 `Khodyakov2023rand` · Explicitly covers appraisal. Strongest candidate; already in your bib and uncited.
- [ ] **Jünger 2017 — CREDES** — Guidance on conducting and reporting Delphi studies · ➕ new · Palliative-care framing but general in substance. ⚠️
- [ ] None identified

## A9 Reviews of applied or planned methods

This is the best-served page in the whole typology, and nearly all of it is already in your bib.

**Understanding and applying**
- [ ] **Mbuagbaw 2020** — A tutorial on methodological studies: the what, when, how and why · 📗 `Mbuagbaw2020a` · The standard tutorial.
- [ ] **Khalil 2023** — Guidance on conducting methodological studies – an overview · 📗 `Khalil2023guidance`
- [ ] **Puljak 2019** — Research-on-research studies or methodological studies are primary research · 📗 `Puljak2019research-on-research` · Conceptual framing rather than how-to. ⚠️
- [ ] **Lawson 2020** — Mapping the nomenclature, methodology, and reporting of studies that review methods · 📗 `Lawson2020mapping`
- [ ] None identified

**Reporting**
- [ ] **Lawson 2020** — MISTIC reporting checklist (protocol) · 📗 `Lawson2020reporting` · Note this is the protocol, not a published checklist. ⚠️
- [ ] **Puljak 2019** — Reporting checklist for methodological studies is urgently needed · 📗 `Puljak2019reporting` · A call for one, not one itself. ⚠️
- [ ] None identified

**Assessing**
- [ ] **Matos Silva 2025** — Limited consensus in expert opinions on studies evaluating design, conduct, analysis or reporting · 📗 `MatosSilva2025limited` · Documents the absence of criteria; arguably the honest answer here. ⚠️
- [ ] None identified

## A10 Meta-epidemiological studies

**Reporting** (understanding + assessing filled this session)
- [ ] **Lawson 2020** — MISTIC · 📗 `Lawson2020reporting` · Covers methodological studies broadly, meta-epi included.
- [ ] **Puljak 2020** — What is a meta-epidemiological study? · 📗 `Puljak2020what` · Documents heterogeneous designs and reporting; definitional rather than a checklist. ⚠️
- [ ] None identified

## A11 Scoping reviews of methods research

**Understanding and applying**
- [ ] **Martin 2020** — Towards a framework for the design, implementation and reporting of **methodology** scoping reviews · 📗 `Martin2020towards` · Written for exactly this type. Best fit on the page and uncited in your bib.
- [ ] **Peters 2020 / JBI** — Updated methodological guidance for scoping reviews · ➕ new · The standard conduct manual.
- [ ] **Arksey & O'Malley 2005** + **Levac 2010** · ➕ new · The original framework and its main refinement.
- [ ] **Munn 2022** — What are scoping reviews? A formal definition · 📗 `Munn2022what`
- [ ] **Gentles 2016** — Reviewing the research methods literature · 📗 `Gentles2016reviewing` · Methods-literature-specific.
- [ ] **Hirt 2024** — Searching a methods topic · 📗 `Hirt2024searching` · Addresses the search difficulty your page calls out.
- [ ] None identified

**Reporting**
- [ ] **Tricco 2018 — PRISMA-ScR** · ➕ new · Ann Intern Med. The obvious choice.
- [ ] None identified

**Assessing**
- [ ] None identified — scoping reviews deliberately omit quality appraisal, so a gap here may be the correct statement.

## A12 Qualitative syntheses of methods research

**Understanding and applying**
- [ ] **Cochrane-Campbell Handbook for Qualitative Evidence Synthesis** · 📗 `UnknownUnknown-pc` · The reference work. Bib key is a placeholder and should be renamed if you use it. ⚠️
- [ ] **Thomas & Harden 2008** — Methods for thematic synthesis of qualitative research · ➕ new · The method your definition names.
- [ ] **Furlong 2023** — Toward a practice of qualitative methodological literature reviewing · 📗 `Furlong2023toward` · Methods-literature-specific.
- [ ] None identified

**Reporting**
- [ ] **Tong 2012 — ENTREQ** — Enhancing transparency in reporting the synthesis of qualitative research · ➕ new · BMC Med Res Methodol 12:181.
- [ ] **France 2019 — eMERGe** — Meta-ethnography reporting guidance · ➕ new · Only if meta-ethnography specifically. ⚠️
- [ ] None identified

**Assessing**
- [ ] **Lewin 2015 / 2018 — GRADE-CERQual** — Confidence in evidence from reviews of qualitative research · ➕ new · The established approach; assesses confidence in findings rather than study quality.
- [ ] **CASP Qualitative Checklist** · ➕ new · For appraising the included studies. ⚠️
- [ ] None identified

## A13 Quantitative syntheses of methods research

**Understanding and applying**
- [ ] **Clarke 2020** — Guide to the contents of a Cochrane **Methodology** protocol and review · 📗 `Clarke2020-al` · Written for syntheses of methods research specifically. Best fit, uncited in your bib.
- [ ] **Higgins et al. — Cochrane Handbook** · ➕ new · General but foundational.
- [ ] None identified

**Reporting**
- [ ] **Page 2021 — PRISMA 2020** · ➕ new · BMJ 372:n71.
- [ ] None identified

**Assessing**
- [ ] **Shea 2017 — AMSTAR 2** · 📗 `Shea2017amstar` · Already in bib and cited elsewhere.
- [ ] **Whiting 2016 — ROBIS** · ➕ new · Risk of bias in systematic reviews; complements AMSTAR 2.
- [ ] None identified

## A14 Methodological case reports or case series

**Understanding and applying**
- [ ] **Gagnier 2013 — CARE** · ➕ new · Built for *clinical* case reports; the transfer to methodological cases is loose. Include only if you want a placeholder. ⚠️
- [ ] None identified

**Reporting**
- [ ] **Gagnier 2013 — CARE** · ➕ new · Same caveat. ⚠️
- [ ] None identified

**Assessing**
- [ ] None identified

## A15 Informal approaches

By definition this type has no formal design, so *understanding* and *reporting* are probably
genuine gaps. Assessing is the interesting one.

**Understanding and applying**
- [ ] None identified

**Reporting**
- [ ] None identified

**Assessing**
- [ ] **Baethge 2019 — SANRA** — Scale for the Assessment of Narrative Review Articles · ➕ new · Res Integr Peer Rev 4:5. The one instrument built to appraise exactly this kind of non-systematic, authority-based writing. Good find for this page.
- [ ] None identified

---

# Part 2 — Objectives

Several objectives map onto the same guidance as an approach. Where that happens I say so rather
than repeating the rationale.

## O1 Identify available methods

**Understanding and applying**
- [ ] **Martin 2020** — methodology scoping reviews · 📗 `Martin2020towards`
- [ ] **Peters 2020 / JBI** scoping review guidance · ➕ new
- [ ] **Hirt 2024** — Searching a methods topic · 📗 `Hirt2024searching`
- [ ] None identified

**Reporting**
- [ ] **Tricco 2018 — PRISMA-ScR** · ➕ new
- [ ] None identified

**Assessing**
- [ ] None identified

## O2 Identify available methods research on a specific topic

**Understanding and applying**
- [ ] **Hirt 2024** — Searching a methods topic · 📗 `Hirt2024searching` · The central practical problem for this objective.
- [ ] **Gentles 2016** — Reviewing the research methods literature · 📗 `Gentles2016reviewing`
- [ ] **Schandelmaier 2026 — TYPE-ME** · 📗 `Schandelmaier2026how` · Self-citation as the classification scheme the definition refers to. Your call. ⚠️
- [ ] **Lawson 2020** — Mapping the nomenclature of studies that review methods · 📗 `Lawson2020mapping`
- [ ] None identified

**Reporting**
- [ ] **Tricco 2018 — PRISMA-ScR** · ➕ new
- [ ] None identified

**Assessing**
- [ ] None identified

## O3 Summarize the results of methods research

**Understanding and applying**
- [ ] **Clarke 2020** — Cochrane Methodology protocol and review · 📗 `Clarke2020-al`
- [ ] **Cochrane-Campbell Handbook for QES** · 📗 `UnknownUnknown-pc` · For the qualitative side.
- [ ] None identified

**Reporting**
- [ ] **Page 2021 — PRISMA 2020** · ➕ new
- [ ] **Tong 2012 — ENTREQ** · ➕ new · Qualitative side.
- [ ] None identified

**Assessing**
- [ ] **Shea 2017 — AMSTAR 2** · 📗 `Shea2017amstar`
- [ ] **Whiting 2016 — ROBIS** · ➕ new
- [ ] None identified

## O4 Assess methodological practice

Same guidance as A9.

**Understanding and applying**
- [ ] **Mbuagbaw 2020** — Tutorial on methodological studies · 📗 `Mbuagbaw2020a`
- [ ] **Khalil 2023** — Guidance on conducting methodological studies · 📗 `Khalil2023guidance`
- [ ] None identified

**Reporting**
- [ ] **Lawson 2020 — MISTIC** · 📗 `Lawson2020reporting` ⚠️ protocol only
- [ ] **Puljak 2019** — Reporting checklist urgently needed · 📗 `Puljak2019reporting` ⚠️
- [ ] None identified

**Assessing**
- [ ] None identified

## O5 Assess needs and priorities for methods research

**Understanding and applying**
- [ ] **Viergever 2010** — A checklist for health research priority setting · ➕ new · Health Res Policy Syst 8:36. Nine common themes of good practice.
- [ ] **James Lind Alliance Guidebook** · ➕ new · The dominant practical manual for priority setting with stakeholders.
- [ ] **Nasser 2013** — Cochrane priority setting methods · ➕ new ⚠️
- [ ] **Khodyakov 2023** — RAND Delphi guidance · 📗 `Khodyakov2023rand` · If the priority exercise is Delphi-based.
- [ ] None identified

**Reporting**
- [ ] **Tong 2019 — REPRISE** — Reporting guideline for priority setting of health research · ➕ new · BMC Med Res Methodol. 31 items, 10 domains. Exact fit.
- [ ] None identified

**Assessing**
- [ ] None identified

## O6 Propose a new method

**Understanding and applying**
- [ ] **Heinze 2024** — Phases of methodological research in biostatistics · 📗 `Heinze2024-tl` · Frames where a newly proposed method sits and what evidence it still needs.
- [ ] **Boulesteix 2017** — Towards evidence-based computational statistics · 📗 `Boulesteix2017towards`
- [ ] None identified

**Reporting**
- [ ] None identified

**Assessing**
- [ ] None identified

## O7 Evaluate a single method

**Understanding and applying**
- [ ] **Heinze 2024** — Phases of methodological research · 📗 `Heinze2024-tl`
- [ ] **Morris 2019** — Using simulation studies to evaluate statistical methods · 📗 `Morris2019using` · Already cited on A2.
- [ ] **Boulesteix 2018** — On the necessity and design of studies comparing statistical methods · 📗 `Boulesteix2018on`
- [ ] None identified

**Reporting**
- [ ] **Siepe 2023** — Simulation study template · 📗 `Siepe2023simulation` · Only if the evaluation is simulation-based. ⚠️
- [ ] None identified

**Assessing**
- [ ] **White 2024** — How to check a simulation study · 📗 `White2024how` ⚠️ simulation-specific
- [ ] None identified

## O8 Compare methods

**Reporting** (understanding already filled)
- [ ] **Weber 2019** — Essential guidelines for computational method benchmarking · 📗 `Weber2019essential` · Already cited on A3; has explicit reporting content.
- [ ] **Siepe 2023** · 📗 `Siepe2023simulation` ⚠️ simulation-specific
- [ ] None identified

**Assessing**
- [ ] **Nießl 2022** — Over-optimism in benchmark studies · ➕ new · The main appraisal lens for comparison studies: who designed it, and how many options did they have?
- [ ] **Van Mechelen 2023** — White paper on good research practices in benchmarking · 📗 `VanMechelen2023a`
- [ ] **Boulesteix 2017** — Towards evidence-based computational statistics · 📗 `Boulesteix2017towards` · Neutral-comparison argument.
- [ ] None identified

## O9 Develop guidance for understanding and applying methods

**Understanding and applying**
- [ ] **Chiaborelli 2026 — STREAM protocol** · 📗 `Chiaborelli2026strategies` · Already cited on A11 as an example; this is the guidance-development topic itself.
- [ ] **Chiaborelli 2026** — Developing methods guidance: literature review of strategies · 📗 `Chiaborelli2026developing` · Uncited in your bib; the most direct fit.
- [ ] **Moher 2014** — How to develop a reporting guideline · 📗 `Moher2014how` · Reporting-guideline-specific but the process generalises. ⚠️
- [ ] None identified

**Reporting**
- [ ] None identified

**Assessing**
- [ ] **Hirt 2022** — Systematic survey of methods guidance: access, development, transparency · 📗 `Hirt2022-ai` · Supplies the dimensions on which guidance can be judged.
- [ ] **AGREE II** · ➕ new · Built for clinical practice guidelines; transfer to methods guidance is an argument you would have to make. ⚠️
- [ ] None identified

## O11 Develop quality assessment instruments

**Understanding and applying**
- [ ] **Boateng 2018** — Best practices for developing and validating scales · ➕ new · Front Public Health 6:149. Nine-step development-and-validation process.
- [ ] **Prinsen 2016 / COSMIN** — How to select outcome measurement instruments · 📗 `Prinsen2016how` · Selection rather than development. ⚠️
- [ ] **Schandelmaier 2020 — ICEMAN** · 📗 `Schandelmaier2020development` · A worked development example rather than guidance; self-citation. ⚠️
- [ ] **Moher 2014** — How to develop a reporting guideline · 📗 `Moher2014how` · Analogous consensus-development process. ⚠️
- [ ] None identified

**Reporting**
- [ ] None identified

**Assessing**
- [ ] None identified

## O12 Develop software and code

**Understanding and applying**
- [ ] **Wilson 2017** — Good enough practices in scientific computing · ➕ new · PLoS Comput Biol 13(6):e1005510. The most practical single reference.
- [ ] **Sandve 2013** — Ten simple rules for reproducible computational research · ➕ new · PLoS Comput Biol 9(10):e1003285.
- [ ] **rOpenSci Packages: development, maintenance, peer review** · ➕ new · Web resource, R-specific. ⚠️
- [ ] None identified

**Reporting**
- [ ] **Lee 2018** — Ten simple rules for documenting scientific software · ➕ new
- [ ] **Smith 2016** — Software citation principles · ➕ new · PeerJ Comput Sci 2:e86.
- [ ] None identified

**Assessing**
- [ ] **rOpenSci software peer review** · ➕ new · The closest thing to an appraisal standard for research software. ⚠️
- [ ] None identified

## O13 Research the dissemination and implementation of methods

**Reporting** (understanding already filled with King 2019)
- [ ] **Pinnock 2017 — StaRI** — Standards for Reporting Implementation Studies · ➕ new · BMJ 356:i6795. 27 items, dual implementation-strategy/intervention structure. Exact fit.
- [ ] None identified

**Assessing**
- [ ] **Proctor 2011** — Outcomes for implementation research · ➕ new · Conceptual taxonomy, not an appraisal tool. ⚠️
- [ ] None identified

## O14 Assess variability of results across methodological choices

Your bib is already rich here — seven relevant uncited entries.

**Understanding and applying**
- [ ] **Steegen 2016** — Increasing transparency through a multiverse analysis · 📗 `Steegen2016increasing` · The founding multiverse paper.
- [ ] **Simonsohn 2020** — Specification curve analysis · 📗 `Simonsohn2020specification` · The main alternative formulation.
- [ ] **Silberzahn 2018** — Many analysts, one data set · 📗 `Silberzahn2018many` · The founding many-analyst study.
- [ ] **Aczel 2021** — Consensus-based guidance for conducting and reporting multi-analyst studies · ➕ new · The only actual *guidance* document in this cluster; the rest are methods papers or exemplars.
- [ ] **Patel 2015** — Vibration of effects · 📗 `Patel2015assessment`
- [ ] **Klau 2021** — Examining robustness with the vibration of effects framework · 📗 `Klau2021examining`
- [ ] **Bartoš 2025** — Single-dataset meta-analysis for many-analysts and multiverse studies · 📗 `Bartos2025single-dataset` · Analysis-side.
- [ ] **Rohrer 2025** — What can be learned when multiple analysts arrive at different estimates · 📗 `Rohrer2025what` · Interpretation-side.
- [ ] None identified

**Reporting**
- [ ] **Aczel 2021** · ➕ new · Covers reporting explicitly.
- [ ] None identified

**Assessing**
- [ ] None identified

---

# Appendix A — Uncited bib entries not proposed above

These 53 entries are in `references.bib` but cited nowhere. The ones I did not propose are mostly
examples rather than guidance — but you curated them, so flag any that belong somewhere:

`Baker2016is`, `Clark2025are`, `Tierney2021-kk`, `OtherOtherelicit-0001`, `Fraval2015internet`,
`Hooper2024what`, `Dechartres2013influence`, `Puljak2019methodological-0001`, `Bracchiglione2025users`,
`Robertson2025confidence`, `Cashin2025transparent-0001`, `Luijken2019impact`, `Howard1997assessing`,
`Page2016empirical`, `Abbasi2025systematic`, `Mangino2023fixed`, `Turner2012does`, `Phillips2021improving`,
`Bak-Coleman2024claims`, `Anderson2024sample`, `Seidler2024-sf`, `Andric2025experiences`,
`Ferreira-Gonzalez2007methodologic`, `Naylor1997meta-analysis`, `Frazier2026bias`, `Wang2024grilling`,
`Chaimani2013effects`, `Munn2018what`

Three worth a second look:

- [ ] **`Hooper2024what`** — What advice can we offer to authors? Reflections from the statisticians' bench — plausibly *guidance for applying* on A15 informal approaches.
- [ ] **`Munn2018what`** — What kind of systematic review should I conduct? — a decision aid; could sit on A11 or O1.
- [ ] **`Bak-Coleman2024claims`** — Claims about scientific rigour require rigour — could sit on A15 assessing alongside SANRA.

# Appendix B — Two housekeeping items

- [ ] **`Cashin2025transparent` and `Cashin2025transparent-0001`** are the same TARGET statement twice. Delete one?
- [ ] **`UnknownUnknown-pc`** (Cochrane-Campbell QES Handbook) and **`OtherOtherswat` / `OtherOtherswar` / `OtherOtherelicit-0001`** have placeholder keys. Rename before citing?

---

# Summary of what I would pick

If you want a fast path rather than 74 decisions, these are the ones I would take without hesitating —
high-quality, purpose-built, unambiguous fit:

| Page | Slot | Pick |
| :-- | :-- | :-- |
| A4 | Reporting | Kottner 2011 — GRRAS ➕ |
| A5 | Understanding | Treweek 2018 — Trial Forge SWAT 📗 |
| A6 | Reporting | Sharma 2021 — CROSS ➕ |
| A7 | Reporting | Tong 2007 — COREQ ➕ |
| A8 | Assessing | Khodyakov 2023 — RAND Delphi 📗 |
| A9 | Understanding | Mbuagbaw 2020 + Khalil 2023 📗 |
| A11 | Understanding | Martin 2020 — methodology scoping reviews 📗 |
| A11 | Reporting | Tricco 2018 — PRISMA-ScR ➕ |
| A12 | Reporting | Tong 2012 — ENTREQ ➕ |
| A12 | Assessing | Lewin — GRADE-CERQual ➕ |
| A13 | Understanding | Clarke 2020 — Cochrane Methodology 📗 |
| A13 | Reporting | Page 2021 — PRISMA 2020 ➕ |
| A15 | Assessing | Baethge 2019 — SANRA ➕ |
| O5 | Reporting | Tong 2019 — REPRISE ➕ |
| O13 | Reporting | Pinnock 2017 — StaRI ➕ |
| O14 | Understanding | Steegen 2016 + Aczel 2021 📗➕ |
