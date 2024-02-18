import styles from './styles.module.scss';
import { Search as SearchIcon } from '@components/shared/Icons/Search';
import { Typography } from '@ui/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DirectionDTO } from '@src/services/directions.service/types';
import { useDebounce } from '@src/hook/useDebounce';
import { useOutsideClick } from '@src/hook/useOutsideClick';
import { directionService } from '@src/services/directions.service/directions.service';

export const Search = () => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [list, setList] = useState<DirectionDTO[]>([]);
  const debounceSearching = useDebounce(value, 500);

  useEffect(() => {
    const fetchData = async () => {
      const res = await directionService.search(debounceSearching);

      if (!res) return;

      const data = value ? res.data.data : [];

      setActive(data.length ? true : false);
      setList(data);
    };

    fetchData();
  }, [debounceSearching]);

  const ref = useOutsideClick(() => {
    setActive(false);
  });

  return (
    <div ref={ref} className={styles.search_inner}>
      <div className={styles.categorySection__search}>
        <input
          onFocus={() => setActive(list.length ? true : false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="typography body mega color-black"
          type="text"
          placeholder="Поиск"
        />

        <button type="submit" className={styles.categorySection__search_btn}>
          <SearchIcon />
        </button>
      </div>
      {active && (
        <div className={styles.search_inner_body}>
          {list.map((item) => (
            <Link href={`/education/${item.attributes.category.data.attributes.slug}/${item.attributes.slug}`}>
              <Typography component="p" type="body" variant="mega" color="black">
                {item.attributes.title}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
