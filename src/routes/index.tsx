import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguagePicker } from "@/components/sg/LanguagePicker";
import capturedCSS from "../styles/site.css?raw";
import { ORG_LD, WEBSITE_LD, NAV, STUDIO_ASSETS, pageHead } from "@/content/site";
import { SiteFooterNav } from "@/components/sg/Shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      metaTitle: "Stargame Studio (SG) — Human-Made Art, Graphic Design, 5K Medals & Roblox Games",
      description:
        "Stargame Studio (SG) in Trinidad and Tobago: 100% human-crafted graphic design, 5K finisher medals, flyers, Roblox games, UGC, 2D clothing, and PC game art. Creators of Starcity, The Outbreak, and Starry Simulator.",
      path: "/",
      image: STUDIO_ASSETS.mainBanner.src,
      jsonLd: [ORG_LD, WEBSITE_LD],
    }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "EIlDfe", "data-site-import-responsive-incomplete": "scroll", "dir": "ltr", "id": "yDmH0d" } } },
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  useImportedLayout();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navButtonRef = useRef<HTMLDivElement>(null);
  const drawerOpen = isMobile && navOpen;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setNavOpen(false);
      navButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);
  const closeDrawer = () => {
    setNavOpen(false);
    navButtonRef.current?.focus();
  };
  return (
    <>
      <style>{capturedCSS}</style>
      <div {...({ jscontroller: "pc62j", jsmodel: "iTeaXe", jsaction: "rcuQ6b:WYd;GvneHb:og1FDd;vbaUQc:uAM5ec;" } as any)}>
        <div {...({ jscontroller: "X4BaPc", jsaction: "rcuQ6b:WYd;o6xM5b:Pg9eo;HuL2Hd:mHeCvf;VMhF5:FFYy5e;sk3Qmb:HI1Mdd;JIbuQc:rSzFEd(z2EeY),aSaF6e(ilzYPe);" } as any)}>
          <div {...({ jscontroller: "o1L5Wb", jsmodel: "fNFZH", jsaction: "Pe9H6d:cZFEp;O0t7nc:cC5KLb;WyADff:AQk9Jb;WMZaJ:VsGN3;hJluRd:UADL7b;zuqEgd:HI9w0;tr6QDd:Y8aXB;MxH79b:xDkBfb;JIbuQc:SPXMTb(uxAMZ),LjG1Ed(a6mxbb);BNPLhd:TbIyBd;fGqJod:Tb1xee;", jsname: "G0jgYd" } as any)}>
            <div className="p9b27 fixed transition-opacity duration-180 -z-10" {...({ jsname: "gYwusb" } as any)} />
            <div {...({ jsname: "tiN4bf" } as any)}>
            <div className="M63kCb fixed -z-10" />
            <div>
              <div className={"fktJzd AKpWA Ly6Unf b2Iqye XeSM4 XxIgdb" + (drawerOpen ? " fOU46b WwqPKb" : (scrolled ? "" : " fOU46b") + (isMobile ? "" : " WwqPKb"))} {...({ jsname: "UzWXSb", jscontroller: "Md9ENb", jsaction: "gsiSmd:Ffcznf;yj5fUd:cpPetb;HNXL3:q0Vyke;e2SXKd:IPDu5e;BdXpgd:nhk7K;rcuQ6b:WYd;" } as any)}>
                <header id="atIdViewHeader">
                  <div style={{ position: "fixed", width: "100%", zIndex: "100" }}>
                    <div id="docs-banner-container">
                      <div id="docs-banners">
                        <div id="HB1eCd-mzNpsf-r8s4j-ORHb" />
                        <div id="HB1eCd-TZk80d-r8s4j-ORHb" aria-live="assertive" aria-atomic="true" />
                        <div id="HB1eCd-Vkfede-rJCtOc-b3rLgd-ORHb" aria-live="assertive" aria-atomic="true" />
                      </div>
                      <div className="HB1eCd-Vkfede-NBtyUd-PvRhvb-LwH6nd" />
                    </div>
                  </div>
                  <div className={isMobile ? "BbxBP HP6J1d" : "HP6J1d"} {...({ jsname: "WA9qLc", jscontroller: "RQOkef", jsaction: "rcuQ6b:JdcaS;MxH79b:JdcaS;VbOlFf:ywL4Jf;FaOgy:ywL4Jf; keydown:Hq2uPe; wheel:Ut4Ahc;" } as any)}>
                    <div ref={navButtonRef} className={drawerOpen ? "DXsoRd YTv4We oNsfjf" : "DXsoRd YTv4We Mz8gvb YSH9J"} role="button" tabIndex={0} id="s9iPrd" aria-haspopup="true" aria-controls="yuynLe" aria-expanded={drawerOpen} aria-label={drawerOpen ? "Hide sidebar" : "Show sidebar"} title={drawerOpen ? "Hide sidebar" : "Show sidebar"} onClick={() => setNavOpen((open) => !open)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setNavOpen((open) => !open); } }} {...({ jsaction: "click:LUvzV", jsname: "z4Tpl" } as any)}>
                      <svg className={isMobile && !navOpen ? "wFCWne" : "wFCWne o0iVae"} viewBox="0 0 24 24" stroke="currentColor" {...({ jsname: "B1n9ub", focusable: "false" } as any)}>
                        <g transform="translate(12,12)">
                          <path className="hlJH0" d="M-9 -5 L9 -5" fill="none" strokeWidth="2" />
                          <path className="HBu6N" d="M-9 0 L9 0" fill="none" strokeWidth="2" />
                          <path className="cLAGQe" d="M-9 5 L9 5" fill="none" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                    <nav className={isMobile && !navOpen ? "JzO0Vc" : "JzO0Vc jsnVQ"} style={isMobile && !navOpen ? { display: "none" } : undefined} role="navigation" tabIndex={-1} id="yuynLe" {...({ jsname: "ihoMLd", jsaction: "transitionend:UD2r5" } as any)}>
                      <Link className="XMyrgf" to="/" onClick={closeDrawer}>
                        <img src={STUDIO_ASSETS.logo.src} alt={STUDIO_ASSETS.logo.alt} className="r9CsCb" />
                      </Link>
                      <Link className="Zjiec oNsfjf" to="/" onClick={closeDrawer}>
                        <span>Stargame Studio</span>
                      </Link>
                      <ul className="jYxBte Fpy8Db" tabIndex={-1}>
                        <li {...({ jsname: "ibnC6b" } as any)}>
                          <div className="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf lhZOrc" aria-current="true">
                            <div className="I35ICb">
                              <Link className="aJHbb hDrhEe HlqNPb" to="/" onClick={closeDrawer}>{t("nav.home")}</Link>
                            </div>
                          </div>
                        </li>
                        {NAV.map((n) => (
                        <li key={n.to}>
                          <div className="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf">
                            <div className="I35ICb">
                              <Link className="aJHbb hDrhEe HlqNPb" to={n.to} onClick={closeDrawer}>{t(n.labelKey, n.label)}</Link>
                            </div>
                          </div>
                        </li>
                        ))}
                      </ul>
                    </nav>
                    <div className={isMobile ? "VLoccc QDWEj U8eYrb" : "VLoccc"} style={isMobile ? undefined : { opacity: "0" }} aria-hidden="false" {...({ jsname: "rtFGi" } as any)}>
                      <div className="Pvc6xe">
                        <div className="TlfmSc YSH9J" {...({ jsname: "I8J07e" } as any)}>
                          <a className="GAuSPc" aria-hidden="true" href="#" tabIndex={-1} {...({ jsname: "jIujaf" } as any)}>
                            <img src="/site-assets/img/9c913773c716601b.webp" className="lzy1Td" role="img" aria-label="Site home" {...({ jsname: "SwcDWb" } as any)}  alt="Stargame Studio original artwork #1" loading="lazy" />
                            <span className="QTKDff p46B7e">Stargame Studio</span>
                          </a>
                        </div>
                      </div>
                      <div className="zDUgLc" {...({ jsname: "mADGA" } as any)} />
                    </div>
                    <div className={drawerOpen ? "TxnWlb XPSexb" : "TxnWlb"} onClick={closeDrawer} {...({ jsname: "BDdyze", jsaction: "click:LUvzV" } as any)} />
                    </div>
                </header>
                <div className="RCETm yxgWrb" tabIndex={-1} dir="ltr" aria-hidden="false" {...({ jsname: "ZBtY8b" } as any)}>
                  <section className="sg-theme relative w-full bg-[#120d22] pt-14" id="h.INITIAL_GRID.95uuumsnwnr9" aria-label="Stargame Studio Banner">
                    <div className="mx-auto w-full max-w-[1500px] overflow-hidden bg-[#120d22]">
                      <img
                        src={STUDIO_ASSETS.mainBanner.src}
                        alt={STUDIO_ASSETS.mainBanner.alt}
                        width={1500}
                        height={500}
                        className="block aspect-[3/1] w-full object-contain object-center"
                      />
                    </div>
                    <div className="border-y border-border/80 bg-background/95 px-6 py-8 text-foreground">
                      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {t("home.heroBadge")}
                          </span>
                          <h1 className="sg-display mt-3 text-3xl text-primary sm:text-4xl">
                            {t("home.heroTitle")}
                          </h1>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {t("home.heroSubtitle")}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                          <Link
                            to="/services"
                            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                          >
                            {t("home.exploreServices")}
                          </Link>
                          <Link
                            to="/commission"
                            className="rounded-md border border-primary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                          >
                            {t("home.startCommission")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                  <ImportedSection />
                  <ImportedSectionIcons />
                  <ImportedSection2 />
                  <ImportedSectionWelcome />
                  <ImportedSection3 />
                  <section className="yaqOZd cJgDec nyKByd" id="h.33efd66436177895_3">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/da7a65c9ca85029f.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.33efd66436177895_4">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="axx72">
                                        <div className="L7IXhc htnAL QmpIrf M9Bg4d" role="presentation" aria-label="Learn more" aria-disabled="false" data-tooltip="Learn more" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                          <a className="FKF6mc TpQm9d QmpIrf" aria-label="Learn more" href="https://docs.google.com/document/d/1ajtVpSeUBVtzyTz0k2weQaSYjJYsY3FcXe6x5kfX4nY/edit?usp=sharing" target="_blank">
                                            <div className="NsaAfc">
                                              <p>Learn more</p>
                                            </div>
                                            <div className="wvnY3c" {...({ jsname: "ksKsZd" } as any)} />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <ImportedSection4 />
                  <ImportedSection5 />
                  <ImportedSection6 />
                  <ImportedSection7 />
                  <ImportedSection8 />
                  <ImportedSection9 />
                  <ImportedSection10 />
                  <section className="yaqOZd cJgDec nyKByd" id="h.1b63de9d098317d2_65">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/3a6a0f06b217a2a5.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.1b63de9d098317d2_62">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span> </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <ImportedSection11 />
                  <ImportedSection12 />
                  <ImportedSection13 />
                  <ImportedSection14 />
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_67">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/c0e6ba0814b5e894.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_70">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="puwcIf" style={{ fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}>DESIGNED BY </span>
                                        <span className="puwcIf" style={{ verticalAlign: "baseline" }}>COSMO CAT </span>
                                        <span className="puwcIf" style={{ fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}>FOR THE OUTBREAK</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_21">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7ee68b66012d0eed.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_42">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8321fc061ef28cbd.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #2" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_43">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cabdae2f01b28b3a.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #3" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_44">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7a75fc87d6f3b300.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #4" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_45">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/2064fad78d2418cd.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #5" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_49">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/58e2fcdb681c658a.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #6" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_129">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/c0e6ba0814b5e894.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_132">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="puwcIf" style={{ fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}>DESIGNED BY </span>
                                        <span className="puwcIf" style={{ verticalAlign: "baseline" }}>FORMER DESIGNERS</span>
                                        <span className="puwcIf" style={{ fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}> FOR THE OUTBREAK</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_109">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7ee68b66012d0eed.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_112">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7f7a6b85785786e2.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #7" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_115">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cf40a798dd2bbf5c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #8" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_118">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6a8df1b28ee90e48.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #9" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_121">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d2751d3ebc29cdf7.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #10" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_124">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7ec0a4ace9045517.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #11" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_125">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fd63ab83dea5f3a1.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #12" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_133">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7ee68b66012d0eed.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_136">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9f7cd2f19f13fc6e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #13" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_139">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3a4dbb44d4c5b431.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #14" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_142">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/4a0984fc2619e166.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #15" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_145">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/503cf0f7a2f3040b.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #16" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_283">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/e44276a32db775f0.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_280">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.4hduke5zxpu9" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.4hduke5zxpu9_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.4hduke5zxpu9_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.4hduke5zxpu9_l" aria-label="Copy heading link" href="#h.4hduke5zxpu9" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>STARCITY (and former RELAX HANGOUT) DEVELOPMENT AND DESIGNS!</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_156">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/21c115d2d5e3b9e9.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_172">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/258c42f09eeb2742.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #17" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_180">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span>Designed by Poleyz</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_176">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f56edd1a2f4e94af.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #18" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_183">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by </span>
                                        <span>Former Designer Cleona Coral</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.34c42fd1ce1dc904_18">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/745817eaf14a75f9.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #19" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec" id="h.34c42fd1ce1dc904_30">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by </span>
                                        <span>Former Designer</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec" id="h.34c42fd1ce1dc904_22">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c6e3c2c2e6b033de.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #20" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.34c42fd1ce1dc904_27">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by </span>
                                        <span>Linda</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.20c1e9fbe45a908a_38">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/95825d3921036a3c.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.20c1e9fbe45a908a_41">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.coxde1kjzndr" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.coxde1kjzndr_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.coxde1kjzndr_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.coxde1kjzndr_l" aria-label="Copy heading link" href="#h.coxde1kjzndr" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY FORMER DESIGNER CIGERDS FOR </span>
                                          <span>STARCITY</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_208">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/857e4a70259446d4.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_229">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/36c5a34d6d39519f.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #21" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_230">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d3420ecfc22e8242.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #22" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_231">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0253e70173e179ba.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #23" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_232">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/2db1ebbc5131e900.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #24" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_5">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/2924a4d36608302f.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_3">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.x9cc0mnf65r1" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.x9cc0mnf65r1_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.x9cc0mnf65r1_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.x9cc0mnf65r1_l" aria-label="Copy heading link" href="#h.x9cc0mnf65r1" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY FORMER DESIGNER</span>
                                          <span>S </span>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>FOR STARCITY</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_23">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/a36657d821ce0755.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_6">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7107200c9ff928aa.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #25" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_7">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/58f143dd9cef919f.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #26" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_8">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/e9608d10497bcef2.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #27" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_30">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/87f4201122a0a3af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_9">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7f391be786b61b11.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #28" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_10">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7d448c67ad662630.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #29" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec tpmmCb" id="h.53f1d5e2064f25c4_40">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/5fac54e4afe4ca4d.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_13">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cd99596ed530c1ef.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #30" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_14">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/22413d26d116105e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #31" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_97">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/2924a4d36608302f.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_100">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.fgz7phl1wd5p" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.fgz7phl1wd5p_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.fgz7phl1wd5p_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.fgz7phl1wd5p_l" aria-label="Copy heading link" href="#h.fgz7phl1wd5p" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                                          <span>COSMEH</span>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}> FOR STARCITY</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_79">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/857e4a70259446d4.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_82">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0b59e1085ffca270.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #32" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_85">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/2132018d2a750838.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #33" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_88">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/294f7c5b9c77e8aa.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #34" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_91">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f927877617b79a91.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #35" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_101">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/2924a4d36608302f.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_104">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.6mpcdiwtk66x" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.6mpcdiwtk66x_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.6mpcdiwtk66x_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.6mpcdiwtk66x_l" aria-label="Copy heading link" href="#h.6mpcdiwtk66x" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                                          <span>FORMER DESIGNERS</span>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}> FOR STARCITY</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_35">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/fafec3ff062a1cdd.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_11">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/16ed55a4165d0a08.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #36" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_12">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0c6bd610efefd578.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #37" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_45">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/91da7478fd3a1f52.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_15">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f24a969b1de1942f.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #38" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_16">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6a36d59e0766e451.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #39" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.53f1d5e2064f25c4_50">
                    <div className="IFuOkc" style={{ backgroundPosition: "center top", backgroundImage: "url(\"/site-assets/img/2b400ca8f318fd21.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_17">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/787892afd06494d0.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #40" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_105">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/43c6c587550cbe53.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #41" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_18">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9b588e1e6f112be0.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #42" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec tpmmCb" id="h.53f1d5e2064f25c4_55">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/f529bfaa07c4fbbb.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_20">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cc3279f481da0dc9.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #43" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_19">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cec9e1e63aa87535.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #44" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec tpmmCb" id="h.53f1d5e2064f25c4_60">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/a1ef506be59eaeef.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_21">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fc4514fc6e3a08e6.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #45" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.53f1d5e2064f25c4_22">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/5187bcc2e335445c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #46" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_15">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/527283d834640036.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_12">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.tjjh5dwjq1ip" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.tjjh5dwjq1ip_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.tjjh5dwjq1ip_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.tjjh5dwjq1ip_l" aria-label="Copy heading link" href="#h.tjjh5dwjq1ip" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>Designed by 1GG!</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_259">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/21c115d2d5e3b9e9.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_284">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/befafb54a512bd8a.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #47" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_285">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/4c9cceaee79665ab.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #48" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_286">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/888874e424944f2c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #49" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_287">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c61265fd3e8e357f.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #50" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_297">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/5e9b239f58e524ce.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #51" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_333">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/b13714e5c9f35fff.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_329">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.tjbaz1u3d8vd" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.tjbaz1u3d8vd_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.tjbaz1u3d8vd_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.tjbaz1u3d8vd_l" aria-label="Copy heading link" href="#h.tjbaz1u3d8vd" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>DESIGNED BY FORMER DESIGNER POLARPLATYPUS! </span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_298">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7cdec508e3d143c0.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_319">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/79fd36f36f990197.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #52" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_320">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/414251e250a68ec9.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #53" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_321">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/a668c4fcf2f48114.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #54" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_322">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/232eaffc4333d33b.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #55" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_326">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/e726fb91fed4cc4d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #56" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.7c0db9c4cfcaf40_51">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/ba85208df1402234.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.7c0db9c4cfcaf40_47">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.lu4qjlntyfwm" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.lu4qjlntyfwm_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.lu4qjlntyfwm_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.lu4qjlntyfwm_l" aria-label="Copy heading link" href="#h.lu4qjlntyfwm" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                                          <span>VY (Poleyz)</span>
                                          <span style={{ fontVariant: "normal" } as CSSProperties}>! </span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_334">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/9adf02d49d348cf2.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_355">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/11c44b567194d492.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #57" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_356">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/5e1d622040524a0e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #58" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_357">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/43f930837778e988.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #59" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_358">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/22d3ceea0f9992e3.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #60" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.7c0db9c4cfcaf40_56">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/8cedac4997389a2b.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.7c0db9c4cfcaf40_55">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.27lrmvhljbpu" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.27lrmvhljbpu_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.27lrmvhljbpu_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.27lrmvhljbpu_l" aria-label="Copy heading link" href="#h.27lrmvhljbpu" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>Former Designers' work</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_359">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/648ba02cca222655.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_380">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3fed49d902438e9b.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #61" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_364">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span>DESIGNED BY OUR FORMER DESIGNER CLEONA CORAL</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_383">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/80b03fed523607d8.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #62" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_379">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY OUR FORMER DESIGNER CLEONA CORAL</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>REVAMPED BY F</span>
                                        <span>.D (FORMER DESIGNER)</span>
                                        <span style={{ fontVariant: "normal" } as CSSProperties}> VYNE</span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_381">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/dc853467c5687d86.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #63" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_369">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY OUR FORMER DESIGNER CLEONA CORAL</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span>REVAMPED BY </span>
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>F.D (FORMER DESIGNER) </span>
                                        <span>VYNE</span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_382">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0b55e4308ec24ded.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #64" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_374">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY OUR FORMER DESIGNER CLEONA CORAL</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>REVAMPED BY F.D (FORMER DESIGNER) VYNE</span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_75">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7fc88d4543b31271.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_103">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ded97c02c2234ec2.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #65" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.15d4a508ec9b0a98_20">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span>Designed by our former designer Liyopy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_96">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/baffa76311d72842.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #66" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.15d4a508ec9b0a98_25">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by our former designer Liyopy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_97">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/e56ca6a01272b6dc.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #67" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.15d4a508ec9b0a98_28">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by our former designer Liyopy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_98">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c62725079e10a80b.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #68" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.15d4a508ec9b0a98_31">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by our former designer Liyopy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_99">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/bd70fa5dc0ce253d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #69" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.15d4a508ec9b0a98_34">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Designed by our former designer Liyopy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.15d4a508ec9b0a98_0">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/5b0ce8d14bd48c04.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.15d4a508ec9b0a98_3">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.5afj6desosi" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.5afj6desosi_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.5afj6desosi_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.5afj6desosi_l" aria-label="Copy heading link" href="#h.5afj6desosi" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>VECCERA CAFE DESIGNS &amp; DEVELOPMENT</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_4">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/e1afdbb045b0c7ce.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_19">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d8889ca371561460.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #70" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4a222220fade0dcb_9">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.ji3shw5y1i0g" />
                                      <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.ji3shw5y1i0g_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.ji3shw5y1i0g_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.ji3shw5y1i0g_l" aria-label="Copy heading link" href="#h.ji3shw5y1i0g" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "rgb(255, 255, 255)" }}>Made by skyblue</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.34c42fd1ce1dc904_0">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6ed1b6429fb72bd1.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #71" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.34c42fd1ce1dc904_4">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.x53ehrccj83q" />
                                      <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.x53ehrccj83q_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.x53ehrccj83q_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.x53ehrccj83q_l" aria-label="Copy heading link" href="#h.x53ehrccj83q" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "rgb(255, 255, 255)", fontVariant: "normal" } as CSSProperties}>Made by </span>
                                          <span style={{ color: "rgb(255, 255, 255)" }}>Akima</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-R6PoUb Ft7HRd-AhqUyc-R6PoUb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4a222220fade0dcb_20">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9f9608bb1b35f5ea.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #72" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4a222220fade0dcb_16">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.va3ko6ocs2pz" />
                                      <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.va3ko6ocs2pz_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.va3ko6ocs2pz_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.va3ko6ocs2pz_l" aria-label="Copy heading link" href="#h.va3ko6ocs2pz" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "rgb(255, 255, 255)" }}>Made by Alex Ishio</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_119">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/5b0ce8d14bd48c04.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_122">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.broxud3su3gq" />
                                      <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.broxud3su3gq_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.broxud3su3gq_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.broxud3su3gq_l" aria-label="Copy heading link" href="#h.broxud3su3gq" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>Built by M707</span>
                                        </div>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_118">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/da6bd15eb134a402.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.7c0db9c4cfcaf40_66">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/bb4b6de0eb688b49.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #73" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb QaN0Zc QjXeod" id="h.6b9a749793f4a157_20">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/719e8039c32a3c84.webp" className="CENy8b" style={{ width: "100%", margin: "-2.2145e-06% 0px -2.2145e-06% 0%" }} role="img"  alt="Stargame Studio original artwork #74" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.6b9a749793f4a157_0">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c1beccb20cbe0cf4.webp" className="CENy8b" style={{ width: "100%", margin: "-9.361e-07% 0px -9.361e-07% 0%" }} role="img"  alt="Stargame Studio original artwork #75" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb QaN0Zc QjXeod" id="h.6b9a749793f4a157_25">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/500704dfc1743cab.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% -1.1808e-06%" }} role="img"  alt="Stargame Studio original artwork #76" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.6b9a749793f4a157_5">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/160f687ff68d9bf9.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% -2.8e-08%" }} role="img"  alt="Stargame Studio original artwork #77" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb QaN0Zc QjXeod" id="h.6b9a749793f4a157_15">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/99732d0195e9d172.webp" className="CENy8b" style={{ width: "100%", margin: "-1.8057e-06% 0px -1.8057e-06% 0%" }} role="img"  alt="Stargame Studio original artwork #78" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_130">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/db19cd14b9e56dca.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_31">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.f4tyj1hlu169" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.f4tyj1hlu169_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.f4tyj1hlu169_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.f4tyj1hlu169_l" aria-label="Copy heading link" href="#h.f4tyj1hlu169" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>COMICS</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec" id="h.cb101390de5afd0_33">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", textDecoration: "underline" }}>OF ANY PROJECT</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", textDecoration: "underline" }}>CURRENT DESIGNER 1GG</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4a222220fade0dcb_127">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div style={{ height: "40px" }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_55">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_58">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6ebae1ed6c178186.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #79" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_47">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/db19cd14b9e56dca.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_50">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.6zu9s2vtci51" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.6zu9s2vtci51_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.6zu9s2vtci51_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.6zu9s2vtci51_l" aria-label="Copy heading link" href="#h.6zu9s2vtci51" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>WALLPAPERS (PC &amp; MOBILE - FREE)</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec" id="h.cb101390de5afd0_52">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontVariant: "normal", fontWeight: "700", textDecoration: "underline" } as CSSProperties}>OF ANY PROJECT</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span>CREDITS - AKIMA, F.D - ANGFRY, (FORMER DESIGNER) - CIGERDS, Cosmo Cat, Skyblue (UnknownFairy)</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_54">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div style={{ height: "40px" }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_25">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_61">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/23aa2fa86b9693b3.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #80" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_60">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7c2a18ce9d2e74ca.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #81" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_62">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/518ee37d60f2bc7f.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #82" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_59">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7acb91e3075b83f2.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #83" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_34">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ffed23b43332d182.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #84" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_186">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_189">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d2ed05950238c970.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #85" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_192">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/60e2d60ee21dfc45.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #86" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_195">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d1f2177e98c17531.webp" className="CENy8b" style={{ width: "100%", margin: "-0.0432579409% 0 -0.0432579409% 0%" }} role="img"  alt="Stargame Studio original artwork #87" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_198">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/43c44f319c07e547.webp" className="CENy8b" style={{ width: "100%", margin: "-0.0432579409% 0 -0.0432579409% 0%" }} role="img"  alt="Stargame Studio original artwork #88" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_202">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f148244f7675b3db.webp" className="CENy8b" style={{ width: "100%", margin: "-0.0432579409% 0 -0.0432579409% 0%" }} role="img"  alt="Stargame Studio original artwork #89" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_206">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9ac49975caf8521e.webp" className="CENy8b" style={{ width: "100%", margin: "-0.0432579409% 0 -0.0432579409% 0%" }} role="img"  alt="Stargame Studio original artwork #90" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_72">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_78">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/4449bd64d52b1e3d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #91" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_81">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/a31ba15e953bce2e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #92" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_84">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7e4baf9ae4e3b391.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #93" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_87">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d982a2fa18cc2680.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #94" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_88">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_91">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/17006f94ee6b02e7.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #95" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_94">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c3b7848bbb60f96c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #96" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_97">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8ec33150edaced1a.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #97" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_100">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fe3a29ebb7155c24.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #98" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_101">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_104">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/70f9133887a45030.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #99" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.20c1e9fbe45a908a_7">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3fbf349d5814e0f5.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #100" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.20c1e9fbe45a908a_11">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7f9683164845e41a.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #101" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_107">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/77dbeeb1f2968dbc.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #102" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.c24a45c9d614740_4">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/e08bfcf5ecbe87a6.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.c24a45c9d614740_0">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8caf4364d1da312a.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #103" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_114">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span className="F7oSxf" style={{ verticalAlign: "baseline" }}>...</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_244">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_247">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9f193f2d64bb67fd.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #104" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_258">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_254">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/78dc05b7a62748b0.webp" className="CENy8b" style={{ width: "100%", margin: "-0.0000002095% 0 -0.0000002095% 0%" }} role="img"  alt="Stargame Studio original artwork #105" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_262">
                    <div className="IFuOkc" style={{ backgroundPosition: "bottom right", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_265">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3ce31a0a0b35afbd.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #106" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_268">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_271">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fa8349d4e4b51afe.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #107" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_272">
                    <div className="IFuOkc" style={{ backgroundPosition: "bottom left", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_275">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f4165a7c944d5d30.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #108" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_278">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_281">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/398ad5a827914ed8.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #109" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_282">
                    <div className="IFuOkc" style={{ backgroundPosition: "bottom right", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_285">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/7e0d8d072be090a7.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #110" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_288">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_291">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d5b0e7535ad46367.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #111" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_292">
                    <div className="IFuOkc" style={{ backgroundPosition: "top right", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_295">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ce4f8f8dec2fecd7.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #112" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_298">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_301">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/76e435e5b96b4e57.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #113" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_302">
                    <div className="IFuOkc" style={{ backgroundPosition: "top left", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_305">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/5a8850f7abf55a71.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #114" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_308">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_311">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/62a84baaaae31494.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #115" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_312">
                    <div className="IFuOkc" style={{ backgroundPosition: "bottom center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_315">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6a10bf2742a40158.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #116" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_318">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_321">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/36c068e59c3e85ac.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #117" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_322">
                    <div className="IFuOkc" style={{ backgroundPosition: "top center", backgroundImage: "url(\"/site-assets/img/7d730c6db06bd8af.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_325">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3834798a471cf46c.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #118" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_328">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>Studio Programmed Bot Icons &amp; Banners designed by UnknownFairy</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_331">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/4d1efa3b702d70f4.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #119" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.34c42fd1ce1dc904_32">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/db19cd14b9e56dca.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.34c42fd1ce1dc904_35">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.k2rpcpebabmj" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.k2rpcpebabmj_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.k2rpcpebabmj_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.k2rpcpebabmj_l" aria-label="Copy heading link" href="#h.k2rpcpebabmj" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>BADGES, GAMEPASSES, DEV PRODUCT IMAGES (FOR STAFF, GAMES, ETC!)</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec" id="h.34c42fd1ce1dc904_37">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontVariant: "normal", fontWeight: "700", textDecoration: "underline" } as CSSProperties}>OF ANY PROJECT</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span>CREDITS: 1GG, PUG, (FORMER:) LIYOPY, POLAR PLATYPUS </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.34c42fd1ce1dc904_39">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div style={{ height: "40px" }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_46">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_40">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/730edcb71916423d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #120" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_41">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f1c145d3275e4a26.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #121" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_42">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/cda8f27a02c36c25.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #122" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_44">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/35571c2217f30d19.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #123" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_45">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/45c6ebdaf3728532.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #124" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_43">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0a7a062972fe5e33.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #125" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_60">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_63">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/e1f8c225b89e65cc.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #126" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_66">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6dc148d9aea43602.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #127" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_69">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/17e10065b01fbbc6.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #128" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_72">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/421aaeda1079991c.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #129" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_75">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/576e8936bdecd7d1.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #130" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_78">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/723d5b6c2c4b9423.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #131" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_79">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_82">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8bf712d865d2f910.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #132" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_85">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ad3004b6dd64b604.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #133" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_88">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ddcc1bd3dd269025.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #134" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_91">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/65ed83cd863dccc6.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #135" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_94">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/a8fbfb8bc7d85180.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #136" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_97">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fb3a6486ea41514e.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #137" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_98">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_101">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/19dc32e3cdcb46af.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #138" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_104">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/bab29e0807f79836.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #139" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_107">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/598583ae7dc14a55.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #140" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_110">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/5b3b46bfa70924a5.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #141" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_113">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/12d3e23941893826.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #142" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_116">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/63580ead980f1132.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #143" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_117">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_120">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/05775fddefc9520e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #144" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_123">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/900608e9afe48aea.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #145" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_126">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/c1144bd2bcc7c6bb.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #146" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_129">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/41f8489171641ae3.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #147" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_132">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/4e22a928a50eda1e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #148" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_135">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/49d68e5cc5af8c08.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #149" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_136">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_139">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/290413ff0515bcdd.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #150" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_142">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/725052c56d4a1a1b.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #151" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_145">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3fc5146f3127c91e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #152" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_148">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/26f91b849ddf29e2.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #153" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_151">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/f501b6ab41887906.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #154" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_154">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/ec158d550bfd6649.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #155" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_223">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_226">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/77c91ece503984d9.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #156" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_229">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/3e205e3143700bfe.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #157" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_232">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/9ddd5207f45b046c.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #158" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_235">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/6bb4c2d2dc882ea8.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #159" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_238">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8289a00ae47ce6db.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #160" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_241">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d41f48fed41b93ae.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #161" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.34c42fd1ce1dc904_174">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/db19cd14b9e56dca.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.34c42fd1ce1dc904_177">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.rikytbpk1t5x" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.rikytbpk1t5x_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.rikytbpk1t5x_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.rikytbpk1t5x_l" aria-label="Copy heading link" href="#h.rikytbpk1t5x" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>BIRTHDAYS, GIFTS, ARTISTS' WEEK &amp; OTHER FANART DESIGNS</span>
                                        </div>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec" id="h.34c42fd1ce1dc904_179">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontVariant: "normal", fontWeight: "700", textDecoration: "underline" } as CSSProperties}>OF ANY PROJECT</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontVariant: "normal" } as CSSProperties}>CREDITS:</span>
                                        <span> KAT &amp; former designers</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="oKdM2c ZZyype">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.34c42fd1ce1dc904_181">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div style={{ height: "40px" }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_185">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_182">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/021dabb574ecf636.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #162" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_183">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/79fccdaca4b3d16e.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #163" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_184">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/0dd72b0124132c6c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #164" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_192">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/dd91eac4c4728c13.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #165" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_196">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/275a491cfeb93691.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #166" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_200">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/67775a79456bf6d7.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0 0% 0%" }} role="img"  alt="Stargame Studio original artwork #167" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd" id="h.34c42fd1ce1dc904_204">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_210">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/87ccfa50fdc17baa.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #168" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_207">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/d6029f6a2879960d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #169" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_213">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/8dbf8dcc2467bee2.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #170" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_216">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/fbda8946815cee52.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #171" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_219">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/db306c382002c58d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #172" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_222">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="t3iYD">
                                        <img src="/site-assets/img/393de720c708984f.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #173" loading="lazy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.4a222220fade0dcb_134">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/fb4a345340b28520.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4a222220fade0dcb_131">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.hm7up1crvpqh" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.hm7up1crvpqh_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.hm7up1crvpqh_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.hm7up1crvpqh_l" aria-label="Copy heading link" href="#h.hm7up1crvpqh" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "#ffffff" }}>PRICES &amp; CONTACT INFORMATION:</span>
                                        </div>
                                      </h2>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DEVELOPING</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DEVELOPMENT (ASSETS/CODES/SMALL STUFF) - STARTS FROM $5 OR 500 ROBUX!</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DEVELOPMENT (GAMES/EXPERIENCES) - STARTS FROM $300 OR 30,000 ROBUX!</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DEVELOPMENT (PLUGINS/PREMADE ASSETS) $12 OR 4500 ROBUX EACH!</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "right" }} dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DESIGNS</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "right" }} dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DESIGNING (CHARACTER SHEET) STARTS FROM $5 OR 500 ROBUX!</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "right" }} dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DESIGNING (GAME UIS) STARTS FROM $12 OR 650 ROBUX! </span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "right" }} dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>DESIGNING (GAME ICONS &amp; MORE) FROM $18 OR 850 ROBUX!</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>NOTICE:</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="jgG6ef" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>We also do bundles and packages! These will soon be listed in a special place on our website!</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>CONTACT:</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontVariant: "normal", fontWeight: "700", verticalAlign: "baseline" } as CSSProperties}>ironlion390 on Discord - Founder</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>niamaru87 on Discord - Co-Owner </span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>act_11 on Discord - Staff Coordinator</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ color: "#ffffff", fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>warrior0767 on Discord - </span>
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontVariant: "normal", fontWeight: "700", verticalAlign: "baseline" } as CSSProperties}>Co-Owner</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ color: "#ffffff", fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>real_adz01 on Discord - </span>
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontVariant: "normal", fontWeight: "700", verticalAlign: "baseline" } as CSSProperties}>Co-Owner</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span style={{ fontFamily: "Comfortaa, Arial", fontSize: "13.999999999999998pt", fontWeight: "700", verticalAlign: "baseline" }}>any of those five can be contacted to hire a studio developer or designer for a commission! </span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_43">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/fb4a345340b28520.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.cb101390de5afd0_46">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.wqucie5feq72" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.wqucie5feq72_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.wqucie5feq72_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.wqucie5feq72_l" aria-label="Copy heading link" href="#h.wqucie5feq72" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "#ffffff" }}>CREDITS!</span>
                                        </div>
                                      </h2>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="puwcIf" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>Founder of SG Studio - Lionel for developing and designing the entire website </span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="puwcIf" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>OTHER BACKGROUND DESIGNS WOULD BE FROM: KATSUNI, COSMEH, &amp; FORMER DESIGNERS!</span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="puwcIf" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>Head of Russian Translations &amp; Senior Designer - Cosmo Cat for designing the background for the entire website</span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.7d47fe598549f23a_0">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/b8ee1ec1f0d008ee.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.7d47fe598549f23a_3">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.5c56br81ylfd" />
                                      <h2 className="zfr3Q duRjpb CDt4Ke" style={{ textAlign: "center" }} id="h.5c56br81ylfd_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.5c56br81ylfd_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.5c56br81ylfd_l" aria-label="Copy heading link" href="#h.5c56br81ylfd" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span style={{ color: "#ffffff" }}>NOTICES</span>
                                        </div>
                                      </h2>
                                      <p className="zfr3Q CDt4Ke" style={{ marginLeft: "15.0pt", paddingLeft: "0.0pt", textAlign: "center", textIndent: "0.0pt" }} dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>Asset Ownership &amp; Credits: </span>
                                        <span className="Rn3Z1b" style={{ verticalAlign: "baseline" }}>Any work submitted to Stargame Studio becomes the property and asset of the studio. We may continue to use and display work created by former designers. By submitting your work to us, you agree that legal action cannot be taken regarding pending compensation, provided you are officially on our list to be paid. Additionally, while we value our team's contributions, we reserve the right to include or omit individual credits on our website and projects to keep our layouts clean and manageable.</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ marginLeft: "15.0pt", paddingLeft: "0.0pt", textAlign: "center", textIndent: "0.0pt" }} dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>AI Usage Policy: </span>
                                        <span className="Rn3Z1b" style={{ verticalAlign: "baseline" }}>We do NOT allow fully AI-generated work. AI must be used responsibly and strictly within defined limits—specifically, it may only be used to assist human creators with mundane processes, quick research, or professionalizing your workflow.</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ marginLeft: "15.0pt", paddingLeft: "0.0pt", textAlign: "center", textIndent: "0.0pt" }} dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>Client Payment Security: </span>
                                        <span className="Rn3Z1b" style={{ verticalAlign: "baseline" }}>If we are hired for a commission and have concerns regarding payment details, we reserve the right to request a 50% upfront deposit. This policy is in place to ensure both the commission process and the final payment are secure for everyone involved.</span>
                                      </p>
                                      <br />
                                      <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                                        <span className="Rn3Z1b" style={{ fontFamily: "Comfortaa, Arial", fontWeight: "700", verticalAlign: "baseline" }}>Hiring &amp; Vetting: </span>
                                        <span className="Rn3Z1b" style={{ verticalAlign: "baseline" }}>When we are hiring designers or developers, we reserve the right to request a comprehensive portfolio or assign a small, specific example task to accurately verify your skills before bringing you onto the team.</span>
                                      </p>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd WxWicb" id="h.7c0db9c4cfcaf40_5">
                    <div className="IFuOkc" />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.7c0db9c4cfcaf40_8">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd baZpAe">
                                      <div className="iwQgFb" role="presentation" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="yaqOZd cJgDec nyKByd" id="h.1b63de9d098317d2_105">
                    <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/7d8ff291eb3dd443.webp\")", backgroundSize: "cover" } as CSSProperties} />
                    <div className="mYVXT">
                      <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
                        <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
                          <div className="JNdkSc-SmKAyb LkDMRd">
                            <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                              <div className="oKdM2c ZZyype Kzv0Me">
                                <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.1b63de9d098317d2_102">
                                  <div className="jXK9ad-SmKAyb">
                                    <div className="tyJCtd mGzaTb Depvyb baZpAe">
                                      <div className="aP9Z7e" id="h.xwk5bmuj12dg" />
                                      <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.xwk5bmuj12dg_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.xwk5bmuj12dg_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.xwk5bmuj12dg_l" aria-label="Copy heading link" href="#h.xwk5bmuj12dg" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>Any questions or inquiries? </span>
                                        </div>
                                      </h2>
                                      <div className="aP9Z7e" id="h.dmutpyp525qe" />
                                      <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.dmutpyp525qe_l" dir="ltr">
                                        <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                                          <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                                            <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.dmutpyp525qe_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                              <a className="FKF6mc TpQm9d" aria-describedby="h.dmutpyp525qe_l" aria-label="Copy heading link" href="#h.dmutpyp525qe" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                                <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                                <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                                  <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                                    <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                                      <path d="M0 0h24v24H0z" fill="none" />
                                                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                    </svg>
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <span>Reach out to - </span>
                                          <a className="XqQF9c" style={{ color: "inherit", textDecoration: "none" }} href="mailto:stargamestudioofficial@gmail.com" target="_blank">
                                            <span className="aw5Odc" style={{ textDecoration: "underline" }}>stargamestudioofficial@gmail.com</span>
                                          </a>
                                          <span> </span>
                                        </div>
                                      </h2>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span>Copyright Stargame Studio 2026 </span>
                                      </p>
                                      <p className="zfr3Q CDt4Ke" dir="ltr">
                                        <span>Up to date as of October</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="Xpil1b xgQ6eb" />
                <div className="dZA9kd ynRLnc" {...({ jscontroller: "j1RDQb", jsaction: "rcuQ6b:rcuQ6b;MxH79b:JdcaS;FaOgy:XuHpsb;" } as any)}>
                  <div className="JRtysb WzwrXb I12f0b K2mXPb zXBiaf ynRLnc" role="button" aria-label="Site actions" aria-disabled="false" tabIndex={0} aria-haspopup="true" aria-expanded="false" id="ow11" {...({ jscontroller: "iSvg6e", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;;keydown:I481le;", jsshadow: "", jsname: "Bg3gkf", __is_owner: "true" } as any)}>
                    <div className="NWlf3e" {...({ jsname: "ksKsZd" } as any)} />
                    <span className="MhXXcc oJeWuf" {...({ jsslot: "" } as any)}>
                      <span className="Lw7GHd snByac">
                        <svg className="NMm5M" width="24" height="24" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="LqzjUe" {...({ jscontroller: "j1RDQb", jsaction: "focusin:gBxDVb(srlkmf); focusout:zvXhGb(srlkmf); click:ro2KTd(psdQ5e);JIbuQc:DSypkd(Bg3gkf);MxH79b:JdcaS;rcuQ6b:rcuQ6b;" } as any)}>
                  <div className="Q0cSn" {...({ jsname: "psdQ5e" } as any)} />
                  <div className="hBW7Hb" {...({ jsname: "bN97Pc" } as any)}>
                    <div className="mUbCce fKz7Od kpPxtd QMuaBc M9Bg4d" role="button" aria-label="Site actions" aria-disabled="false" tabIndex={-1} aria-hidden="true" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "Bg3gkf" } as any)}>
                      <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                      <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                        <span className="Ce1Y1c" style={{ top: "-12px" }}>
                          <svg className="NMm5M" width="24" height="24" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                            <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="hUphyc" {...({ jsname: "srlkmf" } as any)}>
                      <div className="YkaBSd">
                        <div className="iBkmkf"><span>Page updated</span> <span className="dji00c" tabIndex={0} role="contentinfo" {...({ jsname: "CFIm1b", jsaction: "AHmuwe:eGiyHb; mouseover:eGiyHb;" } as any)} /></div>
                      </div>
                      <div className="YkaBSd" {...({ jsaction: "click:Toy3n;" } as any)}>
                        <div className="kpPxtd J7BuEb" role="button" aria-disabled="false" tabIndex={0} {...({ jsshadow: "", jsname: "V2zOu" } as any)}>Google Sites</div>
                      </div>
                      <div className="YkaBSd" {...({ jscontroller: "HYv29e", jsaction: "click:dQ6O0c;" } as any)}>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div {...({ jscontroller: "YV8yqd", jsaction: "rcuQ6b:npT2md" } as any)} />
      <div style={{ position: "absolute", left: "0px", top: "-1px", zIndex: "-2", opacity: "0", height: "1px", width: "1px", overflow: "hidden" }} id="docs-aria-speakable" role="region" aria-live="assertive" aria-atomic="true" aria-hidden="false" />
      <section className="sg-theme bg-cover bg-center px-6 py-16 text-foreground" style={{ backgroundImage: "linear-gradient(to bottom, color-mix(in oklab, var(--background) 78%, transparent), var(--background)), url(/site-assets/img/870add0bd97abcce.webp)" }}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/85 p-8 backdrop-blur">
          <div className="flex items-center gap-3">
            <img src={STUDIO_ASSETS.logo.src} alt={STUDIO_ASSETS.logo.alt} className="h-11 w-11 rounded-full border border-primary/50 object-cover" loading="lazy" />
            <h2 className="sg-display text-2xl text-primary sm:text-3xl">{t("home.aboutHeading")}</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("home.aboutBody")}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full border border-primary/70 px-4 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t(n.labelKey, n.label)}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="sg-theme fixed bottom-4 right-4 z-[100]"><LanguagePicker /></div>
      <SiteFooterNav />
    </>
  );
}

function ImportedSection() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.cb101390de5afd0_214">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/423ccc72b51715cb.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.15d4a508ec9b0a98_16">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.6ux79uydcoi8">💫Icons!💫</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.ra0mn1x0synb">CORE VALUE - Artists</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.vp4cx8yrbcpi">CORE VALUE - Developers</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.qm9pdue0322q">CORE VALUE - Creators</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.gfymb5h541gk">PAST DESIGNING WORK ON SAVIOR</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.ufei3kt10fil">DEVELOPMENT &amp; DESIGN WORK ON STARRY SIMULATOR</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.jadbixko3ejf">DEVELOPMENT &amp; DESIGNING WORK ON THE OUTBREAK</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.k42gg7r3hgno">DESIGNED BY FORMER DESIGNER CIGERDS FOR THE OUTBREAK</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.4hduke5zxpu9">STARCITY (and former RELAX HANGOUT) DEVELOPMENT AND DESIGNS!</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.coxde1kjzndr">DESIGNED BY FORMER DESIGNER CIGERDS FOR STARCITY</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.x9cc0mnf65r1">DESIGNED BY FORMER DESIGNERS FOR STARCITY</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.fgz7phl1wd5p">DESIGNED BY COSMEH FOR STARCITY</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.6mpcdiwtk66x">DESIGNED BY FORMER DESIGNERS FOR STARCITY</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.tjjh5dwjq1ip">Designed by 1GG!</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.tjbaz1u3d8vd">DESIGNED BY FORMER DESIGNER POLARPLATYPUS!</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.lu4qjlntyfwm">DESIGNED BY VY (Poleyz)!</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.27lrmvhljbpu">Former Designers' work</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.5afj6desosi">VECCERA CAFE DESIGNS &amp; DEVELOPMENT</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.ji3shw5y1i0g">Made by skyblue</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.x53ehrccj83q">Made by Akima</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.va3ko6ocs2pz">Made by Alex Ishio</a>
                        </div>
                        <div className="zfr3Q pBmh1 d8ISdd SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.broxud3su3gq">Built by M707</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.f4tyj1hlu169">COMICS</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.6zu9s2vtci51">WALLPAPERS (PC &amp; MOBILE - FREE)</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.k2rpcpebabmj">BADGES, GAMEPASSES, DEV PRODUCT IMAGES (FOR STAFF, GAMES, ETC!)</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.rikytbpk1t5x">BIRTHDAYS, GIFTS, ARTISTS' WEEK &amp; OTHER FANART DESIGNS</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.hm7up1crvpqh">PRICES &amp; CONTACT INFORMATION:</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.wqucie5feq72">CREDITS!</a>
                        </div>
                        <div className="zfr3Q pBmh1 SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.5c56br81ylfd">NOTICES</a>
                        </div>
                        <div className="zfr3Q pBmh1 EuvMxb SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.xwk5bmuj12dg">Any questions or inquiries?</a>
                        </div>
                        <div className="zfr3Q pBmh1 EuvMxb SV3pxb" {...({ jscontroller: "kTx9td", jsaction: "click:KjsqPd;" } as any)}>
                          <a className="mTgrD aw5Odc mD9Vkc" href="#h.dmutpyp525qe">Reach out to - stargamestudioofficial@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionIcons() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.34c42fd1ce1dc904_14">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/2aa8db2c4186afa7.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.34c42fd1ce1dc904_17">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe" role="main" tabIndex={0}>
                        <div className="aP9Z7e" id="h.6ux79uydcoi8" />
                        <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.6ux79uydcoi8_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.6ux79uydcoi8_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.6ux79uydcoi8_l" aria-label="Copy heading link" href="#h.6ux79uydcoi8" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span className="HpsWJ" style={{ color: "rgb(255, 255, 255)", fontFamily: "\"Hachi Maru Pop\", Arial", fontVariant: "normal", fontWeight: "400", verticalAlign: "baseline" } as CSSProperties}>💫</span>
                            <span className="HpsWJ" style={{ color: "rgb(255, 255, 255)", fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "400", verticalAlign: "baseline" }}>Icons</span>
                            <span className="HpsWJ" style={{ color: "rgb(255, 255, 255)", fontFamily: "\"Hachi Maru Pop\", Arial", fontVariant: "normal", fontWeight: "400", verticalAlign: "baseline" } as CSSProperties}>!💫</span>
                          </div>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection2() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.15d4a508ec9b0a98_19">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/752abf225244c286.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.68e7e6c124ae4bec_0">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/c2b768522d9ba634.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #174" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_3">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>Official Logo &amp; Icon designed by Ashy_moonwolf!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_218">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/d8e8f6cf8c7d6c86.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #175" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_222">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "left" }} dir="ltr">
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>SG Clothing Icon by Alex Ishio</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_40">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/e12d55a2d20b502c.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #176" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_42">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>Designer's Department Icon (TO BE UPDATED)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_210">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/3633b68dc46c9877.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #177" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_215">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>Secure Labs</span>
                          <span className="jgG6ef" style={{ fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}>{" "}</span>
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>Icon (TO BE REVAMPED)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWelcome() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.33efd66436177895_8">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/2aa8db2c4186afa7.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.33efd66436177895_11">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.7h41b1so0ful" />
                        <h2 className="zfr3Q JYVBee CDt4Ke" style={{ textAlign: "center" }} id="h.7h41b1so0ful_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.7h41b1so0ful_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.7h41b1so0ful_l" aria-label="Copy heading link" href="#h.7h41b1so0ful" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span className="HpsWJ" style={{ color: "rgb(255, 255, 255)", fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "400", verticalAlign: "baseline" }}>💫Welcome!</span>
                            <span className="HpsWJ" style={{ color: "rgb(255, 255, 255)", fontFamily: "\"Hachi Maru Pop\", Arial", fontVariant: "normal", fontWeight: "400", verticalAlign: "baseline" } as CSSProperties}>💫</span>
                          </div>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection3() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.4f6963449a13c2a8_4">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/4cfbb3a11814e8f4.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.4f6963449a13c2a8_0">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <small className="zfr3Q TMjjoe CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", display: "block", lineHeight: "1.656", marginBottom: "12pt", marginTop: "12pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "700", verticalAlign: "baseline" }}>Dream it, commission it, </span>
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontStyle: "italic", fontWeight: "700", verticalAlign: "baseline" }}>we build it</span>
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "700", verticalAlign: "baseline" }}>. </span>
                        </small>
                        <br />
                        <small className="zfr3Q TMjjoe CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", display: "block", lineHeight: "1.656", marginBottom: "12pt", marginTop: "12pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "700", verticalAlign: "baseline" }}>Stargame Studio is a creative team dedicated to bringing your ideas to life. </span>
                        </small>
                        <br />
                        <small className="zfr3Q TMjjoe CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", display: "block", lineHeight: "1.656", marginBottom: "12pt", marginTop: "12pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "700", verticalAlign: "baseline" }}>From custom artwork and digital fashion (like 2D clothing and UGC) to original music and content creation, we craft the pieces that make your project stand out. </span>
                        </small>
                        <br />
                        <small className="zfr3Q TMjjoe CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", display: "block", lineHeight: "1.656", marginBottom: "12pt", marginTop: "12pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "700", verticalAlign: "baseline" }}>Need a full game built for Roblox or Steam?</span>
                          <span className="puwcIf" style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontStyle: "italic", fontWeight: "700", verticalAlign: "baseline" }}> We can do that, too.</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection4() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.4f6963449a13c2a8_5">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/5e0c4ce46da8c389.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.79fc26c8fab9e9ce_0">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/870add0bd97abcce.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #178" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4f6963449a13c2a8_8">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span> Our banner #1 designed by la.poleyz! </span>
                        </p>
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>Featuring characters from StarCity!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_49">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/c75d496ea1a42672.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #179" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_54">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ lineHeight: "1.8", textAlign: "center" }} dir="ltr">
                          <span style={{ color: "rgb(249, 249, 249)" }}>BANNER #2 DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>MDVRXON.XX</span>
                        </p>
                        <p className="zfr3Q CDt4Ke" style={{ lineHeight: "1.8", textAlign: "center" }} dir="ltr">
                          <span style={{ color: "rgb(249, 249, 249)" }}>Featuring all lead designers! CigeRDs, Poleyz, Honeypah, Ash &amp; </span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>MDVRXON.</span>
                          <span style={{ fontVariant: "normal" } as CSSProperties}>XX</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.20c1e9fbe45a908a_3">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/06354d3b6b77905c.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #180" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.20c1e9fbe45a908a_5">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ lineHeight: "1.8", textAlign: "center" }} dir="ltr">
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>BANNER #</span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>3</span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}> DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>MDVRXON.XX</span>
                        </p>
                        <p className="zfr3Q CDt4Ke" style={{ lineHeight: "1.8", textAlign: "center" }} dir="ltr">
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>Featuring all senior designers! </span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>Katsuni, Poleyz, Ashy_moonwolf, Alex Ishio</span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}> &amp; </span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>MDVRXON.</span>
                          <span style={{ fontVariant: "normal" } as CSSProperties}>XX</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection5() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.4f6963449a13c2a8_25">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/1de7facfd91014cb.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4f6963449a13c2a8_53">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/3ca4a9fa68dad7dc.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #181" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.4f6963449a13c2a8_30">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.ra0mn1x0synb" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.ra0mn1x0synb_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.ra0mn1x0synb_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.ra0mn1x0synb_l" aria-label="Copy heading link" href="#h.ra0mn1x0synb" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span style={{ color: "rgb(255, 255, 255)" }}>CORE VALUE - Artists</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4f6963449a13c2a8_32">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", lineHeight: "1.656", marginBottom: "12pt", marginTop: "12pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span style={{ color: "rgb(255, 255, 255)", fontSize: "11pt", verticalAlign: "baseline" }}>We deeply recognize the unique, irreplaceable value of human creativity. While AI-generated work is flooding the internet, we are actively pushing for a massive resurgence of original 2D, digital, and traditional art. We are committed to moving away from the homogenous, often flawed look of AI to prove that nothing beats authentic human talent. To make this happen, we are aggressively recruiting talented artists and designers worldwide to join our team. Our primary mission right now is to have our designs recognized globally, driving toward our ultimate goal: becoming the #1 Art Studio, #2 in overall Creations, and #3 in Development worldwide. </span>
                        </p>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_45">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/e6d64c3544b8db6d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #182" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_29">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>We prioritize original, unique designs and content for you! </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_46">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/5d88f5082b94b2ca.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #183" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_34">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>We ensure that when or if AI is to be used we use it within fair and approriate defined grounds!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.4f6963449a13c2a8_54">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/80eb1a7b0cde97b4.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #184" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.4f6963449a13c2a8_37">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.vp4cx8yrbcpi" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.vp4cx8yrbcpi_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.vp4cx8yrbcpi_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.vp4cx8yrbcpi_l" aria-label="Copy heading link" href="#h.vp4cx8yrbcpi" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span style={{ color: "rgb(255, 255, 255)" }}>CORE VALUE - Developers</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.4f6963449a13c2a8_39">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", lineHeight: "1.38", marginBottom: "0pt", marginTop: "0pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span style={{ color: "rgb(255, 255, 255)", fontSize: "11pt", verticalAlign: "baseline" }}>Stargame Studio is dedicated to transforming ambitious ideas into fully realized digital experiences. Whether you are looking to build an immersive game for Roblox or Steam, develop a mobile app, launch a dynamic website, or code custom Discord bots, we provide the technical expertise and collaborative environment to make it happen. We are committed to supporting both indie innovators and larger organizations in bringing their software and gaming visions to life across any platform.</span>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_47">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/e56fd893ddee49b3.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #185" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_39">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>We welcome any and everybody into our community! Gamers, investors, supporters, developers, designers and more!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_48">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/d3cc0654ac2a6fb6.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #186" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_44">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>We accept PayPal and ROBUX Through Gamepasses!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.3b55f8ff05e650cb_3">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/ceef4605d2bf5c06.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #187" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec" id="h.3b55f8ff05e650cb_5">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.qm9pdue0322q" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.qm9pdue0322q_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.qm9pdue0322q_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.qm9pdue0322q_l" aria-label="Copy heading link" href="#h.qm9pdue0322q" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span style={{ color: "rgb(255, 255, 255)", fontVariant: "normal" } as CSSProperties}>CORE VALUE - </span>
                            <span style={{ color: "rgb(255, 255, 255)" }}>Creators</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-ibL1re Ft7HRd-AhqUyc-ibL1re purZT-AhqUyc-ibL1re ZcASvf-AhqUyc-ibL1re pSzOP-AhqUyc-ibL1re Ktthjf-AhqUyc-ibL1re jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.3b55f8ff05e650cb_7">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ backgroundColor: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", lineHeight: "1.38", marginBottom: "0pt", marginTop: "0pt", padding: "0pt" } as CSSProperties} dir="ltr">
                          <span style={{ color: "rgb(255, 255, 255)", fontSize: "11pt", fontVariant: "normal", verticalAlign: "baseline" } as CSSProperties}>Stargame Studio is dedicated to transforming ambitious ideas into fully realized digital experiences. Whether you are looking to build an immersive game for Roblox or Steam, develop a mobile app, launch a dynamic website, or code custom Discord bots, we provide the technical expertise and collaborative environment to make it happen. We are committed to supporting both indie innovators and larger organizations in bringing their software and gaming visions to life across any platform.</span>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection6() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.4f6963449a13c2a8_47">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/1ef586ff8265954e.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_67">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.gfymb5h541gk" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.gfymb5h541gk_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.gfymb5h541gk_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.gfymb5h541gk_l" aria-label="Copy heading link" href="#h.gfymb5h541gk" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span style={{ fontFamily: "\"Hachi Maru Pop\", Arial", fontWeight: "400" }}>PAST DESIGNING WORK ON SAVIOR</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection7() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_98">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/3173147ecd46c601.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_119">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/abc0265f5fa4a54f.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #188" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_103">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>ASHY_MOONWOLF</span>
                          <span style={{ color: "rgb(0, 0, 0)", fontFamily: "Arial", fontSize: "11pt", fontWeight: "400", verticalAlign: "baseline" }}> </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.20c1e9fbe45a908a_29">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/b2d59281ff4c9cbe.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #189" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.20c1e9fbe45a908a_35">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)", fontVariant: "normal" } as CSSProperties}>POLEYZ</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_120">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/a80303e22f2eab67.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #190" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_108">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>ASHY_MOONWOLF</span>
                          <span style={{ color: "rgb(0, 0, 0)", fontFamily: "Arial", fontSize: "11pt", fontWeight: "400", verticalAlign: "baseline" }}> </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.20c1e9fbe45a908a_15">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/c9f9fa8e78c0a30d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #191" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.20c1e9fbe45a908a_20">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span style={{ color: "rgb(249, 249, 249)" }}>POLEYZ</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_121">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/b46fd260712cf0ba.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #192" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.5e5f596f6800bbb_118">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY ASH</span>
                          <span>Y</span>
                          <span style={{ fontVariant: "normal" } as CSSProperties}>_</span>
                          <span>MOONWOLF</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec" id="h.53f1d5e2064f25c4_65">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/59bf27686812dfd4.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #193" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.53f1d5e2064f25c4_70">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span>WASTE</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_142">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/e01644e296829102.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #194" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_146">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span>DIVINE</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection8() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_154">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/d6467f4685716775.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_150">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.ufei3kt10fil" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.ufei3kt10fil_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.ufei3kt10fil_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.ufei3kt10fil_l" aria-label="Copy heading link" href="#h.ufei3kt10fil" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span>DEVELOPMENT &amp; DESIGN WORK ON STARRY SIMULATOR</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection9() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_161">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/805ad56c16a531ad.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_130">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span className="jgG6ef" style={{ verticalAlign: "baseline" }}>CLICK BELOW TO PLAY THE GAME </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_157">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div {...({ jscontroller: "VYKRW", jsaction: "rcuQ6b:rcuQ6b;" } as any)}>
                          <div className="zGRpZc XYbcoe">
                            <a className="TqzB8b" href={"https://www.roblox.com/games/88425766393203/Starry-Simulator"} target="_blank">
                              <img className="SEaNKb"  alt="Stargame Studio original artwork #195" loading="lazy" />
                              <span className="vBSm9c">
                                <span className="nWW5Nb CDt4Ke zfr3Q OmQG5e">💫 Starry Simulator ⭐</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf JNdkSc SQVYQc L6cTce-purZT L6cTce-pSzOP">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection10() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_123">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/6e30cbaf1ed125f9.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_155">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/695b45400199db0b.webp" className="CENy8b" style={{ width: "100%", margin: "0% 0px 0% 0%" }} role="img"  alt="Stargame Studio original artwork #196" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_128">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>DESIGNED BY MDVRXON.XX</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_135">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/b6d7340127a126a0.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #197" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_139">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span>DIVINE</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_156">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/708b5964a0c42cba.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #198" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_133">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY MDVRXON.XX</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection11() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_182">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/d27742d393ef3465.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_179">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.jadbixko3ejf" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.jadbixko3ejf_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.jadbixko3ejf_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.jadbixko3ejf_l" aria-label="Copy heading link" href="#h.jadbixko3ejf" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span>DEVELOPMENT &amp; DESIGNING WORK ON THE OUTBREAK</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection12() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_162">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/3394468b62ff16bc.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_177">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/cb5205ed6d9ab46d.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #199" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_167">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>DESIGNED BY NISHA</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.cb101390de5afd0_149">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/ee8cd04553fa9661.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #200" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-II5mzb Ft7HRd-AhqUyc-II5mzb pSzOP-AhqUyc-II5mzb Ktthjf-AhqUyc-II5mzb jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.cb101390de5afd0_153">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span style={{ fontVariant: "normal" } as CSSProperties}>DESIGNED BY </span>
                          <span>Former Designer POLARPLATYPUS</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc yYI8W HQwdzb">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb" id="h.5e5f596f6800bbb_178">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/fe50f600f1828440.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #201" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oKdM2c ZZyype">
                  <div className="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec wHaque g5GTcb" id="h.5e5f596f6800bbb_174">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <p className="zfr3Q CDt4Ke" style={{ textAlign: "center" }} dir="ltr">
                          <span>DESIGNED BY NISHA</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection13() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_237">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/95825d3921036a3c.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_233">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd mGzaTb Depvyb baZpAe">
                        <div className="aP9Z7e" id="h.k42gg7r3hgno" />
                        <h3 className="zfr3Q OmQG5e CDt4Ke" style={{ textAlign: "center" }} id="h.k42gg7r3hgno_l" dir="ltr">
                          <div className="CjVfdc" {...({ jscontroller: "Ae65rd", jsaction: "touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" } as any)}>
                            <div className="PPhIP rviiZ" {...({ jsname: "haAclf" } as any)}>
                              <div className="mUbCce fKz7Od Znu9nd M9Bg4d" role="presentation" aria-describedby="h.k42gg7r3hgno_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" {...({ jscontroller: "mxS5xe", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;", jsshadow: "" } as any)}>
                                <a className="FKF6mc TpQm9d" aria-describedby="h.k42gg7r3hgno_l" aria-label="Copy heading link" href="#h.k42gg7r3hgno" role="button" {...({ jsname: "hiK3ld" } as any)}>
                                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                                    <span className="Ce1Y1c" style={{ top: "-11px" }}>
                                      <svg className="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" {...({ focusable: "false" } as any)}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <span>DESIGNED BY FORMER DESIGNER CIGERDS FOR THE OUTBREAK</span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection14() {
  return (
    <section className="yaqOZd cJgDec nyKByd" id="h.5e5f596f6800bbb_183">
      <div className="IFuOkc" style={{ backgroundPosition: "center center", backgroundImage: "url(\"/site-assets/img/84fd8fdd7b73914c.webp\")", backgroundSize: "cover" } as CSSProperties} />
      <div className="mYVXT">
        <div className="LS81yb VICjCf j5pSsc db35Fc" tabIndex={-1}>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_204">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/b1e51a42c784ae47.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #202" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_205">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/c637854f84b420d1.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #203" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_206">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/03b88832abb53a11.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #204" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf JNdkSc SQVYQc">
            <div className="JNdkSc-SmKAyb LkDMRd">
              <div className="" {...({ jscontroller: "sGwD4d", jsaction: "zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;", jsname: "F57UId" } as any)}>
                <div className="oKdM2c ZZyype Kzv0Me">
                  <div className="hJDwNd-AhqUyc-c5RTEf Ft7HRd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf ZcASvf-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf Ktthjf-AhqUyc-c5RTEf jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb" id="h.5e5f596f6800bbb_207">
                    <div className="jXK9ad-SmKAyb">
                      <div className="tyJCtd baZpAe">
                        <div className="t3iYD">
                          <img src="/site-assets/img/ce12d2815859c9b0.webp" className="CENy8b" role="img"  alt="Stargame Studio original artwork #205" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
