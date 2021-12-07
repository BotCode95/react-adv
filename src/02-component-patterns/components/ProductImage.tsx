import { useContext, CSSProperties } from 'react';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../assets/styles/styles.module.css' 

const {productImg} = styles

export interface Props {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({img, className, style}: Props) => {
    const {product}  = useContext(ProductContext)
    let imgToShow: string = noImage;
    if(img){
        imgToShow = img;
    }else if(product.img) {
        imgToShow = product.img
    }
    return (
        <img 
            className={`${className} ${productImg}`} 
            src={imgToShow || noImage} 
            style={style}
            alt="Product"
        />
    )
}