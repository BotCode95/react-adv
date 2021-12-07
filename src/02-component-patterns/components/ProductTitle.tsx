import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../assets/styles/styles.module.css' 

const { productDescription}  = styles;

export const ProductTitle = ({title}: {title?: string}) => {
    const {product}  = useContext(ProductContext)
    return (
        <span className={productDescription}>
            {title ?? product.title}
        </span>
    )
}
