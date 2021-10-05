import React from "react"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import FAQStyles from "./faq.module.css"
import Box from "../components/Box/Box"
import Contents from "../components/Contents/Contents"
import { Helmet } from "react-helmet"

export default function FAQ() {
    const parentPages = [{name: "Home", path: "/"}]
    const faq = [
        {
            id: 1,
            question: "What can I expect from my first visit to an Osteopath?",
            answer: <><p>At the first consultation, the Osteopath will complete a full case history of your symptoms, as well as asking for information about your lifestyle. The Osteopath may also observe you making some simple movements to help them make the diagnosis. You will usually be asked to remove some clothing near to the area of the body to be examined.</p><p>Osteopaths are trained to examine areas of the body using a highly developed sense of touch, known as palpation, to determine conditions and identify the body's points of weakness or excessive strain. Osteopathy is a 'package' of care that includes skilled mobilising and manipulative techniques, reinforced by guidance on diet and exercise.</p><p> The Osteopath will discuss with you the most appropriate treatment plan estimating the likely number of sessions needed to treat your condition effectively. If the Osteopath thinks that your condition is unlikely to respond to Osteopathic treatment, you will be advised about how to seek further care. Osteopaths are skilled in diagnostic techniques and trained to identify when a patient needs to be referred to a GP.</p></>
        },
        {
            id: 2,
            question: "How long do Osteopathic appointments usually last?",
            answer: <p>In general, the first treatment lasts about 60 minutes, and subsequent treatments around half an hour. Your first appointment is usually slightly longer to allow for a full case history to be taken.</p>
        },
        {
            id: 3,
            question: "How much does treatment cost?",
            answer: <><p>For adults, new patient appointments are £55, with continuation appointments costing £45.</p><p>For children, new patient appointments are £40, with continuation appointments costing £35.</p></>,
        },
        {
            id: 4,
            question: "Can I see an Osteopath through the NHS?",
            answer: <><p>Currently, access to Osteopathy on the NHS is limited, but services are becoming more widespread as commissioning authorities recognise the benefits of providing Osteopathy to patients.</p><p>To find out if NHS treatment is available in your area, speak to your GP and or contact your local Primary Care Commissioning Group.</p></>,
        },
        {
            id: 5,
            question: "Can I claim on my private medical insurance?",
            answer: <p>Many private health insurance policies provide cover for Osteopathic treatment. It may be possible to claim for a course of treatment but you should check in advance with your insurance company before seeking Osteopathic treatment, in order to confirm the available level of cover and whether you will need to have a referral from your GP or specialist.</p>,
        },
        {
            id: 6,
            question: "What is an Osteopath?",
            answer: <><p>An Osteopath is a primary care professional, focusing on the diagnosis, treatment, prevention and rehabilitation of musculoskeletal disorders and the effects of these conditions on patients' general health.</p><p>Using many of the diagnostic proceedures applied in conventional medical assessement, Osteopaths seek to restore the optimal functioning of the body, where possible without the use of drugs or surgery.</p><p>Osteopathy is based on the principle that the body has the ability to heal, and Osteopathic care focuses on stengthening the musculoskeletal systems to treat existing conditions and to prevent illness.</p><p>Osteopaths' patient centered approach to health and well-being means they consider symptoms in the context of the patient's full medical history, as well as their lifestyle and personal circumstances. This holistic approach ensures that all treatment is tailored to the individual patient.</p></>,
        },
        {
            id: 7,
            question: "What do Osteopaths treat?",
            answer: <p>Osteopathy focuses on the diagnosis, management, treatment and prevention of musculoskeletal and other related disorders without the use of drugs or surgery. Commonly treated conditions include back and neck pain, postural problems, sporting injuries, muscle and joint deterioration, restricted mobility and occupational ill-health.</p>,
        },
        {
            id: 8,
            question: "Do I need a GP referral to see an Osteopath?",
            answer: <p>Most patients 'self refer' to an Osteopath for treatment. Although referral by a GP is not necessary, patients are encouraged to keep both their GP and Osteopath fully informed, so that their medical records are current and complete and the patient receives the best possible care from both healthcare practitioners.</p>,
        },
        {
            id: 9,
            question: "Do GPs refer their patients to Osteopaths?",
            answer: <p>Yes. GPs refer patients to Osteopaths where they believe this intervention would be beneficial. Referral guidelines are provided by the General Medical Council and the British Medical Association.</p>,
        },
        {
            id: 10,
            question: "How do I know if an Osteopath is registered?",
            answer: <p>All Osteopaths must be registered with the General Osteopathic Council. You can <a href="https://www.osteopathy.org.uk/register-search/" target="_blank" rel="noreferrer noopener">check the register here</a>.</p>,
        },
        {
            id: 11,
            question: "What training do Osteopaths have?",
            answer: <><p>Undergraduate students follow a four or five year degree course combining academic and clinical work. Qualification generally takes the form of a bachelor's degree in Osteopathy - a BSC(Hons), BOst or BOstMed - or a master's degree in Osteopathy (MOst). Many Osteopaths continue their studies after graduating.</p><p>Osteopaths are required to update their training throughout their working lives. They must complete at least 30 hours of <a href="http://www.osteopathy.org.uk/standards/continuing-professional-development/" target="_blank" rel="noreferrer noopener">Continuing Professional Development</a> per year.</p></>,
        },
        {
            id: 12,
            question: "Who sets the standards of training and practice for Osteopaths?",
            answer: <p>The standards of Osteopathic training and practice are maintained and developed by the General Osteopathic Council, the profession's statutory regulator established under the Osteopaths Act 1993.</p>,
        },
        {
            id: 13,
            question: "What should I do if I have concerns about my Osteopath or treatment?",
            answer: <><p>All Osteopaths are expected to have a complaints procedure in place in their practice to address patients' concerns.</p><p>If you have concerns about the competence or the professional conduct of your Osteopath and you have been unable to resolve the issue satisfactorily with the Osteopath, or the employer, the General Osteopathic Council will advise on the next steps to take under a <a href="https://www.osteopathy.org.uk/standards/complaints/" target="_blank" rel="noreferrer noopener">formal complaints procedure</a>.</p></>,
        }
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="We have the answers to your frequently asked questions about seeing an Osteopath." />
                <title>FAQ | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="Frequently asked questions" />
            <BreadcrumbBar currentPage="FAQ" parentPages={parentPages} />
            <section className={`${FAQStyles.section} ${FAQStyles.gridContainer}`}>
                <div className={FAQStyles.contentsContainer}>
                    <Contents heading="FAQ Contents" contents={faq} />
                </div>
                <div className={FAQStyles.faqContainer}>
                    {
                        faq.map(faq => {
                            return (
                                <Box heading={faq.question} id={`faq-${faq.id}`}>
                                    {faq.answer}
                                </Box>
                            )
                        })
                    }
                </div>
            </section>    
        </>
    )
}