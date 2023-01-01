import Link from 'next/link';

import { useRouter } from 'next/router';

export const BasicPagination = ({ totalCount }) => {
  const PER_PAGE = 6;
  const router = useRouter();
  const { pathname } = router;
  // const isActive = pathname === `/blog/page/${number}`;
  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={number === 1 ? `/blog` : `/blog/page/${number}`} >
            <p>{number}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};