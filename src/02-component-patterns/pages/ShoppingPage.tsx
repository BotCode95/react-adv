import '../assets/styles/custom-styles.css';
import {ProductCard} from '../components';
import { ProductImage } from '../components/ProductImage';
import { ProductButtons } from '../components/ProductsButtons';
import { ProductTitle } from '../components/ProductTitle';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                // flexDirection: 'row',
                flexWrap: 'wrap'
                }}
            >
                <ProductCard 
                    product={product}
                    classCSS="bg-dark text-white"
                > 
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={product}
                    classCSS="bg-dark text-white"
                > 
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                
                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                > 
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }}/>
                    <ProductButtons
                          style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )
}
