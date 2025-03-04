import React from 'react'

export const metadata = {
    title: "Dochomoeo: Homoeopathic Medicine | Best Deals & Free Shipping",
    description:
        "Buy homoeopathic medicine online in India with DocHomoeo. Get expert homoeopathic consultations & unparalleled service. Free consultation!",
    keywords: "online pharmacy, India medicines, discount, Product, sale, cart, view, shop, Dochomoeo,Homoeopathy, Homeopathic Medicine, Homoeopathic Treatment, Homoeopathic Remedies, Homoeopathic Clinic, Homoeopathic Doctor, Homoeopathic Pharmacy, Homoeopathic Consultation, Homoeopathic Remedies for [Specific Condition], Natural Healing with Homoeopathy, Homoeopathic Remedies List, Homoeopathy for [Specific Disease/Condition], Homoeopathy vs Conventional Medicine, Homoeopathic Principles, Benefits of Homoeopathy, Homoeopathy for Allergies, Homoeopathy for Anxiety, Homoeopathy for Skin Problems, Homoeopathy for Digestive Disorders, Homoeopathy for Insomnia, Homoeopathy for Children, Homoeopathy for Women's Health, Homoeopathy for Chronic Pain, Homoeopathy for Hormonal Imbalance, Homoeopathy for Weight Loss, Homoeopathy for Hair Loss, Homoeopathy for Depression, Homoeopathy for Arthritis, Homoeopathy for Respiratory Disorders, Homoeopathy for Stress Management",
    alternates: {
        canonical: `https://dochomoeo.com/`,
    },
    openGraph: {
        type: "website",
        title: "Dochomoeo: Homoeopathic Medicine | Best Deals & Free Shipping",
        description:
            "Buy homoeopathic medicine online in India with DocHomoeo. Get expert homoeopathic consultations & unparalleled service. Free consultation!",
        url: "https://dochomoeo.com/",
        images: {
            url: `${process.env.PUBLIC_URL + "/doc.png"}/?tr=w-260,h-260`,
            width: 260,
            height: 260,
            alt: "Dochomoeo | Homoeopathy ",
        },
    },
    twitter: {
        card: "summary",
        title: "Dochomoeo: Homoeopathic Medicine | Best Deals & Free Shipping",
        description:
            "Buy homoeopathic medicine online in India with DocHomoeo. Get expert homoeopathic consultations & unparalleled service. Free consultation!",
        images: {
            url: `${process.env.PUBLIC_URL + "/doc.png"}/?tr=w-260,h-260`,
            width: 260,
            height: 260,
            alt: "Dochomoeo | Homoeopathy ",
        },
    },
    robots: "index, follow",
};

function Home() {
    return (
        <div>Home</div>
    )
}

export default Home