import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { getProducts, getProductQuantities } from '@/api/EcommerceApi';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

const ProductCard = ({ product, index, setIsCartOpen }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const displayVariant = useMemo(() => product.variants[0], [product]);
  const hasSale = useMemo(() => displayVariant && displayVariant.sale_price_in_cents !== null, [displayVariant]);
  const displayPrice = useMemo(() => hasSale ? displayVariant.sale_price_formatted : displayVariant.price_formatted, [displayVariant, hasSale]);
  const originalPrice = useMemo(() => hasSale ? displayVariant.price_formatted : null, [displayVariant, hasSale]);

  const handleAddToCart = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.variants.length > 1) {
      navigate(`/product/${product.id}`);
      return;
    }

    const defaultVariant = product.variants[0];

    try {
      await addToCart(product, defaultVariant, 1, defaultVariant.inventory_quantity);
      
      if (setIsCartOpen) {
        setIsCartOpen(true);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }, [product, addToCart, navigate, setIsCartOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="flex flex-col h-full rounded-2xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image || placeholderImage}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {product.ribbon_text && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {product.ribbon_text}
              </div>
            )}
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="text-lg font-semibold leading-tight line-clamp-2">{product.title}</h3>
              <div className="flex flex-col items-end text-right shrink-0">
                <span className="font-bold text-foreground">{displayPrice}</span>
                {hasSale && (
                  <span className="text-xs line-through text-muted-foreground">{originalPrice}</span>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
              {product.subtitle || 'Premium quality product designed for your lifestyle.'}
            </p>
            <Button 
              onClick={handleAddToCart} 
              variant="secondary"
              className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsList = ({ setIsCartOpen }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsWithQuantities = async () => {
      try {
        setLoading(true);
        setError(null);

        const productsResponse = await getProducts();

        if (productsResponse.products.length === 0) {
          setProducts([]);
          return;
        }

        const productIds = productsResponse.products.map(product => product.id);

        const quantitiesResponse = await getProductQuantities({
          fields: 'inventory_quantity',
          product_ids: productIds
        });

        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach(variant => {
          variantQuantityMap.set(variant.id, variant.inventory_quantity);
        });

        const productsWithQuantities = productsResponse.products.map(product => ({
          ...product,
          variants: product.variants.map(variant => ({
            ...variant,
            inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
          }))
        }));

        setProducts(productsWithQuantities);
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsWithQuantities();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive p-8 bg-destructive/10 rounded-xl">
        <p className="font-medium">Error loading products: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-12 border border-dashed border-border rounded-2xl">
        <p className="text-lg">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          index={index} 
          setIsCartOpen={setIsCartOpen} 
        />
      ))}
    </div>
  );
};

export default ProductsList;