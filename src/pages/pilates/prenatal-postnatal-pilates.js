import React from "react"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import PrePostStyles from "./prenatal-postnatal-pilates.module.css"
import Post from "../../images/noun_mother_baby.svg"
import Pre from "../../images/noun_pregnant.svg"
import Schedule from "../../components/Schedule/Schedule"
import Button from "../../components/Button/Button"

export default function PrenatalPostnatalPilates() {
    const parentPages = [{name: "Home", path: "/"}, {name: "Pilates", path: "/pilates"}]
    return (
        <>
            <Title title="Prenatal & Postnatal Pilates" />
            <BreadcrumbBar currentPage="Prenatal & Postnatal Pilates" parentPages={parentPages} />
            <section className={PrePostStyles.section}>
                <div className={PrePostStyles.narrowContainer}>
                    <p>Pregnancy is an amazing journey, and your body goes through a lot of physiological changes. This does not mean pregnancy is the time to give up exercise, however exercise needs to be adapted to keep you and your baby safe, and this is where pregnancy Pilates comes in! Having an active pregnancy is important for physical and mental well-being.</p>
                    <p>As an Osteopath I am familiar with pregnancy related issues, as well as having a deep understanding of the changes the body goes through to accommodate your growing baby. Whether your baby is born naturally or via caesarean, it is important to allow your body time to recover post birth. While there are some gentle and effective exercises that you can do straight after birth, I usually recommend 8 weeks before coming back to / starting Pilates.</p>
                    <p>Emily has in depth understanding of the recovery process as well as the physical demands of caring for a new-born.</p>
                </div>
            </section>
            <section className={PrePostStyles.section} style={{backgroundColor: "var(--neutral-100)"}}>
                <div className={PrePostStyles.container}>
                    <h2>The benefits of Pilates during pregnancy</h2>
                    <div className={PrePostStyles.iconContainer}>
                        <div className={PrePostStyles.icon}>
                            <img src={Pre} alt="Pregnant woman icon" width="75px" />
                        </div>
                        <div className={PrePostStyles.iconList}>
                            <ul>
                                <li><strong>Gently strengthens your stomach and hips:</strong> during pregnancy a hormone called Relaxin is released, this helps your ligaments loosen, allowing your body to alter shape to accommodate your baby. Relaxin can also make you more prone to pelvic and lower back pain. Keeping your abdominals strong helps support your spine, just as strong gluteal muscles (bottom muscles) help support the pelvis.</li>
                                <li><strong>Strengthens the pelvic floor:</strong> The weight of your baby alongside the amniotic fluid and the hormonal changes can weaken your pelvic floor. (The pelvic floor is like a hammock that sits under the pelvis to support the bowel and bladder. One of the functions of the pelvic floor is to reduce the risk of incontinence). Pilates can help to strengthen the pelvic floor, as well as teaching you safe and effective exercises to do at home to keep the progress going.</li>
                                <li><strong>Postural awareness and improved balance:</strong> Your posture gradually changes during pregnancy, which can cause discomfort in the body. Pilates helps keep your core strong and increases your awareness on ‘good’ posture. Pilates works on your balance too, which adds to your postural awareness.</li>
                                <li><strong>Global body strengthening and mobility:</strong> Pilates safely exercises the whole body, which has many benefits. One of which can be to reduce fluid retention in the legs. Feeling stiff is common in pregnancy as your body changes shape. Gentle, but effective mobility exercises can really help to reduce stiffness, and keep you feeling active and well in your pregnancy.</li>
                                <li><strong>Breathing and Relaxation:</strong> Pilates teaches you to breathe from your lower ribs and your diaphragm (your main breathing muscle). This is useful for pregnant clients as learning to control your breathing is helpful for labour. As your baby grows, it can feel like your breathing is shallower, Pilates exercises include opening out the chest to allow safe and effective stretches.</li>
                                <li><strong>Healthy pregnancy:</strong> having an active pregnancy is good for maternal well-being. Pilates helps you have an active pregnancy doing safe and effective exercise.</li>
                            </ul>
                        </div>
                    </div>
                    <h2>The benefits of Pilates after pregnancy</h2>
                    <div className={PrePostStyles.iconContainer}>
                        <div className={PrePostStyles.icon}>
                            <img src={Post} alt="Motherand baby icon" width="75px" />
                        </div>
                        <div className={PrePostStyles.iconList}>
                            <ul>
                                <li><strong>Pilates helps strengthen the abdominals after being stretched for 9 months.</strong> Pilates exercises helps to draw the powerful abdominals ‘back in’. Pilates can help with diastasis recti (abdominal separation) as well. In other words, your recovery from labour is helped.</li>
                                <li><strong>Pilates is well known for strengthening the pelvic floor.</strong> The pelvic floor is a group of muscles that needs strengthening after birth, whether the baby is born naturally or by caesarean.</li>
                                <li><strong>Speeds up recovery post-partum:</strong> Let’s be honest here. Labour is what your amazing body is designed to do; but it is also a massive event for you and your body to go through. Being physically healthy with good muscle tone before you have your baby is helpful for labour, and it helps you after delivery too. Post-natal Pilates helps you recover your muscles (however you had your baby), as well as preparing your body for more physical activity.</li>
                                <li><strong>Pilates strengthens the body globally,</strong> however post-natal Pilates exercise programmes are designed to specifically strengthen the back and open the chest as these muscles can get sore and tight from carrying/nursing your little one. Pilates also includes specific safe and effective stretching for muscles that commonly get very tight and sore in new mums.</li>
                                <li><strong>Pilates for post-natal clients helps to strengthen the abdominals, hips, pelvis and lumbar spine,</strong> which can help relieve common post pregnancy aches and pains.</li>
                                <li><strong>Pilates helps prepare your body for more intensive exercise,</strong> when the time is right. Remember that pregnancy hormones stay in your body for approximately 6 months after delivery, so it is important that exercise intensity is increased in a staged process, to allow your body the needed recovery time.</li>
                                <li><strong>Gives you needed and important YOU time.</strong> It is not selfish to invest in your health!</li>
                                <li><strong>Healthy pregnancy:</strong> having an active pregnancy is good for maternal well-being. Pilates helps you have an active pregnancy doing safe and effective exercise.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={PrePostStyles.section}>
                <div className={PrePostStyles.narrowContainer}>
                    <h2>Classes</h2>
                    <p>Pilates classes for pre/post natal clients are specially designed by Emily, so you know you are in a safe, controlled environment. Classes are limited to 8 participants, so booking is essential. Before you can start the classes, you must attend a free meeting with Emily to complete medical forms to ensure you are safe to do the classes.</p>
                    <p>These classes have also proved to be an opportunity for mums to connect with each other, helping form a community network of support and friendship.</p>
                    <p>Classes are either held at The Fitness Box @ The Manor in Tur Langton or at the Market Harborough Congregational Church.</p>
                </div>
                <div className={PrePostStyles.container}>
                    <div className={PrePostStyles.gridContainer}>
                        <Schedule type="Pilates" displayHeading={false} />
                        <div className={PrePostStyles.txtContainer}>
                            <p>Classes cost £12 per class. To avoid disappointment, I request that participants ‘book their mat’ for a 6 week block (total payment for a 6 week block is £72).</p>
                            <p>If after 2 sessions you decide that Pilates is not for you, you will be refunded for the classes that have not been used. Classes missed for prolonged illness or injury are also refunded (2 or more).</p>
                            <p>One-to-one classes are also available at £17.</p>
                            <p>If you think Pilates sounds like something you would like to try or if you have any questions, please get in touch.</p>
                        </div>
                    </div>
                    <div className={PrePostStyles.buttonContainer}>
                        <Button type="primary" contact={true} to="tel:+447761664325">Call now</Button>
                        <Button type="primary" contact={true} to="mailto:info@kibworthosteopaths.co.uk">Email now</Button>
                    </div>
                </div>
            </section>
        </>
    )
}