import Link from "next/link";
import Logo from "@/components/Logo";
import { EMAIL, PHONE, PHONE_TEL } from "@/lib/site";

// Set to true once real properties, photos and reviews are ready.
// While false, the Properties & Reviews section and the link to it are hidden.
const SHOW_PROPERTIES_AND_REVIEWS = false;

export default function Home() {
  return (
    <>
      {/* ============ utility bar ============ */}
      <div className="utility">
        <div className="wrap">
          <div className="utility-left">
            <span><i className="dot"></i>Short-term · Long-term · Event-friendly</span>
            <span><i className="dot"></i>Owner reporting you can actually read</span>
          </div>
          <div className="utility-right">
            <a href={`tel:${PHONE_TEL}`}>☏ {PHONE}</a>
            <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
          </div>
        </div>
      </div>

      {/* ============ header ============ */}
      <header className="site-header">
        <div className="wrap">
          <Logo />
          <nav className="nav" id="nav">
            <a href="#services">Services</a>
            <a href="#event-friendly">Event-Friendly</a>
            <a href="#owners">For Owners</a>
            <a href="#tenants">For Tenants</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-navy btn-pill header-cta" href="#contact">Get a free rental analysis</a>
          <button className="menu-btn" id="menuBtn" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ============ hero ============ */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Hostly Management Company</p>
            <h1>Sacramento Property Management, <span className="accent">Thoughtfully Handled</span></h1>
            <p className="lead">Short-term, furnished mid-term, long-term, and event-friendly property management throughout Sacramento and surrounding communities.</p>
            <div className="hero-actions">
              <a className="btn btn-navy" href="#contact">Get a free rental analysis →</a>
              <a className="btn btn-ghost" href="#services">Explore our services</a>
            </div>
            <ul className="hero-checks">
              <li><i className="check">✓</i>Guest support 7 days a week</li>
              <li><i className="check">✓</i>Clear owner reporting</li>
              <li><i className="check">✓</i>Local vendor network</li>
            </ul>
          </div>
          <div className="hero-media">
            <img src="/images/house4.jpg"
                 alt="A sunlit Spanish-style managed home with landscaped garden" width="1100" height="860" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* ============ rental quick links ============ */}
      <div className="finder-holder">
        <div className="wrap">
          <div className="finder-cta">
            <div>
              <b>Looking for a place to stay?</b>
              <span>
                {SHOW_PROPERTIES_AND_REVIEWS
                  ? "Browse what's available, or tell us what you need and we'll match you."
                  : "Tell us what you need and we'll match you."}
              </span>
            </div>
            <div className="finder-cta-actions">
              {SHOW_PROPERTIES_AND_REVIEWS && (
                <a className="btn btn-navy" href="#rentals">View Available Rentals</a>
              )}
              <a className={`btn ${SHOW_PROPERTIES_AND_REVIEWS ? "btn-ghost" : "btn-navy"}`} href="#tenants">Tell Us What You Need</a>
            </div>
          </div>
        </div>
      </div>

      {/* ============ trust row ============ */}
      <section className="trust">
        <div className="wrap trust-grid">
          <div className="trust-item">
            <span className="trust-ic">⛨</span>
            <div><b>Property Review</b><p>Every home is reviewed before it is marketed or managed by Hostly.</p></div>
          </div>
          <div className="trust-item">
            <span className="trust-ic">▤</span>
            <div><b>Transparent reporting</b><p>Clear monthly updates on stays, costs, and payouts.</p></div>
          </div>
          <div className="trust-item">
            <span className="trust-ic">☏</span>
            <div><b>Support 7 days a week</b><p>One responsive point of contact for owners and guests.</p></div>
          </div>
          <div className="trust-item">
            <span className="trust-ic">✽</span>
            <div><b>Local vendor network</b><p>Trusted cleaning, maintenance, and event partners nearby.</p></div>
          </div>
        </div>
      </section>

      {/* ============ service areas ============ */}
      <section className="sec" id="service-areas">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Service areas</p>
              <h2>Local to Sacramento<br />and the communities around it.</h2>
            </div>
            <p className="lead">Hostly manages properties across the Sacramento region, with local vendors and on-the-ground support close by.</p>
          </div>
          <ul className="areas">
            {["Sacramento", "Natomas", "Elk Grove", "Roseville", "Marysville", "Clarksburg"].map((area) => (
              <li className="area" key={area}><span className="area-pin">◎</span>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ services ============ */}
      <section className="sec sec-alt" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">What we manage</p>
              <h2>Flexible service.<br />Consistent care.</h2>
            </div>
            <p className="lead">Hostly covers the full lifecycle of a managed home — from the first listing photo to the monthly owner statement.</p>
          </div>
          <div className="services">
            <article className="svc">
              <div className="svc-no">01</div>
              <h3>Short-term rental management</h3>
              <p>Listing strategy, guest communication, cleaning coordination, pricing support, and owner reporting.</p>
              <a className="more" href="#contact">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no sage">02</div>
              <h3>Long-term property management</h3>
              <p>Thoughtful tenant placement, rent coordination, maintenance oversight, and clear monthly updates.</p>
              <a className="more" href="#contact">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no rose">03</div>
              <h3>Event-friendly properties</h3>
              <p>Practical guidance for approved gatherings, vendor coordination, house rules, and property protection.</p>
              <a className="more" href="#event-friendly">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no">04</div>
              <h3>Owner support</h3>
              <p>One responsive point of contact with transparent communication and care tailored to your property.</p>
              <a className="more" href="#owners">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no sage">05</div>
              <h3>Tenant placement &amp; leasing</h3>
              <p>Strategic marketing, guided showings, applicant vetting, and lease execution to secure long-term, reliable tenants.</p>
              <a className="more" href="#owners">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no rose">06</div>
              <h3>Rent collection &amp; financial reporting</h3>
              <p>Automated rent processing and detailed monthly statements to ensure consistent cash flow and full financial visibility.</p>
              <a className="more" href="#owners">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no">07</div>
              <h3>Maintenance &amp; property care</h3>
              <p>Prompt dispatch of vetted contractors for routine repairs and emergency issues to protect your asset&apos;s value.</p>
              <a className="more" href="#contact">Learn more <span>↗</span></a>
            </article>
            <article className="svc">
              <div className="svc-no sage">08</div>
              <h3>Lease and Property Documentation</h3>
              <p>Organized lease administration, property notices, and management records, coordinated in accordance with applicable requirements.</p>
              <a className="more" href="#owners">Learn more <span>↗</span></a>
            </article>
          </div>
          <div className="services-cta">
            <a className="btn btn-outline btn-pill" href="#contact">Explore our services</a>
          </div>
        </div>
      </section>

      {/* ============ stay types ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Every property has a purpose</p>
              <h2>A management plan that fits the stay.</h2>
            </div>
            <p className="lead">From high-touch guest stays to stable long-term homes, Hostly adapts the details to how your property is most likely to perform.</p>
          </div>
          <div className="stays">
            <article className="stay">
              <div className="stay-img">
                <span className="badge teal">Short-term rental</span>
                <img src="/images/house2.jpg"
                     alt="Bright modern living room prepared for short-term guests" width="900" height="600" loading="lazy" />
              </div>
              <div className="stay-body">
                <h3>High-touch guest stays</h3>
                <p>Listing strategy, dynamic pricing support, and turnover coordination for homes that host often.</p>
                <div className="chips gold"><span className="chip">Guest messaging</span><span className="chip">Cleaning turns</span><span className="chip">Pricing support</span></div>
              </div>
            </article>
            <article className="stay">
              <div className="stay-img">
                <span className="badge sage">Long-term lease</span>
                <img src="/images/house1.jpg"
                     alt="Spanish-style home suited to a long-term lease" width="900" height="600" loading="lazy" />
              </div>
              <div className="stay-body">
                <h3>Stable resident homes</h3>
                <p>Careful tenant placement, rent coordination, and maintenance oversight with clear monthly updates.</p>
                <div className="chips sage"><span className="chip">Tenant screening</span><span className="chip">Rent coordination</span><span className="chip">Maintenance</span></div>
              </div>
            </article>
            <article className="stay">
              <div className="stay-img">
                <span className="badge rose">Event-friendly</span>
                <img src="/images/gatherings.jpg"
                     alt="Outdoor garden terrace set up for a small approved gathering" width="900" height="600" loading="lazy" />
              </div>
              <div className="stay-body">
                <h3>Approved gatherings</h3>
                <p>Eligible homes positioned for intimate events, with screening, house rules, and vendor coordination.</p>
                <div className="chips rose"><span className="chip">Event screening</span><span className="chip">House rules</span><span className="chip">Vendor coordination</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ event-friendly band ============ */}
      <section className="sec sec-alt" id="event-friendly">
        <div className="wrap">
          <div className="band">
            <img src="/images/house3.jpg"
                 alt="String-lit garden of a home approved for small gatherings" width="1000" height="800" loading="lazy" />
            <div className="band-body">
              <p className="eyebrow on-dark">Event-friendly properties</p>
              <h2>Welcoming spaces, clearly managed.</h2>
              <p>Hostly helps owners responsibly position eligible homes for intimate gatherings and approved events — with clear expectations from inquiry through checkout.</p>
              <ul className="band-list">
                <li>
                  <i className="check">✓</i>
                  <div><b>Event screening</b><p>We review each event request against the property&apos;s limits and the owner&apos;s comfort level before anything is approved.</p></div>
                </li>
                <li>
                  <i className="check">✓</i>
                  <div><b>Rules &amp; protection</b><p>Written house rules, guest counts, quiet hours, and vendor requirements shared up front and enforced on site.</p></div>
                </li>
              </ul>
              <a className="btn btn-teal" href="#contact" style={{ marginTop: "32px" }}>Ask about event-friendly hosting</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ for owners ============ */}
      <section className="sec" id="owners">
        <div className="wrap owners">
          <div>
            <p className="eyebrow">For owners</p>
            <h2>More clarity.<br />Less day-to-day friction.</h2>
            <p className="lead">Your property stays personal to you. Our job is to make the management feel organized, responsive, and easy to understand.</p>
            <div className="owner-side">
              <b>Prefer to talk it through first?</b>
              <span>Start with a free rental analysis — no commitment.</span>
            </div>
            <a className="btn btn-navy" href="#contact" style={{ marginTop: "26px" }}>Get a free rental analysis →</a>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-no">01</div>
              <div>
                <h3>Understand the property</h3>
                <p>We start with your home, market, ideal guest or tenant, and financial goals.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-no">02</div>
              <div>
                <h3>Build the right plan</h3>
                <p>You receive a practical management approach tailored to the property — not a one-size-fits-all package.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-no">03</div>
              <div>
                <h3>Manage the details</h3>
                <p>Hostly coordinates the recurring parts while keeping communication and owner reporting clear.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ portfolio & reviews (placeholders) ============ */}
      {SHOW_PROPERTIES_AND_REVIEWS && (
      <section className="sec sec-alt" id="rentals">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Properties &amp; reviews</p>
              <h2>Homes we manage.<br />People who trust us.</h2>
            </div>
            <p className="lead">Available rentals, managed properties, and what owners and guests say about working with Hostly.</p>
          </div>

          <h3 className="sub-head">Available rentals &amp; listing examples</h3>
          <div className="ph-grid">
            {[1, 2, 3].map((n) => (
              <article className="ph-card" key={`listing-${n}`}>
                <div className="ph-photo">Photo placeholder</div>
                <div className="ph-body">
                  <span className="ph-tag">Placeholder</span>
                  <h4>Listing example {n}</h4>
                  <p>Property name, neighborhood, stay type, and rate go here.</p>
                </div>
              </article>
            ))}
          </div>
          <p className="ph-cta">
            <a className="btn btn-ghost" href="#tenants">Tell Us What You Need</a>
          </p>

          <h3 className="sub-head">Managed properties</h3>
          <div className="ph-grid">
            {[1, 2, 3].map((n) => (
              <article className="ph-card" key={`managed-${n}`}>
                <div className="ph-photo">Photo placeholder</div>
                <div className="ph-body">
                  <span className="ph-tag">Placeholder</span>
                  <h4>Managed property {n}</h4>
                  <p>Short description of the property and how Hostly manages it.</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ph-quotes">
            <div>
              <h3 className="sub-head">Owner reviews</h3>
              {[1, 2].map((n) => (
                <blockquote className="ph-quote" key={`owner-${n}`}>
                  <span className="ph-tag">Placeholder</span>
                  <p>&ldquo;Owner review text goes here.&rdquo;</p>
                  <cite>— Owner name, property location</cite>
                </blockquote>
              ))}
            </div>
            <div>
              <h3 className="sub-head">Guest testimonials</h3>
              {[1, 2].map((n) => (
                <blockquote className="ph-quote" key={`guest-${n}`}>
                  <span className="ph-tag">Placeholder</span>
                  <p>&ldquo;Guest testimonial text goes here.&rdquo;</p>
                  <cite>— Guest name, stay type</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ============ for tenants ============ */}
      <section className="sec sec-alt" id="tenants">
        <div className="wrap tenants">
          <div>
            <p className="eyebrow">Looking for a place</p>
            <h2>Tell us what you&apos;re looking for.</h2>
            <p className="lead">Not every Hostly home is listed publicly. Share what you need — the area, the timing, the budget — and the team will point you to the properties that actually fit.</p>
            <ul className="tenant-points">
              <li><i className="check">✓</i>Short stays, long leases, or a home for an approved gathering</li>
              <li><i className="check">✓</i>Straight answers on rules, deposits, and what&apos;s included</li>
              <li><i className="check">✓</i>One point of contact from first question through move-in</li>
            </ul>
            <div className="helpbox">
              <b>Any questions?</b>
              <p>The Hostly team replies within one business day — or email us directly at
                {" "}<a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or call <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>.</p>
            </div>
          </div>

          <form className="form-card" data-form-type="tenant" data-done="Request sent — we'll be in touch">
            <div className="field-grid">
              <div className="field">
                <label htmlFor="t-name">Your name</label>
                <input id="t-name" name="name" type="text" placeholder="First and last name" required />
              </div>
              <div className="field">
                <label htmlFor="t-email">Email</label>
                <input id="t-email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="t-area">Preferred area</label>
                <input id="t-area" name="area" type="text" placeholder="City or neighborhood" />
              </div>
              <div className="field">
                <label htmlFor="t-stay">Stay type</label>
                <select id="t-stay" name="stay">
                  <option value="">Select one</option>
                  <option>Short-term rental</option>
                  <option>Long-term lease</option>
                  <option>Event-friendly stay</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="t-when">Move-in timing</label>
                <input id="t-when" name="timing" type="text" placeholder="e.g. next month, flexible" />
              </div>
              <div className="field">
                <label htmlFor="t-budget">Budget range</label>
                <input id="t-budget" name="budget" type="text" placeholder="Monthly or nightly" />
              </div>
              <div className="field full">
                <label htmlFor="t-notes">Anything else we should know?</label>
                <textarea id="t-notes" name="notes" placeholder="Bedrooms, pets, parking, accessibility, questions for the team…"></textarea>
              </div>
              <div className="field full">
                <button className="btn btn-coral" type="submit">Send my request</button>
                <p className="form-note">Your request goes straight to the Hostly team.</p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ============ management process ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="process-card">
            <div className="process-head">
              <span className="process-pill">Our work process</span>
              <h2>Our Management Process</h2>
              <p>A clear, repeatable process for every property we manage — from the first conversation to ongoing reporting.</p>
            </div>
            <div className="process-grid">
              <div className="process-step">
                <span className="process-step-badge">Step 1</span>
                <h3>Onboarding &amp; Strategy Planning</h3>
                <p>We analyze your asset, establish competitive pricing, and align on your management goals.</p>
              </div>
              <div className="process-step">
                <span className="process-step-badge">Step 2</span>
                <h3>Marketing &amp; Tenant Placement</h3>
                <p>Targeted listings, seamless showings, thorough applicant vetting, and total lease coordination.</p>
              </div>
              <div className="process-step">
                <span className="process-step-badge">Step 3</span>
                <h3>Operations &amp; Resident Relations</h3>
                <p>Automated rent collection, 24/7 maintenance dispatch, and proactive tenant support.</p>
              </div>
              <div className="process-step">
                <span className="process-step-badge">Step 4</span>
                <h3>Analytics &amp; Financial Oversight</h3>
                <p>Real-time owner reporting, expense tracking, and transparent performance metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ contact ============ */}
      <section className="sec sec-alt contact" id="contact">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Let&apos;s talk about your property.</h2>
            <p className="lead" style={{ marginTop: "20px" }}>Choose a free rental analysis or send a general management question.</p>
            <div className="direct">
              <small>Prefer direct contact?</small>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            </div>
          </div>

          <div>
            <div className="tabs" role="tablist" aria-label="Contact options">
              <button className="tab" id="tab-analysis" type="button" role="tab" aria-selected="true" aria-controls="panel-analysis">Rental analysis</button>
              <button className="tab" id="tab-question" type="button" role="tab" aria-selected="false" aria-controls="panel-question">Management question</button>
            </div>

            <form className="form-card" id="panel-analysis" role="tabpanel" aria-labelledby="tab-analysis" data-form-type="analysis" data-done="Thanks — your analysis request is in">
              <div className="analysis-incl">
                <b>Your free rental analysis includes</b>
                <ul>
                  <li><i className="check">✓</i>Recommended rental strategy</li>
                  <li><i className="check">✓</i>Estimated rental range</li>
                  <li><i className="check">✓</i>Listing and photo review</li>
                  <li><i className="check">✓</i>Short-term, mid-term, and long-term rental comparison</li>
                  <li><i className="check">✓</i>Management recommendations</li>
                  <li><i className="check">✓</i>No obligation</li>
                </ul>
              </div>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="a-name">Your name</label>
                  <input id="a-name" name="name" type="text" placeholder="First and last name" required />
                </div>
                <div className="field">
                  <label htmlFor="a-email">Email</label>
                  <input id="a-email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="a-ptype">Property type</label>
                  <select id="a-ptype" name="ptype">
                    <option value="">Select one</option>
                    <option>Short-term rental</option>
                    <option>Long-term rental</option>
                    <option>Event-friendly property</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="a-loc">Property location</label>
                  <input id="a-loc" name="location" type="text" placeholder="City or neighborhood" />
                </div>
                <div className="field full">
                  <label htmlFor="a-help">What would you like help with?</label>
                  <textarea id="a-help" name="help" placeholder="Tell us about the property and what you're hoping to improve."></textarea>
                </div>
                <div className="field full">
                  <button className="btn btn-coral" type="submit">Request my free analysis</button>
                  <p className="form-note">We&apos;ll follow up by email, usually within one business day.</p>
                </div>
              </div>
            </form>

            <form className="form-card" id="panel-question" role="tabpanel" aria-labelledby="tab-question" data-form-type="question" data-done="Thanks — your question is on its way" hidden>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="q-name">Your name</label>
                  <input id="q-name" name="name" type="text" placeholder="First and last name" required />
                </div>
                <div className="field">
                  <label htmlFor="q-email">Email</label>
                  <input id="q-email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="field full">
                  <label htmlFor="q-topic">Topic</label>
                  <select id="q-topic" name="topic">
                    <option value="">Select one</option>
                    <option>Short-term rental management</option>
                    <option>Long-term property management</option>
                    <option>Event-friendly properties</option>
                    <option>Owner support</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="q-question">Your question</label>
                  <textarea id="q-question" name="question" placeholder="How can Hostly help?"></textarea>
                </div>
                <div className="field full">
                  <button className="btn btn-coral" type="submit">Send my question</button>
                  <p className="form-note">We&apos;ll follow up by email, usually within one business day.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============ footer ============ */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <Logo />
              <p>Thoughtful management for properties and the people behind them.</p>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Short-term rentals</a></li>
                <li><a href="#services">Long-term homes</a></li>
                <li><a href="#services">Owner support</a></li>
                <li><a href="#services">Pricing support</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Event-Friendly</h4>
              <ul>
                <li><a href="#event-friendly">How it works</a></li>
                <li><a href="#event-friendly">Event screening</a></li>
                <li><a href="#event-friendly">House rules</a></li>
                <li><a href="#event-friendly">Vendor coordination</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>For Owners</h4>
              <ul>
                <li><a href="#owners">Our approach</a></li>
                <li><a href="#owners">Owner reporting</a></li>
                <li><a href="#contact">Free rental analysis</a></li>
                <li><a href="#tenants">For tenants</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
                <li><a href="#contact">Start a conversation</a></li>
                <li><a href="#tenants">Tell us what you need</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© <span id="year">2026</span> Hostly Management Company.</span>
            <span className="links"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></span>
          </div>
        </div>
      </footer>

      {/* ============ mobile call / text bar ============ */}
      <div className="call-bar">
        <a className="btn btn-navy" href={`tel:${PHONE_TEL}`}>Call or Text Us · {PHONE}</a>
      </div>
    </>
  );
}
