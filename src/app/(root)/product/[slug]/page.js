import { getProductDetails } from '@/api/server'
import ProductDetailsPage from '@/app/components/ProductDetails'
import React from 'react'

export async function generateMetadata(context) {
  const productDetails = await getProductDetails(context.params.slug);
  return {
    title: productDetails.product_name || "Not found",
    description: productDetails.product_sub_description || "Not found",
    keywords: productDetails.keywords || "online pharmacy, India medicines, discount, Product, sale, cart, view, shop, Dochomoeo,Homoeopathy, Homeopathic Medicine, Homoeopathic Treatment, Homoeopathic Remedies, Homoeopathic Clinic, Homoeopathic Doctor, Homoeopathic Pharmacy, Homoeopathic Consultation, Homoeopathic Remedies for [Specific Condition], Natural Healing with Homoeopathy, Homoeopathic Remedies List, Homoeopathy for [Specific Disease/Condition], Homoeopathy vs Conventional Medicine, Homoeopathic Principles, Benefits of Homoeopathy, Homoeopathy for Allergies, Homoeopathy for Anxiety, Homoeopathy for Skin Problems, Homoeopathy for Digestive Disorders, Homoeopathy for Insomnia, Homoeopathy for Children, Homoeopathy for Women's Health, Homoeopathy for Chronic Pain, Homoeopathy for Hormonal Imbalance, Homoeopathy for Weight Loss, Homoeopathy for Hair Loss, Homoeopathy for Depression, Homoeopathy for Arthritis, Homoeopathy for Respiratory Disorders, Homoeopathy for Stress Management",
    alternates: {
      canonical: `https://dochomoeo.com/`,
    },
    openGraph: {
      type: "article",
      title: productDetails.product_name || "Not found",
      description: productDetails.product_sub_description || "Not found",
      images: {
        url: `${productDetails.product_images[0].image_url}/?tr=w-260,h-260`,
        width: 260,
        height: 260,
        alt: productDetails.product_name || "Not found",
      },
      authors: "@DocHomoeo",
    },
    twitter: {
      title: productDetails.product_name || "Not found",
      description: productDetails.product_sub_description || "Not found",
      images: {
        url: `${productDetails.product_images[0].image_url}/?tr=w-260,h-260`,
        width: 260,
        height: 260,
        alt: productDetails.product_name || "Not found",
      },
    },
  }
}

async function ProductDetails(context) {
  const productDetails = await getProductDetails(context.params.slug);
  return (
    <ProductDetailsPage />
  )
}

export default ProductDetails