import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null; // This component doesn't render anything
};

export default memo(PageTitle, (prev, next) => prev.title === next.title);
