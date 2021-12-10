
import {ProductCard} from '../components';
import { ProductImage } from '../components/ProductImage';
import { ProductButtons } from '../components/ProductsButtons';
import { ProductTitle } from '../components/ProductTitle';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import styles from '../assets/styles/styles.module.css' 
import '../assets/styles/custom-styles.css';

const product = products[0];
export const ShoppingPage = () => {

    // const {shoppingCart, onProductCountChange} = useShoppingCart();
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
              
            <ProductCard
                key={product.id}
                product={product}
                classCSS="bg-dark text-white"
                initialValues={{
                    count: 2,
                    maxCount: 10
                }}
                // onChange={onProductCountChange}
                // value={shoppingCart[product.id]?.count || 0 }
            >
                {
                    ({reset, count, increaseBy, isMaxCountReached}) => (
                        <>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />
                        <button onClick={reset}>Reset</button>
                        <button 
                            className={`${count === 0 ? styles.disabled: ''}`}
                            onClick={() => increaseBy(-2)}>-2</button>
                        { !isMaxCountReached ? 
                            <button
                                
                                onClick={() => increaseBy(2)}>+2</button> : null} 
                        <span> Contador: {count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
