import { Link } from 'react-router-dom';
import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import { Seo, SITE_URL } from './Seo';

export function TermsConditions() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Read the terms of service for using BrickLayouts, our LEGO® layout design service."
        path="/terms"
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Terms of Service', url: `${SITE_URL}/terms` },
        ]}
        dateModified="2026-03-18"
      />
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl">Terms of Service</h1>
            <p className="text-foreground">
              Last updated: March 18, 2026
            </p>
          </div>

          <div className="space-y-8 text-foreground">
            <section className="space-y-4">
              <p>
                These Terms of Service ("<strong>Terms</strong>," "<strong>Agreement</strong>")
                govern your access to and use of the BrickLayouts, LLC website, web application,
                and subscription services (collectively, the "<strong>Services</strong>"). By
                accessing or using the Services, you agree to these Terms. If you do not agree, do
                not use the Services.
              </p>
              <p>
                Use of the Services is also governed by our <Link to="/privacy"><u>Privacy Policy</u></Link>,
                which explains how we collect and use your information, and is included in this
                Agreement by reference.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-foreground">1. Who We Are</h2>
              <p>
                BrickLayouts, LLC ("<strong>BrickLayouts</strong>," "<strong>we</strong>,"&nbsp;
                "<strong>us</strong>," and/or "<strong>our</strong>")<br />
                Maryland, United States<br />
                Email: <Obfuscate email>hello@bricklayouts.com</Obfuscate>
              </p>
              <p>
                BrickLayouts is a web-based design tool that allows users to create and manage
                LEGO&reg; display layouts, including train layouts, city layouts, and collaborative
                club displays.
              </p>
              <p>
                BrickLayouts is an independent application and is not affiliated with, endorsed by,
                or sponsored by the LEGO Group. LEGO&reg; is a trademark of the LEGO Group.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">2. Eligibility</h2>
              <p>
                You must be at least 13 years old to create an account in the United States. If you
                are outside the U.S., you must comply with the minimum age requirements in your
                jurisdiction.
              </p>
              <p>
                By accessing or using the Services, you represent that you meet these requirements
                and have the legal capacity to enter into this Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">3. Accounts</h2>
              <p>
                To access certain features of the Services, you must create an account. You agree
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Keep your information updated</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p>
                Accounts are non-transferable.
              </p>
              <p>
                Free users may create a layout using the application, which may be downloaded and
                reopened. With account creation, users may also create and store 1 layout in the
                cloud. Only 1 layout may be saved at a time without a paid subscription.
              </p>
              <p>
                We may suspend or terminate accounts for violation of these Terms, non-payment
                (30+ days past due), or as otherwise permitted by law.
              </p>
              <p>
                If a subscription lapses, subscription features may be suspended. Users have up to
                60 days to re-subscribe and regain access before content may be deleted in
                accordance with our data retention practices.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue the Services at any time.
                We strive to maintain reliable service but do not guarantee uninterrupted
                availability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">4. Subscriptions &amp; Billing</h2>
              <p>
                Subscriptions are billed monthly or annually based on the selected plan, described
                on our pricing page. By subscribing, you authorize us to charge your payment method
                for applicable fees.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Billing begins on the date of subscription.</li>
                <li>
                  <strong>Auto-renewal</strong> is available and can be opted into or out of at
                  signup or through your account settings. Subscriptions will automatically renew
                  unless canceled.
                </li>
                <li>
                  You may cancel at any time; cancellation takes effect at the end of the current
                  billing period.
                </li>
                <li>
                  We do not provide refunds for partial billing periods except as required by law.
                </li>
              </ul>
              <p>
                We may change pricing at renewal with notice.
              </p>
              <p>
                We may offer discount codes or other promotional discounts. Promotional discounts
                may expire, after which standard pricing applies.
              </p>
              <p>
                We may suspend or terminate subscription access for non-payment.
              </p>
              <p>
                Free trials are not currently offered. You may use the free, open-source version of
                the web app to evaluate the Services.
              </p>
              <p>
                Refunds are handled on a case-by-case basis and require you to contact&nbsp;
                <Obfuscate email>hello@bricklayouts.com</Obfuscate>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">5. User Content &amp; Ownership</h2>
              <p>
                You retain ownership of layouts&nbsp;
                ("<strong>Layouts</strong>," "<strong>Your Layouts</strong>") and other content you
                create ("<strong>User Content</strong>"). BrickLayouts does not transfer legal
                ownership of your content to other BrickLayouts users.
              </p>

              <p>
                By using the Services, you hereby grant to BrickLayouts an irrevocable, worldwide,
                royalty-free, non-exclusive, assignable, and sublicensable perpetual license to
                use, store, host, modify (except as prohibited by applicable law) and translate as
                necessary, reproduce, communicate, and display Your Layouts and related content on
                the Services and to promote the Services and BrickLayouts in any media formats and
                through any media channels. Where applicable by law, you hereby waive your moral
                rights in Your Layouts, to the extent necessary to give effect to the above
                license.
              </p>
              <p>
                You are solely responsible for your User Content and the consequences of submitting
                and publishing Your Layouts and related content on the Services. You affirm,
                represent, and warrant that you own or have the necessary licenses, rights,
                consents, and permissions to publish, and display all of Your Layouts and related
                content you submit. You further agree that the content you submit to the Services,
                including but not limited to Your Layouts, will not contain, use or infringe any
                third party copyrighted material, or material that is subject to other third party
                proprietary rights (including trademarks, image or personality rights, or other
                intellectual property rights), unless you have permission from the rightful owner
                of the material or you are otherwise legally entitled to post the material and to
                grant BrickLayouts all of the license rights granted herein. You warrant the
                content you submit to the Services will not result in BrickLayouts's infringement
                of any intellectual property right or other right of a third party.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">6. Public &amp; Shared Content</h2>
              <p>
                You may choose to make layouts public or shareable via links. Public layouts may be
                accessed or copied by others outside our control.  You hereby grant each user of
                the Services a non-exclusive license to access Your Layouts (other than content
                created by you in the private part of your account) and other content through the
                Services and to use, copy, or communicate Your Layouts and other content as
                permitted through the functionality and features of the Services and under these
                Terms.
              </p>
              <p>
                Public layouts may remain accessible if shared externally unless removed prior to
                account termination.
              </p>
              <p>
                You are responsible for ensuring public content does not include sensitive or
                personal information. We reserve the right to delete without any notice any of Your
                Layouts and related content on the Services that do not comply with our policies,
                these Terms, or for any reason.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">7. Prohibited Uses</h2>
              <p>
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable law or regulation</li>
                <li>Use the Services in violation of U.S. export laws or sanctions</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Scrape, copy, or redistribute user content without permission</li>
                <li>Resell or sublicense the Services or other layouts</li>
                <li>Claim affiliation, sponsorship, or endorsement with the LEGO&reg; Group</li>
                <li>
                  Reproduce LEGO&reg; trademarks (logos, minifigures) or copyrighted material in
                  violation of applicable intellectual property laws as outlined in the&nbsp;
                  <a href="https://www.lego.com/en-us/legal/notices-and-policies/fair-play" target="_blank" rel="noopener noreferrer">
                    <u>LEGO&reg; Fair Play</u>
                  </a> Policy
                </li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Impersonate another person or entity</li>
                <li>Collect information about other users without consent</li>
                <li>Remove or modify any copyright or proprietary notices</li>
                <li>Use the Service for any illegal purpose</li>
                <li>Use the Service to harm, threaten, or harass others</li>
              </ul>
              <p>
                You may not upload content that is illegal, harmful, infringing, malicious,
                unsolicited, defamatory, obscene, offensive, spam, unsolicited advertising,
                violates others' rights, violates intellectual property rights, or contains
                malware.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">8. Intellectual Property</h2>
              <p>
                The Services and all related software, design, features, text, images, and content
                (excluding User Content) are protected by copyright law and are either the property
                of, or used with permission by, BrickLayouts.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to use the Services
                in accordance with these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">9. Copyright &amp; Takedown Policy</h2>
              <p>
                If you believe content on the Services infringes your copyright, please contact us
                at <Obfuscate email>hello@bricklayouts.com</Obfuscate> with sufficient detail to
                identify the material and your claim.
              </p>
              <p>
                We will respond to valid notices and may remove or disable access to allegedly
                infringing content. Users who repeatedly infringe intellectual property rights may
                have their accounts terminated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">10. Liability &amp; Disclaimer</h2>
              <p>
                THE SITE AND ALL INFORMATION, SERVICES, OR LINKS DESCRIBED AND/OR AVAILABLE ON OR
                THROUGH THE SITE ARE PROVIDED TO YOU "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND,
                WHETHER EXPRESS, IMPLIED OR STATUTORY. YOU AGREE THAT YOU MUST EVALUATE, AND THAT
                YOU BEAR, ALL RISKS ASSOCIATED WITH THE USE OF THE SERVICES, INCLUDING WITHOUT
                LIMITATION, ANY RELIANCE ON THE ACCURACY, TIMELINESS, COMPLETENESS OR USEFULNESS OF
                ANY CONTENT AVAILABLE ON OR THROUGH THE SERVICES OR ON OR THROUGH ANY LINK.
                BRICKLAYOUTS DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SERVICES; AND ANY CONTENT
                OR LAYOUTS AVAILABLE ON OR THROUGH THE SERVICES OR ON OR THROUGH ANY LINK, TO THE
                FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, INCLUDING THE WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.
              </p>
              <p>
                BRICKLAYOUTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
                SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND, UNDER ANY CONTRACT, NEGLIGENCE,
                STRICT LIABILITY OR OTHER THEORY (INCLUDING DETRIMENTAL RELIANCE), INCLUDING
                WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, USE, DATA, LOSS OF INTELLECTUAL
                PROPERTY, LOSS OF OTHER INTANGIBLES, LOSS OF SECURITY OF INFORMATION IN CONNECTION
                WITH YOUR USE OR ANY OTHER PARTY'S USE OR MISUSE OF THE SITE, EVEN IF ADVISED IN
                ADVANCE OF SUCH DAMAGES OR LOSSES. YOUR SOLE AND EXCLUSIVE REMEDY FOR
                DISSATISFACTION WITH THE SERVICES IS TO STOP USING THE SERVICES. THE MAXIMUM
                LIABILITY OF BRICKLAYOUTS FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER IN
                CONTRACT, TORT (INCLUDING WITHOUT LIMITATION NEGLIGENCE) OR OTHERWISE, SHALL BE THE
                AMOUNT YOU PAID FOR A SUBSCRIPTION IN THE PREVIOUS SIX (6) MONTHS OR $100 US
                DOLLARS, WHICHEVER IS LESS.
              </p>
              <p>
                WE DO NOT GUARANTEE THAT THE SERVICES WILL BE OR REMAIN SECURE, COMPLETE OR
                CORRECT, THAT THE SERVICES, OR THE SERVER THAT MAKES THE SERVICES AVAILABLE ARE
                FREE OF ERRORS, VIRUSES, BUGS OR OTHER HARMFUL COMPONENTS, OR THAT ACCESS TO THE
                SERVICES WILL BE UNINTERRUPTED. THE SERVICES MAY INCLUDE INACCURACIES, ERRORS AND
                MATERIALS THAT VIOLATE OR CONFLICT WITH THIS AGREEMENT. ADDITIONALLY, IT IS
                POSSIBLE THAT THIRD PARTIES MIGHT MAKE UNAUTHORIZED ALTERATIONS TO THE SITE.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless BrickLayouts and its respective
                successors, owners, officers, employees, sponsors, directors, shareholders,
                affiliates, representatives, suppliers, members, and agents from and against all
                claims, damages, costs, losses, liabilities, and expenses (including legal fees)
                arising out of:
              </p>
              <ol className="pl-6 space-y-2" style={{ listStyleType: 'lower-alpha' }}>
                <li>Your use of, or activities in connection with, the Services</li>
                <li>Any violation of these Terms by you or anyone using your Account</li>
                <li>
                  Your violation of any rights of any other person or entity while using the
                  Services
                </li>
                <li>Your violation of any law or third-party rights</li>
                <li>
                  User Content provided under your Account and any User Content that you or anyone
                  with your password submits through the Services
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">12. Termination</h2>
              <p>
                BrickLayouts, in its sole discretion, may suspend or terminate your account at any
                time and for any reason or no reason, including if BrickLayouts believes that you
                have violated or acted inconsistently with the letter or spirit of these Terms.
                Upon any such termination, your right to use the Services ceases immediately.
                Content may be deleted in accordance with our data retention practices. You agree
                that any termination of your access to or use of the Site may be effected without
                prior notice, and that BrickLayouts may immediately deactivate or delete your
                Account, and all related information and files associated with such credentials
                including, without limitation, your Layouts, and/or bar any further access to such
                information or files. You agree that BrickLayouts shall not be liable to you or any
                third party for terminating this Agreement and/or terminating your access to the
                Services. Nor shall BrickLayouts have any obligation to make information or files
                associated with the Services available to you after any such termination.
              </p>
              <p>
                You may terminate your account at any time by contacting us or through your account
                settings.
              </p>
              <p>
                The proprietary rights, disclaimer of warranties, representations made by you,
                indemnities, limitations of liability and general provisions shall survive any
                termination of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">13. Governing Law &amp; Dispute Resolution</h2>
              <h3 className="text-foreground">13.1. Jurisdiction</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Maryland, United States, without regard to its principles of conflicts of
                law. You agree to exclusive jurisdiction by the federal and state courts located in
                Maryland, and waive any jurisdictional, venue or inconvenient forum objections to
                such courts. Notwithstanding this, you agree that BrickLayouts may apply for
                injunctive remedies (or an equivalent type of urgent legal relief) in any
                jurisdiction.
              </p>
              <p>
                The Services are hosted and operated in, and made available from the United States.
                BrickLayouts does not represent or warrant that the Services or any element thereof
                is appropriate, available, or legal for use in any jurisdiction other than the
                United States. Those who choose to access the Services do so on their own
                initiative and at their own risk, and are responsible for complying with all local
                laws, rules and regulations. We may limit the Services' availability, in whole or
                in part, to any person, geographic area or jurisdiction we choose, at any time and
                in our sole discretion.
              </p>
              <h3 className="text-foreground mt-6">13.2. Informal Resolution</h3>
              <p>
                Before filing a claim, both parties agree to attempt good-faith informal resolution
                within 30 days.
              </p>
              <h3 className="text-foreground mt-6">13.3. Binding Arbitration</h3>
              <p>
                If unresolved, disputes shall be resolved by binding arbitration administered by
                the American Arbitration Association (AAA) under its Consumer Arbitration Rules.
              </p>
              <h3 className="text-foreground mt-6">13.4. Exceptions</h3>
              <p>
                Either party may bring claims in small claims court. Claims involving intellectual
                property or unauthorized use may be brought in court.
              </p>
              <h3 className="text-foreground mt-6">13.5. Class Action Waiver</h3>
              <p>
                Disputes must be brought individually and not as part of a class or representative
                action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">14. Third-Party Services</h2>
              <p>
                The Services may rely on or integrate with third-party providers. We are not
                responsible for downtime, data loss, or changes caused by third-party services.
              </p>
              <h3 className="text-foreground">14.1. Third-Party Links and Resources</h3>
              <p>
                BrickLayouts may provide links to third-party websites, retailers, or downloadable
                resources ("<strong>Links</strong>") for your convenience. These external sites are
                not owned or controlled by BrickLayouts. We are not responsible for the content,
                availability, pricing, accuracy, policies, or practices of any third-party
                websites.
              </p>
              <p>
                Any purchases, downloads, or interactions you make with third-party sites are
                solely between you and that third party. BrickLayouts does not guarantee the
                availability, quality, or safety of any products, services, or instructions
                accessed through external links.
              </p>
              <p>
                Your use of third-party websites is subject to their own terms and privacy
                policies.
              </p>
              <p>
                Such Links are provided subject to Section 11 above, and WITHOUT WARRANTIES OF ANY
                KIND, FOR USE AT YOUR OWN RISK. You acknowledge and agree that BrickLayouts does
                not control or endorse any information, products, or services made available via
                Links, and is not responsible for the accuracy, reliability, quality, or legality
                of any such information, products, or services. It is your responsibility to
                evaluate the information, opinions, advice or other content available through the
                Links, whether posted or provided by third parties or by BrickLayouts. BrickLayouts
                may remove any Links at any time for any reason or for no reason.
              </p>
              <p>
                BRICKLAYOUTS WILL NOT BE LIABLE OR RESPONSIBLE FOR ANY TRANSACTIONS YOU CONDUCT
                WITH THIRD PARTIES, INCLUDING THE TERMS, CONDITIONS OR RESULTS OF ANY TRANSACTION
                BETWEEN YOU AND ANY THIRD PARTY, AND YOU ACKNOWLEDGE THAT BRICKLAYOUTS CANNOT
                CONTROL WHETHER AND HOW ANY PURCHASES ARE MADE OR USED BY ANY THIRD PARTY. IF YOU
                HAVE A DISPUTE WITH ANY THIRD PARTY REGARDING ANY THIRD PARTY PROMISES (INCLUDING
                PROMISED PRODUCTS), PRODUCTS AND/OR SERVICES, YOU RELEASE BRICKLAYOUTS (AND ITS
                RESPECTIVE SUCCESSORS, SPONSORS, EMPLOYEES, OFFICERS, DIRECTORS, SHAREHOLDERS,
                AFFILIATES, AGENTS, REPRESENTATIVES, SUPPLIERS AND MEMBERS) FROM ANY AND ALL
                CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND NATURE,
                KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED, DISCLOSED AND UNDISCLOSED, ARISING
                OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.
              </p>
              <h3 className="text-foreground mt-6">14.2. Affiliate Links</h3>
              <p>
                Some links on BrickLayouts may be affiliate links, meaning we may earn a commission
                if you make a purchase through those links at no additional cost to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">15. Service Level / Uptime</h2>
              <p>
                We aim for 99.9% availability, but outages may occur due to maintenance, updates,
                or third-party issues.
              </p>
              <p>
                BrickLayouts reserves the right to interrupt access to the Services from time to
                time on a regularly scheduled basis or otherwise with or without prior notice in
                order to perform maintenance. You agree that BrickLayouts will not be liable for
                any interruption of the Services, delay or failure to perform resulting from any
                causes whatsoever. You acknowledge that access to the Services may be interrupted
                for reasons beyond the control of BrickLayouts, and BrickLayouts cannot guarantee
                that you will be able to access the Services whenever you may wish to do so.
                BrickLayouts shall not be liable for any interruption of the Services, delay or
                failure to perform resulting from any causes whatsoever.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">16. Feedback</h2>
              <p>
                Any feedback, suggestions, or ideas submitted to BrickLayouts may be used by us
                without restriction or compensation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">17. Force Majeure</h2>
              <p>
                We are not liable for delays or failures caused by events beyond our reasonable
                control including natural disasters, cyberattacks, labor disputes, or other acts of
                God.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">18. Severability, Waiver, Entire Agreement</h2>
              <p>
                If any provision of this Agreement is found to be unlawful, void or for any reason
                unenforceable, that provision will be deemed severable from this Agreement and will
                not affect the validity and enforceability of any remaining provision.
              </p>
              <p>
                BrickLayouts's failure to enforce any of these Terms is not a waiver of such terms.
              </p>
              <p>
                These Terms are the entire agreement between you and BrickLayouts regarding the
                Services or the subject matter of these Terms and supersede all prior or
                contemporaneous negotiations, discussions or agreements between you and
                BrickLayouts about the Services or regarding such subject matter.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">19. Changes to Terms</h2>
              <p>
                We may update these Terms. Continued use of the Services constitutes acceptance of
                revised Terms. Updated Terms will be posted on our website with a new
                "Last Updated" date, and will be emailed to all current active account holders.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">20. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>BrickLayouts, LLC</li>
                <li><Obfuscate email>hello@bricklayouts.com</Obfuscate></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
