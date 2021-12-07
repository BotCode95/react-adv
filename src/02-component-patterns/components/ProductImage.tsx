import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../assets/styles/styles.module.css' 

const {productImg} = styles

export const ProductImage = ({img = ''}) => {
    const {product}  = useContext(ProductContext)
    let imgToShow: string = noImage;
    if(img){
        imgToShow = img;
    }else if(product.img) {
        imgToShow = product.img
    }
    return (
        <img className={productImg} src={imgToShow || noImage} alt="Product"/>
    )
}