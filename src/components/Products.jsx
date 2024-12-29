import { useState } from 'react';
import styles from './Products.module.scss';
import productImage_01 from '../assets/images/50309.jpg';
import productImage_02 from '../assets/images/50628.jpg';
import productImage_03 from '../assets/images/50629.jpg';
import productImage_04 from '../assets/images/50958.jpg';
import productImage_05 from '../assets/images/51070.jpg';
import productImage_06 from '../assets/images/51077.jpg';
import productImage_07 from '../assets/images/49851.jpg';
import productImage_08 from '../assets/images/50309.jpg';

const Products = () => {
  const sections = [
    {
      id: 1,
      title: '日本 ESIM',
      products: [
        {
          id: 1,
          name: '商品 1',
          description: '這是日本商品描述 1',
          src: productImage_01,
        },
        {
          id: 2,
          name: '商品 2',
          description: '這是日本商品描述 2',
          src: productImage_02,
        },
        {
          id: 3,
          name: '商品 3',
          description: '這是日本商品描述 3',
          src: productImage_03,
        },
        {
          id: 4,
          name: '商品 4',
          description: '這是日本商品描述 4',
          src: productImage_04,
        },
      ],
    },
    {
      id: 2,
      title: '韓國 ESIM',
      products: [
        {
          id: 1,
          name: '商品 1',
          description: '這是韓國商品描述 1',
          src: productImage_05,
        },
        {
          id: 2,
          name: '商品 2',
          description: '這是韓國商品描述 2',
          src: productImage_06,
        },
        {
          id: 3,
          name: '商品 3',
          description: '這是韓國商品描述 3',
          src: productImage_07,
        },
        {
          id: 4,
          name: '商品 4',
          description: '這是韓國商品描述 4',
          src: productImage_08,
        },
      ],
    },
  ];

  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (id) => {
    setActiveSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className={styles.products}>
      {sections.map((section) => (
        <div key={section.id} className={styles.section}>
          {/* 標題 */}
          <div
            className={styles.title}
            onClick={() => toggleSection(section.id)}
          >
            {section.title}
            <div className={styles.icon}>
              {activeSections.includes(section.id) ? '-' : '+'}
            </div>
          </div>

          {/* 桌面版 */}
          <div className={styles.grid}>
            {section.products.map((product) => (
              <div key={product.id} className={styles.product}>
                <div className={styles.image}>
                  <img src={product.src} />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.description}>{product.description}</div>
              </div>
            ))}
          </div>

          {/* 手機版 */}
          <div
            className={`${styles['mobile-list']} ${
              activeSections.includes(section.id) ? styles.active : ''
            }`}
          >
            {section.products.map((product) => (
              <div key={product.id} className={styles.product}>
                <div className={styles.image}>
                  <img src={product.src} />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.description}>{product.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
