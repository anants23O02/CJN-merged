import React from 'react';
import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';

const Bread: React.FC = () => {
  const router = useRouter();
  const { pathname, query } = router;

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      {pathname.includes('products') && (
        <Breadcrumb.Item>
          <a href="/products">Products</a>
        </Breadcrumb.Item>
      )}
      {query.id && (
        <Breadcrumb.Item>Product {query.id}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default Bread;
