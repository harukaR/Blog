

import Link from 'next/link';
export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 6;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={number === 1 ? `/` : `/blog/page/${number}`}>
            <p>{number}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};