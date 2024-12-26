import { useState } from 'react';
import styles from './HotProducts.module.scss';

const HotProducts = () => {
  const products = [
    { id: 1, name: '商品 1', description: '這是商品描述 1' },
    { id: 2, name: '商品 2', description: '這是商品描述 2' },
    { id: 3, name: '商品 3', description: '這是商品描述 3' },
    { id: 4, name: '商品 4', description: '這是商品描述 4' },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(products.length / 2));
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.ceil(products.length / 2) - 1 : prev - 1
    );
  };

  return (
    <section className={styles.products}>
      <h2 className={styles.title}>熱銷商品</h2>

      {/* 桌面版 */}
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <div className={styles.image}></div>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.description}>{product.description}</div>
          </div>
        ))}
      </div>

      {/* 手機版 */}
      <div className={styles['mobile-slider']}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevPage}>
          &lt;
        </button>
        <div className={styles['product-container']}>
          {products
            .slice(currentPage * 2, currentPage * 2 + 2)
            .map((product) => (
              <div key={product.id} className={styles.product}>
                <div className={styles.image}></div>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.description}>{product.description}</div>
              </div>
            ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextPage}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default HotProducts;
