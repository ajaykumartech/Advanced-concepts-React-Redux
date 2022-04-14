import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS =[
    { id:'p1',
      price:6,
      title:'My first book',
      description:'The first book i ever wrote',},
    { id:'p2',
      price:12,
      title:'My second book',
      description:'The Second book i ever wrote',},  
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) =>(
          <ProductItem
          id={product.id}
           key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
