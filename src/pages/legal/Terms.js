import styles from './Legal.module.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SUPPORT_EMAIL } from '../../utils/constants'

export default function TermsPage() {
    useEffect(() => {
        document.title = 'Terms of Use - Student Calendar'
    })

    return (
        <>
            <Navbar />

            <main className={styles.legal}>
                <h1>Terms of Use</h1>

                <p>Last updated: 2024-02-01</p>


                <h2>Introduction</h2>

                <p>
                    These Terms of Use (“Terms”, “Terms of Service”) govern your use of Student Calendar app
                    and/or website (“Service”) operated by <b>Student Calendar</b>.
                </p>
                <p>
                    Our <Link to='/privacy' onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link> also governs
                    your use of our Service and explains how we collect, safeguard and disclose information that
                    results from your use of our web pages.
                </p>
                <p>
                    Your agreement with us includes these Terms and our Privacy Policy (“Agreements”).
                    You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                </p>
                <p>
                    If you do not agree with (or cannot comply with) agreements, then you may not use the Service,
                    but please let us know by emailing at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> so
                    we can try to find a solution.
                    These Terms apply to all visitors, users and others who wish to access or use Service.
                </p>


                <h2>Content</h2>

                <p>
                    Our Service allows you to post, link, store, share and otherwise make available certain
                    information, text, graphics, videos, or other material. You are responsible for content that
                    you post on or through Service, including its legality, reliability, and appropriateness.
                    <br />
                    By posting content on or through Service, You represent and warrant that:
                    <ul>
                        <li>
                            Content is yours (you own it) and/or you have the right to use it and the right to
                            grant us the rights and license as provided in these Terms.
                        </li>
                        <li>
                            The posting of your content on or through Service does not violate the privacy rights,
                            publicity rights, copyrights, contract rights or any other rights of any person or entity.
                            We reserve the right to terminate the account of anyone found to be infringing on a copyright.
                        </li>
                    </ul>
                    You retain any and all of your rights to any content you submit, post or display on or through
                    service and you are responsible for protecting those rights. We take no responsibility
                    and assume no liability for content you or any third party posts on or through Service.
                    However, by posting content using Service you grant us the right and license to use, modify,
                    publicly perform, publicly display, reproduce, and distribute such content on and through Service.
                    You agree that this license includes the right for us to make your content available to other users
                    of Service, who may also use your content subject to these Terms.
                    <br />
                    Student Calendar has the right but not the obligation to monitor and edit all content provided by users.
                    <br />
                    In addition, content found on or through this Service are the property of Student Calendar or used with permission.
                    You may not distribute, modify, transmit, reuse, download, repost, copy, or use said content,
                    whether in whole or in part, for commercial purposes or for personal gain, without express
                    advance written permission from us.
                </p>


                <h2>Prohibited Uses</h2>

                <p>
                    You may use Service only for lawful purposes and in accordance with Terms.
                    You agree not to use Service:
                </p>
                <ul>
                    <li>
                        In any way that violates any applicable national or international law or regulation.
                    </li>
                    <li>
                        For the purpose of exploiting, harming, or attempting to exploit or harm minors in any
                        way by exposing them to inappropriate content or otherwise.
                    </li>
                    <li>
                        To transmit, or procure the sending of, any advertising or promotional material, including
                        any "junk mail", "chain letter", "spam", or any other similar solicitation.
                    </li>
                    <li>
                        To impersonate or attempt to impersonate Company, a Company employee, another user,
                        or any other person or entity.
                    </li>
                    <li>
                        In any way that infringes upon the rights of others, or in any way is illegal, threatening,
                        fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful
                        purpose or activity.
                    </li>
                    <li>
                        To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of
                        service, or which, as determined by us, may harm or offend company or users of service
                        or expose them to liability.
                    </li>
                </ul>

                <p>Additionally, you agree not to:</p>
                <ul>
                    <li>
                        Use service in any manner that could disable, overburden, damage, or impair service or interfere
                        with any other party's use of service, including their ability to engage in real time activities
                        through service.
                    </li>
                    <li>
                        Use any robot, spider, or other automatic device, process, or means to access service for any
                        purpose, including monitoring or copying any of the material on service.
                    </li>
                    <li>
                        Use any manual process to monitor or copy any of the material on service or for any other
                        unauthorized purpose without our prior written consent.
                    </li>
                    <li>
                        Use any device, software, or routine that interferes with the proper working of service.
                    </li>
                    <li>
                        Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious
                        or technologically harmful.
                    </li>
                    <li>
                        Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of
                        service, the server on which service is stored, or any server, computer, or database connected
                        to service.
                    </li>
                    <li>
                        Attack service via a denial-of-service attack or a distributed denial-of-service attack.
                    </li>
                    <li>
                        Take any action that may damage or falsify Company rating.
                    </li>
                    <li>
                        Otherwise attempt to interfere with the proper working of service.
                    </li>
                </ul>


                <h2>No Use By Minors</h2>
                <p>
                    Service is intended only for access and use by individuals at least eighteen years old.
                    By accessing or using service, you warrant and represent that you are at least eighteen
                    years of age and with the full authority, right, and capacity to enter into this agreement
                    and abide by all of the terms and conditions of Terms.
                    If you are not at least eighteen years old, you are prohibited from both the access
                    and usage of service.
                </p>


                <h2>Accounts</h2>

                <p>
                    When you create an account with us, you guarantee that you are above the age of 18,
                    and that the information you provide us is accurate, complete, and current at all times.
                    Inaccurate, incomplete, or obsolete information may result in the immediate termination
                    of your account on service.
                    <br />
                    You are responsible for maintaining the confidentiality of your account and password,
                    including but not limited to the restriction of access to your computer and/or account.
                    You agree to accept responsibility for any and all activities or actions that occur under your
                    account and/or password, whether your password is with our service or a third-party service.
                    You must notify us immediately upon becoming aware of any breach of security
                    or unauthorized use of your account.
                    <br />
                    You may not use as a username the name of another person or entity or that is not lawfully
                    available for use, a name or trademark that is subject to any rights of another person or
                    entity other than you, without appropriate authorization.
                    You may not use as a username any name that is offensive, vulgar or obscene.
                    <br />
                    We reserve the right to refuse service, terminate accounts, remove or edit content.
                </p>


                <h2>Intellectual Property</h2>

                <p>
                    Service and its original content (excluding Content provided by users), features and
                    functionality are and will remain the exclusive property of Student Calendar and its licensors.
                    service is protected by copyright, trademark, and other laws of and foreign countries.
                    Our trademarks may not be used in connection with any product or service without the prior
                    written consent of Student Calendar.
                </p>


                <h2>Copyright Policy</h2>

                <p>
                    We respect the intellectual property rights of others. It is our policy to respond to any
                    claim that Content posted on service infringes on the copyright or other intellectual
                    property rights ("Infringement") of any person or entity.
                    <br />
                    If you are a copyright owner, or authorized on behalf of one, and you believe that the
                    copyrighted work has been copied in a way that constitutes copyright infringement,
                    please submit your claim via email to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>,
                    with the subject line: "Copyright Infringement" and include in your claim a detailed description
                    of the alleged Infringement. You may be held accountable for damages
                    (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement
                    of any Content found on and/or through service on your copyright.
                </p>


                <h2>Error Reporting and Feedback</h2>

                <p>
                    You may provide us either directly at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or
                    via third party sites and tools with information and feedback concerning errors, suggestions for
                    improvements, ideas, problems, complaints, and other matters related to our service ("Feedback").
                    You acknowledge and agree that:
                    <ul>
                        <li>You shall not retain, acquire or assert any intellectual property right or other right.</li>
                        <li>Title or interest in or to the Feedback</li>
                        <li>
                            Feedback does not contain confidential information or proprietary information from you
                            or any third party.
                        </li>
                        <li>Company may have development ideas similar to the Feedback.</li>
                        <li>Company is not under any obligation of confidentiality with respect to the Feedback.</li>
                    </ul>
                </p>


                <h2>Disclaimer Of Warranty</h2>

                <p>
                    These services are provided by company on an “as is” and “as available” basis.
                    Company makes no representations or warranties of any kind, express or implied, as to the
                    operation of their services, or the information, content or materials included therein.
                    You expressly agree that your use of these services, their content, and any services
                    or items obtained from us is at your sole risk.
                    <br />
                    Neither company nor any person associated with company makes any warranty or representation with
                    respect to the completeness, security, reliability, quality, accuracy, or availability of the services.
                    Without limiting the foregoing, neither company nor anyone associated with company represents
                    or warrants that the services, their content, or any services or items obtained through the services
                    will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected,
                    that the services or the server that makes it available are free of viruses or other harmful components
                    or that the services or any services or items obtained through the services will otherwise meet your
                    needs or expectations.
                    <br />
                    Company hereby disclaims all warranties of any kind, whether express or implied, statutory,
                    or otherwise, including but not limited to any warranties of merchantability, non-infringement,
                    and fitness for particular purpose.
                    <br />
                    The foregoing does not affect any warranties which cannot be excluded or limited under applicable law.
                </p>


                <h2>Limitation Of Liability</h2>

                <p>
                    Except as prohibited by law, you will hold us and our officers, directors, employees, and agents
                    harmless for any indirect, punitive, special, incidental, or consequential damage, however it arises
                    (including attorneys' fees and all related costs and expenses of litigation and arbitration, or at
                    trial or on appeal,if any, whether or not litigation or arbitration is instituted),
                    whether in an action of contract, negligence, or other tortious action, or arising out of or in
                    connection with this agreement, including without limitation any claim for personal injury or
                    property damage, arising from this agreement and any violation by you of any federal, state,
                    or local laws, statutes, rules, or regulations, even if company has been previously advised
                    of the possibility of such damage.
                    Except as prohibited by law, if there is liability found on the part of company,
                    it will be limited to the amount paid for the products and/or services, and under no circumstances
                    will there be consequential or punitive damages.
                    Some states do not allow the exclusion or limitation of punitive, incidental or consequential
                    damages, so the prior limitation or exclusion may not apply to you.
                </p>


                <h2>Termination</h2>

                <p>
                    We may terminate or suspend your account and bar access to Service immediately, without prior notice
                    or liability, under our sole discretion, for any reason whatsoever and without limitation, including
                    but not limited to a breach of Terms.
                    <br />
                    If you wish to terminate your account, you may simply discontinue using Service.
                    <br />
                    All provisions of Terms which by their nature should survive termination shall survive termination,
                    including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations
                    of liability.
                </p>


                <h2>Governing Law</h2>

                <p>
                    These Terms shall be governed and construed in accordance with the laws of South Africa,
                    which governing law applies to agreement without regard to its conflict of law provisions.
                    <br />
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver
                    of those rights.
                    If any provision of these Terms is held to be invalid or unenforceable by a court,
                    the remaining provisions of these Terms will remain in effect.
                    These Terms constitute the entire agreement between us regarding our Service and supersede
                    and replace any prior agreements we might have had between us regarding Service.
                </p>


                <h2>Changes To Service</h2>

                <p>
                    We reserve the right to withdraw or amend our Service, and any service or material we provide
                    via service, in our sole discretion without notice. We will not be liable if for any reason
                    all or any part of Service is unavailable at any time or for any period.
                    From time to time, we may restrict access to some parts of Service, or the entire Service,
                    to users, including registered users.
                </p>


                <h2>Amendments To Terms</h2>

                <p>
                    We may amend Terms at any time by posting the amended terms on this site.
                    We will let you know by email and/or a prominent notice on our Service,
                    prior to the change becoming effective and update “last updated date” at the top of this Terms.
                    You are advised to review this Terms of Use periodically for any changes.
                    By continuing to access or use our Service after any revisions become effective, you agree to
                    be bound by the revised terms.
                    If you do not agree to the new terms, you are no longer authorized to use Service.
                </p>


                <h2>Waiver And Severability</h2>

                <p>
                    No waiver by Company of any term or condition set forth in Terms shall be deemed a further
                    or continuing waiver of such term or condition or a waiver of any other term or condition,
                    and any failure of Company to assert a right or provision under Terms shall not constitute
                    a waiver of such right or provision.
                    <br />
                    If any provision of Terms is held by a court or other tribunal of competent jurisdiction
                    to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or
                    limited to the minimum extent such that the remaining provisions of Terms will continue in full
                    force and effect.
                </p>


                <h2>Acknowledgement</h2>

                <p>
                    By using service or other services provided by us, you acknowledge that you have read these
                    terms of use and agree to be bound by them.
                </p>


                <h2>Contact Us</h2>

                <p>
                    Please send your feedback, comments, requests for technical support by email:
                    {' '}<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                </p>
            </main>

            <Footer />
        </>
    )
}
